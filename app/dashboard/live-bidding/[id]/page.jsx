'use client'
import React from 'react';
import { Box } from '@mui/system';
import { Divider, Grid } from '@mui/material';
import { usePathname } from 'next/navigation';

import BidMedia from '@/src/components/Biddings/BidMedia';
import BidMapLocation from '@/src/components/Biddings/BidMapLocation';
import BidDescription from '@/src/components/Biddings/BidDescription';
import BidHeader from '@/src/components/Biddings/BidHeader';
import { BIDDINGS, BIDDING_LIST } from '@/app/constants/Biddings';
import RightSection from '@/src/components/Biddings/RightSection';
import BidData from '@/src/components/Biddings/BidData';

const Page = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const bidding = BIDDING_LIST[id - 1];

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
          <BidHeader header={bidding} />
          <BidDescription details={bidding} />
          <Divider sx={{ pt: '10px', pb: '10px' }} />
          <BidMapLocation location={bidding?.location} />
          <Divider sx={{ pt: '10px', pb: '10px' }} />
          <BidData title={BIDDINGS?.amount?.title} data={bidding?.amount} />
          <Divider sx={{ pt: '10px', pb: '10px' }} />
          <BidData
            title={BIDDINGS?.amenities?.title}
            data={bidding?.amenities}
          />
          <Divider sx={{ pb: '10px' }} />
          <BidMedia
            title={'Property images'}
            media={bidding?.images}
            mediaType={'images'}
          />
          <Divider sx={{ pt: '20px' }} />
          <BidMedia
            title={'Property videos'}
            media={bidding?.videos}
            mediaType={'videos'}
          />
        </Grid>
        <Grid item xs={12} md={3} sx={{ py: '70px', px: '25px' }}>
          <RightSection rightSection={bidding} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
