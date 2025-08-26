import { Container, Typography } from '@mui/material';
import BlogList from '@/components/blog/BlogList';

export default function BlogPage() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Blog NutriFlow
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Dicas de alimentação, vida saudável e nutrição inteligente.
      </Typography>
      <BlogList />
    </Container>
  );
}
