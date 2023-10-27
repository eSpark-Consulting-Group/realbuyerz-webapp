import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const styles = {
  container: {
    backgroundColor: '#F5F5F5',
    padding: '20px',
    color: '#fff',
    background:
      'linear-gradient(180deg, rgba(0, 15, 34, 1.00) 0%, rgba(14, 30, 46, 0.97) 60.69004535675049%, rgba(0, 21, 44, 1.00) 100%)',
  },
  logo: {
    width: '150px',
    height: 'auto',
  },
  address: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  contactInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  icon: {
    marginRight: '5px',
  },
  socialIcons: {
    display: 'flex',
    marginTop: '10px',
  },
  socialIcon: {
    marginRight: '10px',
  },
};
const Footer = ({ data }) => {
  return (
    <Box sx={styles?.container}>
      <Grid container justifyContent='center' sx={{ py: '50px' }}>
        <Grid item xs={5}>
          <Box sx={{ pr: '20%' }}>
            <Link href='/'>
              <Image src={data?.logo} alt='Logo' width={155} height={37} />
            </Link>
            <Typography
              variant='body1'
              sx={{
                pt: '10px',
                pb: '20px',
                fontSize: '16',
                fontWeight: '400',
              }}>
              {data?.introText?.paragraph1}
            </Typography>
            <Typography
              variant='body2'
              sx={{ pb: '20px', fontSize: '16', fontWeight: '400' }}>
              {data?.introText?.paragraph2}
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <LocationOnIcon style={styles.icon} sx={{ color: '#fb631c' }} />
              <Typography
                variant='body1'
                sx={{ pb: '20px', fontSize: '16', fontWeight: '400' }}>
                {data?.address?.line1}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <PhoneIcon style={styles.icon} sx={{ color: '#fb631c' }} />
              <Link href={`tel:${data?.phone}`}>
                {' '}
                <Typography
                  variant='body1'
                  sx={{ fontSize: '16', fontWeight: '400' }}>
                  {data?.phone}
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          {' '}
          <Box>
            <Typography variant='h6' color={'primary'} sx={{ pb: '20px' }}>
              Useful Links
            </Typography>
            {data?.usefulLinks?.map((link, index) => (
              <Link href={link?.link}>
                <Typography key={index} variant='body1' sx={{ pb: '15px' }}>
                  {link?.title}
                </Typography>
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Box className='group-69'>
              <Box sx={{ pb: '16px' }}>
                <Typography variant='h6' color={'primary'} sx={{ pb: '20px' }}>
                  Download Our App
                </Typography>
                <Typography variant='body1' sx={styles.text}>
                  {data?.appDownload?.description}
                </Typography>
              </Box>
              <Box container spacing={2} sx={{ pb: '10px' }}>
                {data?.appDownload?.options?.map((option, index) => (
                  <Grid key={index} item xs={6}>
                    <Box sx={{ py: '10px' }}>
                      <Link href={option?.link}>
                        <Image
                          src={option?.logo}
                          alt={option?.title}
                          width={150}
                          height={40}
                          style={styles.icon}
                        />
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Box>
              <Box sx={{ display: 'flex', gap: '8px', px: '5px' }}>
                {data?.socialMediaIcons?.map((socialIcon, index) => (
                  <Link href={socialIcon?.link}>
                    <img
                      key={index}
                      src={socialIcon?.logo}
                      alt={socialIcon?.title}
                    />
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
