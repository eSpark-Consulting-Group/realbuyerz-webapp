import { Typography } from '@mui/material';

const SemiBoldTypography = ({ text }) => {
  return (
    <Typography
      sx={{
        color: '#FF631C',
        fontSize: { xs: '19px', sm: '21px', md: '25px', lg: '30px' },
        fontWeight: 600,
      }}
    >
      {text}
    </Typography>
  );
};

export default SemiBoldTypography;