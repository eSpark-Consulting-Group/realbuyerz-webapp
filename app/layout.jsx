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
import { Provider, useSelector } from 'react-redux';
import { store } from '@/src/redux/store';

import Link from 'next/link';
import Dashboard from '@/src/components/layouts/Dashboard';

const RootLayout = ({ children }) => {
  const currentPath = usePathname();

  // const roleType = useSelector((state) => state?.auth?.signupFormData.usertype);
  // console.log(roleType, 'role')

  return (
    <html lang="en">
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <Link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
              {currentPath.includes('/dashboard') ? (
                <DashboardHeader />
              ) : (
                <MainHeader />
              )}
              <Box>{children}</Box>
              {/* <Dashboard /> */}
              <Footer data={FOOTER_DATA} />
            </Box>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
