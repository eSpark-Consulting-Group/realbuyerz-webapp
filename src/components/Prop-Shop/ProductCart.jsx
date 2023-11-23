import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import EmptyCart from './EmptyCart';
import { Empty_Cart_data, Order_Summary } from '@/app/constants/BuyProduct';
import OrderSummary from './OrderSummary';
import { useSelector } from 'react-redux';

const ProductCart = () => {
  const { cart, totalPrice, connects, dollarRate, emptyCard } = useSelector(
    (state) => state.PakageCart
  );

  const { titile, Total, buttonText } = Order_Summary;
  const { title, item } = Empty_Cart_data;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        xs={11.7}
        sm={11}
        item
        sx={{
          mx: { xs: 'auto', md: 0 },
          py: { xs: 4, md: 0 },
          minHeight: { xs: 'auto', lg: '340px' },
          border: '2px solid #E4E4E4',
          borderRadius: '10px',
          backgroundColor: '#fff',
        }}
      >
        {emptyCard && <EmptyCart title={title} item={item} />}
        {!emptyCard && (
          <OrderSummary
            title={titile}
            Total={Total}
            buttonText={buttonText}
            cart={cart}
            dollarRate={dollarRate}
            connects={connects}
            totalPrice={totalPrice}
          />
        )}
      </Grid>
    </Box>
  );
};

export default ProductCart;
