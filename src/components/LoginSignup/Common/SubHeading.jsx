import { Typography } from '@mui/material';

const Subheading = ({ text }) => {
  return (
    <Typography
      sx={{
        color: ' #333333',
        fontSize: { xs: '13px', sm: '14px', md: '16px' },
      }}
    >
      {text}
    </Typography>
  );
};

export default Subheading;
