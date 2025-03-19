import Avatar from '@/src/components/dashboard/ui-elements/Avatar';
import { Box, CircularProgress, Grid, Menu, MenuItem, Typography } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import RenderFileUploads from './RenderFileUploads';
import RenderMessage from './RenderMessage';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { formatData } from '@/src/utils/formatMessageData';
import { useSocket } from '@/src/context/SocketContext';
import { getSingleRoomMessage } from '@/src/utils/apis/chat/getSingleRoomMessage';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getAllMessages, getMessageWRTChatBox } from '@/src/redux/slices/chat/chatsSlice';
import { sendAttachment } from '@/src/utils/apis/chat/sendAttachment';
import { useInView } from "react-intersection-observer";

const AudioRecorder = dynamic(() => import('./AudioRecorder'), {
  ssrc: false,
});
const ChatRoom = ({ selectedChatRoom, isTypingUser, totalPageOfMessage }) => {
  const { socket2 } = useSocket();

  const { messages, messageWRTChatBox } = useSelector((state) => state.chats);
  const { user, userProfile } = useSelector((state) => state.auth);

  const dispatch = useDispatch()

  const [displayUploadOptions, setDisplayUploadOptions] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isSendingVoiceNote, setIsSendingVoiceNote] = useState(false);
  const messageFieldRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [inViewLoader, setInViewLoader] = useState(false);
  const [page, setPage] = useState(1)
  const [conversation, setConversation] = useState([]);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  const { ref, inView } = useInView({ threshold: 0 });

  const {
    data: messageD,
    isLoading,
    isSuccess,
    isFetching,
  } = useQuery({
    queryKey: ['chatMessage', selectedChatRoom, totalPageOfMessage],
    queryFn: async () =>
      getSingleRoomMessage(selectedChatRoom?.chatId, totalPageOfMessage?.currentPage),
    enabled: !!selectedChatRoom?.chatId && totalPageOfMessage?.currentPage > 1,
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
                hasMore: totalPageOfMessage?.currentPage < messageD?.data?.totalPages,
              };
            }
            return { ...p };
          });

          dispatch(getMessageWRTChatBox(update));
          dispatch(getAllMessages([...messageD?.data?.messages, ...messages]));
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
          return {
            ...p,
            currentPage: totalPageOfMessage?.currentPage + 1,
          };
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
    setAnchorEl(event.currentTarget);
    event.stopPropagation();
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
    if(conversation.length){
      setTimeout(() => {
        setHasLoadedOnce(true);
      }, 300)
    }
  }, [conversation])

  const uploadOptionsRef = useRef(null);

  const toggleVisibility = () => {
    setIsClosing(true);
    setTimeout(() => {
      setDisplayUploadOptions(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        uploadOptionsRef.current &&
        !uploadOptionsRef.current.contains(event.target)
      ) {
        toggleVisibility();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function generateRandomString(length) {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function generateString() {
    const part1 = generateRandomString(5);
    const part2 = generateRandomString(7);
    const part3 = generateRandomString(1);

    return `${part1}-${part2}-${part3}`;
  }

  const [fileInput, setFileInput] = useState([]);
  const [isSendingFiles, setIsSendingFiles] = useState(false);
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

    if(tempFiles.length === 0){
      setIsSendingFiles(false)
    }
  };

  const handleCancelSendingAudio = () => setIsSendingVoiceNote(false);

  const DashedLineText = ({ text }) => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Box sx={{ flex: 1, height: '1px', background: '#ccc' }} />
        <Typography
          variant="body1"
          style={{
            padding: '10px',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '17px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#979797',
          }}
        >
          {text}
        </Typography>
        <Box sx={{ flex: 1, height: '1px', background: '#ccc' }} />
      </Box>
    );
  };

  const [message, setMessage] = useState('');
  const [dataToSend, setDataToSend] = useState();

  useEffect(() => {
    if (selectedChatRoom) {
      setDataToSend({
        members: [selectedChatRoom?.otherUserId],
        chatId: selectedChatRoom.chatId,
      });
    }
  }, [selectedChatRoom]);

  const handleInput = () => {
    const content = messageFieldRef.current.innerHTML;

    setMessage(content);

    if (content.trim().length > 0 || content !== '<br>') {
      socket2.emit('START_TYPING', dataToSend);
    } else {
      socket2.emit('STOP_TYPING', dataToSend);
    }
  };

  const handleBlur = () => {
    setMessage(messageFieldRef.current.innerHTML);
  };

  const handleKeyPress = (e) => {
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
      sendMessage();
      e.preventDefault();
    }
  };

  const { mutate, isPending: uploadLoading } = useMutation({
    mutationFn: sendAttachment,
    onSuccess: () => {
      setFileInput([]);
      setIsSendingFiles(false)
    },
    onError: (err) => {
      console.log(err);
    }
  });

  const sendMessage = () => {
    if (isSendingFiles) {
      if (!fileInput.length) {
        return;
      }
      const filesObject = fileInput.map(file => file.data)
      const body = {
        files: filesObject,
        chatId: selectedChatRoom.chatId
      }
      mutate(body)
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

      // Clear the input after sending the message
      setMessage('');
      setFileInput([]);
      setIsSendingFiles(false);
      socket2.emit('STOP_TYPING', dataToSend);
    }
  };

  let prevSender = null;

  const conversationRef = useRef(null);
  const scrollToBottom = () => {
    if (conversationRef.current && page === 1) {
      const lastComponent = conversationRef.current;
      const additionalOffset = 20; // Additional 20px to account for margin-bottom

      // Calculate total height including the additional offset
      const totalHeight =
        lastComponent.getBoundingClientRect().height + additionalOffset;

      // Scroll smoothly to the bottom of the last component
      lastComponent.parentElement.scrollTo({
        top:
          lastComponent.offsetTop +
          totalHeight -
          lastComponent.parentElement.clientHeight,
        behavior: 'smooth',
      });
    }
  };
  useEffect(() => {
    scrollToBottom();
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
        <Box
          sx={{
            padding: '12px 19px 8px',
            borderBottom: '1px solid #E4E4E4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Avatar
              data={selectedChatRoom}
              minWidth={'50px'}
              height={'50px'}
              chat
            />
            <Typography
              sx={{
                marginLeft: '5px',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '22px',
                letterSpacing: '0em',
                textAlign: 'left',
              }}
            >
              {selectedChatRoom?.title}
            </Typography>
          </Box>
          <Box sx={{ marginRight: '10px' }}>
            <Image
              width={3}
              height={15}
              src={'/icons/OptionsIcon.svg'}
              style={{ cursor: 'pointer' }}
              onClick={handleClick}
              alt={'dots'}
            />
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              sx={{ marginTop: '20px' }}
            >
              <MenuItem sx={{ borderBottom: '1px solid #E7E7E7' }}>
                Mark as unread
              </MenuItem>
              <MenuItem sx={{ borderBottom: '1px solid #E7E7E7' }}>
                Delete
              </MenuItem>
              <hr />
              <MenuItem sx={{ borderBottom: '1px solid #E7E7E7' }}>
                Block
              </MenuItem>
              <hr />
              <MenuItem sx={{ borderBottom: '1px solid #E7E7E7' }}>
                Archive
              </MenuItem>
            </Menu>
          </Box>
        </Box>
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
            {conversation?.map((days, daysIndex) => {
              return (
                <Box key={daysIndex}>
                  <DashedLineText
                    text={moment(days?.date).format('dddd, D MMMM YYYY')}
                  />
                  {days?.messages?.map((message, msgIndex) => {
                    const isSameSenderAsPrevious =
                      prevSender === message.sender;
                    prevSender = message.sender;
                    return (
                      <RenderMessage
                        key={msgIndex}
                        data={message}
                        selectedChatRoom={selectedChatRoom}
                        isSameSenderAsPrevious={isSameSenderAsPrevious}
                      />
                    );
                  })}
                </Box>
              );
            })}
          </Box>

          {isTypingUser?.userId === userProfile?.id &&
            selectedChatRoom?.chatId === isTypingUser?.chatId && (
              <div className="typing-indicator">
                <div className="dots">...</div>
              </div>
            )}
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
              //   flex: 10,
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
              <input
                type={'file'}
                style={{ display: 'none' }}
                id="image-input"
                onChange={handleFileInput}
                multiple
                accept=".png, .jpg, .jpeg"
              />
              <input
                type={'file'}
                style={{ display: 'none' }}
                id="file-input"
                onChange={handleFileInput}
                multiple
                accept=".pdf, .docx, .xlsx"
              />
              <input
                type={'file'}
                style={{ display: 'none' }}
                id="all-file-input"
                onChange={handleFileInput}
                multiple
                accept=".png, .jpg, .jpeg, .pdf, .docx, .xlsx"
              />
              {!isSendingVoiceNote && !isSendingFiles && (
                <Box ref={uploadOptionsRef}>
                  <Box
                    sx={{
                      width: { xs: '20px', sm: '32px' },
                      minWidth: { xs: '20px', sm: '32px' },
                      height: { xs: '20px', sm: '32px' },
                      backgroundColor: '#9B9B9B',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                    className={[
                      'upload-files-icons',
                      displayUploadOptions
                        ? 'anition-upload-files-icon'
                        : 'remove-anition-upload-files-icon',
                    ].join(' ')}
                    onClick={() =>
                      displayUploadOptions
                        ? toggleVisibility()
                        : setDisplayUploadOptions(true)
                    }
                  >
                    <Box
                      component={'img'}
                      src="/icons/SendFileChatIcon.svg"
                      sx={{
                        width: { xs: '12px', sm: '18px' },
                        height: { xs: '12px', sm: '18px' },
                      }}
                      alt={'Send File'}
                    />
                  </Box>
                  {displayUploadOptions && (
                    <Box
                      sx={{
                        width: '100px',
                        // border: '1px solid #ccc',
                        position: 'absolute',
                        // backgroundColor: '#fff',
                        bottom: '35px',
                        // borderRadius: '5px',
                      }}
                      className={
                        displayUploadOptions && !isClosing
                          ? 'draw-in-animation'
                          : 'draw-out-animation'
                      }
                    >
                      <label htmlFor="image-input">
                        <Box
                          sx={{
                            width: { xs: '20px', sm: '32px' },
                            minWidth: { xs: '20px', sm: '32px' },
                            height: { xs: '20px', sm: '32px' },
                            backgroundColor: '#9B9B9B',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                          }}
                        >
                          <Box
                            sx={{
                              width: '18px',
                              height: '18px',
                            }}
                            alt={'Image'}
                            component={'img'}
                            src={'/icons/select-image.svg'}
                          />
                          {/* <Typography>Image</Typography> */}
                        </Box>
                      </label>
                      <label htmlFor="file-input">
                        <Box
                          sx={{
                            width: { xs: '20px', sm: '32px' },
                            minWidth: { xs: '20px', sm: '32px' },
                            height: { xs: '20px', sm: '32px' },
                            backgroundColor: '#9B9B9B',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            marginTop: '4px',
                          }}
                        >
                          <Box
                            sx={{
                              width: '18px',
                              height: '18px',
                            }}
                            alt={'File'}
                            component={'img'}
                            src={'/icons/select-file.svg'}
                          />
                          {/* <Typography>File</Typography> */}
                        </Box>
                      </label>
                      <Box
                        onClick={() => {
                          setDisplayUploadOptions(false);
                          setIsSendingVoiceNote(true);
                        }}
                        sx={{
                          // display: 'flex',
                          display: { xs: 'none', md: 'none' },
                          alignItems: 'center',
                          marginBottom: '10px',
                          paddingX: '10px',
                          cursor: 'pointer',
                        }}
                      >
                        <Box
                          sx={{
                            width: '20px',
                            height: '20px',
                            marginRight: '5px',
                          }}
                          alt={'Mic'}
                          component={'img'}
                          src={'/icons/MicIcon.svg'}
                        />
                        <Typography>Voice</Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
              )}
              {!isSendingFiles && (
                <Box sx={{ padding: '0 10px', width: '100%' }}>
                  {isSendingVoiceNote ? (
                    <AudioRecorder
                      handleCancelSendingAudio={handleCancelSendingAudio}
                    />
                  ) : (
                    <Box
                      role={'none'}
                      className={'contentEditable'}
                      contentEditable
                      onInput={handleInput}
                      onKeyDown={handleKeyPress}
                      aria-label="Type your message..."
                      aria-placeholder="Type your message..."
                      ref={messageFieldRef}
                      onBlur={handleBlur}
                      onFocus={() => messageFieldRef.current.focus()}
                      suppressContentEditableWarning={true}
                    >
                      {message.trim() === '' &&
                        document?.activeElement !== messageFieldRef.current && (
                          <div className={'placeholder'}>Write message</div>
                        )}
                    </Box>
                  )}
                </Box>
              )}
              <Box
                src="/icons/SendMessageIcon.svg"
                component={'img'}
                alt={'Send Message'}
                sx={{
                  marginLeft: { xs: '5px', sm: '10px' },
                  marginRight: { xs: '5px', sm: '10px' },
                  width: { xs: '20px', sm: '36px' },
                  height: { xs: '20px', sm: '36px' },
                  display: 'none',
                  '@media (min-width: 280px) and (max-width: 1526px)': {
                    display: 'flex',
                  },
                }}
                onClick={sendMessage}
              />
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
              src="/icons/SendMessageIcon.svg"
              component={'img'}
              alt={'Send Message'}
              sx={{
                marginLeft: { xs: '5px', sm: '10px' },
                marginRight: { xs: '5px', sm: '10px' },
                width: { xs: '20px', sm: '36px' },
                height: { xs: '20px', sm: '36px' },
                '@media (min-width: 280px) and (max-width: 1526px)': {
                  display: 'none',
                },
              }}
              onClick={sendMessage}
            />
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default ChatRoom;
