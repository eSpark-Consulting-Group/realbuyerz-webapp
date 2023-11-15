import React, { useState } from 'react';
import { Box, Button, Input } from '@mui/material';

import { PROPERTY_BUYING_DETAIL } from '../../../app/constants/postlistingConstants';

const UploadMediaButton = ({ PropertyInformation }) => {
  let Promise;
  const [propertyData, setPropertyData] = useState({
    sellingData: PROPERTY_BUYING_DETAIL.sellingDetails,
    mediaData: PropertyInformation.map((item) => ({ ...item, value: '' })),
  });
  const handleButtonClick = (index) => {
    const selectedText = PropertyInformation[index].text;
    setPropertyData((prevData) => {
      const updatedMediaData = [...prevData.mediaData];
      updatedMediaData[index].value = selectedText;
      const updatedSellingData = {
        ...prevData.sellingData,
        [PropertyInformation[index].text]: selectedText,
      };
      return {
        ...prevData,
        sellingData: updatedSellingData,
        mediaData: updatedMediaData,
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
        [PropertyInformation[index].text]: fileUrl,
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
        {propertyData.mediaData.map((item, index) => (
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
                // backgroundColor:"#FB631C",
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
