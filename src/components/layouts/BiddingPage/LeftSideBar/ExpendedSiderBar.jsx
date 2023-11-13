import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/system';
import { Grid, Tooltip, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import ExpendedLiveBiddingList from './ExpendedLiveBiddingList';

const ExpendedSiderBar = ({ menuItem, isCollapsed, isExpended }) => {
  return (
    <Box
      sx={{
        width: isCollapsed,
        height: '100%',
        borderRight: '2px solid #E4E4E4',
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 5 }}
        sx={{
          backgroundColor: '#fff',
          width: '100vw',
          height: '100%',
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            padding: '15px',
            borderRadius: 15,
            height: '100%',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Tooltip describeChild title="Hide Panel">
              <Box
                sx={{
                  position: 'absolute',
                  right: -30,
                  width: '36px',
                  height: '35px',
                  backgroundColor: '#FFF',
                  borderRight: '2px solid #E4E4E4',
                  borderRadius: '100%',
                }}
              >
                <ArrowBackIosNewIcon
                  onClick={isExpended}
                  fontSize="small"
                  sx={{ cursor: 'pointer', mt: 1, ml: 1, color: '#000' }}
                />
              </Box>
            </Tooltip>
          </Box>
          <Box
            sx={{
              width: '92%',
              maxWidth: '265px',
              backgroundColor: '#FF631C33',
              borderRadius: '15px',
              display: 'flex',
              padding: '10px',
              alignItems: 'center',
            }}
          >
            <Image
              src={'/images/Live-bidding-icons/liveBidding.svg'}
              width={30}
              height={30}
              alt="icon"
            />
            <Typography
              sx={{
                color: '#FB631C',
                fontSize: '16px',
                fontWeight: '500',
                px: '19px',
              }}
            >
              Live Bidding
            </Typography>
          </Box>
          <ExpendedLiveBiddingList list={menuItem} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default ExpendedSiderBar;
