import React from 'react';
import { Grid, Typography, SvgIcon } from '@mui/material';

const PropertyHeader = ({ title, view }) => {
  return (
    <div>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 'normal',
              display: 'flex',
              alignItems: 'center',
              color: '#777777',
              paddingBottom: 1,
            }}
          >
            <SvgIcon
              sx={{ fontSize: 19, mr: 1, mb: 1 }}
              viewBox="0 0 19 17"
              color="primary"
            >
              <path
                d="M19 10.2379L9.5 2.96528L0 10.2379V7.27266L9.5 0L19 7.27266V10.2379ZM16.625 9.97327V17H11.875V12.3155H7.125V17H2.375V9.97327L9.5 4.70322L16.625 9.97327Z"
                fill="#FB631C"
              />
            </SvgIcon>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 'normal',
              display: 'flex',
              alignItems: 'center',
              color: 'orange',
            }}
          >
            {view}
            <SvgIcon
              sx={{ fontSize: 10, ml: 0.5 }}
              viewBox="0 0 7 7"
              color="primary"
            >
              <path
                d="M1 6L6 1M6 1V5.8M6 1H1.2"
                stroke="#FB631C"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </SvgIcon>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default PropertyHeader;
