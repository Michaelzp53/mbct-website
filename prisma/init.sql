
-- 创建文章表
CREATE TABLE IF NOT EXISTS articles (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(500),
  category VARCHAR(100),
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 创建评论表
CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  article_slug VARCHAR(255) NOT NULL,
  nickname VARCHAR(100) DEFAULT '匿名用户',
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 创建点赞记录表
CREATE TABLE IF NOT EXISTS like_records (
  id SERIAL PRIMARY KEY,
  article_slug VARCHAR(255) NOT NULL,
  ip_hash VARCHAR(16) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(article_slug, ip_hash)
);

-- 创建提问表
CREATE TABLE IF NOT EXISTS questions (
  id SERIAL PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  detail TEXT NOT NULL,
  pillar VARCHAR(100),
  waste_types TEXT[],
  nickname VARCHAR(100),
  hotel_name VARCHAR(200),
  ip_hash VARCHAR(16) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_comments_article ON comments(article_slug);
CREATE INDEX IF NOT EXISTS idx_like_records_article ON like_records(article_slug);
CREATE INDEX IF NOT EXISTS idx_questions_created ON questions(created_at);
