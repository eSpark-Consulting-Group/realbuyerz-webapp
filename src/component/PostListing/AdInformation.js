import React from 'react';
import { Typography, Box, TextField, Grid } from '@mui/material';
import Image from 'next/image';
import { PropertyInformation } from './postlistingConstants';
import PostTitle from './PostTitle';
import ImageTitle from './imagewithtitle';
import RBTextField from './TextField';
import BackgroundImageBox from './RealBuyerBackgroundImage';
const AdInformation = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            border: '1px #E4E4E4 solid',
            borderRadius: '10px',
            height: '681px',
            width: '90%',
            justifyContent: 'flex-start',
          }}
        >
          <PostTitle text={PropertyInformation.postTitles.adInfo} />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              width: { xs: '80%', md: '600px' }, // Set width to 100% on xs screens and 700px on md screens
              padding: { xs: '20px', md: '50px' },
              backgroundImage: 'url("/assets/images/realbuyer.svg")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              mx: 'auto',
              '@media (max-width: 600px)': {
                backgroundImage: 'none',
              },
              marginTop: { xs: '10px', md: '0' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {PropertyInformation.addInfo.map((item, index) => (
                <Box
                  sx={{
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '15px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignSelf: 'flex-start',
                      justifyContent: 'center',
                      fontSize: '20px',
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      gap: '8px',
                    }}
                    key={index}
                  >
                    <Image src={item.image} width={45} height={45} />
                    <Typography
                      sx={{
                        color: '#333333',
                      }}
                    >
                      {item.text}
                    </Typography>
                    <span style={{ color: '#FF0000' }}>*</span>
                  </Box>
                  {/* <RBTextField placeholder={item.placeholder}
                        /> */}

                  <TextField
                    placeholder={item.placeholder}
                    sx={{
                      marginLeft: { xs: '0px', md: '50px' },
                      width: { xs: '100%', md: '600px' },
                      '& placholder': {
                        textOverflow: 'ellipsis',
                        whiteSpace: { xs: 'nowrap', md: 'normal' }, // Set to nowrap on xs screen to enable ellipsis
                        overflow: 'hidden',
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default AdInformation;
