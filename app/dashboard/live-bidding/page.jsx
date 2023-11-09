'use client';
import BiddingDetails from '@/src/components/layouts/BiddingPage/BiddingDetails';
import { LIVE_BIDDING_DATA } from '@/app/constents/LiveBidding';

const page = () => {
  return (
    <>
      <BiddingDetails liveBiddingData={LIVE_BIDDING_DATA} />
    </>
  );
};

export default page;
