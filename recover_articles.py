#!/usr/bin/env python3
"""
MBCT 知识库文章恢复脚本
从线上抓取缺失文章，转回 JSON 格式补回代码库
"""

import argparse, json, os, re, sys, subprocess, urllib.request, urllib.parse
import xml.etree.ElementTree as ET
from collections import defaultdict

BASE = "https://www.marvelbros.com"
KNOWLEDGE_DIR = "src/app/[lang]/knowledge/[slug]"
RESOLVE = None

def fetch_text(url, timeout=30):
    if RESOLVE:
        return subprocess.run(
            ['curl', '-fsSL', '--compressed', '--resolve', RESOLVE,
             '--max-time', str(timeout), url],
            check=True, capture_output=True, text=True,
        ).stdout
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode('utf-8')

def get_inline_slugs():
    """Parse TypeScript property names rather than guessing from line indentation.

    No application code is executed. A parse failure stops the recovery instead
    of treating existing articles as missing and overwriting them with HTML.
    """
    code = r'''
const fs = require('fs'), ts = require('typescript');
const file = 'src/app/[lang]/knowledge/[slug]/page.tsx';
const source = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
if (source.parseDiagnostics.length) throw new Error('Cannot parse article source');
let articleObject;
function visit(node) {
  if (ts.isVariableDeclaration(node) && node.name.getText(source) === 'articlesData') articleObject = node.initializer;
  ts.forEachChild(node, visit);
}
visit(source);
if (!articleObject || !ts.isObjectLiteralExpression(articleObject)) throw new Error('Missing articlesData object');
const slugs = [];
for (const property of articleObject.properties) {
  if (ts.isSpreadAssignment(property)) continue;
  if (!ts.isPropertyAssignment(property) || !ts.isStringLiteral(property.name)) throw new Error('Unsupported article property');
  slugs.push(property.name.text);
}
process.stdout.write(JSON.stringify(slugs));
'''
    result = subprocess.run(['node', '-e', code], check=True, capture_output=True, text=True)
    return set(json.loads(result.stdout))

def get_local_slugs():
    """获取本地已有文章的 slug 集合"""
    slugs = set()
    
    # 1. JSON 文件
    if os.path.exists(KNOWLEDGE_DIR):
        for f in os.listdir(KNOWLEDGE_DIR):
            if f.startswith("articles-") and f.endswith(".json"):
                try:
                    d = json.load(open(os.path.join(KNOWLEDGE_DIR, f)))
                    if isinstance(d, dict):
                        slugs.update(d.keys())
                except (OSError, json.JSONDecodeError) as error:
                    raise RuntimeError(f'无法读取文章文件 {f}') from error

    # articlesData also contains complete inline article objects, not just spreads.
    slugs.update(get_inline_slugs())
    
    # 2. 独立 page.tsx 目录
    knowledge_root = "src/app/[lang]/knowledge"
    if os.path.exists(knowledge_root):
        for d in os.listdir(knowledge_root):
            full = os.path.join(knowledge_root, d)
            if os.path.isfile(os.path.join(full, 'page.tsx')) and d not in ("[slug]", "category"):
                slugs.add(d)
    
    # 3. legacy-article-seo.ts
    legacy_file = "src/lib/legacy-article-seo.ts"
    if os.path.exists(legacy_file):
        content = open(legacy_file).read()
        legacy = re.findall(r'"/knowledge/([^"]+)"', content)
        slugs.update(legacy)
    
    return slugs

def fetch_sitemap():
    """获取 sitemap 中所有 knowledge slug"""
    print("获取 sitemap...")
    url = f"{BASE}/sitemap.xml"
    xml = fetch_text(url)
    
    # 提取 /zh/knowledge/ URL
    slugs = set()
    categories = set()
    prefix = '/zh/knowledge/'
    for loc in ET.fromstring(xml).iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
        path = urllib.parse.unquote(urllib.parse.urlparse(loc.text).path)
        if path.startswith(prefix):
            slug = path[len(prefix):].rstrip('/')
            if slug.startswith('category/'):
                categories.add(slug)
            elif slug:
                slugs.add(slug)
    print(f'sitemap 栏目页: {len(categories)} 个（不计为文章）')
    
    return slugs

def fetch_article(slug):
    """抓取单篇文章"""
    url = f"{BASE}/zh/knowledge/{urllib.parse.quote(slug, safe='')}"
    html = fetch_text(url, timeout=15)
    
    # 提取标题
    title_m = re.search(r'<title>([^<]+)</title>', html)
    title = title_m.group(1).replace(' | 迈创兄弟C&amp;T', '').replace(' | 迈创兄弟C&T', '') if title_m else slug
    title = title.replace('&amp;', '&').replace('&quot;', '"')
    
    # 提取 meta description
    desc_m = re.search(r'<meta name="description" content="([^"]+)"', html)
    desc = desc_m.group(1) if desc_m else ""
    
    # 提取正文
    main = re.search(r'<main[^>]*>(.*?)</main>', html, re.DOTALL)
    if not main:
        return None
    
    text = re.sub(r'<script[^>]*>.*?</script>', '', main.group(1), flags=re.DOTALL)
    text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL)
    text = re.sub(r'<[^>]+>', '\n', text)
    text = re.sub(r'\n+', '\n', text).strip()
    text = re.sub(r'&amp;', '&', text)
    
    # 判断是否占位
    if "正在整理中" in text or "敬请期待" in text:
        return {"placeholder": True}
    
    # 提取日期
    date_m = re.search(r'(\d{4}-\d{2}-\d{2})', text)
    date = date_m.group(1) if date_m else "2026-04-01"
    
    # 提取分类
    cat = "行业分析"
    for c in ["酒店经营诊断", "酒店投资判断", "酒店市场营销", "酒店收益管理", "酒店数字化", "酒店经营治理", "酒店成本管理", "酒店筹备开业", "酒店与文旅融合"]:
        if c in text:
            cat = c
            break
    
    # 清理正文 - 从标题之后开始
    title_pos = text.find(title)
    if title_pos > 0:
        body = text[title_pos + len(title):]
    else:
        body = text
    
    # 去掉结尾的声明
    body = re.sub(r'MBCT秘书处.*$', '', body, flags=re.DOTALL)
    body = re.sub(r'声明：.*$', '', body, flags=re.DOTALL)
    body = re.sub(r'本文部分内容由 AI 辅助生成.*$', '', body, flags=re.DOTALL)
    
    # 分成段落
    paragraphs = [p.strip() for p in body.split('\n') if p.strip() and len(p.strip()) > 10]
    
    if len(paragraphs) < 2:
        return None
    
    return {
        "id": hash(slug) % 100000,
        "title": title,
        "description": desc[:200],
        "author": "迈创兄弟C&T",
        "date": date,
        "readTime": "15分钟",
        "tag": cat,
        "content": paragraphs
    }

def main():
    global RESOLVE
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--resolve', help='curl HOST:PORT:ADDRESS; retains hostname and TLS validation')
    parser.add_argument('--audit-json', help='write the exact local and sitemap slug sets for review')
    parser.add_argument('--dry-run', action='store_true', help='inventory only; do not fetch or write articles')
    args = parser.parse_args()
    RESOLVE = args.resolve
    local_slugs = get_local_slugs()
    print(f"本地已有文章: {len(local_slugs)} 篇")
    
    sitemap_slugs = fetch_sitemap()
    print(f"sitemap 文章: {len(sitemap_slugs)} 篇")
    
    missing = sitemap_slugs - local_slugs
    print(f"缺失文章: {len(missing)} 篇")

    if args.audit_json:
        with open(args.audit_json, 'w', encoding='utf-8') as output:
            json.dump({'local_slugs': sorted(local_slugs), 'sitemap_article_slugs': sorted(sitemap_slugs),
                       'missing_slugs': sorted(missing)}, output, ensure_ascii=False, indent=2)

    if args.dry_run:
        return
    
    if not missing:
        print("没有需要恢复的文章！")
        return
    
    # 按月份分组
    by_month = defaultdict(dict)
    placeholders = 0
    failed = 0
    
    for i, slug in enumerate(sorted(missing)):
        try:
            result = fetch_article(slug)
            if result is None:
                failed += 1
                continue
            if result.get("placeholder"):
                placeholders += 1
                continue
            
            month = result["date"][:7]
            by_month[month][slug] = result
            
            if (i+1) % 10 == 0:
                print(f"  已处理 {i+1}/{len(missing)}...")
        except Exception as e:
            failed += 1
    
    print(f"\n抓取完成:")
    print(f"  成功恢复: {sum(len(v) for v in by_month.values())} 篇")
    print(f"  占位页: {placeholders} 篇")
    print(f"  失败: {failed} 篇")
    
    # 写入 JSON 文件
    for month, articles in sorted(by_month.items()):
        fname = f"{KNOWLEDGE_DIR}/articles-recovered-{month}.json"
        with open(fname, "w") as f:
            json.dump(articles, f, ensure_ascii=False, indent=2)
        print(f"  写入: {fname} ({len(articles)} 篇)")
    
    print(f"\n完成！请将新 JSON 文件导入到 page.tsx 的 articlesData 中")

if __name__ == "__main__":
    main()
