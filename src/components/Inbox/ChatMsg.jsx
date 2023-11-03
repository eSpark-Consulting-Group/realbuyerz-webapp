import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import ChatDate from './Date';

const ChatMsg = ({ message, isSender, iconSrc }) => {
  const messageStyle = {
    // maxWidth: '70%',
    width: '100%',
    borderRadius: '5px',
    wordWrap: 'break-word',
    float: isSender ? 'left' : 'right',
    color: '#000',
  };

  return (
    <>
      <Box style={messageStyle}>
        <Box sx={{ padding: 0.9, display: isSender ? "" : 'flex', justifyContent: "flex-end", textAlign: "start", }}>
          <Box sx={{ display: 'flex', alignContent: "center", alignItems: "center", width: '446px', justifyContent: isSender ? "start" : "end", }}>
            {message.sender.startsWith('inComing') && (
              <Image
                src={iconSrc}
                width={30}
                height={30}
                alt="chatIcon"
              />
            )}
            <Typography sx={{
              padding: '10px 16px 10px 10px',
              mx: 1, backgroundColor: isSender ? "#F1F1F1" : '#FFEEE7', borderRadius: isSender ? "0px 10px 10px 10px" : "10px, 10px, 0px, 10px", color: "000", fontSize: "13px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal",
            }}>
              {message.content}

            </Typography>
          </Box>

        </Box>
        {
          message.noOfday === "true" ? <ChatDate date={'2 days ago'} /> : ""
        }
      </Box>
    </>
  );
};

export default ChatMsg;
