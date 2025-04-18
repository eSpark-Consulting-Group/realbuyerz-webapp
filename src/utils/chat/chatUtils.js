import Cookies from 'js-cookie';

export const paintBackground = () => {
  const darkColors = [
    '#2C3E50',
    '#D13E2E',
    '#800000',
    '#067511',
    '#6E025C',
    '#325BB3',
    '#144516',
    '#7C9E0B',
    '#03A69E',
    '#3091DB',
  ];

  const randomIndex = Math.floor(Math.random() * darkColors.length);
  return darkColors[randomIndex];
};

export const structureChatData = (chats) => {
  const updateChats = chats?.map((chat) => {
    return {
      title: chat?.members?.name,
      isRead: false,
      lastMessage: chat?.lastMessage?.content,
      avatar: chat?.members?.avatar?.url,
      lastMessageTimestamp: chat?.lastMessage?.createdAt,
      unReadMessages: 0,
      chatId: chat._id,
      otherUserId: chat?.members?._id,
    };
  });

  const tempData = updateChats?.map((room) => ({
    ...room,
    background: !room?.avatar && paintBackground(),
  }));

  return tempData;
};

export const handleNewMessageAlert = (data, selectedChatRoom) => {
  if (data.chatId !== selectedChatRoom.chatId) {
    const checkIds = Cookies.get('unreadChatIds');
    const unreadChats = checkIds ? JSON.parse(checkIds) : null;

    if (!unreadChats) {
      Cookies.set(
        'unreadChatIds',
        JSON.stringify([{ chatId: data.chatId, count: 1 }])
      );
      return;
    }

    const chatIndex = unreadChats.findIndex(
      (chat) => chat.chatId === data.chatId
    );

    if (chatIndex === -1) {
      unreadChats.push({ chatId: data.chatId, count: 1 });
    } else {
      unreadChats[chatIndex].count += 1;
    }

    Cookies.set('unreadChatIds', JSON.stringify(unreadChats));
  }
};

export const handleChangeTab = (event, newValue, setCurrentTab, setValue) => {
  let tab = event?.target?.innerText.split(' ');

  if (tab.length > 1) {
    tab = tab.slice(0, -1).join(' ');
  } else {
    tab = tab.join(' ');
  }

  setCurrentTab(tab);
  setValue(newValue);
};

export const handleRefresh = (setLoading) => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
};

export const generateRandomString = (length) => {
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  let result = '';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const generateString = () => {
  const part1 = generateRandomString(5);
  const part2 = generateRandomString(7);
  const part3 = generateRandomString(1);

  return `${part1}-${part2}-${part3}`;
};

export const handleKeyPress = (e, sendMessage, setMessage, message) => {
  if (
    e.key === 'ArrowUp' ||
    e.key === 'ArrowDown' ||
    e.key === 'ArrowRight' ||
    e.key === 'ArrowLeft'
  ) {
    if (message.trim() === '') {
      e.preventDefault();
    }
  } else if (e.key === 'Enter' && e.shiftKey) {
    setMessage((prevMessage) => prevMessage + '\n');
  } else if (e.key === 'Enter') {
    e.preventDefault();
    sendMessage();
  }
};

export const scrollToBottom = (ref, page = 1) => {
  if (ref.current && page === 1) {
    const lastComponent = ref.current;
    const additionalOffset = 20;

    const totalHeight =
      lastComponent.getBoundingClientRect().height + additionalOffset;

    lastComponent.parentElement.scrollTo({
      top:
        lastComponent.offsetTop +
        totalHeight -
        lastComponent.parentElement.clientHeight,
      behavior: 'smooth',
    });
  }
};

export const getFileExtension = (url) => {
  return url.split('.').pop().split('?')[0];
};

export const lastText = (id, messages) => {
  const filterChatLastText = messages?.filter((msg) => msg.chat === id);

  return filterChatLastText[filterChatLastText.length - 1];
};

export const getAttachmentsOrText = (id, checkType, messages) => {
  const lastOne = lastText(id, messages);

  if (lastOne?.attachments?.length > 0) {
    return checkType(lastOne?.attachments[0]);
  } else {
    return lastOne?.content;
  }
};

export const removeReadChat = (id, unreadChats) => {
  const filterChat = unreadChats?.filter((chat) => chat.chatId !== id);

  if (filterChat?.length) {
    Cookies.set('unreadChatIds', JSON.stringify(filterChat));
  } else {
    Cookies.remove('unreadChatIds');
  }
};
