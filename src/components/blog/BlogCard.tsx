"use client";

import Link from "next/link";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Chip,
  Avatar,
  Box,
  Divider,
  Button,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import type { Frontmatter } from "@/lib/posts";

export default function BlogCard({ post }: { post: Frontmatter }) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid #f0f0f0",
        transition: "all .25s ease",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(0,0,0,.12)",
          transform: { md: "translateY(-2px)" },
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        {post.cover ? (
          <CardMedia
            component="img"
            image={post.cover}
            alt={post.title}
            sx={{ height: { xs: 200, sm: 220 }, objectFit: "cover" }}
          />
        ) : null}
        {post.tags?.[0] ? (
          <Box sx={{ position: "absolute", top: 12, left: 12 }}>
            <Chip
              label={post.tags[0]}
              size="small"
              sx={{ bgcolor: "#fff", fontWeight: 600, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
            />
          </Box>
        ) : null}
      </Box>

      <CardContent sx={{ p: 3 }}>
        <Stack spacing={2} height="100%">
          <Typography variant="h6" fontWeight={700} sx={{ color: "#111", lineHeight: 1.3 }}>
            {post.title}
          </Typography>

          <Typography sx={{ color: "#555", lineHeight: 1.6, flex: 1 }}>
            {post.description}
          </Typography>

          <Divider />

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" spacing={1.2} alignItems="center">
              <Avatar sx={{ width: 28, height: 28, bgcolor: "primary.main" }}>
                <PersonIcon fontSize="small" />
              </Avatar>
              <Typography variant="body2" fontWeight={600}>{post.author}</Typography>
            </Stack>

            <Stack direction="row" spacing={1.5} alignItems="center">
              <Stack direction="row" spacing={0.5} alignItems="center">
                <AccessTimeIcon fontSize="small" sx={{ color: "#888" }} />
                <Typography variant="body2" sx={{ color: "#666" }}>
                  {post.readTime ?? "—"}
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: "#666" }}>
                {new Date(post.date).toLocaleDateString("pt-BR")}
              </Typography>
            </Stack>
          </Stack>

          <Button
            component={Link}
            href={`/blog/${post.slug}`}
            variant="outlined"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              mt: 1,
              borderColor: "#e0e0e0",
              color: "#1a1a1a",
              "&:hover": { borderColor: "primary.main", bgcolor: "primary.50" },
            }}
          >
            Ler Artigo
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
