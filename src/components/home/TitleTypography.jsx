import { Typography } from '@mui/material';

const TitleTypography = ({ title }) => {
  return (
    <Typography
      sx={{
        color: '#fb631c',
        textAlign: 'left',
        fontWeight: 600,
        lineHeight: '21.78px',
        fontSize: {
          xs: '12px',
          md: '14px',
          lg: '18px',
        },
        pb: '15px',
      }}
    >
      {title}
    </Typography>
  );
};

export default TitleTypography;
