// src/app/blog/page.tsx
import { Container, Grid, Typography, Stack, Box } from "@mui/material";
import BlogList from "../../components/blog/BlogList";
import { getAllPosts } from "../../lib/posts";

export default function BlogIndexPage() {
  // Server Component: pode ler arquivo/FS
  const posts = getAllPosts().map((p) => p.frontmatter);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 0 } }}>
        <Stack spacing={2} sx={{ mb: { xs: 3, md: 5 } }}>
          <Typography variant="h3" fontWeight={800} sx={{ color: "#1a1a1a" }}>
            Últimos Artigos
          </Typography>
          <Typography sx={{ color: "#666" }}>
            Explore conteúdos práticos sobre nutrição, IA e hábitos inteligentes.
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          <BlogList posts={posts} />
        </Grid>
      </Container>
    </Box>
  );
}
