import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'

const ChatMsg = ({ message, isSender }) => {
    const messageStyle = {
        maxWidth: '70%',
        margin: '5px',
        padding: '10px',
        borderRadius: '5px',
        wordWrap: 'break-word',
        float: isSender ? 'left' : 'right',
        // backgroundColor: isSender ? '#dcf8c6' : '#ff635f',
        color: '#000',
      };
    
    return (
        <Box style={messageStyle}>
            <Box sx={{ padding: 3 }}>
                <Box sx={{ display: 'flex', alignContent: "center", alignItems: "center", width: '446px', height: "34px", mt: "15px", }}>
                    <Image
                        src={'./images/inbox/chatIcon.svg'}
                        width={30}
                        height={30}
                        alt="chatIcon" />
                    <Typography sx={{ p: 3, mx: 1, backgroundColor: isSender ? "#F1F1F1" : '#FFEEE7', color: "000", fontSize: "13px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", borderRadius: "0px 10px 10px 10px" }}>
                    {message.content}
                    </Typography>
                </Box>

            </Box>
            {/* <Box sx={{ padding: 3, position: "relative" }}>
                <Box sx={{ display: 'flex', alignContent: "center", alignItems: "center", width: '446px', height: "34px", mt: "15px", position: "absolute", right: 0 }}>
                    <Image
                        src={'./images/inbox/chatIcon.svg'}
                        width={30}
                        height={30}
                        alt="chatIcon" />
                    <Typography sx={{ p: 3, mx: 1, backgroundColor: "#FFEEE7", color: "000", fontSize: "13px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", borderRadius: "0px 10px 10px 10px" }}>
                    {message.content}
                    </Typography>
                </Box>
            </Box> */}
        </Box>
    )
}

export default ChatMsg
