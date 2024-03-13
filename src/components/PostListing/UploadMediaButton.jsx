/*eslint no-undef: 0*/
import React from 'react';
import { Box, Button, Input } from '@mui/material';

const UploadMediaButton = ({ propertyInformation, handleFileChange }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontWeight: 400,
        padding: { xs: '10px', md: '40px' },
        '@media (min-width: 280px) and (max-width:424px)': {
          padding: 0,
          pb: 1,
        },
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <>
        {propertyInformation?.map((item, index) => (
          <label
            htmlFor={`file-upload-${index}`}
            style={{
              width: '100%',
              display: 'inline-block',
              cursor: 'pointer',
            }}
            key={index}
          >
            <Button
              sx={{
                width: {
                  xs: '100%',
                  sm: '200px',
                },
                color: index === 0 ? 'white' : '#FB631C',
                background: index === 0 ? '#FB631C' : 'white',
                fontSize: { xs: '15px', sm: '17px', md: '20px' },
                padding: { xs: '7px', sm: '7px', md: '8px' },
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
              {item?.label}
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
