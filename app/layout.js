'use client';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import Head from 'next/head';

import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import './globals.css';

import Footer from '@/src/components/layouts/Footer';
import MainHeader from '@/src/components/layouts/MainHeader';

import { FOOTER_DATA } from './constants/Constants';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap'
        />
      </Head>
      <body className='font-inter' >
        <ThemeProvider theme={theme} className={inter.className}>
          <CssBaseline />
          <Box>
            <MainHeader />
            <Box>{children}</Box>
            <Footer data={FOOTER_DATA} />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout