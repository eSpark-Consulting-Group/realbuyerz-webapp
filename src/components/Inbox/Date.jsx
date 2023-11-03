import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ChatDate = ({ date }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", my: "0px", alignItems: "center", alignContent: "center", ml: "6%" }}>
            <Divider flex="1" width={"45%"} />
            <Typography ml="10px" mr="10px">
                {date}
            </Typography>
            <Divider flex="1" width={"40%"} />
        </Box>
    )
}

export default ChatDate
