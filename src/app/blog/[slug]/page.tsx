import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Stack,
  Chip,
  Card,
  CardMedia,
} from "@mui/material";
import { getPostBySlug, getAllPosts } from "@/lib/posts";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map(({ frontmatter }) => ({ slug: frontmatter.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const { frontmatter } = post;
  const title = `${frontmatter.title} | NutriFlow Blog`;
  const description = frontmatter.description;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${frontmatter.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://nutriflowblog.online/blog/${frontmatter.slug}`,
      images: frontmatter.cover ? [{ url: frontmatter.cover }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: frontmatter.cover ? [frontmatter.cover] : undefined,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  const { content, frontmatter } = post;

  return (
    <Box component="article" sx={{ py: { xs: 5, md: 8 } }}>
      <Container maxWidth="md">
        {/* Header */}
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Typography variant="h3" fontWeight={800} sx={{ lineHeight: 1.2 }}>
            {frontmatter.title}
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ width: 32, height: 32, bgcolor: "primary.main" }}>
              {(frontmatter.author || "N")[0]}
            </Avatar>
            <Typography variant="body2" color="text.secondary">
              {frontmatter.author} •{" "}
              {new Date(frontmatter.date).toLocaleDateString("pt-BR")} •{" "}
              {frontmatter.readTime ?? "—"}
            </Typography>
          </Stack>
          {frontmatter.tags?.length ? (
            <Stack direction="row" spacing={1}>
              {frontmatter.tags.map((t) => (
                <Chip key={t} label={t} size="small" variant="outlined" />
              ))}
            </Stack>
          ) : null}
        </Stack>

        {/* Cover */}
        {frontmatter.cover ? (
          <Card sx={{ mb: 4, borderRadius: 3, overflow: "hidden" }}>
            <CardMedia
              component="img"
              image={frontmatter.cover}
              alt={frontmatter.title}
            />
          </Card>
        ) : null}

        {/* Content (MDX) */}
        <Box
          sx={{
            "& h2": { mt: 4, mb: 1.5, fontWeight: 700 },
            "& h3": { mt: 3, mb: 1, fontWeight: 700 },
            "& p": { lineHeight: 1.8, mb: 2 },
            "& ul, & ol": { pl: 3, mb: 2, lineHeight: 1.8 },
            "& blockquote": {
              borderLeft: "4px solid",
              borderColor: "primary.main",
              pl: 2,
              color: "text.secondary",
              my: 3,
            },
          }}
        >
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [
                    rehypeAutolinkHeadings,
                    { behavior: "wrap", properties: { className: "heading-link" } },
                  ],
                ],
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
