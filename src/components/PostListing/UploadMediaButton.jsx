/*eslint no-undef: 0*/
import React, { useState } from 'react';
import { Box, Button, Input } from '@mui/material';

import { createMediaDataState } from '@/utils/mediaData';

const UploadMediaButton = ({ propertyInformation, propertyBuyingDetails }) => {
  const [propertyData, setPropertyData] = useState(
    createMediaDataState(propertyInformation, propertyBuyingDetails)
  );
  const handleButtonClick = (index) => {
    const selectedText = propertyInformation[index].text;
    console.log('selectedText:', selectedText);

    setPropertyData((prevData) => {
      const updatedMediaData = [...prevData.uploadedMediaData.mediaData];
      updatedMediaData[index].text = selectedText;
      console.log('updatedMediaData:', updatedMediaData);

      const updatedSellingData = {
        ...prevData.sellingData,
        [propertyInformation[index].text]: selectedText,
      };
      console.log('updatedSellingData:', updatedSellingData);

      return {
        ...prevData,
        uploadedMediaData: {
          sellingData: updatedSellingData,
          mediaData: updatedMediaData,
        },
      };
    });
  };
  const handleFileChange = async (event, index) => {
    const selectedFile = event.target.files[0];
    if (index === 0 && !isImage(selectedFile)) {
      alert('Please select an image file.');
      return;
    }
    if (index === 1 && !isVideo(selectedFile)) {
      alert('Please select a video file.');
      return;
    }
    const fileUrl = await readFileAsURL(selectedFile);
    console.log(`Selected file URL for button ${index + 1}:`, fileUrl);
    setPropertyData((prevData) => {
      const updatedSellingData = {
        ...prevData.sellingData,
        [propertyInformation[index].text]: fileUrl,
      };
      return {
        ...prevData,
        sellingData: updatedSellingData,
      };
    });
  };
  const isImage = (file) => {
    return file.type.startsWith('image/');
  };
  const isVideo = (file) => {
    return file.type.startsWith('video/');
  };
  const readFileAsURL = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  };
  console.log('iplo', propertyData);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Inter',
        fontWeight: 400,
        padding: '50px',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <>
        {propertyData.uploadedMediaData.mediaData.map((item, index) => (
          <label
            htmlFor={`file-upload-${index}`}
            style={{
              display: 'inline-block',
              cursor: 'pointer',
            }}
            key={index}
          >
            <Button
              sx={{
                width: {
                  xs: '150px',
                  md: '200px',
                },
                color: index === 0 ? 'white' : '#FB631C',
                background: index === 0 ? '#FB631C' : 'white',
                fontSize: { xs: '12px', md: '20px' },
                padding: { xs: '4px', md: '8px' },
                textTransform: 'capitalize',
                borderRadius: '10px',
                border: '1px #FB631C solid',
                '&:hover': {
                  backgroundColor: index === 0 ? 'white' : '#FB631C',
                  color: index === 0 ? '#FB631C' : 'white',
                },
              }}
              component="span"
              onClick={() => handleButtonClick(index)}
            >
              {item.label}
            </Button>
            <Input
              accept={index === 0 ? 'image/*' : 'video/*'}
              id={`file-upload-${index}`}
              type="file"
              style={{ display: 'none' }}
              onChange={(event) => handleFileChange(event, index)}
            />
          </label>
        ))}
      </>
    </Box>
  );
};
export default UploadMediaButton;
