'use client';
import { useState } from 'react';

import { useSelector } from 'react-redux';

import { Box, Button } from '@mui/material';

import LiveBiddingPropertiesList from '../../LiveBiddingPropertiesList';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import PostCard from '../../PostCard';

import { checkProposal, searching } from '@/src/utils/dashboardUtils';

import { LOAD_MORE, SHOW_LESS } from '@/src/constants/agent/Live_Bidding';
import { POST_LISTINGAD_CARD } from '@/src/constants/user/Dashboard';

const PostListingCard = ({ height, ads }) => {
  const all_proposals = useSelector((state) => state?.proposals);
  const searchValue = useSelector((state) => state?.search?.searchValue);

  const [showAllItems, setShowAllItems] = useState(false);
  let filteredAds = ads;

  if (searchValue) {
    filteredAds = searching(ads, searchValue);
  }

  const handleShowMoreClick = () => {
    setShowAllItems(true);
  };
  const handleShowLessClick = () => {
    setShowAllItems(false);
  };

  return (
    <>
      {ads?.length <= 0 ? (
        <NotFoundSection heading={'Sorry!'} message={'No users ads'} />
      ) : (
        <Box className="scrollable" sx={{ maxHeight: height }}>
          <>
            {filteredAds?.length > 0 ? (
              filteredAds
                ?.slice(0, showAllItems ? filteredAds?.length : 3)
                ?.map((item, index) => (
                  <PostCard
                    index={index}
                    minHeight={'350px'}
                    xl={6.5}
                    name={item?.title}
                    createdAt={item?.created_at}
                    md={4}
                    lg={2.5}
                    amount={item?.amount}
                    postListing={true}
                    id={item?.property_id}
                    description={item?.description}
                    key={index}
                  >
                    <LiveBiddingPropertiesList
                      city={item?.city}
                      status={item?.purpose}
                      location={item?.location}
                      proposal={checkProposal(
                        item?.property_id,
                        all_proposals,
                        'Submited'
                      )}
                      connects={item?.connects}
                      cardKeys={POST_LISTINGAD_CARD}
                      noConnects={true}
                    />
                  </PostCard>
                ))
            ) : (
              <NotFoundSection
                heading={'Sorry!'}
                message={`${searchValue} is not found`}
              />
            )}

            {filteredAds?.length > 3 && (
              <Box sx={{ textAlign: 'center', marginTop: 1 }}>
                <Button
                  onClick={
                    showAllItems ? handleShowLessClick : handleShowMoreClick
                  }
                  sx={{
                    margin: 'auto',
                    color: '#1176AD',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '24.2px',
                    '&:hover': {
                      color: '#1176AD',
                      textDecoration: 'underline',
                      textUnderlineOffset: '5px',
                    },
                  }}
                >
                  {showAllItems ? SHOW_LESS : LOAD_MORE}
                </Button>
              </Box>
            )}
          </>
        </Box>
      )}
    </>
  );
};

export default PostListingCard;
