'use client';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import UserProfileImage from '@/src/components/UserDashboard/UserProfileImage';
import BackToDashboard from '@/src/components/UserDashboard/BackToDashboard';
import { ProposalsPage } from '@/app/constants/postRequest';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleConnectProposal,
  handleRejectProposal,
} from '@/src/redux/slices/userAds/userAdsSlice';
import PropertyDetail from '@/src/components/PostListing/preview/PropertyDetail';
import PropertyDetails from '@/src/components/Properties/PropertyDescription/PropertyDetail';
import { previewData } from '@/app/constants/postListing';
import Location from '@/src/components/PostListing/preview/Location';
import PreviewAmountAndFeature from '@/src/components/PostListing/preview/PreviewAmountAndFeature';
import PreviewFeatureAndAmenities from '@/src/components/PostListing/preview/PreviewFeatureAndAmenities';
import NotFoundSection from '@/src/components/Global/NotFoundSection';
import BidMedia from '@/src/components/Biddings/BidMedia';

const Page = () => {
  const { image, back_Button } = ProposalsPage;
  const { areaAndAmount, location, amenities, images } = previewData;

  const dispatch = useDispatch();
  const pathname = usePathname();
  const segments = pathname.split('/');
  const getadid = segments[segments.length - 3];
  const getproposalId = segments[segments.length - 1];
  const userPostings = useSelector(
    (state) => state?.postRequestAds?.userPostings
  );
  const spacificPost = userPostings?.find((item) => getadid == item?.adId);
  const spacificPostProposal = spacificPost?.proposals?.find(
    (prop) => prop?.proposalId == getproposalId
  );

  const loginAgents = useSelector((state) => state?.loginAgents);
  const findAgent = loginAgents?.find(
    (agent) => agent?.id == spacificPostProposal?.agentId
  );

  console.log(findAgent, 'findAgent');

  const handleConnect = () => {
    dispatch(handleConnectProposal(spacificPostProposal));
  };

  const handleReject = () => {
    dispatch(handleRejectProposal(spacificPostProposal));
  };

  console.log(spacificPostProposal, 'spacificPostProposal');

  return (
    <>
      {spacificPostProposal !== undefined ? (
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
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                  <UserProfileImage
                    width={60}
                    height={60}
                    badgeWidth={'7px'}
                    badgeHeigth={'7px'}
                    padding={0.3}
                    right={2}
                    image={findAgent?.profileImage || image}
                    isActive={findAgent?.status == 'Active' ? true : false}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '15px',
                        fontWeight: 500,
                        color: '#126FAA',
                      }}
                    >
                      {`${findAgent?.firstName || ''} ${findAgent?.lastName || ''}`}
                    </Typography>
                    <Typography>
                      <LocationOnIcon sx={{ fontSize: 28, color: '#757474' }} />
                      {`${findAgent?.city || ''} ${findAgent?.country || ''}`} -
                      3:16pm local time
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <Link href={`/user/dashboard`}>
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
                      {'Reject'}
                    </Typography>
                  </Link>
                  <Link href={`/user/inbox`}>
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
                      {'Connect'}
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex' }}>
              <Box
                sx={{ width: '330px', borderRight: '1px solid #E4E4E4', p: 3 }}
              >
                <Typography>Applicant</Typography>
                <Typography>
                  Kashif has applied to or been invited to your or your
                  company’s job need experience custom template designers for
                  custom posts archive creation
                </Typography>
              </Box>
              <Box sx={{ width: '100%' }}>
                <PropertyDetail
                  title={PropertyDetails}
                  subTitle={spacificPostProposal?.title}
                  description={spacificPostProposal?.description}
                />
                <Location
                  city={spacificPostProposal?.city}
                  locationKeys={location}
                  purpose={spacificPostProposal?.purpose}
                  propertyType={spacificPostProposal?.propertyType}
                  proportyCategory={spacificPostProposal?.proportyCategory}
                  location={spacificPostProposal?.location}
                />
                <PreviewAmountAndFeature
                  area={spacificPostProposal?.area}
                  amount={spacificPostProposal?.amount}
                  areaUnit={spacificPostProposal?.areaUnit}
                  areaAndAmount={areaAndAmount}
                  amountCurrency={spacificPostProposal?.amountCurrency}
                  instalmentAvailable={
                    spacificPostProposal?.instalmentAvailable
                  }
                  readyPossession={spacificPostProposal?.readyPossession}
                />
                <PreviewFeatureAndAmenities
                  amenities={amenities}
                  bedrooms={spacificPostProposal?.bedrooms}
                  bathrooms={spacificPostProposal?.bathrooms}
                  parking={spacificPostProposal?.parking}
                  other_features={spacificPostProposal?.other_features}
                />
                <BidMedia
                  title={images?.title}
                  media={spacificPostProposal?.images}
                  mediaType={images?.type}
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

export default Page;
