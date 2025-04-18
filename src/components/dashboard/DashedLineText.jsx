import { Box, Typography } from '@mui/material';

const DashedLineText = ({ text }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <Box sx={{ flex: 1, height: '1px', background: '#ccc' }} />

      <Typography
        variant="body1"
        style={{
          padding: '10px',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '17px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#979797',
        }}
      >
        {text}
      </Typography>

      <Box sx={{ flex: 1, height: '1px', background: '#ccc' }} />
    </Box>
  );
};

export default DashedLineText;
