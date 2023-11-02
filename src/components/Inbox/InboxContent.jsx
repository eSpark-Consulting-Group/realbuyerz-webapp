'use client'
import { Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import ChatMsg from './ChatMsg'

const InboxContent = ({ data }) => {
    console.log(data, "dataaaaa")
    return (
        <Box sx={{ width: "100%", height: "auto", backgroundColor: "#FFFFFF", marginBottom: "15px", border: "1px solid #E4E4E4", borderRadius: "10px" }}>
            <Grid container>
                <Grid item xs={12} sx={{ border: "1px solid red", height: "120px" }}>

                </Grid>
                <Grid item xs={4} sx={{ border: "1px solid red", height: "auto", }}>
                    <Box xs={12} sx={{ display: 'flex', justifyContent: 'space-between', padding: 2, backgroundColor: '#EDF7FF', }}>
                        <Box>
                            <Image
                                src={'./images/inbox/chatIcon.svg'}
                                width={50}
                                height={50}
                                alt="chatIcon" />
                        </Box>
                        <Box sx={{ mx: 1 }}>
                            <Typography>
                                Jhon Doe
                            </Typography>
                            <Typography sx={{ color: "#909394", fontSize: "12px", lineHeight: "14.52px", fontWeight: 300 }}>
                                Lorem ipsum dolor sit amet. Bibendum feugiat sapien....
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ color: "#909394", fontSize: "12px", lineHeight: "14.52px", fontWeight: 300 }}>
                                2:30PM
                            </Typography>
                        </Box>
                    </Box>

                </Grid>




                <Grid item xs={8} sx={{ border: "1px solid green", height: "auto", p: 2 }}>

                    <Box sx={{ border: "1px solid green", height: "auto", borderRadius: "10px" }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
                            <Box sx={{ display: 'flex', alignContent: "center", alignItems: "center" }}>
                                <Image
                                    src={'./images/inbox/chatIcon.svg'}
                                    width={30}
                                    height={30}
                                    alt="chatIcon" />
                                <Typography sx={{ mx: 1 }}>
                                    Jhon Doe
                                </Typography>
                            </Box>
                            <Box>
                                <Image
                                    src={'./images/inbox/settingsIcon.svg'}
                                    width={30}
                                    height={30}
                                    alt="settingIcon" />
                            </Box>
                        </Box>
                        <Divider />

                        {data.map((conversation, index) => (
                            <div key={index}>
                                {conversation.messages.map((message) => (
                                    <ChatMsg
                                        key={message.id}
                                        message={message}
                                        isSender={message.sender === conversation.userId}
                                    />
                                ))}
                            </div>
                        ))}

                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default InboxContent
