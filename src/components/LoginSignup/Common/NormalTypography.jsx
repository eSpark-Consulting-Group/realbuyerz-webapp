import { Typography } from '@mui/material';

const NormalTypography = ({ text }) => {
  return (
    <Typography
      sx={{
        fontSize: { xs: '12px', md: '16px' },
        fontWeight: 400,
      }}
    >
      {text}
    </Typography>
  );
};

export default NormalTypography;
