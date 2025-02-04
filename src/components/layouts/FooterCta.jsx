'use client';
import React from 'react';
import { Bounce } from 'react-awesome-reveal';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { keyframes } from '@mui/system';

const wobble = keyframes`
  0% {
    transform: translateX(0%);
  }
  15% {
    transform: translateX(-25%) rotate(-5deg);
  }
  30% {
    transform: translateX(20%) rotate(3deg);
  }
  45% {
    transform: translateX(-15%) rotate(-3deg);
  }
  60% {
    transform: translateX(10%) rotate(2deg);
  }
  75% {
    transform: translateX(-5%) rotate(-1deg);
  }
  100% {
    transform: translateX(0%);
  }
`;

const FooterCta = ({ data }) => {
  return (
    <Box
      sx={{
        width: '100%',
        background: '#F5F6FB',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          maxWidth: '1200px',
          flexDirection: { xs: 'column', sm: 'row' },
          px: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            p: 2,
            maxWidth: {
              xs: '100%',
              sm: `calc(100% - 253px)`,
              md: `calc(100% - 353px)`,
            },
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Box>
              <Typography
                sx={{
                  color: '#666',
                  fontSize: { xs: '11px', sm: '14px', md: '16px' },
                  fontWeight: 400,
                  lineHeight: { xs: '20px', sm: '23px', md: '28px' },
                }}
              >
                {data?.description}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, py: 2, flexWrap: 'wrap' }}>
                {data?.features?.map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: '100%',
                      maxWidth: '180px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <Box
                      component={'img'}
                      src={feature?.icon}
                      alt={'Images'}
                      sx={{
                        width: { xs: '15px', sm: '20px', md: '30px' },
                        height: 'auto',
                      }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          color: '#1176ad',
                          textAlign: 'left',
                          fontSize: { xs: '10px', sm: '13px', md: '16px' },
                          fontWeight: '400',
                        }}
                      >
                        {feature?.title}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Bounce direction="left" triggerOnce duration={200}>
              <Box
                sx={{
                  display: 'flex',
                  pt: '20px',
                  gap: '10px',
                  animation: `${wobble} 2s ease-in-out forwards`,
                }}
              >
                {data?.appIcons?.map((appicon, index) => (
                  <Link
                    href={appicon?.link || '#'}
                    key={index}
                    xs={3}
                    sx={{ display: 'flex', gap: '20px' }}
                  >
                    <Box
                      component={'img'}
                      src={appicon?.icon || '/'}
                      alt={appicon?.title || ''}
                      sx={{
                        width: { xs: '110px', sm: '125px', md: '145px' },
                        height: 'auto',
                      }}
                    />
                  </Link>
                ))}
              </Box>
            </Bounce>
          </Box>
        </Box>
        <Box
          sx={{
            width: `100%`,
            height: '100%',
            display: 'flex',
            alignSelf: 'flex-end',
            maxWidth: { xs: '220px', sm: '253px', md: '353px' },
            mx: 'auto',
          }}
        >
          <Bounce direction="right" triggerOnce duration={300}>
            <Box
              sx={{
                animation: `${wobble} 2s ease-in-out forwards`,
              }}
            >
              <Box
                component={'img'}
                src={data?.appImage}
                alt={'App'}
                sx={{
                  width: '100%',
                  height: 'auto',
                  mb: -0.5,
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Bounce>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 2.5,
          pl: 4,
          pr: { xs: 4, sm: 10, md: 21 },
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '11px', sm: '13px', md: '14px' },
            fontWeight: 400,
            color: '#666666',
          }}
        >
          {data?.paymentMethodsDescription}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { md: 'center' },
            gap: { xs: '10px', sm: '18px', md: '20px' },
            py: {
              xs: '10px',
              md: '0px',
            },
          }}
        >
          {data?.paymentMethods?.map((method, index) => (
            <Box key={index}>
              <Box
                component={'img'}
                src={method?.icon}
                alt={method?.alt}
                sx={{
                  width: { xs: '28px', sm: '30px', md: '37px' },
                  height: 'auto',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FooterCta;
