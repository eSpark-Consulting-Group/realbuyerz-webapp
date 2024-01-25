'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import BidDescription from '@/src/components/Biddings/BidDescription';
import RightSection from '@/src/components/Biddings/RightSection';
import ProposalMapLocation from '@/src/components/Proposals/ProposalMapLocation';
import NotFoundSection from '@/src/components/Global/NotFoundSection';
import BiddingProfile from '@/src/components/Biddings/BiddingProfile';
import { PROFILE_INFO } from '@/app/constants/LiveBidding';
import ClientRequirementAmount from '@/src/components/Proposals/ClientRequirementAmount';

// import {
//   Client_Requirement_Title,
//   Post_Listing_Preview_Data,
// } from '@/app/constants/PreviewModal';
import { BIDDINGS } from '@/app/constants/Biddings';

const Page = () => {
  const { amenities, amount, location } = BIDDINGS;

  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const biddings = useSelector((state) => state.biddings.biddings);
  const bidding = biddings[id - 1];

  const proposals = useSelector((state) => state.proposals.proposals);

  const selectedProposal = proposals.find(
    (proposal) => proposal?.id == bidding?.proposalId,
  );

  if (isNaN(id) || id === undefined || id === null) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Proposal id invalid, Please add the correct id.'}
      />
    );
  }

  if (!bidding) {
    return (
      <NotFoundSection
        heading={'Sorry'}
        message={`This proposal doesn't exist. Please add the correct id.`}
      />
    );
  }

  if (!selectedProposal) {
    console.error(`Proposal with id ${bidding.proposalId} not found`);
  }
  if (!proposals) {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2.5}>
        <Grid item xs={12} md={12} lg={9.2} xl={10}>
          <Box sx={{ background: '#fff', borderRadius: '10px' }}>
            <Grid container>
              <Grid item xs={12} md={8.5} xl={9.5}>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRight: '1px solid #E4E4E4',
                  }}
                >
                  <BidDescription details={bidding} />
                  <ProposalMapLocation location={location} />
                  <ClientRequirementAmount
                    amountData={amount}
                    amenities={amenities}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={3.5} xl={2.5}>
                <Box
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderBottom: '1px solid #E4E4E4',
                    px: { xs: 4, md: 3 },
                    pb: 0.8,
                    pt: 7,
                  }}
                >
                  <RightSection
                    rightSection={bidding}
                    report={''}
                    apply={''}
                    save={''}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={2.8} xl={2}>
          <BiddingProfile profileInfo={PROFILE_INFO} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
