'use client';
import BiddingDetails from '@/src/components/layouts/BiddingPage/BiddingDetails';
import { LIVE_BIDDING_DATA } from '@/app/constants/LiveBidding';
import PopupModal from '@/src/components/PopupModal';
import { POPUP_MESSAGE } from '@/app/constants/PopupModal';

const page = () => {
  return (
    <>
      <PopupModal Message={POPUP_MESSAGE} />
      <BiddingDetails liveBiddingData={LIVE_BIDDING_DATA} />
    </>
  );
};

export default page;
