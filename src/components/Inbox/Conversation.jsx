'use client'
import React, { useEffect, useRef } from 'react';
import { Grid, Typography, Box, Divider } from '@mui/material';
import Image from 'next/image';
import ChatMsg from './ChatMsg';

const Conversation = ({ activeConversation, activeUserId }) => {
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [activeConversation]);

  const handleSendMessage = () => {
    const message = inputRef.current.value;
    console.log('Message:', message);
    // You can now send the message to your desired destination, such as updating the state or making an API call.
  };

  return (
    <Grid
      item
      xs={9}
      sx={{
        borderTop: '1px solid #E4E4E4',
        borderRadius: '0px 0px 10px 0px',
        height: 'auto',
        p: 2,
      }}
    >
      <Box
        sx={{
          border: '1px solid #E4E4E4',
          height: '470px',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}
        >
          <Box
            sx={{
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src={activeConversation?.image}
              width={40}
              height={40}
              alt="chatIcon"
            />
            <Typography sx={{ mx: 0.5 }}>{activeConversation?.name}</Typography>
          </Box>
          <Box>
            <Image
              src={'./images/inbox/settingsIcon.svg'}
              width={30}
              height={30}
              alt="settingIcon"
            />
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '302px',
              overflow: 'auto',
              scrollbarWidth: 'thin',
              '&::-webkit-scrollbar': {
                width: '0px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'transparent',
              },
              position: 'relative',
              mt: 2.5,
              mb: 2.5,
            }}
            ref={chatContainerRef}
          >
            {activeConversation &&
              activeConversation.messages
                // .slice()
                // .reverse() // Reverse the messages to show the latest at the bottom
                .map((message) => (
                  <ChatMsg
                    key={message.id}
                    message={message}
                    isSender={message.sender === activeUserId}
                    iconSrc={activeConversation.image}
                  />
                ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignContent: 'center',
              mx: '4',
              position: 'sticky',
              bottom: 10,
            }}
          >
            <Box
              sx={{
                borderRadius: '40px',
                width: '91.5%',
                height: '50px',
                position: 'relative',
                mx: 1,
              }}
            >
              <button
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  left: '20px',
                  zIndex: 1,
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={'./images/inbox/addIcon.svg'}
                  width={30}
                  height={30}
                  alt="chatIcon"
                />
              </button>
              <input
                ref={inputRef} // Use the ref to access the input field
                type="text"
                style={{
                  width: '100%',
                  height: '50px',
                  border: '1px solid #E4E4E4',
                  borderRadius: '50px',
                  paddingLeft: '60px',
                }}
                placeholder="Write message"
              />
            </Box>
            <button
              onClick={handleSendMessage}
              >
              <Image
                src={'./images/inbox/sendIcon.svg'}
                width={40}
                height={40}
                alt="chatIcon"
              />
            </button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Conversation;
