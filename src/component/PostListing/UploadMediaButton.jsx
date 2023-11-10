import React, { useState } from 'react';
import { Box, Button, Input } from '@mui/material';

import { PROPERTY_BUYING_DETAIL } from './postlistingConstants';

const UploadMediaButton = ({ PropertyInformation }) => {
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
        [PropertyInformation[index].label]: selectedText,
      };
      return {
        ...prevData,
        sellingData: updatedSellingData,
        mediaData: updatedMediaData,
      };
    });
  };
  const handleClickBtn = () => {
    console.log('fromuplaodgallerycomponent', propertyData);
  };
  const handleFileChange = async (event, index) => {
    const selectedFile = event.target.files[0];
    const fileUrl = await readFileAsURL(selectedFile);
    console.log(`Selected file URL for button ${index + 1}:`, fileUrl);

    setPropertyData((prevData) => {
      const updatedSellingData = {
        ...prevData.sellingData,
        [PropertyInformation[index].label]: fileUrl,
      };
      return {
        ...prevData,
        sellingData: updatedSellingData,
      };
    });
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
        width: { xs: '100%', md: '800px' },
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
          >
            <Button
              style={{
                width: '200px',
                color: 'white',
                fontSize: '20px',
                padding: '8px',
                backgroundColor: '#FB631C',
                textTransform: 'capitalize',
                borderRadius: '10px',
                border: '1px #FB631C solid',
              }}
              component="span"
              onClick={() => handleButtonClick(index)}
            >
              {item.label}
            </Button>
            <Input
              accept="image/*,video/*"
              id={`file-upload-${index}`}
              type="file"
              style={{ display: 'none' }}
              onChange={(event) => handleFileChange(event, index)}
            />
          </label>
        ))}
        <Button onClick={handleClickBtn}>Ok</Button>
      </>
    </Box>
  );
};

export default UploadMediaButton;
