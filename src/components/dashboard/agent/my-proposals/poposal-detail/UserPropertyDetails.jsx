import { Box, Grid, Typography } from '@mui/material';

import LiveBiddingPropertiesList from '@/src/components/dashboard/LiveBiddingPropertiesList';

import {
  ESTIMATE_RANGE,
  POST_LISTINGAD_CARD,
} from '@/src/constants/user/Dashboard';

const UserPropertyDetails = ({ userPropertyDetail }) => {
  return (
    <Grid container>
      <Grid container spacing={2}>
        <Box
          sx={{
            color: '#333',
            px: { xs: '20px', md: '20px' },
            paddingTop: '40px',
            paddingBottom: '20px',
            '@media(min-width: 280px) and (max-width: 445px)': {
              pr: '10px',
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: '500',
              fontSize: '13.8px',
              lineHeight: '20.52px',
              mb: 1,
            }}
          >
            {userPropertyDetail?.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            '@media (min-width: 280px) and (max-width: 500px)': {
              flexDirection: 'column',
            },
          }}
        >
          <LiveBiddingPropertiesList
            city={userPropertyDetail?.city}
            status={userPropertyDetail?.purpose}
            location={userPropertyDetail?.location}
            noConnects={false}
            cardKeys={POST_LISTINGAD_CARD}
            justifyContent={'flex-start'}
          />

          <Box
            sx={{
              display: 'flex',
              width: '20%',
              '@media (min-width: 280px) and (max-width: 760px)': {
                width: '80%',
              },
              '@media (min-width: 280px) and (max-width: 500px)': {
                pl: '20px',
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                mt: '3px',
              }}
            >
              {ESTIMATE_RANGE}
            </Typography>

            <Typography
              sx={{
                ml: 1,
                fontWeight: 700,
                color: '#333333',
                fontSize: '20px',
              }}
              component={'span'}
            >
              {`${userPropertyDetail?.amount}`}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserPropertyDetails;
