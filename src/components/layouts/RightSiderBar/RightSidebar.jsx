'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

import BiddingProfile from '../../Biddings/BiddingProfile';
import ShopCart from '../ShopCart/ShopCart';

const LIVEBIDDING = '/dashboard/live-bidding';
const BIDDING = '/biddings';

const RightSidebar = ({ profileInfo }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname.includes(BIDDING && LIVEBIDDING) ? (
        <BiddingProfile profileInfo={profileInfo} />
      ) : null}

      {pathname.includes(BIDDING) ? <ShopCart /> : null}
    </>
  );
};

export default RightSidebar;
