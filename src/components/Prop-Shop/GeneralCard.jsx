import { Box, Grid, Radio, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useRef } from 'react';

const GeneralCard = ({ image, cardName, accountNumber, selectedValue, handleChangeRadioButton, setCardTypeNumber }) => {
    const gridRef = useRef(null);
    const finalValue = cardName;
    const viweDetails = () =>{
        setCardTypeNumber(accountNumber)
        console.log(accountNumber)
    }

    const handleClick = () => {
        handleChangeRadioButton({ target: { value: finalValue } });
    };

    const maskAccountNumber = (number) => {
        if (!number) return '';
        const strNumber = String(number);
        const masked = '*'.repeat(Math.max(0, strNumber.length - 4)) + strNumber.slice(-4);
        return masked;
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
                mx: {md: '30px', lg: '38px', xl: '40px' },
                my: '10px',
                cursor: 'pointer',
                backgroundColor: selectedValue === finalValue ? '#EDF7FF' : 'transparent',
            }}
        >
            <Grid item xl={1} md={1} xs={2} sm={1}
                sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', xl: 'center' },
                }}
            >
                <Radio
                    checked={selectedValue === finalValue}
                    onChange={handleChangeRadioButton}
                    onClick={viweDetails}
                    value={finalValue}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                    sx={{
                        color: '#126FAA !important',

                    }}
                />
            </Grid>
            <Grid item xl={8} md={8} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start', lg: 'flex-start' ,xl: 'flex-start' }, pl: { xl: '20px' }, }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mx: 2
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
                            lineHeight: 'normal'

                        }}>
                         {maskAccountNumber(accountNumber)}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default GeneralCard