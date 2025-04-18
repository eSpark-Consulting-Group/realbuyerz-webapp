import { useEffect, useRef, useState } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-toastify';

import { Box, CircularProgress, Grid } from '@mui/material';

import RenderFileUploads from './RenderFileUploads';
import SendMessageButton from './SendMessageButton';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInputArea from './ChatInputArea';
import ChatInputTypingArea from './ChatInputTypingArea';

import { useSocket } from '@/src/context/SocketContext';

import { formatData } from '@/src/utils/formatMessageData';
import { getSingleRoomMessage } from '@/src/utils/apis/chat/getSingleRoomMessage';
import { sendAttachment } from '@/src/utils/apis/chat/sendAttachment';
import { generateString, scrollToBottom } from '@/src/utils/chat/chatUtils';
import { useClickOutside } from '@/src/utils/chat/useClickOutside';

import {
  getAllMessages,
  getMessageWRTChatBox,
} from '@/src/redux/slices/chat/chatsSlice';

import { FILES_ARRAY } from '@/src/constants/Chats';

const commonInputBoxStyles = {
  width: { xs: '20px', sm: '32px' },
  minWidth: { xs: '20px', sm: '32px' },
  height: { xs: '20px', sm: '32px' },
  backgroundColor: '#9B9B9B',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

const ChatRoom = ({ selectedChatRoom, isTypingUser, totalPageOfMessage }) => {
  const { socket2 } = useSocket();

  const dispatch = useDispatch();
  const { messages, messageWRTChatBox } = useSelector((state) => state.chats);
  const { user, userProfile } = useSelector((state) => state.auth);

  const [displayUploadOptions, setDisplayUploadOptions] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSendingVoiceNote, setIsSendingVoiceNote] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [inViewLoader, setInViewLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [conversation, setConversation] = useState([]);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const [fileInput, setFileInput] = useState([]);
  const [isSendingFiles, setIsSendingFiles] = useState(false);
  const [message, setMessage] = useState('');
  const [dataToSend, setDataToSend] = useState();

  const messageFieldRef = useRef(null);
  const conversationRef = useRef(null);
  const uploadOptionsRef = useRef(null);

  const open = Boolean(anchorEl);

  const { ref, inView } = useInView({ threshold: 0 });

  const {
    data: messageD,
    isLoading,
    isSuccess,
    isFetching,
  } = useQuery({
    queryKey: [
      'chatMessage',
      selectedChatRoom?.chatId,
      totalPageOfMessage?.currentPage,
    ],
    queryFn: async () =>
      getSingleRoomMessage(
        selectedChatRoom?.chatId,
        totalPageOfMessage?.currentPage
      ),
    enabled:
      !!selectedChatRoom?.chatId && (totalPageOfMessage?.currentPage ?? 0) > 1,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (
      isSuccess &&
      messageD &&
      totalPageOfMessage?.hasMore &&
      totalPageOfMessage?.currentPage > 1
    ) {
      if (messageD?.data?.messages?.length) {
        if (
          messages?.some((m) =>
            messageD?.data?.messages?.find((msg) => msg._id === m._id)
          )
        ) {
          return;
        }

        if (
          messages?.some(
            (m) => !messageD?.data?.messages?.find((msg) => msg._id === m._id)
          )
        ) {
          const update = messageWRTChatBox?.map((p) => {
            if (p.chatId === selectedChatRoom?.chatId) {
              return {
                ...p,
                hasMore:
                  (totalPageOfMessage?.currentPage || 0) <
                  (messageD?.data?.totalPages || 0),
              };
            }
            return { ...p };
          });

          dispatch(getMessageWRTChatBox(update));
          dispatch(
            getAllMessages([...(messageD?.data?.messages || []), ...messages])
          );

          setInViewLoader(false);
        }
      }
    }
  }, [messageD, isSuccess, isLoading, isFetching, selectedChatRoom, messages]);

  useEffect(() => {
    if (
      page === totalPageOfMessage?.totalPages ||
      !totalPageOfMessage?.hasMore ||
      isFetching ||
      totalPageOfMessage?.currentPage === totalPageOfMessage?.totalPages ||
      inViewLoader
    ) {
      return;
    }

    if (
      inView &&
      !isLoading &&
      !isFetching &&
      page !== totalPageOfMessage?.totalPages
    ) {
      setInViewLoader(true);

      const update = messageWRTChatBox.map((p) => {
        if (p.chatId === totalPageOfMessage?.chatId) {
          return { ...p, currentPage: totalPageOfMessage?.currentPage + 1 };
        }

        return { ...p };
      });

      dispatch(getMessageWRTChatBox(update));
      setPage((prev) => prev + 1);
    }
  }, [
    inView,
    isLoading,
    isFetching,
    selectedChatRoom,
    messageWRTChatBox?.length,
  ]);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  useEffect(() => {
    if (messages?.length) {
      const filterWRTChatRoom = messages?.filter(
        (msg) => msg.chat === selectedChatRoom?.chatId
      );
      const result = Object.values(formatData(filterWRTChatRoom, user));

      setConversation(result);
    } else {
      setConversation([]);
    }
  }, [messages, selectedChatRoom]);

  useEffect(() => {
    if (conversation.length) {
      setTimeout(() => {
        setHasLoadedOnce(true);
      }, 300);
    }
  }, [conversation]);

  const toggleVisibility = () => {
    setIsClosing(true);

    setTimeout(() => {
      setDisplayUploadOptions(false);
      setIsClosing(false);
    }, 300);
  };

  useClickOutside(uploadOptionsRef, toggleVisibility);

  const handleFileInput = (event) => {
    const files = event.target.files;

    if (files.length + fileInput.length > 5) {
      toast.error('You can only upload 5 files at a time');
      return;
    }

    if (files.length > 5) {
      toast.error('You can only upload 5 files at a time');
      return;
    }

    const fileArray = Array.from(files).map((data) => ({
      data,
      id: generateString(),
    }));

    setFileInput((ps) => [...ps, ...fileArray]);
    setDisplayUploadOptions(false);
    setIsSendingFiles(true);
  };

  const handleRemoveFile = (id) => {
    const tempFiles = fileInput?.filter((el) => el.id !== id);
    setFileInput(tempFiles);

    if (tempFiles.length === 0) {
      setIsSendingFiles(false);
    }
  };

  const handleCancelSendingAudio = () => setIsSendingVoiceNote(false);

  useEffect(() => {
    if (selectedChatRoom) {
      setDataToSend({
        members: [selectedChatRoom?.otherUserId],
        chatId: selectedChatRoom.chatId,
      });
    }
  }, [selectedChatRoom]);

  const { mutate, isPending: uploadLoading } = useMutation({
    mutationFn: sendAttachment,
    onSuccess: () => {
      setFileInput([]);
      setIsSendingFiles(false);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const sendMessage = () => {
    if (isSendingFiles) {
      if (!fileInput.length) {
        return;
      }

      const filesObject = fileInput.map((file) => file.data);

      const body = {
        files: filesObject,
        chatId: selectedChatRoom.chatId,
      };

      mutate(body);
    } else {
      messageFieldRef.current.innerText = '';

      if (message.trim() === '') {
        toast?.error('Message can not be empty.');
        return;
      }

      const finalMessage = {
        chatId: selectedChatRoom.chatId,
        members: [selectedChatRoom?.otherUserId, userProfile?.chatId],
        messages: message,
      };

      if (!finalMessage?.chatId) {
        toast.error('Chat id is required');
        return;
      }

      if (finalMessage.members.includes(null)) {
        toast.error('Member id is required');
        return;
      }

      socket2.emit('NEW_MESSAGE', finalMessage);

      setMessage('');
      setFileInput([]);
      setIsSendingFiles(false);

      socket2.emit('STOP_TYPING', dataToSend);
    }
  };

  useEffect(() => {
    scrollToBottom(conversationRef, page);
  }, [conversation, isTypingUser]);

  return (
    <Grid
      item
      xs={12}
      sm={8}
      md={9}
      sx={{
        padding: '10px 14px',
      }}
    >
      <Box
        sx={{
          border: '1px solid #E4E4E4',
          borderRadius: '5px',
          minHeight: '100%',
        }}
      >
        <ChatHeader
          selectedChatRoom={selectedChatRoom}
          handleClick={handleClick}
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
        />

        <Box
          sx={{
            padding: '12px 11px 8px 19px',
            maxHeight: '400px',
            borderBottom: 'solid 1px #E4E4E4',
          }}
          className="scrollable"
        >
          <Box ref={conversationRef}>
            {conversation?.length > 0 &&
              totalPageOfMessage?.hasMore &&
              hasLoadedOnce && (
                <div
                  ref={ref}
                  style={{ minHeight: '10px', textAlign: 'center' }}
                >
                  {inViewLoader && <CircularProgress size={20} />}
                </div>
              )}

            <MessageList
              conversation={conversation}
              selectedChatRoom={selectedChatRoom}
            />

            {isTypingUser?.userId === userProfile?.id &&
              selectedChatRoom?.chatId === isTypingUser?.chatId && (
                <div className="typing-indicator">
                  <div className="dots">...</div>
                </div>
              )}
          </Box>
        </Box>

        <Box
          sx={{
            padding: { xs: '5px', sm: '12px 11px 8px 19px' },
          }}
          display={'flex'}
          alignItems={fileInput.length !== 0 ? 'flex-end' : 'center'}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '90%', sm: '100%' },
              border: '1px solid #E4E4E4',
              borderRadius: { xs: '20px', sm: '32px' },
              padding: { xs: '7px', sm: '14px' },
            }}
          >
            <RenderFileUploads
              fileInput={fileInput}
              handleRemoveFile={handleRemoveFile}
            />

            <Box
              sx={{
                marginRight: { xs: '0px', sm: '16px' },
                position: 'relative',
              }}
              display={'flex'}
              alignItems={'center'}
            >
              {FILES_ARRAY?.map((fileInp, index) => (
                <input
                  key={index}
                  type={'file'}
                  style={{ display: 'none' }}
                  id={fileInp.id}
                  onChange={handleFileInput}
                  multiple
                  accept={fileInp.accept}
                />
              ))}

              {!isSendingVoiceNote && !isSendingFiles && (
                <ChatInputArea
                  uploadOptionsRef={uploadOptionsRef}
                  commonInputBoxStyles={commonInputBoxStyles}
                  displayUploadOptions={displayUploadOptions}
                  toggleVisibility={toggleVisibility}
                  setDisplayUploadOptions={setDisplayUploadOptions}
                  isClosing={isClosing}
                  setIsSendingVoiceNote={setIsSendingVoiceNote}
                />
              )}

              {!isSendingFiles && (
                <ChatInputTypingArea
                  isSendingVoiceNote={isSendingVoiceNote}
                  handleCancelSendingAudio={handleCancelSendingAudio}
                  sendMessage={sendMessage}
                  setMessage={setMessage}
                  message={message}
                  messageFieldRef={messageFieldRef}
                  socket2={socket2}
                />
              )}

              <Box
                component={'span'}
                sx={{
                  display: 'none',
                  '@media (min-width: 280px) and (max-width: 1526px)': {
                    display: 'flex',
                  },
                }}
              >
                <SendMessageButton sendMessage={sendMessage} />
              </Box>
            </Box>
          </Box>

          {uploadLoading ? (
            <Box
              component={'span'}
              sx={{
                marginLeft: { xs: '5px', sm: '10px' },
                marginRight: { xs: '5px', sm: '10px' },
                '@media (min-width: 280px) and (max-width: 1526px)': {
                  display: 'none',
                },
              }}
            >
              <CircularProgress size={20} />
            </Box>
          ) : (
            <Box
              component={'span'}
              sx={{
                '@media (min-width: 280px) and (max-width: 1526px)': {
                  display: 'none',
                },
              }}
            >
              <SendMessageButton sendMessage={sendMessage} />
            </Box>
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default ChatRoom;
