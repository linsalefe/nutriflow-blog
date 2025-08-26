#!/usr/bin/env node
import fs from "fs";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

const toTitle = (slug) =>
  slug
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());

const today = new Date().toISOString().slice(0, 10);

for (const file of fs.readdirSync(POSTS_DIR)) {
  if (!file.endsWith(".mdx")) continue;
  const abs = path.join(POSTS_DIR, file);
  const raw = fs.readFileSync(abs, "utf-8");
  const firstNonEmpty = raw.trimStart().slice(0, 3);

  if (firstNonEmpty === "---") {
    console.log(`✓ Já tem frontmatter: ${file}`);
    continue;
  }

  const slug = file.replace(/\.mdx$/, "");
  const title = toTitle(slug);
  const fm = `---
title: "${title}"
description: "Resumo do artigo."
date: "${today}"
author: "NutriFlow"
cover: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80"
tags: ["Geral"]
slug: "${slug}"
readTime: "X min"
---

`;

  fs.writeFileSync(abs, fm + raw);
  console.log(`+ Frontmatter adicionado: ${file}`);
}
console.log("Concluído.");
