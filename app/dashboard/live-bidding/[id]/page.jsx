'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Divider, Grid } from '@mui/material';
import { usePathname } from 'next/navigation';


import { PROPOSAL_LISTING } from '@/app/constants/Proposals';
import BidMedia from '@/src/components/Biddings/BidMedia';
import BidStats from '@/src/components/Biddings/BidStats';
import BidMapLocation from '@/src/components/Biddings/BidMapLocation';
import BidDescription from '@/src/components/Biddings/BidDescription';
import BidApplicant from '@/src/components/Biddings/BidApplicant';
import BidHeader from '@/src/components/Biddings/BidHeader';

const Page = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const Proposal = PROPOSAL_LISTING[id - 1];
  return (
    <Box sx={{ background: '#fff', borderRadius: '10px', p: '50px' }}>
      <BidHeader header={Proposal?.header} />
      <Grid container>
        <BidApplicant leftSection={Proposal?.leftSection} />
        <Grid item xs={10} sx={{ p: '40px', justifyContent: 'center' }}>
          <BidDescription details={Proposal} />
          <Divider sx={{ pt: '10px', pb: '10px' }} />
          <BidMapLocation location={Proposal?.location} />
          <Divider sx={{ pt: '10px', pb: '10px' }} />
          <BidStats stats={Proposal?.stats} />
          <Divider sx={{ pb: '10px' }} />
          <BidMedia media={Proposal?.images} mediaType={'images'} />
          <Divider sx={{ pt: '20px', pb: '30px' }} />
          <BidMedia media={Proposal?.videos} mediaType={'videos'} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Page;
