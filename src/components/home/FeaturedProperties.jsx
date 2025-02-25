'use client';
import { Box, Collapse, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

import styles from '@/src/components/home/slider.module.css';
import { FEATURED_HEADINGS, FEATURED_PROPERTIES } from '@/src/constants/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from './Heading';

const FeaturedProperties = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'md')
  );
  const FeatureProjects = useSelector(
    (state) => state.postListingAds.featuredPostings
  );
  const router = useRouter();

  const sliderSettings = {
    slidesPerView: 'auto',
    spaceBetween: 15,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: false,
    modules: [Pagination, Navigation],
  };
  return (
    <Box
      sx={{
        mt: '50px',
        pt: '5px',
        textAlign: 'center',
        backgroundImage: `url('/images/bgs/featured-properties-background.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Box sx={{ px: 1.5 }}>
        <Heading
          heading={FEATURED_HEADINGS.featureProperty}
          paragraph={FEATURED_HEADINGS.latestProject}
        />
      </Box>
      {isSmallScreen ? (
        <Swiper {...sliderSettings} style={{ padding: '22px' }}>
          {FeatureProjects.map((item, index) => (
            <SwiperSlide key={index} style={{ width: '260px' }}>
              <Box
                className={styles.box}
                onClick={() => router.push(`/projects/${item?.property_id}`)}
                onMouseOver={() => setHoveredIndex(index)}
                onMouseOut={() => setHoveredIndex(null)}
                sx={{
                  width: '260px',
                  height: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={item?.images[0]}
                  alt={'background'}
                  style={{
                    width: '260px',
                    height: 'auto',
                    zIndex: -1,
                    objectFit: 'contain',
                  }}
                />
                <Box
                  sx={{
                    width: 70,
                    height: 18,
                    top: '10px',
                    right: '0px',
                    position: 'absolute',
                    backgroundImage: `url('/images/amenities/location.svg')`,
                    backgroundSize: 'contain',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 10,
                  }}
                >
                  {item?.city || 'city'}
                </Box>
                <Collapse
                  in={hoveredIndex === index}
                  sx={{
                    zIndex: 1,
                    position: 'absolute',
                    bottom: '60px',
                    width: '220px',
                    left: 0,
                  }}
                >
                  <Link href={`/projects/${item?.property_id}`}>
                    <Box p={2} className={styles.slideInBox}>
                      <Box
                        sx={{
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          textAlign: 'left',
                          px: '2%',
                          zIndex: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            color: '#fb631c',
                            textAlign: 'left',
                            fontWeight: 600,
                            lineHeight: '21.78px',
                            fontSize: {
                              xs: '12px',
                              md: '14px',
                              lg: '18px',
                            },
                            pb: '15px',
                          }}
                        >
                          {item?.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: '#1176ad',
                            textAlign: 'left',
                            fontWeight: '700',
                            fontSize: {
                              xs: '12px',
                              md: '14px',
                              lg: '15px',
                            },
                            pb: '15px',
                          }}
                        >
                          <LocationOnIcon color="#1176ad" fontSize="12px" />
                          {item?.city}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '4px',
                            alignItems: 'center',
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              color: '#1176AD',
                              lineHeight: '21.78px',
                              fontSize: {
                                xs: '12px',
                                md: '14px',
                                lg: '16px',
                              },
                              fontWeight: 600,
                            }}
                          >
                            {'Starting from:'}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#fb631c',
                              fontSize: { xs: '10px', md: '14px' },
                              fontWeight: 500,
                            }}
                          >
                            {item?.amountCurrency}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              textAlign: 'left',
                              color: '#fb631c',
                              fontSize: {
                                xs: '10px',
                                md: '14px',
                                lg: '16px',
                              },
                              fontWeight: 600,
                            }}
                          >
                            {item?.amount}
                          </Typography>
                        </Box>
                      </Box>
                      <Grid container>
                        {FEATURED_PROPERTIES?.map((amenity, index) => (
                          <Grid
                            key={index}
                            item
                            xs={4}
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              paddingTop: '10px',
                            }}
                          >
                            <Image
                              width={20}
                              height={14.2}
                              src={amenity}
                              alt={`Amenity ${index}`}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Link>
                </Collapse>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Box className="full-container-width mx-auto" sx={{ mx: 'auto' }}>
          <Grid
            container
            sx={{
              display: 'flex',
              pt: { xs: '19px', sm: '30px', md: '55px' },
              pb: { xs: '50px', sm: '60px', lg: '68px' },
              justifyContent: 'center',
            }}
            spacing={2}
          >
            {FeatureProjects?.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={3}
                md={4.2}
                lg={3}
                key={index}
                sx={{
                  my: '30px',
                  mt: {
                    lg: index % 2 === 1 ? '40px' : '0',
                    sm: '10px',
                    md: '10px',
                  },
                  mb: {
                    lg: index % 2 === 1 ? '40px' : '0',
                    sm: '10px',
                    md: '10px',
                  },
                }}
              >
                <Box
                  onClick={() => router?.push(`/projects/${item?.property_id}`)}
                  className={styles.box}
                  sx={{
                    position: 'relative',
                    mx: { xs: '5%', lg: 'auto' },
                    width: {
                      lg: '390px',
                      '@media (min-width: 1440px) and (max-width: 1568px)': {
                        width: '340px',
                      },
                      '@media (min-width: 1569px) and (max-width: 1800px)': {
                        width: '360px',
                      },
                    },
                    overflow: 'hidden',
                    zIndex: 1,
                  }}
                  onMouseOver={() => setHoveredIndex(index)}
                  onMouseOut={() => setHoveredIndex(null)}
                >
                  <img
                    src={item?.images[0]}
                    alt={'background'}
                    style={{
                      width: '100%',
                      height: 'auto',
                      zIndex: -1,
                      objectFit: 'contain',
                    }}
                  />
                  <Box
                    sx={{
                      width: 70,
                      height: 18,
                      top: '10px',
                      right: '0px',
                      position: 'absolute',
                      backgroundImage: `url('/images/amenities/location.svg')`,
                      backgroundSize: 'contain',
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 10,
                    }}
                  >
                    {item?.city}
                  </Box>
                  <Collapse
                    in={hoveredIndex === index}
                    sx={{
                      zIndex: 1,
                      position: 'absolute',
                      bottom: '60px',
                      width: '289px',
                      transform:
                        hoveredIndex === index
                          ? 'translateX(0)'
                          : 'translateX(-100%)',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  >
                    <Link href={`/projects/${item?.property_id}`}>
                      <Box p={2} className={styles.slideInBox}>
                        <Box
                          sx={{
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            textAlign: 'left',
                            px: '2%',
                            zIndex: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              color: '#fb631c',
                              textAlign: 'left',
                              fontWeight: 600,
                              lineHeight: '21.78px',
                              fontSize: {
                                xs: '12px',
                                md: '14px',
                                lg: '18px',
                              },
                              pb: '15px',
                            }}
                          >
                            {item?.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: '#1176ad',
                              textAlign: 'left',
                              fontWeight: '700',
                              fontSize: { xs: '12px', md: '14px', lg: '15px' },
                              pb: '15px',
                            }}
                          >
                            <LocationOnIcon color="#1176ad" fontSize="12px" />{' '}
                            {item?.city}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              gap: '4px',
                              alignItems: 'center',
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                color: '#1176AD',
                                lineHeight: '21.78px',
                                fontSize: {
                                  xs: '12px',
                                  md: '14px',
                                  lg: '16px',
                                },
                                fontWeight: 600,
                              }}
                            >
                              {'Starting from:'}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#fb631c',
                                fontSize: { xs: '10px', md: '14px' },
                                fontWeight: 500,
                              }}
                            >
                              {item?.amountCurrency}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                textAlign: 'left',
                                color: '#fb631c',
                                fontSize: {
                                  xs: '10px',
                                  md: '14px',
                                  lg: '16px',
                                },
                                fontWeight: 600,
                              }}
                            >
                              {item?.amount}
                            </Typography>
                          </Box>
                        </Box>
                        <Grid container>
                          {FEATURED_PROPERTIES.map((amenity, index) => (
                            <Grid
                              key={index}
                              item
                              xs={4}
                              style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: '10px',
                              }}
                            >
                              <Image
                                width={20}
                                height={14.2}
                                src={amenity}
                                alt={`Amenity ${index}`}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Link>
                  </Collapse>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default FeaturedProperties;
