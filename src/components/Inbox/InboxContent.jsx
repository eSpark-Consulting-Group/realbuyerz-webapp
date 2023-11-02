import React, { useState } from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import ChatMsg from './ChatMsg';

const InboxContent = ({ data }) => {
  const [activeUserId, setActiveUserId] = useState(null);

  const handleConversationClick = (userId) => {
    setActiveUserId(userId);
  };

  const activeConversation = data.find((conversation) => conversation.userId === activeUserId);

  return (
    <Box sx={{ width: "100%", height: "auto", backgroundColor: "#FFFFFF", marginBottom: "15px", border: "1px solid #E4E4E4", borderRadius: "10px" }}>
      <Grid container>
        <Grid item xs={12} sx={{ border: "1px solid yellow",padding:"33px 0px 33px 0px",  mx:"10px"}}>
        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'space-between',}}>
            <Box>
                <Image
                src={"/images/inbox/reloadIcon.svg"}
                width={25}
                height={25}/>
                
            </Box>
            <Box>Inbox</Box>
            <Box>Archive</Box>
        </Grid>
        </Grid>
        <Grid item xs={4} sx={{ border: "1px solid red", height: "auto" }}>
          {data.map((item) => (
            <Box
              key={item.userId}
              xs={12}
              sx={{ display: 'flex', justifyContent: 'space-between', padding: 2, backgroundColor: '#EDF7FF' }}
              onClick={() => handleConversationClick(item.userId)} // Handle click on conversation
            >
              <Box>
                <Image
                  src={item.image}
                  width={50}
                  height={50}
                  alt="chatIcon"
                />
              </Box>
              <Box sx={{ mx: 1 }}>
                <Typography>
                  {item.name}
                </Typography>
                <Typography sx={{ color: "#909394", fontSize: "12px", lineHeight: "14.52px", fontWeight: 300 }}>
                  hello hello hello hello h
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#909394", fontSize: "12px", lineHeight: "14.52px", fontWeight: 300 }}>
                  2:30PM
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>

        <Grid item xs={8} sx={{ border: "1px solid green", height: "auto", p: 2 }}>
          <Box sx={{ border: "1px solid green", height: "auto", borderRadius: "10px" }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
              <Box sx={{ display: 'flex', alignContent: "center", alignItems: "center" }}>
                <Image
                  src={activeConversation?.image}
                  width={30}
                  height={30}
                  alt="chatIcon"
                />
                <Typography sx={{ mx: 1 }}>
                  {activeConversation?.name}
                </Typography>
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

            {activeConversation && activeConversation.messages.map((message) => (
              <ChatMsg
                key={message.id}
                message={message}
                isSender={message.sender === activeUserId}
                iconSrc={activeConversation.image}
              />
            ))}
            
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between',width: "100%" ,height:"20px",}}>
                <Box sx={{ borderRadius: "40px", border:"2px solid green"}}>
                    sdsdd
                </Box>
                <Box>

                </Box>

            </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default InboxContent;
