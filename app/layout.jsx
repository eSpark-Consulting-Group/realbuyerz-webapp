'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './globals.css';
import { usePathname } from 'next/navigation';

import Seo from '@/src/components/Global/SEO';
import { Provider } from 'react-redux';
import { store } from '@/src/redux/store';
import { SEO_DATA } from './constants/seo';

// Create a client
const queryClient = new QueryClient();

const RootLayout = ({ children }) => {
  const currentPath = usePathname();
  const filterMeta = SEO_DATA?.filter((item) => item?.link == currentPath);
  return (
    <html lang="en">
      <Head>
        <Seo data={filterMeta} alter={SEO_DATA[0]} />
      </Head>

      <body>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box>
                <Box>{children}</Box>
              </Box>
            </ThemeProvider>
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
