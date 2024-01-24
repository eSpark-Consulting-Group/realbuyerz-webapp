import React, { useState } from 'react';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addPaymentMethod, updatePaymentMethodSelection } from '@/src/redux/slices/settings/PakageCartSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';


import RBInput from '../AgentProfile/Agent-Profile-Forms/RBInput';
import RBCheckbox from '../AgentProfile/Agent-Profile-Forms/RBCheckbox';
import paymentSchema from '../Schemas/paymentValidation';

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
    const { image, title, textField, checkBoxLable, cardType, creditCardLable, addButtonLable } = data;
    const [selectedValue, setSelectedValue] = useState('a');
    const [selected, setSelected] = React.useState(false);
    const { paymentMedthodDetails } = useSelector(
        (state) => state.PakageCart
        );
        const dispatch = useDispatch();
    const addData = () => {
        formik.handleSubmit();
    };

    const formik = useFormik({
        initialValues: {
            name_on_card: '',
            card_number: '',
            expiry_date: '',
            cvv_no: '',
        },
        validationSchema: paymentSchema,
        onSubmit: (values) => {
            dispatch(addPaymentMethod(values));
        },
    });
    const handleChange = (event) => {
        const selectedCardNumber = event.target.value;
        setSelected(selectedCardNumber);
        dispatch(updatePaymentMethodSelection({ cardNumber: selectedCardNumber, isSelected: false }));
      };
    return (
        <Box sx={{ flexGrow: 1, width: '100%', height: { xs: 'auto', lg: 'auto ' }, border: '2px solid #E4E4E4', borderRadius: '10px', backgroundColor: '#fff', backgroundImage: `url('${image}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: { xs: '90%', sm: '70%', md: '70%', lg: '45%' } }}>
            <Grid container xs={12} item>
                <Grid item xs={12}>
                    <Box sx={{ alignItems: 'center', px: 4, py: 4, borderBottom: '2px solid #E4E4E4' }}>
                        <Typography sx={{ color: '#000', fontSize: { xs: '12.1px', sm: '24px' }, fontWeight: 700 }}>
                            {title}
                        </Typography>
                    </Box>
                </Grid>
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
                {textField?.map((field, index) => {
                    const { label, place, type, rows, name, pt, sizes, width, multiline, checkBox } = field;

                    return (
                        <Grid key={index} item xs={sizes?.xs} sm={sizes?.sm} md={sizes?.md} lg={sizes?.lg}>
                            <Item>
                                <Box sx={{ width: '100%', height: '100%', mx: 'auto', pt: pt, pl: { lg: 4, md: 2 } }}>
                                    <Box
                                        sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px', pb: '10px' }}>
                                        <Typography sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, color: '#333', fontSize: '20px', fontWeight: 400 }}>
                                            {label}
                                        </Typography>

                                    </Box>
                                    <RBInput
                                        sx={{
                                            width: width, gap: 1, textAlign: 'left',
                                            '& input[type=number]::-webkit-inner-spin-button': {
                                                '-webkit-appearance': 'none',
                                                margin: 0,
                                            },
                                        }}
                                        rows={rows}
                                        name={name}
                                        multiline={multiline}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values[name]}
                                        error={formik.touched[name] && Boolean(formik.errors[name])}
                                        type={type}
                                        place={`${place}`}
                                    />
                                    {formik.touched[name] && formik.errors[name] && (
                                        <Typography sx={{ color: 'red', fontSize: '12px', fontStyle: 'italic', mt: 1 }}>
                                            {formik.errors[name]}
                                        </Typography>
                                    )}
                                </Box>
                            </Item>
                        </Grid>
                    );
                })}
                <Box sx={{ alignItems: 'center', px: { xs: 1, md: 3, lg: 5 }, pb: { xs: '50px', sm: '70px', md: '100px', lg: '130px' } }}>
                    <Typography sx={{
                        color: '#333',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal'
                    }}>
                        <RBCheckbox sx={{ pr: 0 }} />
                        {checkBoxLable}
                    </Typography>
                    <Button variant='primary' onClick={addData}>
                        {addButtonLable}
                    </Button>
                    <Box sx={{ my: '20px', maxWidth: '485px', }}>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: 500,
                                fontStyle: 'normal',
                                py: 2,
                                px: 3
                            }}>
                            My card
                        </Typography>
                        <RadioGroup
                            row
                            value={selected}
                            name="radio-buttons-group"
                            onChange={handleChange}
                        >
                            {paymentMedthodDetails.map((card) => (
                                <Box sx={{
                                    display: 'flex', justifyContent: 'space-between',
                                    border: '1px solid #E7E7E7', borderRadius: '10px', my: 1, padding: 1
                                }}>
                                    <Box>
                                        <FormControlLabel
                                    key={card.card_number}
                                    value={card.card_number}
                                    control={<Radio />}
                                    label={card.name_on_card}
                                />
                                    </Box>
                                    <Box>
                                        <Typography>{card.name_on_card}</Typography>
                                        <Typography>{card.card_number}</Typography>
                                    </Box>
                                    <Box>
                                        <Button>
                                            <DeleteIcon />
                                        </Button>
                                    </Box>
                                </Box>
                                
                            ))}
                        </RadioGroup>
                    </Box>
                </Box>
            </Grid>
        </Box>
    );
};

export default PaymentMethod;
