import React from 'react';

import { Typography, Box, Switch } from '@mui/material';
import Image from 'next/image';

const PropertInstallment = ({ PropertyInformation }) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <>
            {PropertyInformation.map((item, index) => (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: { xs: '100%', md: '80%', lg: 'auto' },
                        gap: '10px',
                        padding: "5px",
                    }}
                    key={index}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignSelf: 'flex-start',
                            alignItems: 'center',
                            fontSize: '20px',
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            gap: '8px',
                        }}
                    >
                        <Image src={item.image} width={45} height={45} />
                        <Typography
                            sx={{
                                color: '#333333',
                            }}
                        >
                            {item.title}{' '}
                        </Typography>
                        <span style={{ color: '#FF0000' }}>*</span>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: '10px',
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#333333',
                                width: { xs: '100%', md: '650px' },
                            }}
                        >
                            {item.description}
                        </Typography>
                        <Switch {...label} />
                    </Box>
                </Box>
            ))}
        </>
    )
}
export default PropertInstallment;