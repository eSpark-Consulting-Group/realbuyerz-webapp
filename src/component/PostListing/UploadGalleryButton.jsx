import React from 'react';
import { Box, Button } from '@mui/material';

const UploadGalleryButton = ({ PropertyInformation }) => {
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
            <Button
                style={{
                    width: '200px',
                    color: 'white',
                    fontSize: '20px',
                    padding: '8px',
                    backgroundColor: ' #FB631C',
                    textTransform: 'capitalize',
                    borderRadius: '10px',
                    border: '1px #FB631C solid',
                }}
            >
                {PropertyInformation.uploadimages}
            </Button>
            <Button
                sx={{
                    width: '200px',
                    color: '#FB631C',
                    fontSize: '20px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    border: '1px #FB631C solid',
                    textTransform: 'capitalize',
                }}
            >
                {PropertyInformation.uploadvideo}
            </Button>
        </Box>
    )
}
export default UploadGalleryButton;