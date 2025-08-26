import { Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import type { Post } from '@/data/posts';

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">{post.excerpt}</Typography>
        <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
          {new Date(post.date).toLocaleDateString('pt-BR')}
        </Typography>
      </CardContent>
    </Card>
  );
}
