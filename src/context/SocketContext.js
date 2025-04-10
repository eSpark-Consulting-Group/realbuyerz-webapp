import React, { createContext, useContext, useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Cookies from 'js-cookie';

const SocketContext = createContext();

const SOCKET_URL_1 = 'https://dev-nest-realbuyerz.esparkconsultants.com/socket';
const SOCKET_URL_2 =
  'https://dev-express-realbuyerz.esparkconsultants.com/socket';

export const SocketProvider = ({ children }) => {
  const [socket1, setSocket1] = useState(null);
  const [socket2, setSocket2] = useState(null);

  useEffect(() => {
    const userToken = Cookies.get('token');

    if (!userToken) {
      console.warn('❌ No token found, skipping WebSocket connection.');
      return;
    }

    const newSocket1 = io(SOCKET_URL_1, {
      auth: {
        token: userToken,
      },
      transports: ['websocket'],
    });

    const newSocket2 = io(SOCKET_URL_2, {
      auth: {
        token: userToken,
      },
      transports: ['websocket'],
    });

    // SOCKET NEST
    newSocket1.on('connect', () => {
      console.log('✅ WebSocket Nest Connected!');
    });

    newSocket1.on('connect_error', (error) => {
      console.error('❌ WebSocket Nest Error:', error);
    });

    newSocket1.on('disconnect', () => {
      console.log('⚠️ WebSocket Nest Disconnected');
    });

    // SOCKET EXPRESS
    newSocket2.on('connect', () => {
      console.log('✅ WebSocket Express Connected!');
    });

    newSocket2.on('connect_error', (error) => {
      console.error('❌ WebSocket Express Error:', error);
    });

    newSocket2.on('disconnect', () => {
      console.log('⚠️ WebSocket Express Disconnected');
    });

    setSocket1(newSocket1);
    setSocket2(newSocket2);

    return () => {
      if (newSocket1) {
        newSocket1.disconnect();
      }

      if (newSocket2) {
        newSocket2.disconnect();
      }
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket1, socket2 }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};
