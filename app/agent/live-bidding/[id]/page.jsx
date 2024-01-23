'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Divider, Grid } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import BidDescription from '@/src/components/Biddings/BidDescription';
// import BidHeader from '@/src/components/Biddings/BidHeader';
import RightSection from '@/src/components/Biddings/RightSection';

// import ProposalMedia from '@/src/components/Proposals/ProposalMedia';
import ProposalStats from '@/src/components/Proposals/ProposalStats';
import ProposalMapLocation from '@/src/components/Proposals/ProposalMapLocation';
import NotFoundSection from '@/src/components/Global/NotFoundSection';
import BiddingProfile from '@/src/components/Biddings/BiddingProfile';
import { PROFILE_INFO } from '@/app/constants/LiveBidding';

const Page = () => {
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
              <Grid item xs={8.5}>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRight: '2px solid #E4E4E4',
                  }}
                >
                  <BidDescription details={bidding} />
                  <ProposalMapLocation proposal={selectedProposal} />
                  <Divider
                    sx={{
                      pt: '10px',
                      pb: '10px',
                    }}
                  />
                  <ProposalStats proposal={selectedProposal} />
                </Box>
              </Grid>
              <Grid item xs={3.5}>
                <Box
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderBottom: '2px solid #E4E4E4',
                    px: 4,
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

    // <Box sx={{ background: '#fff', borderRadius: '10px', my: '30px' }}>
    //   <Grid container>
    //     <Grid
    //       item
    //       xs={12}
    //       md={9}
    //       xl={10}
    //       sx={{
    //         px: { xs: '20px', md: '40px' },
    //         py: '25px',
    //         justifyContent: 'center',
    //         pb: '25px',
    //       }}
    //     >
    //       <BidHeader header={selectedProposal} />
    //       <BidDescription details={bidding} />
    //       <ProposalMapLocation proposal={selectedProposal} />
    //       <Divider sx={{ pt: '10px', pb: '10px' }} />
    //       <ProposalStats proposal={selectedProposal} />
    //       <Divider sx={{ pb: '10px' }} />
    //       <ProposalMedia
    //         media={selectedProposal?.propertyData?.propertyImages}
    //         mediaType={'images'}
    //       />
    //       <Divider sx={{ pt: '20px' }} />
    //       <ProposalMedia
    //         media={selectedProposal?.propertyData?.propertyVideos}
    //         mediaType={'videos'}
    //       />
    //     </Grid>
    //     <Grid item xs={12} md={3} sx={{ py: '70px', px: '25px' }}>
    //       <RightSection
    //         rightSection={bidding}
    //         report={''}
    //         apply={''}
    //         save={''}
    //       />
    //     </Grid>
    //   </Grid>
    // </Box>
  );
};

export default Page;
