import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import ButtonBaseDemo from './EditImage';
import EditProfileModal from '@/src/components/dashboard/modals/EditProfileModal';

const AgentImage = ({ data, setFieldValue, setFile, file, error }) => {
  const [open, setOpen] = useState(false);
  const [photoURL, setPhotoURL] = useState(null);
  const handleOpen = () => setOpen(true);
  const imageUrl = data?.profileImage || data?.image;
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
        alignItems: 'center',
      }}
    >
      <ButtonBaseDemo url={imageUrl} handleOpen={handleOpen} data={data} />
      {file === null && error && (
        <Box
          sx={{
            color: '#d32f2f',
            mt: 0.5,
            mb: 0.5,
            fontSize: '12px',
          }}
        >
          {error}
        </Box>
      )}

      <Box
        sx={{
          zIndex: '1',
          position: 'absolute',
          bottom: 0,
          right: 0,
          borderRadius: '100%',
          p: 0.5,
        }}
      >
        <EditProfileModal
          open={open}
          setOpen={setOpen}
          currentUserImage={imageUrl}
          currData={data}
          setFieldValue={setFieldValue}
          photoURL={photoURL}
          setPhotoURL={setPhotoURL}
          spacificData={data}
          handleOpen={handleOpen}
          sx={{
            backgroundColor: '#fb631c',
            color: '#fff',
            '&:hover': { backgroundColor: '#fb631c', color: '#fff' },
          }}
          setFile={setFile}
        />
      </Box>
    </Grid>
  );
};

export default AgentImage;
