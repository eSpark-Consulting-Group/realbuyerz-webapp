'use client';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';

import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Tab,
  Tabs,
} from '@mui/material';
import SmsFailedOutlinedIcon from '@mui/icons-material/SmsFailedOutlined';

import ChatRooms from '@/src/components/dashboard/ChatRooms';
import ChatRoom from '@/src/components/dashboard/ChatRoom';

import { useSocket } from '@/src/context/SocketContext';

import { getMessages } from '@/src/utils/apis/chat/gettAllMessage';
import useProcessChatData from '@/src/utils/chat/useProcessChatData';
import {
  handleChangeTab,
  handleNewMessageAlert,
  handleRefresh,
  structureChatData,
} from '@/src/utils/chat/chatUtils';

import { TABS } from '@/src/constants/Chats';

const unreadChats = JSON.parse(Cookies.get('unreadChatIds') || '[]');

const ChatLayout = () => {
  const { socket2 } = useSocket();

  const { chats, messages, messageWRTChatBox, hasChat } = useSelector(
    (state) => state.chats
  );
  const { userProfile } = useSelector((state) => state.auth);

  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState('Inbox');
  const [loading, setLoading] = useState(false);
  const [chatRoomState, setChatRoomState] = useState([]);
  const [selectedChatRoom, setSelectedChatRoom] = useState();
  const [isNewIdsForAllMessages, setIsNewIdsForAllMessages] = useState([]);
  const [isTypingUser, setIsTypingUser] = useState(null);
  const [page] = useState(1);

  const chatIds = chats?.map((chat) => chat._id) || [];

  const filterNewIds = (allIds, existingIds) =>
    allIds?.filter((id) => !existingIds?.includes(id));

  useEffect(() => {
    const existingMessagesIds = messages?.map((item) => item?.chat);
    setIsNewIdsForAllMessages(filterNewIds(chatIds, existingMessagesIds));
  }, [chats, messages]);

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['chatMessages', isNewIdsForAllMessages, page],
    queryFn: async () => getMessages(isNewIdsForAllMessages, page),
    enabled: !!chats?.length,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  useProcessChatData(data, isSuccess, messages, messageWRTChatBox);

  useEffect(() => {
    if (chats && chats.length) {
      const tempData = structureChatData(chats);

      setSelectedChatRoom(tempData[0]);
      setChatRoomState(tempData);
      removeReadChat(tempData[0]?.chatId);
    }
  }, [currentTab, chats]);

  useEffect(() => {
    if (selectedChatRoom && socket2) {
      const handleAlert = (data) =>
        handleNewMessageAlert(data, selectedChatRoom);
      socket2.on('NEW_MESSAGE_ALERT', handleAlert);

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
            onClick={() => handleRefresh(setLoading)}
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
          onChange={(event, newValue) =>
            handleChangeTab(event, newValue, setCurrentTab, setValue)
          }
          aria-label="basic tabs example"
        >
          {TABS?.map(({ label, prop }, i) => (
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

export default ChatLayout;
