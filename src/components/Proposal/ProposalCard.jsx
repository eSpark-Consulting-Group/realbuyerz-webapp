import { handleSubmitTrash } from '@/src/redux/slices/userAds/userAdsSlice';
import { handlePropertiesSubmitTrash } from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';

const ProposalCard = ({ key, data, currentTab }) => {
  const dispatch = useDispatch();
  const pathName = usePathname();
  const properties = 'my-properties';
  const proposals = 'my-proposals';
  const user = 'user';

  const handleTrash = (adId) => {
    if (pathName?.includes(user)) {
      dispatch(handleSubmitTrash({ adId: adId, currentTab: currentTab }));
    } else if (pathName?.includes(properties)) {
      dispatch(
        handlePropertiesSubmitTrash({ adId: adId, currentTab: currentTab })
      );
    } else if (pathName?.includes(proposals)) {
      // dispatch(handleAgentSubmitTrash({ adId: adId, currentTab: currentTab }));
    }
  };

  return (
    <Grid
      container
      sx={{
        background: '#F5F6FA',
        border: 'solid 1px #E4E4E4',
        borderRadius: '20px',
        padding: { xs: '10px', md: '25px 30px' },
        marginBottom: '30px',
        marginTop: key === 0 && '30px',
        cursor: 'pointer',
      }}
    >
      <Grid item xs={0} sm={4} md={3.65}>
        <Box
          component={'img'}
          src={`${data?.images || ''}`}
          sx={{
            width: '100%',
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={8.35}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0 20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: { xss: 'flex-start', md: 'center' },
            position: 'relative',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 700,
              lineHheight: '24px',
              letterSpacing: '0em',
              textAlign: 'left',
            }}
          >
            {data?.title || ''}
          </Typography>
          {currentTab !== 'Trash' && (
            <Button
              variant="contained"
              sx={{
                position: { xs: 'relative', md: 'absolute' },
                right: 0,
              }}
              onClick={() => handleTrash(data?.adId)}
            >
              Trash
            </Button>
          )}
        </Box>
        <Divider
          sx={{
            marginY: '20px',
          }}
        />
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                marginBottom: '10px',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 700,
                  lineHeight: '17px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  color: '#126FAA',
                }}
              >
                Purpose:
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '17px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  color: '#333333',
                  marginLeft: '5px',
                }}
              >
                {data?.purpose || ''}
              </Typography>
            </Box>
            <Box
              sx={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 700,
                  lineHeight: '17px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  color: '#126FAA',
                }}
              >
                Proporty Type:
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '17px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  color: '#333333',
                  marginLeft: '5px',
                }}
              >
                {data?.properType || ''}
              </Typography>
            </Box>
            <Box
              sx={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 700,
                  lineHeight: '17px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  color: '#126FAA',
                }}
              >
                City:
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '17px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  color: '#333333',
                  marginLeft: '5px',
                }}
              >
                {data?.city || ''}
              </Typography>
            </Box>
            <Box
              sx={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 700,
                  lineHeight: '17px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  color: '#126FAA',
                }}
              >
                Location:
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '17px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  color: '#333333',
                  marginLeft: '5px',
                }}
              >
                {data?.location || ''}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '15px',
                letterSpacing: '0em',
                textAlign: 'left',
                flex: 1,
              }}
            >
              {data?.description || ''}
            </Typography>
          </Box>
          <Typography
            sx={{
              position: { xs: 'relative', md: 'absolute' },
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '17px',
              letterSpacing: '0em',
              textAlign: 'left',
              right: '20px',
              padding: { xs: '10px', md: '25px 30px' },
            }}
          >
            {`Amount: ${data?.amount || ''}${data?.amountCurrency || ''}`}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProposalCard;
