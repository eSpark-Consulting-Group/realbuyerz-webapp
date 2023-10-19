import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SiteLogo from "../../../public/images/RealBuyers-Logo.svg"

const styles = {
  container: {
    backgroundColor: '#F5F5F5',
    padding: '20px',
    color: "#fff",
    background: 'linear-gradient(180deg, rgba(0, 15, 34, 1.00) 0%, rgba(14, 30, 46, 0.97) 60.69004535675049%, rgba(0, 21, 44, 1.00) 100%)',
  },
  // content: {
  //   maxWidth: '1200px',
  //   margin: '0 auto',
  // },
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

const Footer = () => {
  return (
    <Box sx={styles.container}>
      <Grid container justifyContent="center">
        <Grid item xs={5}>
          <Box sx={styles.content}>
            <img src="/images/RealBuyers-Logo.svg" alt="Logo" style={styles.logo} />
            <Typography variant="body1" paragraph>
              Rb online is a digital platform designed to help you with all your real estate worries! We pledge to make real estate experiences more accessible to everyone - whether they need to buy, sell, or rent properties, products, projects, or services!
            </Typography>
            <Typography variant="body2" paragraph>
              With jagah Online, you don’t have to worry about finding the right place, again!
            </Typography>
            <Box sx={styles.address}>
              <LocationOnIcon style={styles.icon} />
              <Typography variant="body2">A-214, Block A, Sindhi Muslim Cooperative Housing Society (SMCHS), Karachi, Pakistan</Typography>
            </Box>
            <Box sx={styles.contactInfo}>
              <PhoneIcon style={styles.icon} />
              <Typography variant="body2">+92 213 7131669</Typography>
            </Box>
            <Box sx={styles.socialIcons}>
              <Link href="#" color="inherit" underline="none" target="_blank" rel="noopener noreferrer">
                <FacebookIcon style={styles.socialIcon} />
              </Link>
              <Link href="#" color="inherit" underline="none" target="_blank" rel="noopener noreferrer">
                <TwitterIcon style={styles.socialIcon} />
              </Link>
              <Link href="#" color="inherit" underline="none" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={styles.socialIcon} />
              </Link>
            </Box>
          </Box></Grid>
        <Grid item xs={2}> <Box sx={styles.content}>
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
        </Box></Grid>
        <Grid item xs={2}>  <Box sx={styles.content}>
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
                <Box >
                  <Box >
                    <img src="/images/social-icons/AppStore.svg" alt="App Store" style={styles.icon} />
                  </Box>
                </Box>
                <Box>
                  <Box >
                    <img src="/images/social-icons/AppStore.svg" alt="Google Play" style={styles.icon} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ display: "flex" }} className="group-67" style={styles.section}>
              <img src="/images/social-icons/facebook.svg" alt="Facebook" className="group-63" style={styles.icon} />
              <img src="/images/social-icons/twitter.svg" alt="Twitter" className="group-64" style={styles.icon} />
              <img src="/images/social-icons/linkedin.svg" alt="LinkedIn" className="group-65" style={styles.icon} />
              <img src="/images/social-icons/instagram.svg" alt="Instagram" className="group-66" style={styles.icon} />
            </Box>
          </Box>
        </Box></Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
