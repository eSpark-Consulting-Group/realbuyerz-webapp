'use client';
import React, { useEffect, useState, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './globals.css';
import { redirect, usePathname } from 'next/navigation';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/src/redux/store';
import Footer from '@/src/components/layouts/Footer';
import { FOOTER_CTA_DATA, FOOTER_DATA } from '@/src/constants/Constants';
import MainHeader from '@/src/components/layouts/MainHeader';
import FooterCta from '@/src/components/layouts/FooterCta';
import Loader from './Loader'; // One single Loader component

// Create a client
const queryClient = new QueryClient();

const RootLayout = ({ children }) => {
  const currentPath = usePathname();
  const isDashboard =
    currentPath.includes('/agent/') || currentPath.includes('/user/');

  const isAuthPages =
    currentPath.includes('/signin') ||
    currentPath.includes('/signup') ||
    currentPath.includes('/forget-password');

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
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {!isDashboard && <MainHeader />}
                <Box>
                  <PageContent>{children}</PageContent>
                </Box>
                {!isDashboard && !isAuthPages && (
                  <FooterCta data={FOOTER_CTA_DATA} />
                )}
                {!isDashboard && !isAuthPages && <Footer data={FOOTER_DATA} />}
              </ThemeProvider>
            </PersistGate>
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

// Manual loading state based on query usage
const PageContent = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const timeoutIdRef = useRef(null); // Use useRef to track the timeout ID

  // Simulating query usage (replace with your actual query logic)
  const { isLoading } = useMockQuery();

  useEffect(() => {
    if (isLoading) {
      setLoading(true);

      // Clear any existing timeout
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }

      // Set a timeout to ensure the loader is shown for at least 300ms
      timeoutIdRef.current = setTimeout(() => {
        setLoading(true);
      }, 300); // adjust this duration as needed
    } else {
      // Clear the timeout on loading complete
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
    }
  }, [isLoading]); // Include isLoading in the dependency array

  if (loading) {
    return <Loader />; // Use the same Loader here for query loading
  }

  return <>{children}</>;
};

// Simulating a query - replace this with your actual queries
const useMockQuery = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setData({ message: 'Query Result' });
      setLoading(false);
    }, 2000); // Simulating a 2-second API call
  }, []);

  return { data, isLoading: loading };
};

export default RootLayout;
