import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  cover?: string;
  tags?: string[];
  slug: string;
  readTime?: string;
};

const POSTS_PATH = path.join(process.cwd(), "content", "posts");

export function getAllSlugs() {
  if (!fs.existsSync(POSTS_PATH)) return [];
  return fs
    .readdirSync(POSTS_PATH)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);
  return { content, frontmatter: data as Frontmatter };
}

export function getAllPosts(): { frontmatter: Frontmatter }[] {
  const slugs = getAllSlugs();
  const posts = slugs
    .map((s) => {
      const p = getPostBySlug(s);
      return p ? { frontmatter: p.frontmatter } : null;
    })
    .filter(Boolean) as { frontmatter: Frontmatter }[];

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}
