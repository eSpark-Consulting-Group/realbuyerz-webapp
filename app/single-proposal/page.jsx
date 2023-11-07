'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Divider, Grid } from '@mui/material';
import ProposalHeader from '@/src/components/proposal/ProposalHeader';
import ProposalApplicant from '@/src/components/proposal/ProposalApplicant';
import ProposalMedia from '@/src/components/proposal/ProposalMedia';

const Listing = () => {
  const media = [
    {
      images: [
        '/images/proposals/images/proposalImage1.png',
        '/images/proposals/images/proposalImage2.png',
        '/images/proposals/images/proposalImage3.png',
        '/images/proposals/images/proposalImage4.png',
        '/images/proposals/images/proposalImage5.png',
        '/images/proposals/images/proposalImage6.png',
      ],
      videos: [
        '/images/proposals/images/proposalVIdeo1.png',
        '/images/proposals/images/proposalVIdeo2.png',
        '/images/proposals/images/proposalVIdeo3.png',
        '/images/proposals/images/proposalVIdeo4.png',
        '/images/proposals/images/proposalVIdeo5.png',
        '/images/proposals/images/proposalVIdeo6.png',
      ],
    },
  ];
  return (
    <Box sx={{ background: '#F4F5F7', borderRadius: '10px' }}>
      <ProposalHeader />
      <Grid container>
        <ProposalApplicant />
        <Grid item xs={10} sx={{ p: '40px', justifyContent: 'center' }}>
          <Divider sx={{ pt: '20px', pb: '30px' }} />
          <Divider sx={{ pt: '20px', pb: '30px' }} />
          <Divider sx={{ pt: '20px', pb: '30px' }} />
          <ProposalMedia media={media} sldierType={'image'} />
          <Divider sx={{ pt: '20px', pb: '30px' }} />
          <ProposalMedia media={media} sldierType={'video'} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Listing;
