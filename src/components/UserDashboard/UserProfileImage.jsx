import { Badge } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';

const UserProfileImage = ({ image }) => {
  return (
    <Badge>
      <Box
        sx={{
          position: 'relative',
          width: '156px',
          height: '156px',
        }}
      >
        <Image src={image} width={165} height={156} alt="profile" />
        <Box
          sx={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'white',
            position: 'absolute',
            left: '75%',
            bottom: 9,
            p: 0.5,
          }}
        >
          <Box
            sx={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#18DD00',
              alignContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          ></Box>
        </Box>
      </Box>
    </Badge>
  );
};

export default UserProfileImage;
