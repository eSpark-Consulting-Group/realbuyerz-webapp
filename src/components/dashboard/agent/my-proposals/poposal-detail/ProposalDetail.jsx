'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { useMutation } from '@tanstack/react-query';

import { Box, Typography, Grid, Button, CircularProgress } from '@mui/material';

import UserProfileImage from '@/src/components/dashboard/UserProfileImage';
import BackToDashboard from '@/src/components/dashboard/BackToDashboard';
import AgentPropertyDetails from './AgentPropertyDetails';
import UserPropertyDetails from './UserPropertyDetails';
import UserPropertyContent from './UserPropertyContent';
import Content from './Content';

import { viewAgentProposal } from '@/src/utils/apis/bidding/viewAgentProposal';
import { transformApiObject } from '@/src/utils/objectsConversion';

import {
  PREVIEW_DATA,
  PROPOSAL_PAGE,
  VIEWPROPOSAL,
} from '@/src/constants/Preview_Data';

const ProposalDetail = () => {
  const { image, back_Proposal_Button } = PROPOSAL_PAGE;
  const { areaAndAmount, location, amenities, images, videos } = PREVIEW_DATA;

  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];

  const [userPropertyDetail, setUserPropertyDetail] = useState({});
  const [agentPropertyDetail, setAgentPropertyDetail] = useState({});
  const [showMoreContent, setShowMoreContent] = useState(false);

  const handleClick = () => {
    setShowMoreContent(!showMoreContent);
  };

  useEffect(() => {
    if (id) {
      mutate(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const { mutate, isPending } = useMutation({
    mutationFn: viewAgentProposal,
    onSuccess: (data) => {
      const item = data.response.data[0];

      setUserPropertyDetail(transformApiObject(item.userProperty));
      setAgentPropertyDetail(transformApiObject(item.agentProperty));
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={9.2}>
          <Box sx={{ pb: 3 }}>
            <BackToDashboard
              buttonLabel={back_Proposal_Button?.text}
              link={back_Proposal_Button?.link}
            />
          </Box>

          <Box
            sx={{
              background: '#fff',
              borderRadius: '10px',
              mt: '16px',
              border: '1px solid #E4E4E4',
            }}
          >
            {isPending ? (
              <Box
                sx={{
                  height: '300px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <CircularProgress size={32} color="inherit" />
              </Box>
            ) : (
              <Grid item xs={12} md={12} lg={12} xl={12}>
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      flexDirection: 'column',
                      p: 4,
                      pb: 5,
                      borderBottom: '1px solid #E4E4E4',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '30px',
                        fontWeight: 600,
                        textAlign: 'center',
                      }}
                    >
                      {VIEWPROPOSAL?.userRequest || ''}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: '15px', md: '20px' },
                        fontWeight: 700,
                        textAlign: 'center',
                        mt: 3,
                        color: '#333333',
                        '@media (min-width: 280px) and (max-width: 350px)': {
                          textAlign: 'center',
                          fontSize: '10px',
                        },
                      }}
                    >
                      {userPropertyDetail?.title || ''}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        '@media (min-width: 280px) and (max-width: 800px)': {
                          flexDirection: 'column',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                        }}
                      >
                        <UserProfileImage
                          width={60}
                          height={60}
                          badgeWidth={'7px'}
                          badgeHeigth={'7px'}
                          padding={0.3}
                          right={2}
                          image={userPropertyDetail?.profile_image || image}
                          isActive={userPropertyDetail?.status || false}
                          notActive={false}
                        />

                        {userPropertyDetail && (
                          <UserPropertyContent
                            userPropertyDetail={userPropertyDetail}
                          />
                        )}
                      </Box>
                    </Box>

                    {userPropertyDetail && (
                      <UserPropertyDetails
                        userPropertyDetail={userPropertyDetail}
                      />
                    )}

                    <Box>
                      <Button
                        sx={{
                          fontSize: '12px',
                          fontWeight: 500,
                          color: '#FB631C',
                          textTransform: 'math-auto',
                        }}
                        onClick={handleClick}
                      >
                        {showMoreContent
                          ? VIEWPROPOSAL?.viewLessDetails
                          : VIEWPROPOSAL?.viewMoreDetails}
                      </Button>
                    </Box>
                  </Box>

                  {showMoreContent && (
                    <Content
                      userPropertyDetail={userPropertyDetail}
                      location={location}
                      amenities={amenities}
                    />
                  )}
                </Box>

                <AgentPropertyDetails
                  agentPropertyDetail={agentPropertyDetail}
                  location={location}
                  areaAndAmount={areaAndAmount}
                  images={images}
                  videos={videos}
                />
              </Grid>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProposalDetail;
