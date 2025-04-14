import { Typography } from '@mui/material';

const SemiBoldTypography = ({ text }) => {
  return (
    <Typography
      sx={{
        color: '#FF631C',
        fontSize: { xs: '18px', md: '30px' },
        fontWeight: 600,
      }}
    >
      {text}
    </Typography>
  );
};

export default SemiBoldTypography;
