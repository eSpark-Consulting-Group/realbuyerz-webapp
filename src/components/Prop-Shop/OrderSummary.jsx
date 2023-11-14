import React from 'react'
import { Box, Button, Typography } from '@mui/material'

const OrderSummary = ({}) => {
  return (
    <Box sx={{
        width: '100%',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        px: 4.5,
    }}>
        <Box sx={{ borderBottom: '2px solid #E4E4E4', p: 3 }}>
            <Typography variant='h4'>Order Summary</Typography>
        </Box>
        <Box sx={{ borderBottom: '2px solid #E4E4E4', py: 3, display: {xs:'block', sm:'flex'}, justifyContent: 'space-between' }}>
            <Box><Typography variant='h5' sx={{fontSize:{xs:'18px', md:'16px', lg:'20px'},mb:{xs:1, sm:0},}}>Refresh Credits (1x)</Typography></Box>
            <Box><Typography variant='h6' sx={{ color: '#333', fontWeight: 400 }}>Rs 2500</Typography></Box>
        </Box>
        <Box sx={{ pb: 3 , pt:2.5, display: {xs:'block', sm:'flex'}, justifyContent: 'space-between' }}>
            <Box><Typography variant='h4' sx={{fontSize:{xs:'20px', sm:'22px'}, mb:{xs:2, sm:0},}}>Total:</Typography></Box>
            <Box><Typography variant='h5' sx={{ color: '#126FAA' }}>Rs 2500</Typography></Box>
        </Box>
        <Box sx={{ width: '100%', pb: 3, pt: 1 }}>
            <Button sx={{
                width: '100%',
                height: '60px',
                borderRadius:'10px'
            }}
            variant='outlined'>Proceed To Payment</Button>
        </Box>
    </Box>
  )
}

export default OrderSummary
