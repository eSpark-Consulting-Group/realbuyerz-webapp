import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addPaymentMethod, updatePaymentMethodSelection, deletePaymentMethod, setFormError, } from '@/src/redux/slices/settings/PakageCartSlice';

import RBInput from '../AgentProfile/Agent-Profile-Forms/RBInput';
import RBCheckbox from '../AgentProfile/Agent-Profile-Forms/RBCheckbox';
import paymentSchema from '../Schemas/paymentValidation';
import PaymentMethodList from './PaymentMethodList';
import CreditCardType from './CreditCardType';

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
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const { paymentMedthodDetails } = useSelector(
        (state) => state.PakageCart
    );

    const formik = useFormik({
        initialValues: {
            name_on_card: '',
            card_number: '',
            expiry_date: '',
            cvv_no: '',
        },
        validationSchema: paymentSchema,
        onSubmit: (values) => {
            const updatedValues = { ...values, isCheckBox: checked }
            const findCard = paymentMedthodDetails.find((item) => {
                return item.card_number === formik.values.card_number
            })
            if (findCard) {
                dispatch(updatePaymentMethodSelection({ isSelected: findCard.isSelected, cardNumber: findCard.card_number, isCheckBox: checked }));
            }
            else {
                dispatch(addPaymentMethod(updatedValues));
            }
        },
    });

    const handleChangeCheckBox = (event) => {
        const isChecked = event.target.checked;
        setChecked(isChecked);
        const findIndexOfCard = paymentMedthodDetails.findIndex((item) => {
            return item.card_number === formik.values.card_number
        })
        if (findIndexOfCard !== -1) {
            dispatch(updatePaymentMethodSelection({ isSelected: false, cardNumber: formik.values.card_number, isCheckBox: isChecked }));
        }
    };

    const handleChange = (event) => {
        const selectedCardNumber = event.target.value;
        setSelected(selectedCardNumber);
        const checked = paymentMedthodDetails.find((item) => {
            return item.card_number === Number(selectedCardNumber)
        })
        dispatch(updatePaymentMethodSelection({ cardNumber: selectedCardNumber, isSelected: true, isCheckBox: checked.isCheckBox }));
    };

    const handleDelete = (index) => {
        dispatch(deletePaymentMethod(index));
    };

    useEffect(() => {
        dispatch(setFormError(Object.values(formik.errors)[0]));
    }, [formik.errors]);

    useEffect(() => {
        if (formik.values.name_on_card && formik.values.card_number && formik.values.expiry_date && formik.values.cvv_no) {
            formik.handleSubmit();
        }
    }, [formik.values, dispatch]);
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
                <CreditCardType
                    cardType={cardType}
                    creditCardLable={creditCardLable}
                    addButtonLable={addButtonLable}
                    selectedValue={selectedValue}
                    handleChange={handleChange}
                />
                {textField?.map((field, index) => {
                    const { label, place, type, rows, name, pt, sizes, width, multiline } = field;
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
                                        <Typography sx={{ color: 'red', fontSize: '12px', fontStyle: 'normal', mt: 1 }}>
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
                        <RBCheckbox sx={{ pr: 0 }}
                            checked={checked}
                            onChange={handleChangeCheckBox}
                            setChecked={setChecked}
                        />
                        {checkBoxLable}
                    </Typography>
                    <PaymentMethodList
                        selected={selected}
                        handleChange={handleChange}
                        paymentMedthodDetails={paymentMedthodDetails}
                        handleDelete={handleDelete}
                    />
                </Box>
            </Grid>
        </Box>
    );
};

export default PaymentMethod;
