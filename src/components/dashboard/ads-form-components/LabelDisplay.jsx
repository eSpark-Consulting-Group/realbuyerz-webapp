import Image from 'next/image';

import { Box, Typography } from '@mui/material';

const style = {
  color: '#333333',
  fontSize: { xs: '17px', sm: '20px' },
  fontWeight: 400,
};
const LabelDisplay = ({ text, image, alt, span, isMobile = false, mb = 0 }) => {
  return (
    <>
      {isMobile ? (
        <Box sx={{ width: { xs: '90%', sm: '45px' }, pl: '0 !important' }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              gap: 1.5,
            }}
          >
            <Image
              src={image}
              alt={alt}
              width={47}
              height={45}
              className="label-display-box"
            />

            <Typography
              sx={{
                ...style,
                display: { xs: 'flex', sm: 'none' },
              }}
            >
              {text}
              {span && (
                <span style={{ marginLeft: '5px', color: '#FF0000' }}>*</span>
              )}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Typography
          sx={{
            ...style,
            display: { xs: 'none', sm: 'flex' },
            mb: mb,
          }}
        >
          {text}
          {span && (
            <span style={{ marginLeft: '5px', color: '#FF0000' }}>*</span>
          )}
        </Typography>
      )}
    </>
  );
};

export default LabelDisplay;
