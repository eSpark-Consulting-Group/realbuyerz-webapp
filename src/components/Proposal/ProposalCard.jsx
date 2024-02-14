import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

const ProposalCard = ({ index }) => {
  return (
    <Grid
      container
      sx={{
        background: '#F5F6FA',
        border: 'solid 1px #E4E4E4',
        borderRadius: '20px',
        padding: { xs: '10px', md: '25px 30px' },
        marginBottom: '30px',
        marginTop: index === 0 && '30px',
        cursor: 'pointer',
      }}
    >
      <Grid item xs={0} sm={4} md={3.65}>
        <Box
          component={'img'}
          src={'/images/PropertyImg.png'}
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
            NEED 4 BEDROOM APARTMENT
          </Typography>
          <Button
            variant="contained"
            sx={{
              position: { xs: 'relative', md: 'absolute' },
              right: 0,
            }}
          >
            {' '}
            Trash
          </Button>
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
                Purpose:{' '}
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
                Selling
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
                Proporty Type:{' '}
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
                House
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
                City:{' '}
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
                Karachi
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
                Location:{' '}
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
                Gulshan-e-Iqbal
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum. dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat
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
            Amount: 10M
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProposalCard;
