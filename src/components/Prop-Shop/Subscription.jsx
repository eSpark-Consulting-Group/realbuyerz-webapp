import { Box, Typography } from '@mui/material';
import React from 'react';
import { Buy_Product_Data } from '@/app/constants/BuyProduct';
import BuyProductTable from './BuyProductTable';

const Subscription = ({ title }) => {
  const { BuyProductColumns, BuyProductRows, } = Buy_Product_Data
  return (
    <Box sx={{
      width: '100%', py: 2, 
      border: '2px solid #E4E4E4',
      borderRadius: '10px',
      backgroundColor: '#fff',
    }}>
      <Typography variant="h4" sx={{ px: { xs: 3, md: 3 }, pb: { xs: 2 } }}>
        {title}
      </Typography>
      <BuyProductTable columns={BuyProductColumns} rows={BuyProductRows} />
    </Box>
  );
};

export default Subscription;
