'use client';
import React from 'react';
import { Box, Divider } from '@mui/material';
import { usePathname } from 'next/navigation';
import { ProposalsPage } from '@/app/constants/postRequest';
import { useSelector } from 'react-redux';

import ProposalDetails from '@/src/components/UserDashboard/ProposalDetails';
import DashboardTitle from '@/src/components/UserDashboard/DashboardTitle';
import BackToDashboard from '@/src/components/UserDashboard/BackToDashboard';
import NotFoundSection from '@/src/components/Global/NotFoundSection';
import ProposalAgentProfile from '@/src/components/UserDashboard/ProposalAgentProfile';

const Page = () => {
  const { image, back_Button, view_Button, title } = ProposalsPage;
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const userPostings = useSelector(
    (state) => state?.postRequestAds?.userPostings
  );
  const proposals = useSelector((state) => state?.proposals);
  const specificPost = userPostings?.find((item) => item?.property_id == id);
  const find_proposals = proposals?.filter(
    (proposal) =>
      proposal?.property_id == specificPost?.property_id &&
      proposal?.status !== 'Rejected' &&
      proposal?.status !== 'Connected' &&
      proposal?.status !== 'Archive'
  );

  return (
    <>
      {specificPost !== undefined &&
      specificPost !== null &&
      find_proposals?.length > 0 ? (
        <>
          <BackToDashboard
            buttonLabel={back_Button?.text}
            link={back_Button?.link}
          />
          <DashboardTitle
            title={title}
            mt={'20px'}
            fontSize={'30px'}
            ml={'57px'}
            marginProposal={'10px'}
          />
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
              city={specificPost?.city}
              area={specificPost?.area}
              location={specificPost?.location}
              title={specificPost?.title}
              amount={specificPost?.amount}
              status={specificPost?.purpose}
              proposal={specificPost?.proposals?.length}
              postedTime={specificPost?.posted_Time}
              description={specificPost?.description}
            />
            <Divider />
            <ProposalAgentProfile
              proposalData={find_proposals || ''}
              image={image}
              ViewText={view_Button?.text}
              ViewLink={view_Button?.link}
              Height={'1420px'}
            />
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
