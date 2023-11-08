import React, { useEffect, useRef, useState } from 'react';
import {
  Grid,
  Typography,
  Box,
  Divider,
  Popover,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import Image from 'next/image';

import ChatMsg from './ChatMsg';
import InputMessage from './InputMessage';

const Conversation = ({ activeConversation, activeUserId }) => {
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [activeConversation]);

  const handleSendMessage = () => {
    const message = inputRef.current.value;
    console.log('Message:', message);
  };

  const handleOpenPopover = (event) => {
    setPopoverAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setPopoverAnchorEl(null);
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
              width={50}
              height={50}
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
              onClick={handleOpenPopover}
            />
            <Popover
              open={Boolean(popoverAnchorEl)}
              anchorEl={popoverAnchorEl}
              onClose={handleClosePopover}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <List>
                <ListItem button>
                  <ListItemText primary="Mark as unread" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Edit" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Delete" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Archive" />
                </ListItem>
              </List>
            </Popover>
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
              height: '290px',
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
              activeConversation.messages.map((message) => (
                <ChatMsg
                  key={message.id}
                  message={message}
                  isSender={message.sender === activeUserId}
                  iconSrc={activeConversation.image}
                />
              ))}
          </Box>
          <InputMessage
            inputRef={inputRef}
            handleSendMessage={handleSendMessage}
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default Conversation;
