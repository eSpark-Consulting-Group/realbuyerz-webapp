import React from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import Image from 'next/image';
import { PropertyInformation } from './postlistingConstants';
import PostTitle from './PostTitle';
const PropertyGallery = () => {
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
            width: '90%',
            height: { xs: '900px', md: '681px' },
            justifyContent: 'flex-start',
          }}
        >
          <PostTitle text={PropertyInformation.postTitles.imagesvidoes} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: { xs: '80%', md: '800px' },
              padding: { xs: '20px', md: '50px' },
              backgroundImage: 'url("/assets/images/realbuyer.svg")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              mx: 'auto',
              marginTop: { xs: '10px', md: '0' },
              '@media (max-width: 600px)': {
                backgroundImage: 'none',
              },
            }}
          >
            <Box
              sx={{
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
                  alignItems: 'center',
                  fontSize: { xs: '20px', md: '25px' },
                  fontWeight: 400,
                  gap: '10px',
                }}
              >
                <Image
                  src={PropertyInformation.upload.images}
                  width={47}
                  height={45}
                />
                <Typography>{PropertyInformation.upload.text}</Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: '100%', md: '743px' }, // Set width to 100% on small screens and 743px on medium screens
                  height: { xs: 'auto', md: '350px' }, //
                  border: '1px #FB631C dotted',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    width: { xs: '100%', md: '800px' }, // Set width to 100% on small screens and 800px on medium screens
                    alignItems: 'center',
                    gap: '20px',
                  }}
                >
                  <Button
                    style={{
                      width: '200px',
                      color: 'white',
                      fontSize: '20px',
                      padding: '8px',
                      backgroundColor: ' #FB631C',
                      textTransform: 'capitalize',
                      borderRadius: '10px',
                      border: '1px #FB631C solid',
                    }}
                  >
                    {PropertyInformation.uploadButton.uploadimages}
                  </Button>
                  <Button
                    sx={{
                      width: '200px',
                      color: '#FB631C',
                      fontSize: '20px',
                      backgroundColor: 'white',
                      borderRadius: '10px',
                      border: '1px #FB631C solid',
                      textTransform: 'capitalize',
                    }}
                  >
                    {PropertyInformation.uploadButton.uploadvideo}
                  </Button>
                </Box>
                <Box>
                  {' '}
                  {PropertyInformation.uploadInstruction.map((item, index) => (
                    <Box sx={{ padding: '11px' }}>
                      <ul key={index}>
                        <li>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: { xs: 'row', md: 'row' },
                              alignItems: 'center',
                              fontSize: '20px',
                              fontFamily: 'Inter',
                              fontWeight: 400,
                              gap: '8px',
                              listStyle: 'none',
                            }}
                          >
                            <Image src={item.image} width={17} height={13} />
                            <Typography
                              sx={{
                                color: '#333333',
                              }}
                            >
                              {item.text}{' '}
                            </Typography>
                          </Box>
                        </li>
                      </ul>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
          {/* <Box sx={{
                    display: "flex",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    fontSize: "20px",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    gap: "10px",
                  


                }}>
                    <Image
                        src={PropertyInformation.upload.images}
                        width={47}
                        height={45} />
                    <Typography>{PropertyInformation.upload.text}</Typography>
                </Box>
                <Box sx={{ width: "743px", height: "350px", border: "1px #FB631C dotted", display: "flex",flexDirection: "row" }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent:"center",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        width: "800px",
                        alignItems: "center",
                        gap: "20px",

                    }} >
                        <Button style={{
                            width:"200px",
                            color: "white",
                            fontSize: "20px",
                            backgroundColor: " #FB631C",
                            textTransform: "capitalize"

                        }}>{PropertyInformation.uploadButton.textone}</Button>
                        <Button style={{
                              width:"200px",
                            color: "#FB631C",
                            fontSize: "20px",
                            backgroundColor: "white",
                            borderRadius: "10px",
                            border: "1px #FB631C solid",
                            textTransform: "capitalize"

                        }}>{PropertyInformation.uploadButton.texttwo}</Button></Box>
                    <Box> {PropertyInformation.uploadInstruction.map((item, index) => (
<Box sx={{ padding:"11px"}}>
                        <ul key={index}>
                            <li >
                                <Box sx={{ display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                fontSize: '20px',
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                gap: '8px',
                                listStyle: 'none',}}>
                                <Image src={item.image}
                                    width={17}
                                    height={13}
                                />
                                <Typography sx={{
                                    color: "#333333",
                                }}>{item.text} </Typography>
                                </Box>
                            </li>
                        </ul>
                        </Box>
                    ))}</Box>
                </Box> */}
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertyGallery;
