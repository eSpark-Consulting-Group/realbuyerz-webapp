import Link from 'next/link';
import { Box, Typography } from '@mui/material';

const useStyles = (small) => ({
  container: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    border: '1px solid #cbcbcb',
    maxWidth: '350px',
    mx: 'auto',
    my: '15px',
    '&:hover': {
      boxShadow: '0px 0px 5px 0px rgba(18, 111, 170, 0.70)',
    },
    ...(small
      ? { height: '100%', maxHeight: { xs: '340px' } }
      : { maxHeight: { lg: '350px' } }),
  },
  header: {
    py: '10px',
    backgroundColor: '#f5f6fb',
    color: '#333',
    fontWeight: 600,
    fontSize: '16px',
    borderRadius: small ? '5px' : '',
  },
  contentBox: {
    pt: '10px',
    pb: '16px',
    px: { xs: '10px', sm: '15px', md: '50px' },
    textAlign: 'center',
    overflowY: 'auto',
    ...(small
      ? { maxHeight: '255px', my: 2 }
      : { maxHeight: 'calc(100% - 45px)' }),
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#ececef',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#ececef',
    },
  },
  locationText: {
    ...(small
      ? { fontSize: { xs: '12px', sm: '13px', md: '14px' } }
      : { fontSize: '14px' }),
    py: { xs: '5px', sm: '6px', lg: '5px' },
    lineHeight: '16.94px',
    fontWeight: 500,
    color: '#666666',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const FilteredProposalsDataBox = ({ item, small }) => {
  const styles = useStyles(small);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>{item?.title}</Box>

      <Box sx={styles.contentBox}>
        {item?.locations?.map((location, index) => (
          <Box key={index}>
            <Link href={location?.link || '#'} passHref>
              <Typography variant="body1" sx={styles.locationText}>
                {location?.title}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FilteredProposalsDataBox;
