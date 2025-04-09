'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { usePathname } from 'next/navigation';

import Cookies from 'js-cookie';

import { getAllMessages } from '@/src/redux/slices/chat/chatsSlice';
import { useSocket } from '@/src/context/SocketContext';

export default function NewMessageListener() {
  const pathname = usePathname();

  const { socket2 } = useSocket();

  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.chats);

  useEffect(() => {
    if (!socket2) {
      console.warn('❌ No socket instance available yet.');
      return;
    }

    const onNewMessage = (data) => {
      if (messages?.length > 0) {
        dispatch(getAllMessages([...messages, data.message]));
      }
    };

    const handleNewMessageAlert = (data) => {
      const checkIds = Cookies.get('unreadChatIds');
      const unreadChats = checkIds ? JSON.parse(checkIds) : null;

      if (!unreadChats) {
        // Initialize with the chatId and a count of 1 if no unreadChats are found.
        Cookies.set(
          'unreadChatIds',
          JSON.stringify([{ chatId: data.chatId, count: 1 }])
        );
        return;
      }

      // Check if the chatId already exists in the unreadChats array.
      const chatIndex = unreadChats.findIndex(
        (chat) => chat.chatId === data.chatId
      );

      if (chatIndex === -1) {
        // If chatId does not exist, add a new object with count 1.
        unreadChats.push({ chatId: data.chatId, count: 1 });
      } else {
        // If chatId exists, increment the count.
        unreadChats[chatIndex].count += 1;
      }

      // Update the cookies with the new unreadChats array.
      Cookies.set('unreadChatIds', JSON.stringify(unreadChats));
    };

    socket2.on('NEW_MESSAGE', onNewMessage);
    socket2.on('NEW_ATTACHMENT', onNewMessage);
    !pathname.includes('inbox') &&
      socket2.on('NEW_MESSAGE_ALERT', handleNewMessageAlert);

    // Cleanup listeners when socket changes or component unmounts
    return () => {
      if (socket2) {
        socket2.off('NEW_MESSAGE');
        socket2.off('NEW_ATTACHMENT');
        !pathname.includes('inbox') && socket2.off('NEW_MESSAGE_ALERT');
      }
    };
  }, [socket2, messages, pathname]);

  return null;
}
