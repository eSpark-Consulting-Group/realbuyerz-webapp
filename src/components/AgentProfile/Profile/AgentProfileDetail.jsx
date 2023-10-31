import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

// import { locationIcon, rentIcon, salesIcon } from '@/app/constents/AgentProfile';

const AgentProfileDetail = ({ data }) => {
  return (
    <Grid item xs={4} sx={{ display: 'flex', width: 'auto' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '50px',
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', color: '#1176AD', mt: 2 }}
        >
          {data.contactInfo.agentName}
        </Typography>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Image
            src="./images/agent-profile-icons/location.svg"
            width={15}
            height={15}
            alt="amenities"
          />
          <Typography
            variant="body1"
            sx={{ color: '#777777', fontWeight: 'medium', marginTop: 1, mx: 1 }}
          >
            Karachi, Pakistan
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Image
            src="./images/agent-profile-icons/home.svg"
            width={15}
            height={15}
            alt="amenities"
          />
          <Typography
            variant="body1"
            sx={{ color: '#777777', fontWeight: 'medium', marginTop: 1, mx: 1 }}
          >
            {data.propertyDetails.propertiesForSale.count} For Sale
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Image
            src="./images/agent-profile-icons/keys.svg"
            width={15}
            height={15}
            alt="amenities"
          />
          <Typography
            variant="body1"
            sx={{ color: '#777777', fontWeight: 'medium', marginTop: 1, mx: 1 }}
          >
            {data.propertyDetails.propertiesForRent.count} For Rent
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default AgentProfileDetail;
