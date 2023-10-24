import { Typography } from '@mui/material'
import React from 'react'

const LiveBiddingTitle = ({data}) => {
  return (
    <Typography variant='h4'
    sx={{
        paddingTop: "60px",
        textAlign: 'center',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: '30px',
        lineHeight: 'normal',
        letterSpacing: '1.95px',        
    }}>
       {data}
    </Typography>
  )
}

export default LiveBiddingTitle