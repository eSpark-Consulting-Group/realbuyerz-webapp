import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

import { NOTIFICATION } from '@/app/constants/Preference';

const AreaUnit = () => {
  console.log('me', NOTIFICATION.measurement);
  return (
    <Box>
      {Object.keys(NOTIFICATION.measurement).map((key) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            gap: '15px',
          }}
          key={key}
        >
              <Typography sx={{
               color: 'black',
                  fontSize: '20px',
                  fontFamily: 'Inter',
                  fontWeight: 400,
          }}>{NOTIFICATION.measurement[key]}</Typography>
          <TextField label="PKR" variant="outlined" type="number" fullWidth />
        </Box>
      ))}
    </Box>
  );
};
export default AreaUnit;
// //{Object.keys(NOTIFICATION.measurement).map((key) => (
//   <div key={key}>
//     <h3>{key}</h3>
//     <p>{NOTIFICATION.measurement[key]}</p>
//   </div>
// ))}//
