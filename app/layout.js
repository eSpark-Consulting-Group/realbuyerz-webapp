'use client';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './globals.css';
import Footer from '@/src/components/layouts/Footer';
import MainHeader from '@/src/components/layouts/MainHeader';
import { Box, Container } from '@mui/system';
import { footerData } from './constants/Constants';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap'
      />
      <body className='font-inter'>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box class='super_container'>
            <MainHeader />
            <Box class='content'>{children}</Box>
            <Footer data={footerData} />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
