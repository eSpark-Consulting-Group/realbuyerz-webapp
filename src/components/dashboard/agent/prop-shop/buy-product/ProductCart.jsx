import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

import OrderSummary from './OrderSummary';
import EmptyCart from './EmptyCart';
import {
  EMPTY_CART_DATA,
  ORDER_SUMMARY,
} from '@/src/constants/agent/Buy_Product';

const ProductCart = ({
  setIsModalOpen,
  isModalOpen,
  handleChange,
  state,
  resetForm,
  selectedValue,
}) => {
  const { cart, totalPrice, connects, dollarRate, emptyCard } = useSelector(
    (state) => state.PakageCart
  );

  const {
    titile,
    Total,
    buttonText,
    successMessage,
    modalButtonText,
    confirmOrderLable,
  } = ORDER_SUMMARY;
  const { title, item } = EMPTY_CART_DATA;

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        item
        sx={{
          mx: { xs: 'auto', md: 0 },
          py: { xs: 4, md: 0 },
          minHeight: { xs: 'auto', lg: '340px' },
          border: '1px solid #E4E4E4',
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
            successMessage={successMessage}
            modalButtonText={modalButtonText}
            confirmOrderLable={confirmOrderLable}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            handleChange={handleChange}
            state={state}
            resetForm={resetForm}
            selectedValue={selectedValue}
          />
        )}
      </Grid>
    </Box>
  );
};

export default ProductCart;
