import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const ChatMsg = ({ message, isSender, iconSrc }) => {
  // const timestamp = dayjs(message.timestamp);
  // const currentTime = dayjs();
  // let time = timestamp.format('MM/DD/YYYY, hh:mm:ss A');
  // const hoursDifference = currentTime.diff(timestamp, 'hour');
  // const daysDifference = currentTime.diff(timestamp, 'day');

  return (
    <>
      <Box
        sx={{
          width: '100%',
          borderRadius: '5px',
          wordWrap: 'break-word',
          float: isSender ? 'left' : 'right',
          color: '#000',
        }}
      >
        <Box
          sx={{
            padding: 0.9,
            display: isSender ? '' : 'flex',
            justifyContent: 'flex-end',
            textAlign: 'start',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center',
              width: '446px',
              justifyContent: isSender ? 'start' : 'end',
            }}
          >
            {message.sender !== 2 && (
              <Image src={iconSrc} width={40} height={40} alt="chatIcon" />
            )}
            <Typography
              sx={{
                padding: '10px 16px 10px 10px',
                mx: 1,
                backgroundColor: isSender ? '#F1F1F1' : '#FFEEE7',
                borderRadius: isSender
                  ? '0px 10px 10px 10px'
                  : '10px 10px 0px 10px',
                color: '000',
                fontSize: '13px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}
            >
              {message.content}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              color: '#909394',
              fontSize: '12px',
              lineHeight: '14.52px',
              fontWeight: 300,
            }}
          >
            {/* {hoursDifference > 24 ? (
              <Typography sx={{width: 830}}>
                <ChatDate date={`${daysDifference} days ago`} />
              </Typography>
            ) : null} */}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ChatMsg;
