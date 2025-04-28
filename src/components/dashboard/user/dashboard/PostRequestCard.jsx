'use client';
import { useEffect, useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { Box, Typography, Button, CircularProgress } from '@mui/material';

import LiveBiddingPropertiesList from '../../LiveBiddingPropertiesList';
import PostCard from '../../PostCard';

import { checkProposal } from '@/src/utils/dashboardUtils';
import { fetchUserProperties } from '@/src/utils/userProperties';

import { LOAD_MORE, SHOW_LESS } from '@/src/constants/agent/Live_Bidding';
import { POST_LISTINGAD_CARD } from '@/src/constants/user/Dashboard';

const PostRequestCard = ({ height, setIsFetched }) => {
  const all_proposals = useSelector((state) => state?.proposals);

  const [allPostingData, setAllPostingData] = useState([]);
  const [showAllItems, setShowAllItems] = useState(false);

  const handleShowMoreClick = () => {
    setShowAllItems(true);
  };
  const handleShowLessClick = () => {
    setShowAllItems(false);
  };

  useEffect(() => {
    mutate();
  }, []);

  const { mutate, isPending } = useMutation({
    mutationFn: fetchUserProperties,
    onSuccess: (data) => {
      const items = data.response.data;
      let dataArr = [];
      Object.keys(items).forEach((val) => {
        if (items[val].length > 0) {
          dataArr = [...dataArr, ...items[val]];
        }
      });
      const fileredArr = dataArr.filter(
        (user, index, self) =>
          index === self.findIndex((u) => u.id === user.id && !user.isDeleted)
      );
      setAllPostingData(fileredArr);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  useEffect(() => {
    setIsFetched(isPending);
  },[isPending])

  const sortHandler = (properties) => {
    const sorted = [...properties].sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );
    return sorted;
  };

  return (
    <>
      {isPending ? (
        <Box
          sx={{
            minHeight: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress size={32} />
        </Box>
      ) : allPostingData?.length <= 0 ? (
        <Typography textAlign={'center'}>No Data Found</Typography>
      ) : (
        <Box className="scrollable" sx={{ maxHeight: height }}>
          <>
            {sortHandler(allPostingData)
              ?.slice(0, showAllItems ? allPostingData?.length : 3)
              ?.map((item, index) => (
                <PostCard
                  index={index}
                  minHeight={'403px'}
                  xl={9}
                  name={item?.propertyName}
                  createdAt={item?.createdAt}
                  md={3}
                  lg={4}
                  amount={item?.propertyPrice}
                  postListing={false}
                  id={item?.id}
                  description={item?.propertyDescription}
                >
                  <LiveBiddingPropertiesList
                    city={item?.propertyCity}
                    status={item?.purpose}
                    location={item?.propertyAddress}
                    proposal={checkProposal(
                      item?.id,
                      all_proposals,
                      'Submited'
                    )}
                    connects={item?.connects}
                    cardKeys={POST_LISTINGAD_CARD}
                    noConnects={true}
                  />
                </PostCard>
              ))}

            {allPostingData?.length > 3 ? (
              <>
                {!showAllItems ? (
                  <Box sx={{ textAlign: 'center', marginTop: 1 }}>
                    <Button
                      onClick={handleShowMoreClick}
                      sx={{
                        margin: 'auto',
                        color: '#1176AD',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '24.2px',
                      }}
                    >
                      {LOAD_MORE}
                    </Button>
                  </Box>
                ) : (
                  <Box sx={{ textAlign: 'center', marginTop: 1 }}>
                    <Button
                      onClick={handleShowLessClick}
                      sx={{
                        margin: 'auto',
                        color: '#1176AD',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '24.2px',
                      }}
                    >
                      {SHOW_LESS}
                    </Button>
                  </Box>
                )}
              </>
            ) : null}
          </>
        </Box>
      )}
    </>
  );
};

export default PostRequestCard;
