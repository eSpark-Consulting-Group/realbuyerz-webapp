'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Slider,
  Typography,
} from '@mui/material';
import Cropper from 'react-easy-crop';
import CropIcon from '@mui/icons-material/Crop';
import { useDispatch } from 'react-redux';
import { Cancel } from '@mui/icons-material';
import { handleUserEdit } from '@/src/redux/slices/currentUser/currentUserSlice';
import getCroppedImg from '@/src/utils/cropImage';

const ProfileCroper = ({
  photoURL,
  setOpenCrop,
  setPhotoURL,
  selectedFile,
  setFieldValue,
  handleClose,
  currData,
  setFile,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const cropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const dispatch = useDispatch();
  const cropImage = async () => {
    try {
      const { file, url } = await getCroppedImg(
        photoURL,
        croppedAreaPixels,
        rotation,
        { horizontal: false, vertical: false },
        selectedFile?.name,
        selectedFile.type
      );

      const updatedData = { ...currData, image: url };
      dispatch(handleUserEdit(updatedData));
      setFieldValue('image', file);

      setPhotoURL(url);
      setOpenCrop(false);
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };
  return (
    <>
      <DialogContent
        dividers
        sx={{
          background: '#333',
          position: 'relative',
          mx: 'auto',
          width: { xs: '100%', sm: 350 },
          height: { xs: '280px', sm: 280 },
          '& .reactEasyCrop_CropAreaRound': {
            width: '280px !important',
            height: '275px !important',
          },
        }}
      >
        <Cropper
          image={photoURL}
          crop={crop}
          zoom={zoom}
          cropShape="round"
          rotation={rotation}
          aspect={1}
          onZoomChange={setZoom}
          onRotationChange={setRotation}
          onCropChange={setCrop}
          onCropComplete={cropComplete}
        />
      </DialogContent>
      <DialogActions
        sx={{
          flexDirection: 'column',
          '@media(min-width: 280px) and (max-width: 320px)': {
            mx: 'auto',
          },
          mx: {
            xs: 1,
            sm: 3,
          },
          my: 2,
        }}
      >
        <Box sx={{ width: '100%', mb: 1 }}>
          <Box>
            <Typography>Zoom: {zoomPercent(zoom)}</Typography>
            <Slider
              valueLabelDisplay="auto"
              valueLabelFormat={zoomPercent}
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e, zoom) => setZoom(zoom)}
            />
          </Box>
          <Box>
            <Typography>Rotation: {rotation + '°'}</Typography>
            <Slider
              valueLabelDisplay="auto"
              min={0}
              max={360}
              value={rotation}
              onChange={(e, rotation) => setRotation(rotation)}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            '@media(min-width: 280px) and (max-width: 320px)': {
              gap: '6px',
            },
          }}
        >
          <Button
            variant="outlined"
            startIcon={<Cancel />}
            onClick={() => {
              handleClose(false);
              setOpenCrop(false);
              setFieldValue('image', null);
              setFile(null);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            startIcon={<CropIcon />}
            onClick={cropImage}
          >
            Update
          </Button>
        </Box>
      </DialogActions>
    </>
  );
};

export default ProfileCroper;

const zoomPercent = (value) => {
  return `${Math.round(value * 33.3)}%`;
};
