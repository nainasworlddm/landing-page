// src/lib/getPosts.ts
import fm from 'front-matter';

export type PostMeta = {
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  coverImage?: string;
};

export type Post = {
  meta: PostMeta;
  content: string;
};

// Simple browser-safe read time (≈200 wpm)
const calcReadTime = (text: string) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
};

// IMPORTANT: use a RELATIVE glob path from this file to your md directory
const files = import.meta.glob('../content/blog/**/*.md', {
  as: 'raw',
  eager: true,
});

const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { attributes, body } = fm<Partial<PostMeta>>(raw as string);

    const fileSlug = path.split('/').pop()!.replace('.md', '');
    const slug = attributes?.slug ?? fileSlug;

    const title = attributes?.title ?? fileSlug;
    const date = attributes?.date ?? new Date().toISOString();
    const excerpt = attributes?.excerpt ?? '';
    const category = attributes?.category ?? 'General';
    const coverImage = attributes?.coverImage ?? undefined;
    const readTime = attributes?.readTime ?? calcReadTime(body || '');

    return {
      meta: { title, slug, date, excerpt, category, readTime, coverImage },
      content: body || '',
    };
  })
  .sort(
    (a, b) =>
      new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );

export const allPostsMeta = posts.map((p) => p.meta);
export const getPostBySlug = (slug: string) =>
  posts.find((p) => p.meta.slug === slug);
export const getAllPosts = () => posts;