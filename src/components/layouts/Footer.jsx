<<<<<<< HEAD
import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SiteLogo from "../../../public/images/RealBuyers-Logo.svg";

const styles = {
  container: {
    backgroundColor: "#F5F5F5",
    padding: "20px",
    color: "#fff",
    background:
      "linear-gradient(180deg, rgba(0, 15, 34, 1.00) 0%, rgba(14, 30, 46, 0.97) 60.69004535675049%, rgba(0, 21, 44, 1.00) 100%)",
  },
  logo: {
    width: "150px",
    height: "auto",
  },
  address: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  contactInfo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  icon: {
    marginRight: "5px",
  },
  socialIcons: {
    display: "flex",
    marginTop: "10px",
  },
  socialIcon: {
    marginRight: "10px",
  },
};

const Footer = () => {
  return (
    <Box sx={styles.container}>
      <Grid container justifyContent="center">
        <Grid item xs={5}>
          <Box sx={styles.content}>
            <img
              src="/images/RealBuyers-Logo.svg"
              alt="Logo"
              style={styles.logo}
            />
            <Typography variant="body1" paragraph>
              Rb online is a digital platform designed to help you with all your
              real estate worries! We pledge to make real estate experiences
              more accessible to everyone - whether they need to buy, sell, or
              rent properties, products, projects, or services!
            </Typography>
            <Typography variant="body2" paragraph>
              With jagah Online, you don’t have to worry about finding the right
              place, again!
            </Typography>
            <Box sx={styles.address}>
              <LocationOnIcon style={styles.icon} />
              <Typography variant="body2">
                A-214, Block A, Sindhi Muslim Cooperative Housing Society
                (SMCHS), Karachi, Pakistan
              </Typography>
            </Box>
            <Box sx={styles.contactInfo}>
              <PhoneIcon style={styles.icon} />
              <Typography variant="body2">+92 213 7131669</Typography>
            </Box>
            <Box sx={styles.socialIcons}>
              <Link
                href="#"
                color="inherit"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon style={styles.socialIcon} />
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon style={styles.socialIcon} />
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon style={styles.socialIcon} />
=======
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
      <Grid container justifyContent="center" sx={{ py: '50px' }}>
        <Grid item xs={5}>
          <Box sx={{ pr: '20%' }}>
            <Link href="/">
              <Image src={data?.logo} alt="Logo" width={155} height={37} />
            </Link>
            <Typography
              variant="body1"
              sx={{
                pt: '10px',
                pb: '20px',
                fontSize: '16',
                fontWeight: '400',
              }}
            >
              {data?.introText?.paragraph1}
            </Typography>
            <Typography
              variant="body2"
              sx={{ pb: '20px', fontSize: '16', fontWeight: '400' }}
            >
              {data?.introText?.paragraph2}
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <LocationOnIcon style={styles.icon} sx={{ color: '#fb631c' }} />
              <Typography
                variant="body1"
                sx={{ pb: '20px', fontSize: '16', fontWeight: '400' }}
              >
                {data?.address?.line1}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <PhoneIcon style={styles.icon} sx={{ color: '#fb631c' }} />
              <Link href={`tel:${data?.phone}`}>
                {' '}
                <Typography
                  variant="body1"
                  sx={{ fontSize: '16', fontWeight: '400' }}
                >
                  {data?.phone}
                </Typography>
>>>>>>> epic/issue/1
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
<<<<<<< HEAD
          {" "}
          <Box sx={styles.content}>
            <Typography variant="h6" sx={styles.item}>
              Useful Links
            </Typography>
            <Typography variant="body1" paragraph>
              Blogs
            </Typography>
            <Typography variant="body1" paragraph>
              Careers
            </Typography>
            <Typography variant="body1" paragraph>
              Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
              Terms &amp; Conditions
            </Typography>
            <Typography variant="body1" paragraph>
              Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              FAQs
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          {" "}
          <Box sx={styles.content}>
            <Box className="group-69">
              <Box style={styles.section}>
                <Typography variant="h6" sx={styles.text}>
                  Download Our App
                </Typography>
              </Box>
              <Box style={styles.section}>
                <Typography variant="body1" sx={styles.text}>
                  Where convenience is at your fingertip.
                </Typography>
              </Box>
              <Grid container spacing={2} style={styles.section}>
                <Grid item xs={6}>
                  <Box>
                    <Box>
                      <img
                        src="/images/social-icons/AppStore.svg"
                        alt="App Store"
                        style={styles.icon}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <img
                        src="/images/social-icons/AppStore.svg"
                        alt="Google Play"
                        style={styles.icon}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Box
                sx={{ display: "flex" }}
                className="group-67"
                style={styles.section}
              >
                <img
                  src="/images/social-icons/facebook.svg"
                  alt="Facebook"
                  className="group-63"
                  style={styles.icon}
                />
                <img
                  src="/images/social-icons/twitter.svg"
                  alt="Twitter"
                  className="group-64"
                  style={styles.icon}
                />
                <img
                  src="/images/social-icons/linkedin.svg"
                  alt="LinkedIn"
                  className="group-65"
                  style={styles.icon}
                />
                <img
                  src="/images/social-icons/instagram.svg"
                  alt="Instagram"
                  className="group-66"
                  style={styles.icon}
                />
=======
          {' '}
          <Box>
            <Typography variant="h6" color={'primary'} sx={{ pb: '20px' }}>
              Useful Links
            </Typography>
            {data?.usefulLinks?.map((link, index) => (
              <Link href={link?.link} key={index}>
                <Typography key={index} variant="body1" sx={{ pb: '15px' }}>
                  {link?.title}
                </Typography>
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Box>
              <Box sx={{ pb: '16px' }}>
                <Typography variant="h6" color={'primary'} sx={{ pb: '20px' }}>
                  Download Our App
                </Typography>
                <Typography variant="body1" sx={styles.text}>
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
                  <Link key={index} href={socialIcon?.link}>
                    <Image
                      key={index}
                      src={socialIcon?.logo}
                      alt={socialIcon?.title}
                      width={25}
                      height={25}
                    />
                  </Link>
                ))}
>>>>>>> epic/issue/1
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
