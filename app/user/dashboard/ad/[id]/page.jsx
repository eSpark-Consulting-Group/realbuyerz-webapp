'use client';
import React from 'react';
import { Box, Divider } from '@mui/material';

import DashboardProfile from '@/src/components/UserDashboard/DashboardProfile';
import ProposalDetails from '@/src/components/UserDashboard/ProposalDetails';
import DashboardTitle from '@/src/components/UserDashboard/DashboardTitle';
import BackToDashboard from '@/src/components/UserDashboard/BackToDashboard';
import { ProposalsPage } from '@/app/constants/postRequest';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

const Page = () => {
  const { image, back_Button, view_Button, title } = ProposalsPage;

  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const userPostings = useSelector(
    (state) => state?.postRequestAds?.userPostings
  );

  const spacificPost = userPostings.filter((item) => id == item?.adId)[0];

  return (
    <>
      <BackToDashboard
        buttonLabel={back_Button?.text}
        link={back_Button?.link}
      />
      <DashboardTitle title={title} />
      <Box
        sx={{
          background: '#fff',
          borderRadius: '10px',
          border: '1px solid #E4E4E4',
          mt: 6,
          mb: 6,
          mx: { xs: 'auto', lg: 0 },
          width: { xs: '100%', lg: '1200px' },
          '@media (min-width: 1440px) and (max-width: 1568px)': {
            width: '100%',
          },
          '@media (min-width: 960px) and (max-width: 1439px)': {
            width: '90%',
          },
        }}
      >
        <ProposalDetails
          city={spacificPost?.city}
          area={spacificPost?.area}
          location={spacificPost?.location}
          title={spacificPost?.title}
          amount={spacificPost?.amount}
          status={spacificPost?.purpose}
          proposal={spacificPost?.proposals?.length}
          postedTime={spacificPost?.posted_Time}
          description={spacificPost?.description}
        />
        <Divider />
        <DashboardProfile
          proposalData={spacificPost?.proposals}
          image={image}
          ViewText={view_Button?.text}
          ViewLink={view_Button?.link}
          Height={'67.5vh'}
        />
      </Box>
    </>
  );
};

export default Page;
