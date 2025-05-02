'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const textStyle = {
  fontSize: { xs: '11px', sm: '13px', md: '16px' },
  fontWeight: 400,
  color: '#FFFFFF',
};

const Footer = ({ data }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        background:
          'linear-gradient(180deg, rgba(0, 15, 34, 1) 0%, rgba(14, 30, 46, 0.97) 60.69%, rgba(0, 21, 44, 1) 100%)',
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
            maxWidth: { sm: 'calc(100% - 430px)', md: 'calc(100% - 510px)' },
            '@media(min-width:600px) and (max-width:767px)': {
              maxWidth: '100%',
            },
            pr: { sm: '10.4%' },
          }}
        >
          <Link href={data?.link}>
            <Image src={data?.logo} alt="Logo" width={155} height={37} />
          </Link>

          {[data?.introText?.paragraph1, data?.introText?.paragraph2].map(
            (text, idx) => (
              <Typography
                key={idx}
                sx={{
                  ...textStyle,
                  pt: idx === 0 ? '10px' : 0,
                  pb: '20px',
                  lineHeight: '22px',
                }}
              >
                {text}
              </Typography>
            )
          )}

          <FooterInfoRow
            icon={<LocationOnIcon sx={{ color: '#fb631c', mr: '5px' }} />}
            text={data?.address?.line1}
          />
          <FooterInfoRow
            icon={<PhoneIcon sx={{ color: '#fb631c', mr: '5px' }} />}
            text={data?.phone}
            link={`tel:${data?.phone}`}
          />
        </Box>

        <FooterLinkGroup title={data?.usefulLink} links={data?.usefulLinks} />

        <Box
          sx={{
            p: 1,
            width: '100%',
            maxWidth: { xs: '50%', sm: '250px', md: '280px' },
            '@media(min-width:425px) and (max-width:767px)': {
              maxWidth: '213px',
            },
          }}
        >
          <Typography
            variant="h6"
            color="primary"
            sx={{ fontSize: { xs: '15px', md: '18px', lg: '20px' }, mb: 1.5 }}
          >
            {data?.downloadApp}
          </Typography>

          <Typography
            sx={{
              ...textStyle,
              fontSize: { xs: '10px', sm: '12px', md: '14px' },
              mt: '3px',
            }}
          >
            {data?.appDownload?.description}
          </Typography>

          <Grid
            container
            spacing={2}
            sx={{ pt: '20px', pb: '10px' }}
            style={{ display: 'block' }}
          >
            {data?.appDownload?.options?.map((option, idx) => (
              <Grid item xs={6} key={idx}>
                <Link href={option?.link}>
                  <Box
                    component="img"
                    src={option?.logo}
                    alt={option?.title}
                    sx={{
                      width: { xs: '110px', sm: '130px', md: '145px' },
                      height: 'auto',
                    }}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>

          <FooterSocialIcons icons={data?.socialMediaIcons} />
        </Box>
      </Box>
    </Box>
  );
};

// Small reusable components
const FooterInfoRow = ({ icon, text, link }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', pb: '13px' }}>
    {icon}
    {link ? (
      <Link href={link}>
        <Typography sx={textStyle}>{text}</Typography>
      </Link>
    ) : (
      <Typography sx={textStyle}>{text}</Typography>
    )}
  </Box>
);

const FooterLinkGroup = ({ title, links }) => (
  <Box
    sx={{
      p: 1,
      width: '100%',
      maxWidth: { xs: '50%', sm: '180px', md: '230px' },
      '@media(min-width:425px) and (max-width:767px)': { maxWidth: '180px' },
    }}
  >
    <Typography
      variant="h6"
      color="primary"
      sx={{ fontSize: { xs: '15px', md: '18px', lg: '20px' }, mb: 1.5 }}
    >
      {title}
    </Typography>

    {links?.map((link, idx) => (
      <Link href={link?.link} key={idx}>
        <Typography
          sx={{
            ...textStyle,
            fontSize: { xs: '10px', sm: '12px', md: '14px' },
            pt: '4px',
            pb: '13px',
          }}
        >
          {link?.title}
        </Typography>
      </Link>
    ))}
  </Box>
);

const FooterSocialIcons = ({ icons }) => (
  <Box sx={{ display: 'flex', gap: '8px', px: '5px', pt: '5px' }}>
    {icons?.map((icon, idx) => (
      <Link href={icon?.link} key={idx}>
        <Box
          component="img"
          src={icon?.logo}
          alt={icon?.title}
          sx={{ width: { xs: '20px', sm: '24px' } }}
        />
      </Link>
    ))}
  </Box>
);

export default Footer;
