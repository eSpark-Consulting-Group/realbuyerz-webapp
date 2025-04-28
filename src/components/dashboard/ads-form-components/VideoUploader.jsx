import { useCallback } from 'react';

import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';

import { Box, Button, Typography } from '@mui/material';

const VideoUploader = ({ onUpload, maxVideos }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length <= maxVideos) {
        onUpload(acceptedFiles[0].type, acceptedFiles[0]);
      } else {
        toast.error('Maximum limit of videos reached');
      }
    },
    [onUpload, maxVideos]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'video/*',
    maxFiles: maxVideos,
  });

  return (
    <Button
      component={'div'}
      {...getRootProps()}
      sx={{
        width: { xs: '100%', sm: '190px', md: '200px' },
        height: '45px',
        color: '#FB631C',
        background: 'white',
        borderRadius: '10px',
        border: '1px #FB631C solid',
        '&:hover': {
          backgroundColor: '#FB631C',
          color: '#fff',
        },
      }}
    >
      <Box component={'input'} {...getInputProps()} />

      <Typography
        sx={{
          fontSize: '15px',
          textTransform: 'capitalize',
        }}
      >
        Upload Videos{' '}
      </Typography>
    </Button>
  );
};

export default VideoUploader;
