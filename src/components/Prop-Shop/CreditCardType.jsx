import { Box, Grid, Radio } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const CreditCardType = ({cardType, handleChange, creditCardLable, selectedValue }) => {
    return (
        <Grid xs={12}
            sx={{
                mx: { md: '30px', lg: '38px', xl: '40px' },
                my: '30px',
                width: '100%',
                height: '70px',
                backgroundColor: '#EDF7FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: { sm: 'center' },
            }}>
            <Grid items xs={2} sm={1} lg={1} sx={{
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'flex-start' },
                pr: { lg: '100px !important', },
            }
            }>
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                    sx={{
                        color: '#126FAA !important',
                        pl: 0,
                    }}
                />

            </Grid>
            <Grid xs={7} sm={7} lg={8} sx={{
                color: '#333',
                fontSize: { xs: '12.1px', sm: '20px' },
                fontStyle: 'normal',
                fontWeight: 600
            }
            }>
                {creditCardLable}
            </Grid>
            <Grid xs={1} sm={2} lg={2} sx={{
                display: 'flex',
                justifyContent: { md: 'flex-end' }
            }
            }>
                <Box sx={{ display: 'flex', gap: '5px' }}>
                    {cardType?.map((item, index) => (
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
        </Grid>
    )
}
export default CreditCardType
