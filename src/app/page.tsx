"use client";

import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Divider,
  Avatar,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FilterListIcon from "@mui/icons-material/FilterList";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FEATURED_POST = {
  id: 1,
  title: "Como a Análise por IA Está Revolucionando o Controle Nutricional",
  excerpt:
    "Descubra como a inteligência artificial da Lina pode transformar sua relação com a comida, calculando calorias e macros em segundos através de uma simples foto.",
  image:
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80",
  category: "IA & Nutrição",
  readTime: "8 min",
  author: "Dr. Nutrição",
  publishedAt: "2 dias atrás",
  featured: true,
};

const BLOG_POSTS = [
  {
    id: 2,
    title: "10 Receitas de Marmitas que Vão Revolucionar Sua Semana",
    excerpt:
      "Praticidade e sabor se encontram nestas receitas testadas pela nossa equipe. Cada uma com análise nutricional completa.",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    category: "Receitas",
    readTime: "12 min",
    author: "Chef Nutricional",
    publishedAt: "1 semana atrás",
  },
  {
    id: 3,
    title: "Calculadora de TMB: Entenda Seu Metabolismo Real",
    excerpt:
      "Aprenda como calcular corretamente sua Taxa Metabólica Basal e por que ela é fundamental para seus objetivos.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    category: "Metabolismo",
    readTime: "6 min",
    author: "Dra. Metabolismo",
    publishedAt: "3 dias atrás",
  },
  {
    id: 4,
    title: "Macro Tracking: O Guia Definitivo para Iniciantes",
    excerpt:
      "Tudo o que você precisa saber sobre contagem de macronutrientes sem complicação. Com exemplos práticos.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    category: "Fundamentos",
    readTime: "15 min",
    author: "Equipe NutriFlow",
    publishedAt: "5 dias atrás",
  },
  {
    id: 5,
    title: "Como Ler Rótulos: Decifrando as Informações Ocultas",
    excerpt:
      "Pare de ser enganado pela indústria alimentícia. Aprenda a identificar ingredientes nocivos e fazer escolhas inteligentes.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    category: "Educação",
    readTime: "8 min",
    author: "Nutri Expert",
    publishedAt: "1 semana atrás",
  },
  {
    id: 6,
    title: "Hidratação Inteligente: Além dos 2L por Dia",
    excerpt:
      "Descubra como calcular sua necessidade real de água baseada em peso, atividade física e clima.",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
    category: "Hidratação",
    readTime: "5 min",
    author: "Wellness Team",
    publishedAt: "4 dias atrás",
  },
];

const CATEGORIES = [
  { name: "Todos", count: 25, color: "primary" },
  { name: "IA & Nutrição", count: 8, color: "secondary" },
  { name: "Receitas", count: 12, color: "success" },
  { name: "Metabolismo", count: 6, color: "info" },
  { name: "Fundamentos", count: 9, color: "warning" },
  { name: "Educação", count: 7, color: "error" },
];

export default function BlogPage() {
  return (
    <Box sx={{ bgcolor: "#ffffff" }}>
      {/* HERO */}
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: "#fafafa",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={{ xs: 4, md: 5 }}>
            {/* Cabeçalho */}
            <Box textAlign="center" sx={{ px: { xs: 2, md: 0 } }}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="center"
                sx={{ mb: 2 }}
              >
                <MenuBookIcon color="primary" />
                <Chip
                  label="Blog NutriFlow"
                  color="primary"
                  variant="outlined"
                  sx={{ fontWeight: 600, fontSize: "0.875rem" }}
                />
              </Stack>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 2,
                  fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.5rem" },
                  color: "#1a1a1a",
                }}
              >
                Conhecimento que{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  Transforma
                </Box>
              </Typography>

              <Typography
                sx={{
                  mx: "auto",
                  maxWidth: 720,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  color: "#4a4a4a",
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                Artigos práticos sobre nutrição inteligente, IA aplicada à
                alimentação e dicas baseadas em ciência para revolucionar seus
                resultados.
              </Typography>
            </Box>

            {/* Busca */}
            <Box
              sx={{
                maxWidth: 600,
                mx: "auto",
                width: "100%",
                px: { xs: 2, md: 0 },
              }}
            >
              <TextField
                placeholder="Buscar artigos sobre nutrição..."
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="primary" />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 3,
                    bgcolor: "#ffffff",
                    fontSize: "1rem",
                    "& .MuiOutlinedInput-notchedOutline": { 
                      borderWidth: 1,
                      borderColor: "#d0d0d0"
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": { 
                      borderColor: "primary.main"
                    },
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  },
                }}
              />
            </Box>

            {/* Categorias */}
            <Box
              sx={{
                px: { xs: 2, md: 0 },
                overflowX: { xs: "auto", md: "visible" },
                WebkitOverflowScrolling: "touch",
              }}
            >
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  minWidth: "max-content",
                  justifyContent: { md: "center" },
                }}
              >
                {CATEGORIES.map((cat) => (
                  <Chip
                    key={cat.name}
                    label={`${cat.name} (${cat.count})`}
                    variant={cat.name === "Todos" ? "filled" : "outlined"}
                    color={cat.color as any}
                    clickable
                    sx={{ 
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      height: 36,
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Destaque */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ mb: { xs: 3, md: 5 }, px: { xs: 2, md: 0 } }}
          >
            <TrendingUpIcon color="primary" />
            <Typography 
              variant="h4" 
              fontWeight={700}
              sx={{ color: "#1a1a1a", fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
              Em Destaque
            </Typography>
          </Stack>

          <Card
            sx={{
              overflow: "hidden",
              borderRadius: 2,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              mx: { xs: 2, md: 0 },
              border: "1px solid #f0f0f0",
              "&:hover": {
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                transform: { md: "translateY(-2px)" },
              },
            }}
          >
            <Grid container>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image={FEATURED_POST.image}
                  alt={FEATURED_POST.title}
                  sx={{
                    height: { xs: 240, sm: 280, md: "100%" },
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
                  <Stack
                    spacing={3}
                    height="100%"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ mb: 2 }}
                      >
                        <Chip
                          label={FEATURED_POST.category}
                          size="small"
                          color="primary"
                          icon={<SmartToyIcon />}
                          sx={{ fontWeight: 600 }}
                        />
                        <Typography variant="body2" sx={{ color: "#666" }}>
                          {FEATURED_POST.publishedAt}
                        </Typography>
                      </Stack>

                      <Typography
                        variant="h5"
                        fontWeight={700}
                        sx={{
                          mb: 2,
                          lineHeight: 1.3,
                          fontSize: { xs: "1.25rem", md: "1.5rem" },
                          color: "#1a1a1a",
                        }}
                      >
                        {FEATURED_POST.title}
                      </Typography>

                      <Typography
                        sx={{
                          mb: 3,
                          lineHeight: 1.6,
                          fontSize: "1rem",
                          color: "#4a4a4a",
                        }}
                      >
                        {FEATURED_POST.excerpt}
                      </Typography>
                    </Box>

                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      alignItems={{ xs: "stretch", sm: "center" }}
                      justifyContent="space-between"
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Avatar
                          sx={{ width: 36, height: 36, bgcolor: "primary.main" }}
                        >
                          <PersonIcon />
                        </Avatar>
                        <Box>
                          <Typography variant="body2" fontWeight={600} sx={{ color: "#1a1a1a" }}>
                            {FEATURED_POST.author}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#666" }}>
                            {FEATURED_POST.readTime} de leitura
                          </Typography>
                        </Box>
                      </Stack>

                      <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        component={Link}
                        href={`/blog/${FEATURED_POST.id}`}
                        sx={{
                          borderRadius: 2,
                          width: { xs: "100%", sm: "auto" },
                          fontWeight: 600,
                          fontSize: "0.95rem",
                          py: 1.5,
                          px: 3,
                        }}
                      >
                        Ler Artigo
                      </Button>
                    </Stack>
                  </Stack>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>

      {/* Lista */}
      <Box
        component="section"
        sx={{ py: { xs: 6, md: 10 }, bgcolor: "#fafafa" }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: { xs: 3, md: 5 }, px: { xs: 2, md: 0 } }}
          >
            <Typography 
              variant="h4" 
              fontWeight={700}
              sx={{ color: "#1a1a1a", fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
              Últimos Artigos
            </Typography>
            <IconButton color="primary" sx={{ display: { xs: "none", md: "flex" } }}>
              <FilterListIcon />
            </IconButton>
          </Stack>

          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ px: { xs: 2, md: 0 } }}>
            {BLOG_POSTS.map((post) => (
              <Grid key={post.id} item xs={12} sm={6} lg={4}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 2,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    border: "1px solid #f0f0f0",
                    bgcolor: "#ffffff",
                    "&:hover": {
                      boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
                      transform: { md: "translateY(-2px)" },
                      "& .post-image": { transform: "scale(1.03)" },
                    },
                  }}
                >
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      image={post.image}
                      alt={post.title}
                      className="post-image"
                      sx={{
                        height: { xs: 200, sm: 220 },
                        transition: "transform 0.3s ease",
                        objectFit: "cover",
                      }}
                    />
                    <Box sx={{ position: "absolute", top: 12, left: 12 }}>
                      <Chip
                        label={post.category}
                        size="small"
                        sx={{
                          bgcolor: "#ffffff",
                          fontWeight: 600,
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        }}
                      />
                    </Box>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ position: "absolute", top: 12, right: 12 }}
                    >
                      <IconButton
                        size="small"
                        sx={{ 
                          bgcolor: "#ffffff", 
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          "&:hover": { bgcolor: "#f5f5f5" }
                        }}
                        aria-label="Salvar"
                      >
                        <BookmarkIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        sx={{ 
                          bgcolor: "#ffffff",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          "&:hover": { bgcolor: "#f5f5f5" }
                        }}
                        aria-label="Compartilhar"
                      >
                        <ShareIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    <Stack spacing={2} height="100%">
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        sx={{
                          lineHeight: 1.3,
                          fontSize: { xs: "1.125rem", md: "1.25rem" },
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          color: "#1a1a1a",
                        }}
                      >
                        {post.title}
                      </Typography>

                      <Typography
                        sx={{
                          lineHeight: 1.6,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          flex: 1,
                          color: "#4a4a4a",
                          fontSize: "0.95rem",
                        }}
                      >
                        {post.excerpt}
                      </Typography>

                      <Divider sx={{ borderColor: "#f0f0f0" }} />

                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <Avatar
                            sx={{ width: 28, height: 28, bgcolor: "primary.main" }}
                          >
                            <PersonIcon fontSize="small" />
                          </Avatar>
                          <Typography variant="body2" fontWeight={500} sx={{ color: "#1a1a1a" }}>
                            {post.author}
                          </Typography>
                        </Stack>

                        <Stack direction="row" spacing={2} alignItems="center">
                          <Stack
                            direction="row"
                            spacing={0.5}
                            alignItems="center"
                          >
                            <AccessTimeIcon fontSize="small" sx={{ color: "#888" }} />
                            <Typography variant="body2" sx={{ color: "#666" }}>
                              {post.readTime}
                            </Typography>
                          </Stack>
                          <Typography variant="body2" sx={{ color: "#666" }}>
                            {post.publishedAt}
                          </Typography>
                        </Stack>
                      </Stack>

                      <Button
                        variant="outlined"
                        fullWidth
                        component={Link}
                        href={`/blog/${post.id}`}
                        sx={{
                          borderRadius: 2,
                          textTransform: "none",
                          fontWeight: 600,
                          mt: 1,
                          py: 1.5,
                          borderColor: "#e0e0e0",
                          color: "#1a1a1a",
                          "&:hover": {
                            borderColor: "primary.main",
                            bgcolor: "primary.50",
                          }
                        }}
                      >
                        Ler Artigo Completo
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Load More */}
          <Box textAlign="center" sx={{ mt: { xs: 5, md: 7 }, px: { xs: 2, md: 0 } }}>
            <Button
              variant="contained"
              size="large"
              sx={{ 
                borderRadius: 2, 
                px: 5,
                py: 1.5,
                fontWeight: 600,
                fontSize: "1rem",
                width: { xs: "100%", sm: "auto" }
              }}
            >
              Carregar Mais Artigos
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: "#ffffff",
        }}
      >
        <Container maxWidth="md">
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 2,
              textAlign: "center",
              bgcolor: "#fafafa",
              border: "1px solid #f0f0f0",
              mx: { xs: 2, md: 0 },
            }}
          >
            <Stack spacing={3}>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                justifyContent="center"
              >
                <SmartToyIcon color="primary" sx={{ fontSize: { xs: 36, md: 42 } }} />
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{ 
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    color: "#1a1a1a"
                  }}
                >
                  Conheça a Lina
                </Typography>
              </Stack>

              <Typography
                sx={{ 
                  maxWidth: 560, 
                  mx: "auto", 
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  color: "#4a4a4a",
                  lineHeight: 1.6,
                }}
              >
                Nossa IA nutricional está pronta para revolucionar sua
                alimentação. Análise por fotos, chat personalizado e
                acompanhamento em tempo real.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
              >
                <Button
                  component="a"
                  href="https://nutriflow.cloud/"
                  target="_blank"
                  variant="contained"
                  size="large"
                  sx={{ 
                    borderRadius: 2, 
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: "1rem",
                    width: { xs: "100%", sm: "auto" }
                  }}
                >
                  Começar Agora
                </Button>
                <Button
                  component="a"
                  href="https://nutriflow.cloud/"
                  target="_blank"
                  variant="outlined"
                  size="large"
                  sx={{ 
                    borderRadius: 2, 
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: "1rem",
                    width: { xs: "100%", sm: "auto" },
                    borderColor: "#e0e0e0",
                    color: "#1a1a1a",
                    "&:hover": {
                      borderColor: "primary.main",
                      bgcolor: "primary.50",
                    }
                  }}
                >
                  Ver Demonstração
                </Button>
              </Stack>

              <Typography variant="body2" sx={{ color: "#666" }}>
                30 dias de garantia • Suporte dedicado • Resultados comprovados
              </Typography>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}