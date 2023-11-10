'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Divider, Grid, Typography } from '@mui/material';
import ProposalHeader from '@/src/components/proposal/ProposalHeader';
import ProposalApplicant from '@/src/components/proposal/ProposalApplicant';
import ProposalMedia from '@/src/components/proposal/ProposalMedia';
import ProposalMapLocation from '@/src/components/proposal/ProposalMapLocation';
import ProposalStats from '@/src/components/proposal/ProposalStats';
import PropertyDescription from '@/src/components/proposal/PropertyDescription';

import { Proposal } from '../../constants/Proposals';

const Page = () => {
  return (
    <Box sx={{ background: '#c0c0c0', p: '50px' }}>
      <Box sx={{ background: '#F4F5F7', borderRadius: '10px' }}>
        <ProposalHeader header={Proposal.header} />
        <Grid container>
          <ProposalApplicant leftSection={Proposal.leftSection} />
          <Grid item xs={10} sx={{ p: '40px', justifyContent: 'center' }}>
            <PropertyDescription details={Proposal} />
            <Divider sx={{ pt: '10px', pb: '10px' }} />
            <ProposalMapLocation location={Proposal.location} />
            <Divider sx={{ pt: '10px', pb: '10px' }} />
            <ProposalStats stats={Proposal.stats} />
            <Divider sx={{ pb: '10px' }} />
            <ProposalMedia media={Proposal.images} />
            <Divider sx={{ pt: '20px', pb: '30px' }} />
            <ProposalMedia media={Proposal.videos} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Page;
