#!/bin/bash
#
# MBCT网站部署前检查脚本
# 用途：防止未提交的更改被遗漏，确保所有内容正确部署
# 使用方法：在部署前运行 ./pre-deploy-check.sh
#

set -e

echo "=========================================="
echo "MBCT网站部署前检查"
echo "=========================================="
echo ""

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

FAILED=0

# 检查1: 是否有未提交的更改
echo "[检查1/6] 检查是否有未提交的更改..."
if ! git diff --quiet HEAD; then
    echo -e "${RED}❌ 失败: 存在未提交的更改${NC}"
    echo "未提交的文件:"
    git diff --name-only HEAD
    echo ""
    echo "请执行以下命令提交更改:"
    echo "  git add ."
    echo "  git commit -m '你的提交信息'"
    FAILED=1
else
    echo -e "${GREEN}✅ 通过: 没有未提交的更改${NC}"
fi
echo ""

# 检查2: 是否有stash未恢复
echo "[检查2/6] 检查是否有未恢复的stash..."
STASH_COUNT=$(git stash list | wc -l | tr -d ' ')
if [ "$STASH_COUNT" -gt 0 ]; then
    echo -e "${RED}❌ 失败: 发现 $STASH_COUNT 个stash未恢复${NC}"
    echo "Stash列表:"
    git stash list
    echo ""
    echo "⚠️  警告: stash不能替代commit！工作内容必须提交到Git。"
    echo "请处理stash:"
    echo "  git stash pop stash@{0}  # 恢复并删除"
    echo "  git add ."
    echo "  git commit -m '你的提交信息'"
    FAILED=1
else
    echo -e "${GREEN}✅ 通过: 没有未恢复的stash${NC}"
fi
echo ""

# 检查3: 本地分支是否领先于远程
echo "[检查3/6] 检查本地是否有未推送的提交..."
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse @{u} 2>/dev/null || echo "")
if [ -n "$REMOTE" ]; then
    if [ "$LOCAL" != "$REMOTE" ]; then
        AHEAD=$(git rev-list --count "$REMOTE..$LOCAL")
        BEHIND=$(git rev-list --count "$LOCAL..$REMOTE")
        if [ "$AHEAD" -gt 0 ]; then
            echo -e "${YELLOW}⚠️  警告: 本地有 $AHEAD 个提交未推送到远程${NC}"
            echo "未推送的提交:"
            git log --oneline "$REMOTE..$LOCAL"
            echo ""
            echo "请执行: git push"
            FAILED=1
        fi
        if [ "$BEHIND" -gt 0 ]; then
            echo -e "${RED}❌ 失败: 远程有 $BEHIND 个提交本地没有${NC}"
            echo "远程新提交:"
            git log --oneline "$LOCAL..$REMOTE"
            echo ""
            echo "请先执行: git pull --rebase"
            FAILED=1
        fi
    else
        echo -e "${GREEN}✅ 通过: 本地与远程同步${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  警告: 无法获取远程分支信息${NC}"
fi
echo ""

# 检查4: 构建是否成功
echo "[检查4/6] 检查项目是否能成功构建..."
if npm run build > /tmp/build.log 2>&1; then
    echo -e "${GREEN}✅ 通过: 构建成功${NC}"
else
    echo -e "${RED}❌ 失败: 构建出错${NC}"
    echo "错误日志:"
    tail -50 /tmp/build.log
    FAILED=1
fi
echo ""

# 检查5: 文章数据一致性检查
echo "[检查5/6] 检查文章数据一致性..."
# 获取page.tsx中的文章slug列表（排除非slug行）
PAGE_SLUGS=$(grep "slug:" src/app/[lang]/knowledge/page.tsx | grep -v "//" | sed "s/.*slug: '\([^']*\)'.*/\1/" | grep "^[a-z0-9-]*$" | sort -u)
# 获取详情页中的文章slug列表
DETAIL_SLUGS=$(grep -E "^\s+'[a-z0-9-]+':\s*\{$" src/app/[lang]/knowledge/[slug]/page.tsx | sed "s/.*'\([^']*\)'.*/\1/" | sort -u)

# 检查是否有文章在列表中但详情页缺失
MISSING_IN_DETAIL=$(comm -23 <(echo "$PAGE_SLUGS") <(echo "$DETAIL_SLUGS"))
if [ -n "$MISSING_IN_DETAIL" ]; then
    echo -e "${RED}❌ 失败: 以下文章在列表中有但详情页缺失:${NC}"
    echo "$MISSING_IN_DETAIL"
    FAILED=1
else
    echo -e "${GREEN}✅ 通过: 所有列表文章都有对应的详情页${NC}"
fi
echo ""

# 检查6: 检查是否有文章被标记为删除
echo "[检查6/6] 检查文章总数变化..."
ARTICLE_COUNT=$(grep -c "slug:" src/app/[lang]/knowledge/page.tsx)
echo "当前文章总数: $ARTICLE_COUNT"
if [ "$ARTICLE_COUNT" -lt 30 ]; then
    echo -e "${YELLOW}⚠️  警告: 文章数量较少($ARTICLE_COUNT篇)，请确认是否误删${NC}"
fi
echo ""

# 总结
echo "=========================================="
if [ "$FAILED" -eq 0 ]; then
    echo -e "${GREEN}✅ 所有检查通过，可以安全部署${NC}"
    echo ""
    echo "部署命令:"
    echo "  npx vercel --prod --yes"
    exit 0
else
    echo -e "${RED}❌ 检查失败，请修复上述问题后再部署${NC}"
    exit 1
fi
