import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import ProfileCroper from '../AgentProfile/Agent-Profile-Forms/ProfileCroper';
import { Button } from '@mui/material';

export default function EditProfileModal({
  open,
  setOpen,
  photoURL,
  setPhotoURL,
  spacificData,
  setProfileImage,
}) {
  const [setFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadImageOpen, setUploadImageOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
    setUploadImageOpen(false);
    setSelectedFile(null);
  };

  const handleUploadImage = () => {
    fileInputRef.current.click();
  };

  const handleEditImage = () => {
    if (photoURL) {
      setUploadImageOpen(true);
    }
    // else if (!selectedFile) {
    //   setUploadImageOpen(true);
    // }
    else {
      null;
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setUploadImageOpen(false);
    } else {
      setUploadImageOpen(true);
      setSelectedFile(file);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            background: '#E8F6FF',
            transform: 'translate(-50%, -50%)',
            width: { xs: '80%', sm: 400, md: 400 },
            '@media (min-width:320px) and (max-width: 425px)': {
              px: 1.5,
              py: 3,
              width: '90%',
              borderRadius: '22px',
            },
            '@media (min-width:280px) and (max-width: 319px)': {
              width: 270,
              px: 1.5,
              py: 3,
              borderRadius: '22px',
            },
            boxShadow: 24,
            borderRadius: { xs: '25px', sm: '27px' },
            p: 3,
          }}
        >
          <Box
            sx={{
              bgcolor: 'red',
              position: 'relative',
            }}
          >
            <Image
              src={'/images/modal/close.svg'}
              width={25}
              height={25}
              alt="close"
              onClick={handleClose}
              style={{
                right: 1,
                top: 5,
                left: 'auto',
                position: 'absolute',
              }}
            />
          </Box>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <Button onClick={handleUploadImage}>Upload Image</Button>
          <Button onClick={handleEditImage}>Edit Image</Button>
          {uploadImageOpen && (
            <Box sx={{ pt: 2 }}>
              <ProfileCroper
                spacificData={spacificData}
                photoURL={
                  selectedFile
                    ? URL?.createObjectURL(selectedFile)
                    : null || !selectedFile
                      ? photoURL
                      : URL?.createObjectURL(selectedFile)
                }
                setOpenCrop={setUploadImageOpen}
                setPhotoURL={setPhotoURL}
                setProfileImage={setProfileImage}
                setFile={setFile}
              />
            </Box>
          )}
        </Box>
      </Modal>
    </div>
  );
}
