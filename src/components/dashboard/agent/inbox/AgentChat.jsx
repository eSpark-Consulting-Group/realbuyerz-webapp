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
import { CHAT_ROOMS } from '@/src/constants/Chats';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { getMessages } from '@/src/utils/apis/chat/gettAllMessage';
import { getAllMessages, getMessageWRTChatBox } from '@/src/redux/slices/chat/chatsSlice';

const AgentChat = () => {
  const dispatch = useDispatch();

  const { chats } = useSelector((state) => state.chats);

  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState('Inbox');
  const [chatRoomState, setChatRoomState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedChatRoom, setSelectedChatRoom] = useState();

  const chatIds = chats?.map((chat) => chat._id) || [];
  const page = 1;

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['chatMessages', chatIds, page],
    queryFn: async () => getMessages(chatIds, page),
    enabled: !!chats?.length,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

    useEffect(() => {
      if (isSuccess && data?.length) {
        const filterOutMessage = data?.map((msg) => msg?.data?.messages)?.flat();
        const filterItemsPage = data?.map((msg) => {
          return {
            currentPage: msg?.data?.currentPage,
            itemsOnPage: msg?.data?.itemsOnPage,
            totalItems: msg?.data?.totalItems,
            totalPages: msg?.data?.totalPages,
            chatId: msg?.data?.messages[0]?.chat
          };
        });
  
        dispatch(getAllMessages(filterOutMessage));
        dispatch(getMessageWRTChatBox(filterItemsPage));
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
        };
      });

      const tempData = updateChats?.map((room) => ({
        ...room,
        background: !room?.avatar && paintBackground(),
      }));

      setSelectedChatRoom(tempData[0]);
      setChatRoomState(tempData);
    }
  }, [currentTab, chats]);

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
        {chatRoomState?.length && (
          <ChatRooms
            chatRoomState={chatRoomState}
            setSelectedChatRoom={setSelectedChatRoom}
            selectedChatRoom={selectedChatRoom}
          />
        )}

        {selectedChatRoom && <ChatRoom selectedChatRoom={selectedChatRoom} />}
      </Grid>
    </Box>
  );
};

export default AgentChat;
