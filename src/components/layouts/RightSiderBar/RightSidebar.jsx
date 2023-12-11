'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

import BiddingProfile from '../../Biddings/BiddingProfile';
import ShopCart from '../ShopCart/ShopCart';
import ProductCart from '../../Prop-Shop/ProductCart';
import { PATH } from '@/app/constants/paths';

const RightSidebar = ({ profileInfo }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname.includes(PATH.biddings && PATH.liveBidding) ? (
        <BiddingProfile profileInfo={profileInfo} />
      ) : null}

      {pathname.includes(PATH.biddings) ? <ShopCart /> : null}
      {pathname.includes(PATH.buyProduct) ? <ProductCart /> : null}
    </>
  );
};

export default RightSidebar;
