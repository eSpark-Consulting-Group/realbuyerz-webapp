import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import EditProfileModal from '../../Modal/EditProfileModal';
const AgentImage = ({ image }) => {
  const [ProfileImage] = useState(image);

  // const handlImageChange = (event) => {
  //   const file = event.target?.files[0];
  //   if (file && file.type.startsWith('image/')) {
  //     const uploadedImage = URL.createObjectURL(file);
  //     setProfileImage(uploadedImage);
  //     console.log(file, 'file');
  //   }
  // };

  // const handlImageEdit = (event) => {
  //   // const uploadedImage = URL.createObjectURL(event?.target);
  //   // setProfileImage(uploadedImage);
  // };

  return (
    <Grid
      sx={{
        width: '180px',
        height: '160px',
        margin: { xs: 'auto', md: 'auto' },
        pt: { xs: 1, sm: 0 },
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <Image
        src={ProfileImage}
        alt={'image'}
        width={400}
        height={400}
        style={{ width: '100%', height: '100%', borderRadius: '100%' }}
      />
      <Box
        sx={{
          zIndex: '1',
          position: 'absolute',
          bottom: 0,
          right: 0,
          backgroundColor: '#fff',
          borderRadius: '100%',
          p: 0.5,
        }}
      >
        {/* <RBUpload
          sx={{
            backgroundColor: '#fb631c',
            color: '#fff',
            '&:hover': { backgroundColor: '#fb631c', color: '#fff' },
          }}
          onChange={handlImageChange}
          onClick={handlImageEdit}
        /> */}
        <EditProfileModal
          sx={{
            backgroundColor: '#fb631c',
            color: '#fff',
            '&:hover': { backgroundColor: '#fb631c', color: '#fff' },
          }}
        />
      </Box>
    </Grid>
  );
};

export default AgentImage;
