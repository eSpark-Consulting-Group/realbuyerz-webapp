import { Box, Typography } from '@mui/material';

const TextBox = ({ text1, text2 }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        marginBottom: '10px',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 700,
          lineHeight: '17px',
          color: '#000',
        }}
      >
        {text1}
      </Typography>

      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '17px',
          color: '#126FAA',
          marginLeft: '5px',
        }}
      >
        {text2}
      </Typography>
    </Box>
  );
};

export default TextBox;
