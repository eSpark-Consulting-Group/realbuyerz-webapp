import { Box, Typography } from '@mui/material';
import React from 'react';
import RBTabel from './RBTabel';
import { BuyProductColumns, BuyProductRows } from '@/app/constants/BuyProduct';
import BuyProductTable from './BuyProductTable';

const Subscription = ({ title }) => {
  return (
    <Box sx={{ width: '100%', py: 2 }}>
      <Typography variant="h4" sx={{ px: { xs: 3, md: 3 }, pb: { xs: 2 } }}>
        {title}
      </Typography>
      {/* <BuyProductTable /> */}
      <RBTabel columns={BuyProductColumns} rows={BuyProductRows} />
    </Box>
  );
};

export default Subscription;
