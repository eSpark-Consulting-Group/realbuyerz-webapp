'use client';

import { useSocket } from '@/src/hooks/useSocket';
import { getAllUserChats } from '@/src/redux/slices/chat/chatsSlice';
import { getMyChat } from '@/src/utils/apis/chat/gettAllChat';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function NotificationListener() {
  const userToken = Cookies.get('token');

  const socket = useSocket();

  const dispatch = useDispatch()

  const { data, isSuccess, refetch } = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['userChat'],
    queryFn: getMyChat,
    enabled: !!userToken,
  });

  useEffect(() => {
    if (isSuccess && data?.data?.Chats) {
      dispatch(getAllUserChats(data?.data?.Chats));
    }
  }, [data, isSuccess, dispatch]);

  useEffect(() => {
    if (!socket) {
      console.warn('❌ No socket instance available yet.');
      return;
    }

    socket.on('NEW_BIDDING', (data) => {
      toast.info(data.content);
    });

    socket.on('REFETCH_CHATS', (data) => {
      refetch();
    });

    socket.on('NEW_LOGIN', (data) => {
      console.log('NEW_LOGIN', data);
      toast.success(`User ${data.username} just logged in.`);
    });

    // Cleanup listeners when socket changes or component unmounts
    return () => {
      socket.off('NEW_BIDDING');
      socket.off('REFETCH_CHATS');
      socket.off('NEW_LOGIN');
    };
  }, [socket]); // Re-run the effect when `socket` changes

  return null;
}
