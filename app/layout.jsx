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
import Footer from '@/src/components/layouts/Footer';
import { FOOTER_CTA_DATA, FOOTER_DATA } from './constants/Constants';
import MainHeader from '@/src/components/layouts/MainHeader';
import FooterCta from '@/src/components/FooterCta';
import NotFoundSection from '@/src/components/Global/NotFoundSection';

// Create a client
const queryClient = new QueryClient();

const RootLayout = ({ children }) => {
  const currentPath = usePathname();
  const filterMeta = SEO_DATA?.filter((item) => item?.link == currentPath);
  const isDashboard =
    currentPath.includes('/agent/') || currentPath.includes('/user/');

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
              {!isDashboard && <MainHeader />}
              <Box>
                <Box>{children}</Box>
              </Box>
              {!isDashboard && <FooterCta data={FOOTER_CTA_DATA} />}
              {!isDashboard && <Footer data={FOOTER_DATA} />}
            </ThemeProvider>
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
