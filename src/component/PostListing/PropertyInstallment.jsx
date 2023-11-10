import React from 'react';

import { Typography, Box, Switch } from '@mui/material';
import Image from 'next/image';

const PropertInstallment = ({ PropertyInstallmentInfo }) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <>
            {PropertyInstallmentInfo?.map((item, index) => (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        background: "blue",
                //   width: { xs: '400px', md: '800px' },
                        padding: "8px",
                    }}
                    key={index}
                >
                    <Box sx={{
                        display: "flex",
                        justifyContent:"space-between"
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
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
                       
                          <Switch {...label} />
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
                      
                    </Box>
                </Box>
            ))}
        </>
    )
}
export default PropertInstallment;