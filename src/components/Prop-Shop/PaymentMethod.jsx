import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import RBInput from '../AgentProfile/Agent-Profile-Forms/RBInput'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import RBCheckbox from '../AgentProfile/Agent-Profile-Forms/RBCheckbox';
import { width } from '@mui/system';
import Image from 'next/image';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    alignItems: 'center',
    display: 'flex',
    border: 'none',
    boxShadow: 'none',
    color: theme.palette.text.secondary,
}));

const PaymentMethod = ({ data }) => {
    const { image, title, textField, checkBoxLable, masterCard, visaCard } = data
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container xs={12} item
                sx={{
                    width: '100%',
                    // height: { xs: 'auto', lg: '612px' },
                    py: 2,
                    border: '2px solid #E4E4E4',
                    borderRadius: '10px',
                    backgroundColor: '#fff',
                    backgroundImage: `url('${image}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: { xs: '90%', sm: '70%', md: '70%', lg: '60%' },
                }}
            >
                <Grid item xs={12}>

                    <Box
                        sx={{
                            display: { xs: 'block', lg: 'flex' },
                            alignItems: 'center',
                            gap: 1,
                            px: 4,
                            py: 3,
                            borderBottom: '2px solid #E4E4E4',
                        }}
                    >
                        <Typography variant="h4">
                            {title}
                        </Typography>
                    </Box>
                </Grid>
                <Grid container xs={12}
                    sx={{
                        mx: '41px',
                        my: '30px',
                        width: '100%',
                        height: '70px',
                        backgroundColor: '#EDF7FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'


                    }}>
                    <Grid items xs={2} sx={{

                    }
                    }>
                        dot

                    </Grid>
                    <Grid xs={2} sx={{

                    }
                    }>
                        Credit Card Payment

                    </Grid>
                    <Grid xs={2} sx={{

                    }
                    }>
                        <Image src={visaCard} width={60} height={100} alt='card' />

                    </Grid>

                </Grid>

                {textField?.map((field, index) => {
                    const {
                        label,
                        place,
                        type,
                        rows,
                        name,
                        pt,
                        sizes,
                        width,
                        multiline,
                        checkBox
                    } = field;

                    return (
                        <Grid
                            key={index}
                            item
                            xs={sizes?.xs}
                            sm={sizes?.sm}
                            md={sizes?.md}
                            lg={sizes?.lg}
                        >
                            <Item>
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        mx: 'auto',
                                        pt: pt,
                                        pl: { lg: 5, md: 2 },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            rowGap: '18px',
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                gap: 1,
                                            }}
                                        >
                                            {label}
                                        </Typography>
                                        <Box
                                            sx={{
                                                columnGap: 2,
                                                flexDirection: { xs: 'column', sm: 'row' },
                                                rowGap: { xs: 3 },
                                            }}
                                        >
                                            <RBInput
                                                sx={{
                                                    width: width,
                                                    gap: 1,
                                                    textAlign: 'left',
                                                    '& input[type=number]::-webkit-inner-spin-button': {
                                                        WebkitAppearance: 'none',
                                                        margin: 0,
                                                    },
                                                    '.MuiFormHelperText-contained': {
                                                        marginLeft: 0.5,
                                                    },
                                                }}
                                                rows={rows}
                                                name={name}
                                                multiline={multiline}
                                                // value={values[name]}
                                                // onChange={handleChange}
                                                // error={errors[name] && touched[name] ? true : false}
                                                type={type}
                                                place={`${place} ${label === 'Whatsapp'
                                                    ? selectedCountryObject1?.code
                                                    : '' ||
                                                    (label === 'Mobile'
                                                        ? selectedCountryObject2?.code
                                                        : '')
                                                    }`}
                                            />
                                        </Box>
                                    </Box>
                                    {checkBox &&

                                        <Box>
                                            <Typography>
                                                <RBCheckbox />
                                                {checkBoxLable}
                                            </Typography>
                                        </Box>
                                    }
                                </Box>
                            </Item>
                        </Grid>
                    );
                })}
            </Grid>
            {/* {checkBox && */}
            {/* }    */}
        </Box>
    )
}

export default PaymentMethod
