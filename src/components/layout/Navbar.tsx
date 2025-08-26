'use client';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
        <Typography variant="h6" fontWeight={700} color="primary">
          NutriFlow
        </Typography>
        <Box>
          <Button component={Link} href="/" sx={{ textTransform: 'none', mr: 1 }}>
            Início
          </Button>
          <Button component={Link} href="/blog" sx={{ textTransform: 'none' }}>
            Blog
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
