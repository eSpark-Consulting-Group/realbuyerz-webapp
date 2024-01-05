/*eslint no-undef: 0*/
import React from 'react';
import { Box, Button, Input } from '@mui/material';

const UploadMediaButton = ({ propertyInformation, handleFileChange }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        fontWeight: 400,
        padding: '50px',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <>
        {propertyInformation?.map((item, index) => (
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
      </>
    </Box>
  );
};
export default UploadMediaButton;
