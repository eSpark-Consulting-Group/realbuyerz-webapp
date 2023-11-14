import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import EmptyCart from './EmptyCart';
import { Empty_Cart_data } from '@/app/constants/BuyProduct';
import OrderSummary from './OrderSummary';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    alignItems: 'center',
    display: 'flex',
    border: 'none',
    boxShadow: 'none',
    color: theme.palette.text.secondary,
}));

const ProductCart = () => {
    const { title, item } = Empty_Cart_data
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                xs={12}
                sm={12}
                md={6}
                lg={6}
                Item
                sx={{
                    mx: { xs: 'auto', md: 0 },
                    height: {xs:'auto', lg:'340px'},
                    border: '2px solid #E4E4E4',
                    borderRadius: '10px',
                    backgroundColor: '#fff',
                }}
            >
             <OrderSummary />
            {/* <EmptyCart title={title} item={item}/> */}
            </Grid>
        </Box>
    )
}

export default ProductCart
