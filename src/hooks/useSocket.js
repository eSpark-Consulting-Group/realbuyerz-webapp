'use client';

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Cookies from 'js-cookie';

const SOCKET_URL = 'https://dev-nest-realbuyerz.esparkconsultants.com/socket';

export const useSocket = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const userToken = Cookies.get('token');

    if (!userToken) {
      console.warn('❌ No token found, skipping WebSocket connection.');
      return;
    }

    console.log('🔄 Attempting WebSocket connection...', userToken);

    const newSocket = io(SOCKET_URL, {
      auth: {
        token: userToken,
      },
      transports: ['websocket'],
    });

    newSocket.on('connect', () => {
      console.log('✅ WebSocket Connected!');
    });

    newSocket.on('connect_error', (err) => {
      console.log('❌ WebSocket Connection Error:', err.message);
    });

    newSocket.on('disconnect', (reason) => {
      console.log('⚠️ WebSocket Disconnected:', reason);

      if (reason === 'io server disconnect') {
        console.error(
          '🚨 Server forced the disconnect! Check the server configuration.'
        );
      }
    });

    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.disconnect();
        console.log('🛑 WebSocket Disconnected on Cleanup.');
      }
    };
  }, []);

  return socket;
};
