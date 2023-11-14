'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

import BiddingProfile from '../../Biddings/BiddingProfile';
import ShopCart from '../ShopCart/ShopCart';
import ProductCart from '../../Prop-Shop/ProductCart';

const LIVEBIDDING = '/dashboard/live-bidding';
const BIDDING = '/biddings';
const PROPSHOP = '/prop-shop/buy-product';

const RightSidebar = ({ profileInfo }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname.includes(BIDDING && LIVEBIDDING) ? (
        <BiddingProfile profileInfo={profileInfo} />
      ) : null}

      {pathname.includes(BIDDING) ? <ShopCart /> : null}
      {pathname.includes(PROPSHOP) ? <ProductCart /> : null}
    </>
  );
};

export default RightSidebar;
