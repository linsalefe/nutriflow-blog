"use client";

import { Grid } from "@mui/material";
import type { Frontmatter } from "../../lib/posts"; // caminho relativo a partir de /components/blog
import BlogCard from "./BlogCard";

export interface BlogListProps {
  posts: Frontmatter[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <>
      {posts.map((p) => (
        <Grid key={p.slug} item xs={12} sm={6} lg={4}>
          <BlogCard post={p} />
        </Grid>
      ))}
    </>
  );
}
