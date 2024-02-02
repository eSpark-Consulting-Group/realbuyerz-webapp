'use client';
import React, { useState } from 'react';
import { Box, Collapse, Grid, Typography } from '@mui/material';
import Image from 'next/image';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from '@/src/components/HomePage/slider.module.css';
import Heading from './Heading';
import { FEATURED_HEADINGS } from '@/app/constants/Home';

const FeaturedProperties = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // const [saved, setSaved] = useState(true);
  // const handleToggleSave = () => {
  //   setSaved((prevSaved) => !prevSaved);
  // };
  return (
    <Box
      sx={{
        mt: '40px',
        pt: '5px',
        textAlign: 'center',
        backgroundImage: `url('/images/bgs/featured-properties-background.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Heading
        heading={FEATURED_HEADINGS.featureProperty}
        paragraph={FEATURED_HEADINGS.latestProject}
      />
      <Box className="full-container-width mx-auto">
        <Grid container sx={{ display: 'flex', pt: '69px', pb: '68px' }}>
          {data?.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              key={index}
              sx={{
                my: '30px',
                mt: {
                  lg: index % 2 === 0 ? '40px' : '0',
                  sm: '10px',
                  md: '10px',
                },
                mb: {
                  lg: index % 2 !== 0 ? '40px' : '0',
                  sm: '10px',
                  md: '10px',
                },
              }}
            >
              <Box
                sx={{
                  borderRadius: '5px',
                  border: '1px solid #cbcbcb',
                  height: '430px',
                  mx: '30px',
                  backgroundImage: `url('${item.bgImage}')`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Box
                  sx={{
                    display: 'flex',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      width: '80%',
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: '20%',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        width: 70,
                        height: 18,
                        top: '10px',
                        left: { xs: '0px', md: '13px' },
                        position: 'relative',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        backgroundImage: `url('/images/amenities/location.svg')`,
                      }}
                    >
                      <Typography
                        sx={{
                          left: 12,
                          backgroundSize: 'contain',
                          top: 3,
                          position: 'absolute',
                          textAlign: 'center',
                          color: 'white',
                          fontSize: 10,
                        }}
                      >
                        {item.location}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Collapse in={hoveredIndex === index}>
                  <Box p={2} className={styles.slideInBox}>
                    <Box
                      sx={{
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        px: '5%',
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#fb631c',
                          textAlign: 'left',
                          fontWeight: '600',
                          fontSize: ' 18px',
                          pb: '15px',
                        }}
                      >
                        {item.propertyName}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#1176ad',
                          textAlign: 'left',
                          fontWeight: '700',
                          fontSize: ' 15px',
                          pb: '15px',
                        }}
                      >
                        <LocationOnIcon color="#1176ad" fontSize="12px" />{' '}
                        {item.location}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: '5px' }}>
                        <Typography
                          variant="body1"
                          sx={{
                            textAlign: 'left',
                            color: '#1176AD',
                            fontSize: '1rem',
                            fontWeight: '600',
                          }}
                        >
                          {'Starting from: '}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            textAlign: 'left',
                            color: '#fb631c',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                          }}
                        >
                          {item.currency}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            textAlign: 'left',
                            color: '#fb631c',
                            fontSize: '1rem',
                            fontWeight: '600',
                          }}
                        >
                          {item.price}
                        </Typography>
                      </Box>
                    </Box>
                    <Grid container>
                      {item?.amenities?.map((amenity, index) => (
                        <Grid
                          key={index}
                          item
                          xs={4}
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Image
                            width={20}
                            height={20}
                            src={amenity}
                            alt={`Amenity ${index}`}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Collapse>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FeaturedProperties;
