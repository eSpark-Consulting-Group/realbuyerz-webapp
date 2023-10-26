import React from 'react';
import { Typography } from '@mui/material';

const Amenities = ({ amenity }) => {
    return (
        <div>
            <Typography sx={{ fontFamily: 'Inter' }} variant="h6">
                Amenities
            </Typography>
            {amenity.map((amenity, index) => (
                <Typography
                    sx={{
                        padding: '3px',
                        fontFamily: 'Inter',
                        fontSize: '18px',
                        fontWeight: 500,
                    }}
                    key={index}
                >
                    {amenity}
                </Typography>
            ))}
        </div>
    );
};
export default Amenities;
