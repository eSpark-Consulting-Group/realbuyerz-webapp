import { Box, Grid, Radio, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useRef } from 'react';

const MasterCard = ({ image, cardName, accountNumber, selectedValue, handleChangeRadioButton }) => {
    const gridRef = useRef(null);
    const finalValue = cardName;

    const handleClick = () => {
        handleChangeRadioButton({ target: { value: finalValue } });
    };

    return (
        <Grid
            ref={gridRef}
            container
            onClick={handleClick}
            sx={{
                border: '1px solid #E9E9E9',
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                mx: { md: '30px', lg: '38px', xl: '40px' },
                my: '10px',
                px: '40px',
                cursor: 'pointer', // Add cursor pointer to indicate clickable
                backgroundColor: selectedValue === finalValue ? '#EDF7FF' : 'transparent',
            }}
        >
            <Grid item lg={1} xs={2} sm={1}
            // sx={{
            //     display: 'flex',
            //     justifyContent: { xs: 'center', sm: 'flex-start' },
            //     pr: { lg: '100px !important', },
            // }}
            >
                 <Radio
                    checked={selectedValue === finalValue}
                    onChange={handleChangeRadioButton}
                    value={finalValue}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                    sx={{
                        color: '#126FAA !important',

                    }}
                />
            </Grid>
            <Grid item lg={8} sx={{ display: 'flex' }}>
                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    mx:2
                }}>
                    <Image
                    src={image}
                    width={40}
                    height={20}
                    alt='card'
                     />
                </Box>
                <Box>
                    <Typography
                        sx={{
                            color: '#333',
                            fontSize: { xs: '12.1px', sm: '20px' },
                            fontStyle: 'normal',
                            fontWeight: 600
                        }}>
                        {cardName}
                      
                    </Typography>
                    <Typography
                     sx={{
                        color: '#969696',
                        fontSize: { xs: '12.1px', sm: '18px' },
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight:'normal'

                    }}>
                       {accountNumber}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default MasterCard