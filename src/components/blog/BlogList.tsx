import { posts } from '@/data/posts';
import BlogCard from '@/components/blog/BlogCard';

export default function BlogList() {
  return <>{posts.map((p) => <BlogCard key={p.slug} post={p} />)}</>;
}
