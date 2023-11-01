import React from 'react';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';

import Counter from './inputNumber/counter';

const PropertyFacilities = ({ PropertyInformation }) => {
    return (
        <>
            {PropertyInformation.map((item, index) => (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', md: 'space-between' },
                        alignItems: 'center',
                        fontSize: { xs: '18px', md: '20px' },
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        gap: { xs: '0px', md: '8px' },
                    }}
                    key={index}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            gap: '15px',
                            width: { xs: '200px', md: '300px' },
                            justifyContent: 'space-around',
                        }}
                    >
                        <Image src={item.image} width={47} height={45} />
                        <Typography>{item.title}</Typography>
                        <Counter />
                    </Box>
                </Box>
            ))}
        </>
    );
};
export default PropertyFacilities;
