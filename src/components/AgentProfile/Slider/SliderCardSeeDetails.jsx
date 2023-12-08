import React from 'react';
import Link from 'next/link';
import { Grid, Typography } from '@mui/material';
import { SEE_DETAILS } from '@/app/constants/AgentProfile';

const SliderCardSeeDetails = ({ link }) => {
  return (
    <>
      <Grid
        item
        bgcolor="#FAFAFA"
        xs={12}
        sx={{
          color: '#909394',
          fontSize: '14px',
          fontWeight: '300',
          fontFamily: 'Inter',
          padding: 1.8,
        }}
      >
        <Link
          href={`/properties/${link.id}`}
          sx={{
            align: 'center',
            fontSize: '0.875rem',
            fontWeight: '500',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            color: '#000000',
          }}
        >
          <Typography
            variant="body1"
            color="#000000"
            sx={{ textAlign: 'center' }}
          >
            {SEE_DETAILS}
          </Typography>
        </Link>
      </Grid>
    </>
  );
};

export default SliderCardSeeDetails;
