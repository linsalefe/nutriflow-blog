export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;   // ISO string
  cover?: string; // opcional
};

export const posts: Post[] = [
  {
    slug: 'dieta-equilibrada',
    title: 'Como montar uma dieta equilibrada para o dia a dia',
    excerpt: 'Princípios básicos para organizar refeições balanceadas e práticas.',
    date: '2025-08-20',
  },
  {
    slug: 'agua-e-hidratacao',
    title: 'A importância da hidratação para a saúde',
    excerpt: 'Como a água impacta seu metabolismo, energia e bem-estar.',
    date: '2025-08-22',
  },
  {
    slug: 'macronutrientes-guia',
    title: 'Macronutrientes: o guia completo',
    excerpt: 'Proteínas, carboidratos e gorduras explicados de forma simples.',
    date: '2025-08-25',
  },
];
