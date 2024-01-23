import React, { useState } from 'react'
import { Box, Button, Grid, Radio, Typography } from '@mui/material'
import RBInput from '../AgentProfile/Agent-Profile-Forms/RBInput'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import RBCheckbox from '../AgentProfile/Agent-Profile-Forms/RBCheckbox';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { ProceedPayment, addPaymentMethod } from '@/src/redux/slices/settings/PakageCartSlice';



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
    const { image, title, textField, checkBoxLable, cardType } = data
    const [selectedValue, setSelectedValue] = useState('a');
    const [addPayment, setAddPayment] = useState({})
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const inputHandleChange = (e) => {
        const { name, value } = e.target;
        setAddPayment((prevAddPayment) => ({
            ...prevAddPayment,
            [name]: value
        }));
    };
    const addData = () => {
        // Basic validation for the card number
        if (selectedValue === 'a' && !/^\d{16}$/.test(addPayment.card_number)) {
            console.log('Invalid card number');
            return;
        }
    
        // Basic validation for expiry date (Assuming MM-YY format)
        // const currentDate = new Date();
        // const [expiryMonth, expiryYear] = String(addPayment.expiry_date).split('-').map(Number);
    
        // // Adjusting the logic for expiry date validation
        // if (
        //     isNaN(expiryMonth) ||
        //     isNaN(expiryYear) ||
        //     expiryMonth < 1 ||
        //     expiryMonth > 12 ||
        //     expiryYear < currentDate.getFullYear() ||
        //     (expiryYear === currentDate.getFullYear() && expiryMonth <= currentDate.getMonth() + 1)
        // ) {
        //     console.log('Invalid expiry date');
        //     return;
        // }
    
        // Basic validation for CVV (Assuming a 3-digit CVV)
        if (!/^\d{3}$/.test(addPayment.cvv_no)) {
            console.error('Invalid CVV');
            return;
        }
    
        dispatch(ProceedPayment(addPayment));
    };
    
    
    
    return (
        <Box sx={{
            flexGrow: 1,
            width: '100%',
            height: { xs: 'auto', lg: '612px' },
            border: '2px solid #E4E4E4',
            borderRadius: '10px',

            backgroundColor: '#fff',
            backgroundImage: `url('${image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: { xs: '90%', sm: '70%', md: '70%', lg: '45%' },

        }}>
            <Grid
                container xs={12} item
            >
                <Grid item xs={12}>

                    <Box
                        sx={{
                            alignItems: 'center',
                            // gap: 1,
                            px: 4,
                            py: 4,
                            borderBottom: '2px solid #E4E4E4',
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#000',
                                fontSize: { xs: '12.1px', sm: '24px' },
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}>
                            {title}
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12}
                    sx={{
                        mx: { md: '30px', lg: '38px', xl: '40px' },
                        my: '40px',
                        width: '100%',
                        height: '70px',
                        backgroundColor: '#EDF7FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: { sm: 'center' },
                    }}>
                    <Grid items xs={2} sm={1} lg={1} sx={{
                        // border: '1px solid blue',
                        display: 'flex',
                        justifyContent: { xs: 'center', sm: 'flex-start' }
                    }
                    }>
                        <Radio
                            checked={selectedValue === 'a'}
                            onChange={handleChange}
                            value="a"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />

                    </Grid>
                    <Grid xs={7} sm={7} lg={8} sx={{
                        // border: '1px solid red',
                        color: '#333',
                        fontSize: { xs: '12.1px', sm: '20px' },
                        fontStyle: 'normal',
                        fontWeight: 600
                    }
                    }>
                        Credit Card Payment

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
                                    src={item}
                                    width={44}
                                    height={28}
                                    alt='card'
                                />
                            ))}
                        </Box>
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
                        checkBox,
                        values
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
                                        pl: { lg: 4, md: 2 },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            rowGap: '10px',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                gap: 1,
                                                color: '#333',
                                                fontSize: '20px',
                                                fontStyle: 'normal',
                                                fontWeight: 400
                                            }}
                                        >
                                            {label}
                                        </Typography>
                                        <Box
                                            sx={{
                                                // columnGap: 2,
                                                flexDirection: { xs: 'column', sm: 'row' },
                                                // rowGap: { xs: 3 },
                                            }}
                                        >
                                            <RBInput
                                                sx={{
                                                    width: width,
                                                    gap: 1,
                                                    textAlign: 'left',
                                                }}
                                                rows={rows}
                                                name={name}
                                                multiline={multiline}
                                                // value={values[name]}
                                                onChange={inputHandleChange}
                                                // error={errors[name] && touched[name] ? true : false}
                                                type={type}
                                                place={`${place}`}
                                            />
                                        </Box>
                                    </Box>
                                    {checkBox &&
                                        <Box>
                                            <Typography sx={{
                                                color: '#333',
                                                fontSize: '14px',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                my: 2

                                            }}>
                                                <RBCheckbox />
                                                {checkBoxLable}
                                            </Typography>
                                            <Button variant='primary' onClick={addData}>
                                                Add 
                                            </Button>
                                        </Box>
                                    }
                                </Box>
                            </Item>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    )
}

export default PaymentMethod
