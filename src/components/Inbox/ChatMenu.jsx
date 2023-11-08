import React from 'react';
import { Badge, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

const ChatMenu = ({
  data,
  handleConversationClick,
  activeUserId,
  activeTab,
}) => {
  const filteredData =
    activeTab === 'archive'
      ? data.filter((item) => item.archive === 'true')
      : data.filter((item) => item.archive === 'false');

  return (
    <Grid
      item
      xs={3}
      sx={{
        borderTop: '1px solid #E4E4E4',
        borderRight: '1px solid #E4E4E4',
        height: '505px',
        overflow: 'auto',
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          width: '0px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'transparent',
        },
      }}
    >
      {filteredData.map((item) => {
        const lastMessage = item.messages[item.messages.length - 1];
        const lastMessageTime = lastMessage.time;

        return (
          <Box
            key={item.userId}
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              cursor: 'pointer',
              padding: 0.6,
              backgroundColor:
                activeUserId === item.userId ? '#EDF7FF' : '#fff',
            }}
            onClick={() => handleConversationClick(item.userId)}
          >
            <Box sx={{ display: 'flex' }}>
              <Image src={item.image} width={40} height={40} alt="chatIcon" />
              <Box sx={{ mx: 1 }}>
                <Typography
                  sx={{
                    color: '#000',
                    fontSize: '15px',
                    lineHeight: '18.15px',
                    fontWeight: 300,
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    color: '#909394',
                    fontSize: '12px',
                    lineHeight: '14.52px',
                    fontWeight: 300,
                  }}
                >
                  Lorem ipsum dolor sit amet. Bibendum feugiat sapien....
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: '#909394',
                  fontSize: '12px',
                  lineHeight: '14.52px',
                  fontWeight: 300,
                }}
              >
                {lastMessageTime}
              </Typography>
              {item.badge === 'true' ? (
                <Badge
                  badgeContent={item.badgeContent}
                  color="customColor"
                  sx={{
                    ml: 2.5,
                    '& .MuiBadge-badge': {
                      color: 'white',
                    },
                  }}
                ></Badge>
              ) : null}
            </Box>
          </Box>
        );
      })}
    </Grid>
  );
};

export default ChatMenu;
