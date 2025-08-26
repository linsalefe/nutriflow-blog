import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

const greenPalette = {
  primary: {
    light: '#A8D5BA',
    main:  '#7AA374',
    dark:  '#4D7C59',
    contrastText: '#FFF',
  },
  background: {
    default: '#FFFFFF',
    paper:   '#F7F9F7',
  },
  text: {
    primary:   '#2E4F2E',
    secondary: '#4F7F4F',
  },
  divider: '#E0EAE0',
};

export const getTheme = (mode: 'light' | 'dark') => {
  let theme = createTheme({
    palette: {
      mode,
      ...greenPalette,
      background: {
        default: greenPalette.background.default,
        paper:   greenPalette.background.paper,
      },
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      h4: { fontWeight: 700 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          body { background: ${greenPalette.background.default}; }
        `,
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            backgroundColor: greenPalette.primary.main,
            color: greenPalette.primary.contrastText,
            '&:hover': { backgroundColor: greenPalette.primary.dark },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backgroundColor: greenPalette.background.paper,
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          },
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);
  return theme;
};
