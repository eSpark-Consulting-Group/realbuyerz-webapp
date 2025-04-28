'use client';
import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

import { useSocket } from '@/src/context/SocketContext';

import { getMyChat } from '@/src/utils/apis/chat/gettAllChat';

import {
  getAllUserChats,
  mutateHasChat,
} from '@/src/redux/slices/chat/chatsSlice';

export default function NotificationListener() {
  const userToken = Cookies.get('token');

  const { socket1 } = useSocket();

  const dispatch = useDispatch();

  const { data, isSuccess, refetch } = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['userChat'],
    queryFn: getMyChat,
    enabled: !!userToken,
  });

  useEffect(() => {
    if (isSuccess && data) {
      if (data?.data?.Chats?.length === 0) {
        dispatch(getAllUserChats(data?.data?.Chats));
        dispatch(mutateHasChat('No Chat'));
      } else {
        dispatch(getAllUserChats(data?.data?.Chats));
        dispatch(mutateHasChat(''));
      }
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

    socket1.on('REFETCH_CHATS', () => {
      refetch();
    });

    socket1.on('NEW_LOGIN', (data) => {
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
