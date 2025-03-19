'use client';


import { useSocket } from '@/src/context/SocketContext';
import { getAllUserChats } from '@/src/redux/slices/chat/chatsSlice';
import { getMyChat } from '@/src/utils/apis/chat/gettAllChat';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function NotificationListener() {
  const userToken = Cookies.get('token');

  const { socket1 } = useSocket();

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
    if (!socket1) {
      console.warn('❌ No socket instance available yet.');
      return;
    }

    socket1.on('NEW_BIDDING', (data) => {
      toast.info(data.content);
    });

    socket1.on('REFETCH_CHATS', (data) => {
      refetch();
    });

    socket1.on('NEW_LOGIN', (data) => {
      console.log('NEW_LOGIN', data);
      toast.success(`User ${data.username} just logged in.`);
    });

    // Cleanup listeners when socket changes or component unmounts
    return () => {
      socket1.off('NEW_BIDDING');
      socket1.off('REFETCH_CHATS');
      socket1.off('NEW_LOGIN');
    };
  }, [socket1]); // Re-run the effect when `socket` changes

  return null;
}
