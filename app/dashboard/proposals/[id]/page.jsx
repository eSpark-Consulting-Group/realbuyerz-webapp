'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Divider, Grid } from '@mui/material';
import { usePathname } from 'next/navigation';

import ProposalHeader from '@/src/components/proposals/ProposalHeader';
import ProposalApplicant from '@/src/components/proposals/ProposalApplicant';
import ProposalMedia from '@/src/components/proposals/ProposalMedia';
import ProposalMapLocation from '@/src/components/proposals/ProposalMapLocation';
import ProposalStats from '@/src/components/proposals/ProposalStats';
import PropertyDescription from '@/src/components/proposals/PropertyDescription';

import { PROPOSAL_LISTING } from '@/app/constants/Proposals';

const Page = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const Proposal = PROPOSAL_LISTING[id - 1];
  return (
    <Box sx={{ background: '#fff', borderRadius: '10px', p: '50px' }}>
      <ProposalHeader header={Proposal?.header} />
      <Grid container>
        <ProposalApplicant leftSection={Proposal?.leftSection} />
        <Grid item xs={10} sx={{ p: '40px', justifyContent: 'center' }}>
          <PropertyDescription details={Proposal} />
          <Divider sx={{ pt: '10px', pb: '10px' }} />
          <ProposalMapLocation location={Proposal?.location} />
          <Divider sx={{ pt: '10px', pb: '10px' }} />
          <ProposalStats stats={Proposal?.stats} />
          <Divider sx={{ pb: '10px' }} />
          <ProposalMedia media={Proposal?.images} mediaType={'images'} />
          <Divider sx={{ pt: '20px', pb: '30px' }} />
          <ProposalMedia media={Proposal?.videos} mediaType={'videos'} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Page;
