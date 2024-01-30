import React, { useRef } from 'react';
import Image from 'next/image';
import { Box, Grid, Radio } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import InputTextField from './InputTextField';

const CreditCardType = ({ textField, cardTypeImage, handleChange, creditCardLable, selectedValue, handleChangeRadioButton, formik, NAME_ON_CARD }) => {
    const gridRef = useRef(null);

    const handleClick = () => {
        handleChangeRadioButton({ target: { value: 'name_on_card' } });
    };

    return (
        <>
            <Grid
                ref={gridRef}
                container
                onClick={handleClick}
                sx={{
                    mx: { md: '30px', lg: '38px', xl: '40px' },
                    my: '30px',
                    width: '100%',
                    height: '70px',
                    backgroundColor: selectedValue === 'name_on_card' ? '#EDF7FF' : 'transparent',
                    border: '1px solid #E9E9E9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { sm: 'center' },
                    cursor: 'pointer',}}>
                <Grid item xs={4} sm={1} lg={1} sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                }
                }>
                    <Radio
                        checked={selectedValue === 'name_on_card'}
                        onChange={handleChangeRadioButton}
                        value="name_on_card"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                        sx={{ color: '#126FAA !important' }}
                    />
                </Grid>
                <Grid item xs={8} sm={5} lg={3} sx={{
                    color: '#333',
                    fontSize: { xs: '12.1px', sm: '20px' },
                    fontStyle: 'normal',
                    fontWeight: 600
                }
                }>
                    {creditCardLable}
                </Grid>
                <Grid item xs={7} sm={2} lg={1} sx={{
                    display: 'flex',
                    justifyContent: {xs:'center',  md: 'flex-end' }
                }
                }>
                    <Box sx={{ display: 'flex', gap: '5px' }}>
                        {cardTypeImage?.map((item, index) => (
                            <Image
                                key={index}
                                src={item?.icon}
                                width={44}
                                height={28}
                                alt={item?.alt}
                            />
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={5} sm={4} lg={6} sx={{
                    display: 'flex',
                    justifyContent: { sm: 'flex-end !important' }
                }
                }>
                  {selectedValue === 'name_on_card' ? <KeyboardArrowDownIcon fontSize='large'/> : <KeyboardArrowRightIcon fontSize='large' sx={{color:'#666'}}/>}
                </Grid>
            </Grid>
            {selectedValue === NAME_ON_CARD && (
                <InputTextField textField={textField} handleChange={handleChange} formik={formik} />
            )}
        </>
    )
}
export default CreditCardType