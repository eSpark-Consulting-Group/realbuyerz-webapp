'use client';
import { LIVE_BIDDING_DATA, MAIN_TITLE } from '@/app/constants/LiveBidding';

import { useSelector } from 'react-redux';

import BiddingDetails from '@/src/components/Biddings/BiddingDetails';
import LiveBiddingTitle from '@/src/components/Biddings/LiveBiddingTitle';

const page = () => {

  const biddings = useSelector((state) => state.biddings.biddings);
  console.log(biddings, 'biddings');

  return (
    <>
      <LiveBiddingTitle title={MAIN_TITLE} />
      <BiddingDetails liveBiddingData={LIVE_BIDDING_DATA} Height={'100vh'} />
    </>
  );
};

export default page;
