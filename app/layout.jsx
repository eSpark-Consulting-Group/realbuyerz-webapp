'use client';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import Head from 'next/head';

import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { usePathname } from 'next/navigation';

import './globals.css';

import DashboardHeader from '@/src/components/layouts/DashboardHeader';
import MainHeader from '@/src/components/layouts/MainHeader';
import Footer from '@/src/components/layouts/Footer';
import { FOOTER_DATA } from '@/app/constants/Constants';

const RootLayout = ({ children }) => {
  const currentPath = usePathname();

  return (
    <html lang="en">
      <Head></Head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box>
            {currentPath.includes('/dashboard') ? (
              <DashboardHeader />
            ) : (
              <MainHeader />
            )}
            <Box>{children}</Box>
            <Footer data={FOOTER_DATA} />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
