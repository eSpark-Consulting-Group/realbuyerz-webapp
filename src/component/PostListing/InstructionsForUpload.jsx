import React from 'react';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';

const UploadInstructions = ({ PropertyInformation }) => {
  return (
    <>
      {PropertyInformation.map((item, index) => (
        <Box sx={{ padding: '11px' }}>
          <ul key={index}>
            <li>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'row', md: 'row' },
                  alignItems: 'center',
                  fontSize: '20px',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  gap: '8px',
                  listStyle: 'none',
                }}
              >
                <Image src={item.image} width={17} height={13} />
                <Typography
                  sx={{
                    color: '#333333',
                  }}
                >
                  {item.text}{' '}
                </Typography>
              </Box>
            </li>
          </ul>
        </Box>
      ))}
    </>
  );
};
export default UploadInstructions;
