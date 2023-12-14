'use client';
import { LIVE_BIDDING_DATA, MAIN_TITLE } from '@/app/constants/LiveBidding';
import BiddingDetails from '@/src/components/Biddings/BiddingDetails';
import LiveBiddingTitle from '@/src/components/Biddings/LiveBiddingTitle';

const page = () => {
  return (
    <>
      <LiveBiddingTitle title={MAIN_TITLE} />
      <BiddingDetails liveBiddingData={LIVE_BIDDING_DATA} Height={'100vh'} />
    </>
  );
};

export default page;
