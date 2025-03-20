'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Tab,
  Tabs,
} from '@mui/material';

import ChatRooms from '@/src/components/dashboard/ChatRooms';
import ChatRoom from '@/src/components/dashboard/ChatRoom';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { getMessages } from '@/src/utils/apis/chat/gettAllMessage';
import {
  getAllMessages,
  getMessageWRTChatBox,
} from '@/src/redux/slices/chat/chatsSlice';
import Cookies from 'js-cookie';
import { useSocket } from '@/src/context/SocketContext';
import SmsFailedOutlinedIcon from '@mui/icons-material/SmsFailedOutlined';

const unreadChats = JSON.parse(Cookies.get('unreadChatIds') || '[]');

const AgentChat = () => {
  const { socket2 } = useSocket();

  const dispatch = useDispatch();

  const { chats, messages, messageWRTChatBox, hasChat } = useSelector(
    (state) => state.chats
  );
  const { userProfile } = useSelector((state) => state.auth);

  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState('Inbox');
  const [chatRoomState, setChatRoomState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedChatRoom, setSelectedChatRoom] = useState();
  const [isNewIdsForAllMessages, setIsNewIdsForAllMessages] = useState([]);
  const [isTypingUser, setIsTypingUser] = useState(null);
  const [page, setPage] = useState(1);

  const chatIds = chats?.map((chat) => chat._id) || [];

  const filterNewIds = (allIds, existingIds) =>
    allIds?.filter((id) => !existingIds?.includes(id));

  useEffect(() => {
    const existingMessagesIds = messages?.map((item) => item?.chat);
    setIsNewIdsForAllMessages(filterNewIds(chatIds, existingMessagesIds));
  }, [chats, messages]);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ['chatMessages', isNewIdsForAllMessages, page],
    queryFn: async () => getMessages(isNewIdsForAllMessages, page),
    enabled: !!chats?.length,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (isSuccess && data?.length) {
      const filterOutMessage = data?.map((msg) => msg?.data?.messages)?.flat();
      const filterItemsPage = data?.map((msg) => {
        return {
          currentPage: parseInt(msg?.data?.currentPage),
          itemsOnPage: msg?.data?.itemsOnPage,
          totalItems: msg?.data?.totalItems,
          totalPages: msg?.data?.totalPages,
          chatId: msg?.data?.messages[0]?.chat,
          hasMore: msg?.data?.totalPages > 1 ? true : false,
        };
      });

      // Get existing message IDs from the current state
      const existingMessageIds = messages?.map((message) => message?.chat);
      const existingPageIds = messageWRTChatBox?.map(
        (message) => message?.chatId
      );
      // Filter new messages that are not already in the current state
      const newMessages = filterOutMessage?.filter(
        (message) => !existingMessageIds?.includes(message?.chat)
      );
      const newTotalPage = filterItemsPage?.filter(
        (message) => !existingPageIds?.includes(message?.chat)
      );

      // Dispatch only new messages to add them to the state
      if (newMessages?.length > 0) {
        dispatch(getAllMessages([...messages, ...newMessages]));
        dispatch(getMessageWRTChatBox([...messageWRTChatBox, ...newTotalPage]));
      } else {
        dispatch(getAllMessages(filterOutMessage));
        dispatch(getMessageWRTChatBox(filterItemsPage));
      }
    }
  }, [data, isSuccess]);

  function paintBackground() {
    // List of random dark color hex codes
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

    // Generate a random index to select a color from the array
    const randomIndex = Math.floor(Math.random() * darkColors.length);

    // Return the randomly selected color
    return darkColors[randomIndex];
  }
  useEffect(() => {
    if (chats && chats.length) {
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

      setSelectedChatRoom(tempData[0]);
      setChatRoomState(tempData);
      removeReadChat(tempData[0]?.chatId);
    }
  }, [currentTab, chats]);

  useEffect(() => {
    if (selectedChatRoom && socket2) {
      const handleNewMessageAlert = (data) => {
        if (data.chatId !== selectedChatRoom.chatId) {
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
        }
      };
      socket2.on('NEW_MESSAGE_ALERT', handleNewMessageAlert);

      return () => {
        if (socket2) {
          socket2.off('NEW_MESSAGE_ALERT');
        }
      };
    }
  }, [socket2, selectedChatRoom]);

  useEffect(() => {
    if (selectedChatRoom) {
      if (unreadChats?.length) {
        removeReadChat(selectedChatRoom?.chatId);
      }
    }
  }, [selectedChatRoom, unreadChats, messages]);

  const removeReadChat = (id) => {
    const filterChat = unreadChats?.filter((chat) => chat.chatId !== id);

    if (filterChat?.length) {
      Cookies.set('unreadChatIds', JSON.stringify(filterChat));
    } else {
      Cookies.remove('unreadChatIds');
    }
  };

  useEffect(() => {
    if (socket2 && userProfile) {
      const handleTypingStatus = (event, isTyping) => {
        setIsTypingUser(
          isTyping ? { chatId: event.chatId, userId: userProfile.id } : null
        );
      };

      socket2.on('START_TYPING', (data) => handleTypingStatus(data, true));
      socket2.on('STOP_TYPING', () => handleTypingStatus(null, false));

      return () => {
        socket2.off('START_TYPING');
        socket2.off('STOP_TYPING');
      };
    }
  }, [socket2, userProfile]);

  const handleChangeTab = (event, newValue) => {
    let tab = event?.target?.innerText.split(' ');
    if (tab.length > 1) {
      tab = tab.slice(0, -1).join(' ');
    } else {
      tab = tab.join(' ');
    }
    setCurrentTab(tab);

    setValue(newValue);
  };
  const tabs = [
    {
      label: 'Inbox',
    },
    {
      label: 'Archive',
    },
  ];
  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <Box
      sx={{
        background: '#FFFFFF',
        border: 'solid 1px #E4E4E4',
        padding: '29px 0 0 0',
        borderRadius: '10px',
      }}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        sx={{
          borderBottom: 'solid 1px #E4E4E4',
          padding: '0 23px',
        }}
      >
        <Box>
          <IconButton
            size="small"
            sx={{
              '&:hover': {
                backgroundColor: '#fff',
              },
            }}
            onClick={handleRefresh}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={20} />
            ) : (
              <Box
                component="img"
                src="/icons/RefreshIcon.svg"
                alt={'Refresh'}
                sx={{
                  width: '20px',
                  height: '18px',
                  marginRight: '20px',
                  marginBottom: '10px',
                }}
              />
            )}
          </IconButton>
        </Box>

        <Tabs
          variant="scrollable"
          value={value}
          onChange={handleChangeTab}
          aria-label="basic tabs example"
        >
          {tabs?.map(({ label, prop }, i) => (
            <Tab
              key={i}
              label={`${label}`}
              {...prop}
              disableRipple={true}
              sx={{
                textTransform: 'math-auto',
                fontSize: '18px',
                fontWeight: 400,
                marginBottom: '10px',
              }}
            />
          ))}
        </Tabs>
      </Box>
      <Grid
        container
        sx={{
          minHeight: '450px',
        }}
      >
        {isLoading || loading ? (
          <Box
            sx={{
              minHeight: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress size={32} />
          </Box>
        ) : (
          <>
            {chatRoomState?.length && hasChat.length === 0 ? (
              <ChatRooms
                chatRoomState={chatRoomState}
                setSelectedChatRoom={setSelectedChatRoom}
                selectedChatRoom={selectedChatRoom}
              />
            ) : (
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                sx={{
                  borderRight: 'solid 1px #E4E4E4',
                  paddingTop: '10px',
                }}
              >
                <Box
                  sx={{
                    fontSize: '20px',
                    lineHeight: '24px',
                    color: '#969696',
                    textAlign: 'center',
                    paddingTop: '10px',
                  }}
                >
                  No chat
                </Box>
              </Grid>
            )}

            {selectedChatRoom && hasChat.length === 0 ? (
              <ChatRoom
                selectedChatRoom={selectedChatRoom}
                isTypingUser={isTypingUser}
                totalPageOfMessage={messageWRTChatBox?.find(
                  (p) => p?.chatId === selectedChatRoom?.chatId
                )}
              />
            ) : (
              <Grid
                item
                xs={12}
                sm={8}
                md={9}
                sx={{
                  padding: '10px 14px',
                  width: '100%',
                  minHeight: '100%',
                }}
              >
                <Box
                  sx={{
                    fontSize: '20px',
                    lineHeight: '24px',
                    color: '#969696',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <SmsFailedOutlinedIcon sx={{ fontSize: '10rem' }} />
                  <Box>No chat</Box>
                </Box>
              </Grid>
            )}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default AgentChat;
