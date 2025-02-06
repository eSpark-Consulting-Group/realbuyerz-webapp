'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = ({ data }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(180deg, rgba(0, 15, 34, 1.00) 0%, rgba(14, 30, 46, 0.97) 60.69004535675049%, rgba(0, 21, 44, 1.00) 100%)',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1300px',
          display: 'flex',
          flexWrap: 'wrap',
          py: { xs: 2.5, sm: 4.5, md: 6.5 },
          px: 2,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: { sm: `calc(100% - 430px)`, md: `calc(100% - 510px)` },
            '@media(min-width: 600px) and (max-width: 767px)': {
              maxWidth: `calc(100%)`,
            },
          }}
        >
          <Box sx={{ pr: '10.4%' }}>
            <Link href={data?.link}>
              <Image src={data?.logo} alt={'Logo'} width={155} height={37} />
            </Link>
            <Typography
              sx={{
                pt: '10px',
                pb: '20px',
                fontSize: { xs: '11px', sm: '13px', md: '16px' },
                lineHeight: '22px',
                fontWeight: 400,
                color: '#FFFFFF',
              }}
            >
              {data?.introText?.paragraph1}
            </Typography>
            <Typography
              sx={{
                pb: '20px',
                fontSize: { xs: '11px', sm: '13px', md: '16px' },
                fontWeight: 400,
                color: '#FFFFFF',
              }}
            >
              {data?.introText?.paragraph2}
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <LocationOnIcon
                style={{
                  marginRight: '5px',
                }}
                sx={{ color: '#fb631c' }}
              />
              <Typography
                sx={{
                  pb: '13px',
                  fontSize: { xs: '11px', sm: '13px', md: '16px' },
                  fontWeight: 400,
                  color: '#FFFFFF',
                }}
              >
                {data?.address?.line1}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <PhoneIcon
                style={{
                  marginRight: '5px',
                }}
                sx={{ color: '#fb631c' }}
              />
              <Link href={`tel:${data?.phone}`}>
                {' '}
                <Typography
                  sx={{
                    fontSize: { xs: '11px', sm: '13px', md: '16px' },
                    fontWeight: 400,
                    color: '#FFFFFF',
                  }}
                >
                  {data?.phone}
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            p: 1,
            width: '100%',
            maxWidth: { xs: '50%', sm: 'calc(180px)', md: `calc(230px)` },
            '@media(min-width: 425px) and (max-width: 767px)': {
              maxWidth: `calc(180px)`,
            },
          }}
        >
          <Box>
            <Typography
              variant="h6"
              color={'primary'}
              sx={{
                fontSize: { xs: '15px', md: '18px', lg: '20px' },
                mb: 1.5,
              }}
            >
              {data?.usefulLink}
            </Typography>
            {data?.usefulLinks?.map((link, index) => (
              <Link href={link?.link} key={index}>
                <Typography
                  key={index}
                  sx={{
                    pb: '13px',
                    pt: '4px',
                    fontSize: { xs: '10px', sm: '12px', md: '14px' },
                    fontWeight: 400,
                  }}
                >
                  {link?.title}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            p: 1,
            width: '100%',
            maxWidth: { xs: '50%', sm: `calc(250px)`, md: `calc(280px)` },
            '@media(min-width: 425px) and (max-width: 767px)': {
              maxWidth: `calc(213px)`,
            },
          }}
        >
          <Box>
            <Box>
              <Box>
                <Typography
                  variant="h6"
                  color={'primary'}
                  sx={{
                    mb: 1.5,
                    fontSize: { xs: '15px', md: '18px', lg: '20px' },
                  }}
                >
                  {data?.downloadApp}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '10px', sm: '12px', md: '14px' },
                    lineHeight: '16.94px',
                    fontWeight: 400,
                    mt: '3px',
                    color: '#FFFFFF',
                  }}
                >
                  {data?.appDownload?.description}
                </Typography>
              </Box>
              <Box spacing={2} sx={{ pb: '10px' }}>
                {data?.appDownload?.options?.map((option, index) => (
                  <Grid key={index} item xs={6}>
                    <Box sx={{ pt: '20px' }}>
                      <Link href={option?.link}>
                        <Box
                          component={'img'}
                          src={option?.logo}
                          alt={option?.title}
                          sx={{
                            width: { xs: '110px', sm: '130px', md: '145px' },
                            height: 'auto',
                          }}
                          style={{
                            marginRight: '5px',
                          }}
                        />
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Box>
              <Box sx={{ display: 'flex', gap: '8px', px: '5px', pt: '5px' }}>
                {data?.socialMediaIcons?.map((socialIcon, index) => (
                  <Link key={index} href={socialIcon?.link}>
                    <Box
                      component={'img'}
                      key={index}
                      src={socialIcon?.logo}
                      alt={socialIcon?.title}
                      sx={{ width: { xs: '20px', sm: '24px' } }}
                    />
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
