'use client';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import UserProfileImage from '@/src/components/dashboard/UserProfileImage';
import BackToDashboard from '@/src/components/dashboard/BackToDashboard';
import PropertyDetail from '@/src/components/dashboard/preview/PropertyDetail';
import PropertyDetails from '@/src/components/Properties/PropertyDescription/PropertyDetail';
import Location from '@/src/components/dashboard/preview/Location';
import PreviewAmountAndFeature from '@/src/components/dashboard/preview/PreviewAmountAndFeature';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import BidMedia from '@/src/components/dashboard/BidMedia';

import { PREVIEW_DATA, PROPOSAL_PAGE } from '@/src/constants/Preview_Data';

import { PROPOSAL } from '@/src/constants/agent/Proposal';
import { checkData } from '@/src/utils/dashboardUtils';
import { format } from 'date-fns';
import { useMutation } from '@tanstack/react-query';
import { viewUserProposal } from '@/src/utils/apis/bidding/viewUserProposal';
import { transformApiObject } from '@/src/utils/objectsConversion';
import { acceptProposal } from '@/src/utils/apis/bidding/acceptProposal';
import useViewportHeight from '@/src/utils/useViewportHeight';
import { rejectProposal } from '@/src/utils/apis/bidding/rejectProposal';
import { archivedProposal } from '@/src/utils/apis/bidding/archiveProposal';

const SpacificProposal = () => {
  const { image, back_Button, applicant_Titlt, applicant_Message } =
    PROPOSAL_PAGE;
  const { areaAndAmount, location, images, videos } = PREVIEW_DATA;

  const pathname = usePathname();

  const segments = pathname?.split('/');
  const proposalId = segments[segments?.length - 1];
  const userPropertyId = segments[segments?.length - 3];

  const viewportHeight = useViewportHeight();

  const [agentProposal, setAgentProposal] = useState({});
  // const [userProperty, setUserProperty] = useState({});

  const handleConnect = () => {
    acceptRequestHandler.mutate(agentProposal.id);
  };

  const handleReject = () => {
    rejectRequestHandler.mutate(agentProposal.id);
  };

  const handleArchived = () => {
    archivedRequestHandler.mutate(agentProposal.id);
  };

  useEffect(() => {
    mutate(userPropertyId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { mutate, isPending } = useMutation({
    mutationFn: viewUserProposal,
    onSuccess: (data) => {
      const item = data.response?.data;

      const findProposal = item.items.find(
        (it) => it.agentProperty.id === proposalId
      );

      setAgentProposal({
        ...findProposal,
        agentProperty: transformApiObject(findProposal.agentProperty),
      });
    },
    onError: (error) => {
      // Handle the error
      console.error(error);
    },
  });

  const acceptRequestHandler = useMutation({
    mutationFn: acceptProposal,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      // Handle the error
      console.error(error);
    },
  });

  const rejectRequestHandler = useMutation({
    mutationFn: rejectProposal,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      // Handle the error
      console.error(error);
    },
  });

  const archivedRequestHandler = useMutation({
    mutationFn: archivedProposal,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      // Handle the error
      console.error(error);
    },
  });

  return (
    <>
      {isPending ? (
        <Box
          sx={{
            height: {
              xs: `calc(${viewportHeight}px - 146px)`,
              sm: `calc(${viewportHeight}px - 166px)`,
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      ) : checkData(
          agentProposal?.agentProperty,
          agentProposal?.userStatus,
          'Connected',
          'Rejected'
        ) ? (
        <>
          <Box sx={{ pb: 3 }}>
            <BackToDashboard
              buttonLabel={back_Button?.text}
              link={back_Button?.link}
            />
          </Box>

          <Box
            sx={{
              backgroundColor: '#fff',
              border: '1px solid #E4E4E4',
              maxWidth: { lg: '1200px' },
              height: 'auto',
            }}
          >
            <Box
              sx={{ width: '100%', borderBottom: '1px solid #E4E4E4', p: 4 }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: { xs: 'column', md: 'row' },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2.5,
                    flexDirection: { xs: 'column', md: 'row' },
                  }}
                >
                  <UserProfileImage
                    width={60}
                    height={60}
                    badgeWidth={'7px'}
                    badgeHeigth={'7px'}
                    padding={0.3}
                    right={2}
                    // image={
                    //   agentProposal?.agentProperty?.user?.imageKey || image
                    // }
                    image={image}
                    isActive={false}
                  />
                  <Box
                    sx={{
                      textAlign: { xs: 'center', md: 'left' },
                      pb: { xs: '10px', md: '0px' },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '15px',
                        fontWeight: 500,
                        color: '#126FAA',
                      }}
                    >
                      {`${agentProposal.agentProperty.user?.firstName || ''} ${agentProposal.agentProperty.user?.lastName || ''}`}
                    </Typography>
                    <Typography>
                      <LocationOnIcon sx={{ fontSize: 28, color: '#757474' }} />
                      {`${agentProposal?.agentProperty?.city || ''} ${agentProposal?.agentProperty?.country || ''}`}{' '}
                      -{' '}
                      {format(
                        new Date(agentProposal?.agentProperty?.created_at),
                        'h:mma'
                      )}{' '}
                      local time
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    gap: 1.5,
                    flexDirection: { xs: 'column', md: 'row' },
                    '@media (min-width: 700px) and (max-width: 950px)': {
                      flexDirection: 'row',
                    },
                  }}
                >
                  <Button>
                    <Typography
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        width: { xs: '200px', lg: '200px' },
                        height: '43.545px',
                        backgroundColor: '#fff',
                        border: '1px solid #FB631C',
                        borderRadius: '50px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#FB631C',
                        '&:hover': {
                          backgroundColor: '#FB631C',
                          color: 'white',
                        },
                      }}
                      onClick={() => handleArchived()}
                    >
                      {archivedRequestHandler.isPending ? (
                        <CircularProgress
                          sx={{
                            height: '30px  !important',
                            width: '30px !important',
                          }}
                          color="inherit"
                        />
                      ) : (
                        'Archive'
                      )}
                    </Typography>
                  </Button>
                  <Button>
                    <Typography
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        width: { xs: '200px', lg: '200px' },
                        height: '43.545px',
                        backgroundColor: '#fff',
                        border: '1px solid #FB631C',
                        borderRadius: '50px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#FB631C',
                        '&:hover': {
                          backgroundColor: '#FB631C',
                          color: 'white',
                        },
                      }}
                      onClick={() => handleReject()}
                    >
                      {rejectRequestHandler.isPending ? (
                        <CircularProgress
                          sx={{
                            height: '30px  !important',
                            width: '30px !important',
                          }}
                          color="inherit"
                        />
                      ) : (
                        'Reject'
                      )}
                    </Typography>
                  </Button>

                  <Button>
                    <Typography
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: { xs: '200px', lg: '200px' },
                        height: '43.545px',
                        backgroundColor: '#FB631C',
                        borderRadius: '50px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#FFF',
                        '&:hover': {
                          backgroundColor: 'white',
                          color: '#FB631C',
                          border: '1px solid #FB631C',
                        },
                      }}
                      onClick={() => handleConnect()}
                    >
                      {acceptRequestHandler.isPending ? (
                        <CircularProgress
                          sx={{
                            height: '30px  !important',
                            width: '30px !important',
                          }}
                          color="inherit"
                        />
                      ) : (
                        'Connect'
                      )}
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', md: '330px' },
                  borderRight: { xs: '0px', md: '1px solid #E4E4E4' },
                  borderBottom: { xs: '1px solid #E4E4E4', md: '0px' },
                  p: { xs: 5, md: 3 },
                }}
              >
                <Typography sx={{ fontSize: '12px', fontWeight: 600 }}>
                  {applicant_Titlt || ''}
                </Typography>
                <Typography>{`${agentProposal.agentProperty.user?.firstName || ''} ${agentProposal.agentProperty.user?.lastName || ''} ${applicant_Message || ''}`}</Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: '100%', md: '80%' },
                  padding: { xs: '40px', md: '40px' },
                }}
              >
                <PropertyDetail
                  title={PropertyDetails}
                  heading={PROPOSAL?.propertyDetails}
                  subTitle={agentProposal?.agentProperty?.title}
                  description={agentProposal?.agentProperty?.description}
                  width={'100%'}
                  pb={'5px'}
                  pt={'0px'}
                  px={'0px'}
                  paddingHeading={'10px'}
                  subPadding={'0px'}
                />

                <Location
                  city={agentProposal?.agentProperty?.city}
                  locationKeys={location}
                  purpose={agentProposal?.agentProperty?.purpose}
                  propertyType={agentProposal?.agentProperty?.propertyType}
                  proportyCategory={
                    agentProposal?.agentProperty?.proportyCategory
                  }
                  location={agentProposal?.agentProperty?.location}
                  width={'100%'}
                  widthBox={'100%'}
                  className={'locationWidth'}
                  pb={'20px'}
                  pt={'30px'}
                  px={'0px'}
                />

                <PreviewAmountAndFeature
                  area={agentProposal?.agentProperty?.area}
                  amount={agentProposal?.agentProperty?.amount}
                  areaUnit={agentProposal?.agentProperty?.areaUnit}
                  areaAndAmount={areaAndAmount}
                  amountCurrency={agentProposal?.agentProperty?.amountCurrency}
                  instalmentAvailable={
                    agentProposal?.agentProperty?.instalmentAvailable
                  }
                  readyPossession={
                    agentProposal?.agentProperty?.readyPossession
                  }
                  width={'100%'}
                  pb={'10px'}
                  pt={'30px'}
                  px={'0px'}
                  subPadding={'0px'}
                />

                {/* <PreviewFeatureAndAmenities
                  amenities={amenities}
                  bedrooms={find_proposal?.bedrooms}
                  bathrooms={find_proposal?.bathrooms}
                  parking={find_proposal?.parking}
                  other_features={find_proposal?.other_features}
                /> */}
                <BidMedia
                  title={images?.title}
                  // media={agentProposal?.agentProperty?.PropertyData?.filter(
                  //   (image) => image.type === 'image'
                  // )}
                  media={[null]}
                  mediaType={images?.type}
                  pb={'20px'}
                  pt={'30px'}
                  px={'0px'}
                />

                <BidMedia
                  title={videos?.title}
                  // media={agentProposal?.agentProperty?.PropertyData?.filter(
                  //   (image) => image.type === 'video'
                  // )}
                  media={[null]}
                  mediaType={videos?.type}
                  pb={'20px'}
                  pt={'30px'}
                  px={'0px'}
                />
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <NotFoundSection
          heading={'Sorry!'}
          message={'Property id invalid, Please add correct id.'}
        />
      )}
    </>
  );
};

export default SpacificProposal;
