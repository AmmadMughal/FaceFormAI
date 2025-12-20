'use client';
import * as React from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { colors } from "../utils/constants";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.surface,
      paper: colors.paper,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textMuted,
    },
  },
  typography: {
    h1: { fontFamily: '"Modern Geometric Sans-Serif", sans-serif' },
    h2: { fontFamily: '"Modern Geometric Sans-Serif", sans-serif' },
    h3: { fontFamily: '"Modern Geometric Sans-Serif", sans-serif' },
    h4: { fontFamily: '"Modern Geometric Sans-Serif", sans-serif' },
    h5: { fontFamily: '"Modern Geometric Sans-Serif", sans-serif' },
    h6: { fontFamily: '"Modern Geometric Sans-Serif", sans-serif' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: '"Modern Geometric Sans-Serif", sans-serif',
        },
      },
    },
  },
});

function createEmotionCache() {
  return createCache({ key: 'mui', prepend: true });
}

export default function ThemeRegistry({ children }) {
  const [{ cache, flush }] = React.useState(() => {
    const cache = createEmotionCache();
    cache.compat = true;

    const prevInsert = cache.insert;
    let inserted = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };

    const flush = () => {
      const prev = inserted;
      inserted = [];
      return prev;
    };

    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) return null;

    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }

    return (
      <style
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}



