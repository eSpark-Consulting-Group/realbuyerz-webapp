'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Divider, Grid } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import BidMedia from '@/src/components/Biddings/BidMedia';
import BidMapLocation from '@/src/components/Biddings/BidMapLocation';
import BidDescription from '@/src/components/Biddings/BidDescription';
import BidHeader from '@/src/components/Biddings/BidHeader';
import RightSection from '@/src/components/Biddings/RightSection';
import BidData from '@/src/components/Biddings/BidData';

import { BIDDINGS, BIDDING_LIST } from '@/app/constants/Biddings';
import ProposalMedia from '@/src/components/Proposals/ProposalMedia';
import ProposalStats from '@/src/components/Proposals/ProposalStats';
import ProposalMapLocation from '@/src/components/Proposals/ProposalMapLocation';
import NotFoundSection from '@/src/components/Global/NotFoundSection';

const Page = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const biddings = useSelector((state) => state.biddings.biddings);
  const bidding = biddings[id - 1];
  console.log(bidding, 'bidding');

  if (isNaN(id) || id === undefined || id === null) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Proposal id invalid, Please add the correct id.'}
      />
    );
  }

  console.log(bidding, 'biddingCurrentID');
  if (!bidding) {
    return (
      <NotFoundSection
        heading={'Sorry'}
        message={`This proposal doesn't exist. Please add the correct id.`}
      />
    );
  }

  const proposals = useSelector((state) => state.proposals.proposals);
  // console.log('proposals', proposals);
  const selectedProposal = proposals.find((proposal) => proposal?.id == bidding?.proposalId);
  // console.log('selectedProposal', selectedProposal);

  if (!selectedProposal) {
    console.error(`Proposal with id ${bidding.proposalId} not found`);
  }
  if (!proposals) {
    return <LoadingSpinner />;
  }


  return (
    <Box sx={{ background: '#fff', borderRadius: '10px', my: '30px' }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={9}
          sx={{
            px: { xs: '20px', md: '40px' },
            py: '25px',
            justifyContent: 'center',
            pb: '25px',
          }}
        >
          <BidHeader header={selectedProposal} />
          <BidDescription details={bidding} />
          <ProposalMapLocation proposal={selectedProposal} />
          <Divider sx={{ pt: '10px', pb: '10px' }} />
          <ProposalStats proposal={selectedProposal} />
          <Divider sx={{ pb: '10px' }} />
          <ProposalMedia
            media={selectedProposal?.propertyData?.propertyImages}
            mediaType={'images'}
          />
          <Divider sx={{ pt: '20px' }} />
          <ProposalMedia
            media={selectedProposal?.propertyData?.propertyVideos}
            mediaType={'videos'}
          />
        </Grid>
        <Grid item xs={12} md={3} sx={{ py: '70px', px: '25px' }}>
          <RightSection rightSection={bidding} report={''} apply={''} save={''} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
