import React from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/system';
import Link from 'next/link';

import {
  ALT,
  PROPERTIES_FOR_SALE,
  VIEW_BUTTON,
} from '@/src/constants/AgentProfile';

const PropertyForSale = ({ link, data }) => {
  return (
    <>
      <Grid
        container
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        pb={{ xs: 1.5, sm: 0 }}
      >
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              pb: 2,
            }}
          >
            <Image
              src="/images/agent-profile-icons/home.png"
              width={19}
              height={17}
              alt={ALT}
            />
            <Typography
              variant="body2"
              sx={{
                color: '#333',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                display: 'flex',
                alignItems: 'center',
                ml: 1,
              }}
            >
              {`${data} ${PROPERTIES_FOR_SALE}`}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              verticalAlign: 'baseline',
            }}
          >
            <Link href={link}>
              <Typography
                variant="body2"
                sx={{
                  color: '#FB631C',
                  fontSize: 15,
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                {VIEW_BUTTON} &nbsp;
                <Image
                  src="/images/agent-profile-icons/arrow.svg"
                  width={8}
                  height={8}
                  alt={ALT}
                />
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PropertyForSale;
