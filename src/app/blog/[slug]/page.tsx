import { Container, Typography } from '@mui/material';
import { posts } from '@/data/posts';
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {new Date(post.date).toLocaleDateString('pt-BR')}
      </Typography>
      <Typography variant="body1" sx={{ mt: 3, lineHeight: 1.7 }}>
        (Conteúdo do artigo) Em breve conectaremos a um CMS ou markdown.
      </Typography>
    </Container>
  );
}
