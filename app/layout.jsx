
'use client';
import React, { useEffect, useState, useRef } from 'react';
import { redirect, usePathname } from 'next/navigation';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme';
import Loader from './Loader'; // One single Loader component
import Footer from '@/src/components/layouts/Footer';
import MainHeader from '@/src/components/layouts/MainHeader';
import FooterCta from '@/src/components/layouts/FooterCta';
import NotificationListener from '@/src/components/layouts/NotificationListener';
import NewMessageListener from '@/src/components/SocketEvents/NewMessageListener';

import { SocketProvider } from '@/src/context/SocketContext';

import { persistor, store } from '@/src/redux/store';

import { FOOTER_CTA_DATA, FOOTER_DATA } from '@/src/constants/Constants';

import './globals.css';

// Create a client
const queryClient = new QueryClient();

const RootLayout = ({ children }) => {
  const currentPath = usePathname();
  const isDashboard =
    currentPath.includes('/agent/') || currentPath.includes('/user/');

  useEffect(() => {
    if (
      currentPath === '/agent' ||
      currentPath === '/dashboard/agent' ||
      currentPath === '/dashboard/agent'
    ) {
      redirect('/agent/live-bidding');
    } else if (
      currentPath === '/user' ||
      currentPath === '/dashboard/user' ||
      currentPath === '/dashboard/user'
    ) {
      redirect('/user/dashboard');
    }
  }, [currentPath]);

  return (
    <html lang="en" cz-shortcut-listen="true">
      <body cz-shortcut-listen="true">
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate
              loading={<Loader />} // Use the same Loader here for Redux persistence
              persistor={persistor}
            >
              <SocketProvider>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  {!isDashboard && <MainHeader />}
                  <Box>
                    <PageContent>{children}</PageContent>
                  </Box>
                  {!isDashboard && <FooterCta data={FOOTER_CTA_DATA} />}
                  {!isDashboard && <Footer data={FOOTER_DATA} />}

                  <ToastContainer position="top-right" autoClose={3000} />
                  <NotificationListener />
                  <NewMessageListener />
                </ThemeProvider>
              </SocketProvider>
            </PersistGate>
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

// Manual loading state based on query usage
const PageContent = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const timeoutIdRef = useRef(null); // Use useRef to track the timeout ID

  useEffect(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
    // Hide loader after a minimum time if not loading
    const hideLoader = setTimeout(() => {
      setLoading(false);
    }, 300); // adjust this duration as needed

    return () => {
      clearTimeout(hideLoader); // Cleanup hideLoader timeout
    };
  }, []); 

  if (loading) {
    return <Loader />; // Use the same Loader here for query loading
  }

  return <>{children}</>;
};

export default RootLayout;