'use client';
import { useEffect, useState, useRef } from 'react';
import { redirect, usePathname } from 'next/navigation';

import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme';
import Loader from './Loader';
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

  const isAuthPages =
    currentPath.includes('/signin') ||
    currentPath.includes('/signup') ||
    currentPath.includes('/forget-password') ||
    currentPath.includes('/reset-password');

  useEffect(() => {
    if (currentPath === '/agent' || currentPath === '/dashboard/agent') {
      redirect('/agent/live-bidding');
    } else if (currentPath === '/user' || currentPath === '/dashboard/user') {
      redirect('/user/dashboard');
    }
  }, [currentPath]);

  return (
    <html lang="en" cz-shortcut-listen="true">
      <body cz-shortcut-listen="true">
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate loading={<Loader />} persistor={persistor}>
              <SocketProvider>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  {!isDashboard && <MainHeader />}
                  <Box>
                    <PageContent>{children}</PageContent>
                  </Box>
                  {!isDashboard && !isAuthPages && (
                    <FooterCta data={FOOTER_CTA_DATA} />
                  )}
                  {!isDashboard && !isAuthPages && (
                    <Footer data={FOOTER_DATA} />
                  )}

                  <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
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

const PageContent = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const timeoutIdRef = useRef(null); 

  const { isLoading } = useMockQuery();

  useEffect(() => {
    if (isLoading) {
      setLoading(true);

      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }

      timeoutIdRef.current = setTimeout(() => {
        setLoading(true);
      }, 300);
    } else {

      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }

      const hideLoader = setTimeout(() => {
        setLoading(false);
      }, 300); 

      return () => {
        clearTimeout(hideLoader);
      };
    }
  }, [isLoading]); 

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};

const useMockQuery = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: 'Query Result' });
      setLoading(false);
    }, 2000); 
  }, []);

  return { data, isLoading: loading };
};

export default RootLayout;