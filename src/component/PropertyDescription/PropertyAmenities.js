import React from 'react';
import { Typography } from '@mui/material';

const PropertyAmenities = ({ amenities }) => {
    return (
        <div>
            <Typography sx={{ fontSize:"18px" , fontWeight: 600,}} >
                Amenities
            </Typography>
            {amenities.map((item, index) => (
                <Typography 
                    sx={{
                        padding: '3px',
                        fontSize: '16px',
                        fontWeight: 500,
                    }}
                    key={index}
                >
                    {item}
                </Typography>
            ))}
        </div>
    );
};
export default PropertyAmenities;
