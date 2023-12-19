'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

import BiddingProfile from '../../Biddings/BiddingProfile';
import ShopCart from '../ShopCart/ShopCart';
import ProductCart from '../../Prop-Shop/ProductCart';
import { ROUTERS } from '@/app/constants/LiveBidding';

const LIVEBIDDING = ROUTERS.dashboardLiveBidding;
const BIDDING = ROUTERS.bidding;
const PROPSHOP = ROUTERS.buyProducts;

const RightSidebar = ({ profileInfo }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === LIVEBIDDING ? (
        <BiddingProfile profileInfo={profileInfo} />
      ) : null}

      {pathname.includes(BIDDING) ? <ShopCart /> : null}
      {pathname.includes(PROPSHOP) ? <ProductCart /> : null}
    </>
  );
};

export default RightSidebar;
