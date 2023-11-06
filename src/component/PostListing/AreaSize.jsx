import React, { useState } from 'react';
import { Typography, Box, TextField, MenuItem } from '@mui/material';
import Image from 'next/image';

const AreaSize = ({ PropertyInformation }) => {
    const [value, setValue] = useState('');
    return (
        <>
            {PropertyInformation?.map((item, index) => (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '10px',
                        padding: "5px",
                        width: { xs: '100%', md: '80%', lg: 'auto' },
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
                            {item.text}{' '}
                        </Typography>
                        <span style={{ color: '#FF0000' }}>*</span>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                            gap: '10px',
                        }}
                    >
                        <TextField
                            placeholder={item.placeholder}
                            sx={{
                                width: { xs: '100%', md: '500px' },
                            }}
                        />
                        <TextField
                            sx={{
                                width: { xs: '100%', md: '200px' },
                                color: '#777777',
                            }}
                            variant="outlined"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            select
                            label="Select City"
                        >
                            <MenuItem key={1} value="test0">
                                {item.option1}
                            </MenuItem>
                            <MenuItem key={2} value="test1">
                                {item.option2}
                            </MenuItem>
                        </TextField>
                    </Box>
                </Box>

            ))
            }
        </>
    )
}
export default AreaSize;