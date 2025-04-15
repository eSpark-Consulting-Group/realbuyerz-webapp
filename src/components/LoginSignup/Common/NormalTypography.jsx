import { Typography } from '@mui/material';

const NormalTypography = ({ text, reset }) => {
  return (
    <Typography
      sx={{
        fontSize: { xs: '13px', sm: '14px', md: '16px' },
        fontWeight: 400,
        color: !reset && '#333333',
      }}
    >
      {text}
    </Typography>
  );
};

export default NormalTypography;
