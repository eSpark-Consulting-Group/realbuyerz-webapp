import React from 'react';
import OrderHistory from '@/src/components/OrderHistory/OrderHistory';
import { orderHistory } from '@/src/constants/OrderHistory';

const page = () => {
  return (
    <>
      <OrderHistory history={orderHistory} />
    </>
  );
};

export default page;
