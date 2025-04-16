import Link from 'next/link';
import Image from 'next/image';

import { Box, Collapse, Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import LocationSVGBox from '../global/LocationSVGBox';
import TitleTypography from './TitleTypography';

import { FEATURED_PROPERTIES } from '@/src/constants/Home';

const FeatureProjectsBox = ({
  router,
  item,
  styles,
  setHoveredIndex,
  index,
  hoveredIndex,
  isDesktop = false,
}) => {
  const desktopStyles = {
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
    height: '431px',
    border: '1px solid #cbcbcb',
    overflow: 'hidden',
    zIndex: 1,
  };

  const smallScreenStyles = {
    width: '260px',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  const collapseDesktopScreenStyle = {
    width: '289px',
    transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease-in-out',
  };

  const collapseSmallScreenStyle = {
    width: '220px',
    left: 0,
  };

  const embedBoxStyles = isDesktop ? desktopStyles : smallScreenStyles;
  const embedCollapseStyles = isDesktop
    ? collapseDesktopScreenStyle
    : collapseSmallScreenStyle;

  const backgroundImage = isDesktop ? (
    <Image
      src={item?.images[0]}
      alt={'background'}
      fill
      style={{ zIndex: -1 }}
    />
  ) : (
    <Image
      src={item?.images[0]}
      alt="background"
      width={260}
      height={200}
      style={{
        objectFit: 'contain',
        zIndex: -1,
      }}
    />
  );

  return (
    <Box
      onClick={() => router.push(`/projects/${item?.property_id}`)}
      className={styles.box}
      sx={{ ...embedBoxStyles }}
      onMouseOver={() => setHoveredIndex(index)}
      onMouseOut={() => setHoveredIndex(null)}
    >
      {backgroundImage}

      <LocationSVGBox city={item?.city} />

      <Collapse
        in={hoveredIndex === index}
        sx={{
          zIndex: 1,
          position: 'absolute',
          bottom: '60px',
          ...embedCollapseStyles,
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
              {isDesktop ? (
                <Link href={`/projects/${item?.property_id}`}>
                  <TitleTypography title={item?.title} />
                </Link>
              ) : (
                <TitleTypography title={item?.title} />
              )}

              <Typography
                sx={{
                  color: '#1176ad',
                  textAlign: 'left',
                  fontWeight: '700',
                  fontSize: { xs: '12px', md: '14px', lg: '15px' },
                  pb: '15px',
                }}
              >
                <LocationOnIcon color="#1176ad" fontSize="12px" /> {item?.city}
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
                    style={{
                      height: isDesktop && 'auto',
                      width: isDesktop && 'auto',
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Link>
      </Collapse>
    </Box>
  );
};

export default FeatureProjectsBox;