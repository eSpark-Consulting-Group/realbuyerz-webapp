/*eslint no-undef: 0*/
import React, { useState } from 'react';
import { Box, Button, Input } from '@mui/material';

import { createMediaDataState } from '@/utils/mediaData';
import { useDispatch } from 'react-redux';
import { savePropertyData } from '@/src/redux/slices/postlisting/postListingSlice';

const UploadMediaButton = ({ propertyInformation, propertyBuyingDetails }) => {
  const [propertyData, setPropertyData] = useState(
    createMediaDataState(propertyInformation, propertyBuyingDetails)
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: savePropertyData,
      payload: propertyData.uploadedMediaData.sellingData,
    });
    console.log(propertyData);
  };
  const handleFileChange = async (event, index) => {
    const selectedFile = event.target.files[0];

    if (
      (index === 0 && isImage(selectedFile)) ||
      (index === 1 && isVideo(selectedFile))
    ) {
      const fileUrl = await readFileAsURL(selectedFile);
      const fieldName = index === 0 ? 'uploadImage' : 'uploadVideo';

      console.log(`Selected ${fieldName} file URL:`, fileUrl);

      setPropertyData((prevData) => ({
        ...prevData,
        uploadedMediaData: {
          ...prevData.uploadedMediaData,
          sellingData: {
            ...prevData.uploadedMediaData.sellingData,
            [fieldName]: fileUrl,
          },
          mediaData: prevData.uploadedMediaData.mediaData.map((item, i) =>
            i === index ? { ...item, value: fileUrl } : item
          ),
        },
      }));
    } else {
      alert('Please select a valid file type.');
    }
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
        <Button onClick={handleClick}>Ok</Button>
      </>
    </Box>
  );
};
export default UploadMediaButton;
