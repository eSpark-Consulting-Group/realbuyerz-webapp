import { Box, Grid, Radio, TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InputTextField from './InputTextField'

const CreditCardType = ({ textField, cardTypeImage, handleChange, creditCardLable, selectedValue, handleChangeRadioButton, formik }) => {
    const selectValueOfRadio = textField.find((item) => item.name);
    const finalValue = selectValueOfRadio.name;
    return (
        <>
            <Grid xs={12}
            container
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
                }}>
                <Grid item xs={4} sm={1} lg={1} sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    // pr: { lg: '100px !important', },
                }
                }>
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
                  {selectedValue === 'name_on_card' ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                </Grid>
            </Grid>
            {selectedValue === 'name_on_card' && (
                <InputTextField textField={textField} handleChange={handleChange} formik={formik} />
            )}
        </>
    )
}
export default CreditCardType