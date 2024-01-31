import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';

import EditProfileModal from '../../Modal/EditProfileModal';
import ButtonBaseDemo from './EditImage';
const AgentImage = ({ image }) => {
  const [open, setOpen] = useState(false);
  const [photoURL, setPhotoURL] = useState(null);
  const handleOpen = () => setOpen(true);
  const [setProfileImage] = useState(image);
  return (
    <Grid
      sx={{
        margin: { xs: 'auto', md: 'auto' },
        pt: { xs: 1, sm: 0 },
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <ButtonBaseDemo url={image} handleOpen={handleOpen} />
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
        <EditProfileModal
          open={open}
          setOpen={setOpen}
          photoURL={photoURL}
          setPhotoURL={setPhotoURL}
          setProfileImage={setProfileImage}
          handleOpen={handleOpen}
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
