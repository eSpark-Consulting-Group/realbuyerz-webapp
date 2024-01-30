'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Divider, Grid } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import ProposalApplicant from '@/src/components/Proposals/ProposalApplicant';
import ProposalHeader from '@/src/components/Proposals/ProposalHeader';
import PropertyDescription from '@/src/components/Proposals/PropertyDescription';
import ProposalMapLocation from '@/src/components/Proposals/ProposalMapLocation';
import ProposalStats from '@/src/components/Proposals/ProposalStats';
import ProposalMedia from '@/src/components/Proposals/ProposalMedia';
import NotFoundSection from '@/src/components/Global/NotFoundSection';

const Page = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const proposals = useSelector((state) => state.proposals.proposals);
  const proposal = proposals[id - 1];
  if (isNaN(id) || id === undefined || id === null) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Proposal id invalid, Please add correct id.'}
      />
    );
  }
  if (!proposal) {
    return (
      <NotFoundSection
        heading={'Sorry'}
        message={`This proposal doesnt exist. Please add correct id.`}
      />
    );
  }
  return (
    <Box
      sx={{
        width: {
          lg: '1200px',
          '@media (min-width: 1440px) and (max-width: 1568px)': {
            width: '100%',
          },
        },
      }}
    >
      <Box sx={{ background: '#fff', borderRadius: '10px', p: '50px' }}>
        <ProposalHeader proposal={proposal} />
        <Grid container>
          <ProposalApplicant proposal={proposal} />
          <Grid item xs={9} sx={{ p: '40px', justifyContent: 'center' }}>
            <PropertyDescription proposal={proposal} />
            <Divider sx={{ pt: '10px', pb: '10px' }} />
            <ProposalMapLocation proposal={proposal} />
            <Divider sx={{ pt: '10px', pb: '10px' }} />
            <ProposalStats proposal={proposal} />
            <Divider sx={{ pb: '10px' }} />
            <ProposalMedia
              media={proposal?.propertyData?.propertyImages}
              mediaType={'images'}
            />
            <Divider sx={{ pt: '20px', pb: '30px' }} />
            <ProposalMedia
              media={proposal?.propertyData?.propertyVideos}
              mediaType={'videos'}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Page;
