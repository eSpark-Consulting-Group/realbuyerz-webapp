'use client';
import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';

// import NotFoundSection from '@/src/components/global/NotFoundSection';
import LiveBiddingPropertiesList from '../../LiveBiddingPropertiesList';

import {
  ESTIMATE_RANGE,
  LOAD_MORE,
  SHOW_LESS,
} from '@/src/constants/agent/Live_Bidding';
import {
  VIEW_PROPSALS,
  POST_LISTINGAD_CARD,
} from '@/src/constants/user/Dashboard';
import { checkProposal } from '@/src/utils/dashboardUtils';
import { useMutation } from '@tanstack/react-query';
import { fetchUserProperties } from '@/src/utils/userProperties';

const PostRequestCard = ({ height }) => {
  const all_proposals = useSelector((state) => state?.proposals);
  // const searchValue = useSelector((state) => state?.search?.searchValue);
  const [allPostingData, setAllPostingData] = useState([]);
  const [showAllItems, setShowAllItems] = useState(false);
  // const searching_ad = filteredAds(searchValue, ads, all_proposals);

  const handleShowMoreClick = () => {
    setShowAllItems(true);
  };
  const handleShowLessClick = () => {
    setShowAllItems(false);
  };

  useEffect(() => {
    mutate();
  }, []);

  const { mutate } = useMutation({
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
      // Handle the error
      console.error(error);
    },
  });

  const sortHandler = (properties) => {
    const sorted = [...properties].sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );
    return sorted;
  };

  return (
    <>
      {allPostingData?.length <= 0 ? (
        <Typography textAlign={'center'}>No Data Found</Typography>
      ) : (
        <Box className="scrollable" sx={{ maxHeight: height }}>
          <>
            {sortHandler(allPostingData)
              ?.slice(0, showAllItems ? allPostingData?.length : 3)
              ?.map((item, index) => (
                <Grid item container xs={12} key={index}>
                  <Box
                    sx={{
                      width: '100%',
                      minHeight: '403px',
                      height: 'auto',
                      backgroundColor: '#EDF7FF',
                      border: '1px solid #AAD9FF',
                      borderRadius: '16px',
                      position: 'relative',
                      mb: 2.8,
                      zIndex: 1,
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        height: '100%',
                        background: '#F6FBFF',
                        zIndex: -1,
                        left: 0,
                        width: {
                          sm: '240px',
                          md: '280px',
                          lg: '319px',
                        },
                        borderRadius: '40px 500px 500px 40px',
                        '@media (min-width:280px) and (max-width: 800px)': {
                          width: '100%',
                          height: '170px',
                          borderRadius: '40px 40px 100% 100%',
                        },
                      }}
                    ></Box>
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        padding: { xs: 4, sm: 6 },
                        '@media(min-width: 280px) and (max-width: 445px)': {
                          textAlign: 'center',
                        },
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={7}
                        md={8}
                        lg={6.5}
                        xl={9}
                        sx={{
                          color: '#333',
                          textWrap: 'wrap',
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            maxWidth: { xs: '400px', sm: '650px' },
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            ml: 0.4,
                            fontSize: { xs: '21px' },
                          }}
                        >
                          {item?.propertyName}
                        </Typography>
                        <Typography variant="body1" sx={{ ml: 0.5, mt: 1 }}>
                          {formatDistanceToNow(new Date(item?.createdAt), {
                            addSuffix: true,
                          })}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={5}
                        md={3}
                        lg={4}
                        xl={2}
                        sx={{
                          color: '#333',
                          fontSize: '15px',
                          fontStyle: 'normal',
                          fontWeight: 700,
                          lineHeight: 'normal',
                          ml: { xs: '4px', sm: '0px' },
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: {
                              xs: 'start',
                              sm: 'end',
                            },
                            '@media(min-width: 280px) and (max-width: 445px)': {
                              justifyContent: 'center',
                            },
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: '14px',
                              fontWeight: 600,
                            }}
                          >
                            {ESTIMATE_RANGE || ''}
                          </Typography>
                          <Typography
                            sx={{
                              ml: 1,
                              fontWeight: 700,
                              color: '#333333',
                              fontSize: { xs: '18px', sm: '20px' },
                              maxWidth: { xs: '50px', sm: '50px' },
                              textOverflow: 'ellipsis',
                              overflow: 'hidden',
                              whiteSpace: 'nowrap',
                            }}
                            component={'span'}
                          >
                            {`${item?.propertyPrice}`}
                          </Typography>
                        </Box>
                      </Grid>
                      <Box
                        sx={{
                          color: '#333',
                          px: '20px',
                          paddingTop: '40px',
                          paddingBottom: '20px',
                          '@media(min-width: 280px) and (max-width: 445px)': {
                            pr: '10px',
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: '500',
                            fontSize: '13.8px',
                            lineHeight: '20.52px',
                            maxWidth: 'auto',
                            letterSpacing: '0em',
                            textAlign: 'left',
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 4,
                            mb: 1,
                          }}
                        >
                          {item?.propertyDescription}
                        </Typography>
                      </Box>
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
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: {
                              xs: 'start',
                              sm: 'flex-start',
                              md: 'flex-end',
                            },
                            '@media(min-width: 280px) and (max-width: 445px)': {
                              justifyContent: 'center',
                            },
                            px: { sm: '0px', md: '0px', lg: 6 },
                            pt: { xs: 2, sm: 0 },
                          }}
                        >
                          <Link href={`dashboard/ad/${item?.id}`}>
                            <Typography
                              sx={{
                                width: '200px',
                                height: '42px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50px',
                                border: '1px solid #D5E1D5',
                                background: '#FB631C',
                                color: '#FFF',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal',
                              }}
                            >
                              {VIEW_PROPSALS || ''}
                            </Typography>
                          </Link>
                        </Box>
                      </Grid>
                    </Grid>
                    <Box
                      sx={{
                        position: 'absolute',
                        height: '100%',
                        background: '#F6FBFF',
                        zIndex: -1,
                        top: 0,
                        right: 0,
                        width: {
                          sm: '240px',
                          md: '280px',
                          lg: '319px',
                        },
                        borderRadius: '500px 40px 40px 500px',
                        '@media (min-width:280px) and (max-width: 800px)': {
                          top: 'auto',
                          bottom: 0,
                          width: '100%',
                          height: '170px',
                          borderRadius: '100% 100% 30px 30px',
                        },
                      }}
                    ></Box>
                  </Box>
                </Grid>
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
