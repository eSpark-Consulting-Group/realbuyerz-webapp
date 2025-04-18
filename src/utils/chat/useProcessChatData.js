import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  getAllMessages,
  getMessageWRTChatBox,
} from '@/src/redux/slices/chat/chatsSlice';

const useProcessChatData = (data, isSuccess, messages, messageWRTChatBox) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isSuccess || !data?.length) return;

    const allMessages = data.map((msg) => msg?.data?.messages).flat();

    const pageDetails = data.map((msg) => ({
      currentPage: parseInt(msg?.data?.currentPage),
      itemsOnPage: msg?.data?.itemsOnPage,
      totalItems: msg?.data?.totalItems,
      totalPages: msg?.data?.totalPages,
      chatId: msg?.data?.messages?.[0]?.chat,
      hasMore: msg?.data?.totalPages > 1,
    }));

    const existingMessageIds = new Set(messages?.map((m) => m?.chat));
    const existingPageIds = new Set(messageWRTChatBox?.map((p) => p?.chatId));

    const newMessages = allMessages.filter(
      (msg) => !existingMessageIds.has(msg?.chat)
    );
    const newPageDetails = pageDetails.filter(
      (item) => !existingPageIds.has(item?.chatId)
    );

    const hasNewMessages = newMessages.length > 0;
    const hasNewPageDetails = newPageDetails.length > 0;

    if (hasNewMessages || hasNewPageDetails) {
      dispatch(
        getAllMessages(
          hasNewMessages ? [...messages, ...newMessages] : messages
        )
      );
      dispatch(
        getMessageWRTChatBox(
          hasNewPageDetails
            ? [...messageWRTChatBox, ...newPageDetails]
            : messageWRTChatBox
        )
      );
    }
  }, [data, isSuccess, messages, messageWRTChatBox]);
};

export default useProcessChatData;
