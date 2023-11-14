import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
// import EmptyCart from './EmptyCart';
// import { Empty_Cart_data } from '@/app/constants/BuyProduct';
import OrderSummary from './OrderSummary';

const ProductCart = () => {
  // const { title, item } = Empty_Cart_data;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        xs={12}
        sm={12}
        md={6}
        lg={6}
        item
        sx={{
          mx: { xs: 'auto', md: 0 },
          height: { xs: 'auto', lg: '340px' },
          border: '2px solid #E4E4E4',
          borderRadius: '10px',
          backgroundColor: '#fff',
        }}
      >
        <OrderSummary />
        {/* <EmptyCart title={title} item={item}/> */}
      </Grid>
    </Box>
  );
};

export default ProductCart;
