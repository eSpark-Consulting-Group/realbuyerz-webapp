'use client';

import { useSocket } from '@/src/hooks/useSocket';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function NotificationListener() {
  const socket = useSocket();

  useEffect(() => {
    console.log('Socket instance:', socket);

    if (!socket) {
      console.warn('❌ No socket instance available yet.');
      return;
    }

    console.log('✅ Setting up WebSocket event listeners.');

    socket.on('NEW_BIDDING', (data) => {
      toast.info(`New bid on property: ${data.propertyName}`);
    });

    socket.on('NEW_LOGIN', (data) => {
      console.log('NEW_LOGIN');
      toast.success(`User ${data.username} just logged in.`);
    });

    // Cleanup listeners when socket changes or component unmounts
    return () => {
      console.log('🛑 Cleaning up WebSocket event listeners.');
      socket.off('NEW_BIDDING');
      socket.off('NEW_LOGIN');
    };
  }, [socket]); // Re-run the effect when `socket` changes

  return null;
}
