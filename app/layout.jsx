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
import DashboardHeader from '@/src/components/layouts/DashboardHeader';
import MainHeader from '@/src/components/layouts/MainHeader';
import Footer from '@/src/components/layouts/Footer';
import Seo from '@/src/components/Global/SEO';

import { FOOTER_DATA } from '@/app/constants/Constants';
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
                {/* {currentPath.includes('/dashboard') ? (
                  <DashboardHeader />
                ) : (
                  <MainHeader />
                )} */}
                <Box>{children}</Box>
                {/* <Footer data={FOOTER_DATA} /> */}
              </Box>
            </ThemeProvider>
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
