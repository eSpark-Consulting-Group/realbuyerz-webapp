import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addPaymentMethod, updatePaymentMethodSelection, deletePaymentMethod, setFormError, } from '@/src/redux/slices/settings/PakageCartSlice';

import RBCheckbox from '../AgentProfile/Agent-Profile-Forms/RBCheckbox';
import { paymentSchema, easyPaisaSchema, jazzCashSchema } from '../Schemas/paymentValidation';
import CreditCardType from './CreditCardType';
import AccountType from './AccountType';
import CardType from './MasterCard';
import MasterCard from './MasterCard';
import VisaCard from './VisaCard';

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
    const { image, title, cardName, accountNumber, textField, checkBoxLable, cardTypeImage, creditCardLable, addButtonLable, easyPaisa, jazzCash, mobileAccountType } = data;
    const [selectedValue, setSelectedValue] = useState('name_on_card');
    const [selected, setSelected] = React.useState(false);
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const { paymentMedthodDetails, checkOrder } = useSelector(
        (state) => state.PakageCart
    );

    const formik = useFormik({
        initialValues: {
            name_on_card: '',
            card_number: '',
            expiry_date: '',
            cvv_no: '',
            easypaisa_number: '',
            jazzcash_number: '',
        },
        validationSchema: selectedValue !== 'jazzcash' && selectedValue !== 'easypaisa' ? paymentSchema : selectedValue === 'easypaisa' ? easyPaisaSchema : selectedValue === 'jazzcash' && jazzCashSchema,
        onSubmit: (values) => {
            const updatedValues = { ...values, isCheckBox: checked }
            delete updatedValues.easypaisa_number
            delete updatedValues.jazzcash_number
            const findCard = paymentMedthodDetails.find((item) => {
                return item.card_number === formik.values.card_number
            })
            if (findCard && (selectedValue !== 'jazzcash' || selectedValue !== 'easypaisa')) {
                dispatch(updatePaymentMethodSelection({ isSelected: findCard.isSelected, cardNumber: findCard.card_number, isCheckBox: checked }));
            } else if (selectedValue === 'jazzcash' || selectedValue === 'easypaisa') {
                if (selectedValue === 'jazzcash') {
                    dispatch(addPaymentMethod({ jazzcash_number: values.jazzcash_number }));
                }
                else {
                    dispatch(addPaymentMethod({ easypaisa_number: values.easypaisa_number }));
                }

            } else {
                dispatch(addPaymentMethod(updatedValues));
            }

        },

    });


    const handleChangeRadioButton = (e,) => {
        setSelectedValue(e.target.value)
    }

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
        if ((formik.values.name_on_card && formik.values.card_number && formik.values.expiry_date && formik.values.cvv_no) || (formik.values.jazzcash_number || formik.values.easypaisa_number)) {
            formik.handleSubmit();
        }
    }, [formik.values, dispatch, selectedValue]);
    useEffect(() => {
        if (selectedValue === 'name_on_card' || selectedValue === 'jazzcash' || selectedValue === 'easypaisa') {
            formik.resetForm()
        }
    }, [selectedValue]);
    function getCardType(cardNumber) {
        const visaRegex = /^4\d{12}(?:\d{3})?$/;
        const mastercardRegex = /^5[1-5]\d{14}$/;

        if (visaRegex.test(cardNumber)) {
            return "Visa";
        } else if (mastercardRegex.test(cardNumber)) {
            return "Mastercard";
        } else {
            return "Unknown";
        }
    }
  
    return (
        <Box sx={{ flexGrow: 1, width: '100%', height: { xs: 'auto', lg: 'auto ' }, pb: '60px', border: '2px solid #E4E4E4', borderRadius: '10px', backgroundColor: '#fff', backgroundImage: `url('${image}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: { xs: '90%', sm: '70%', md: '70%', lg: '45%' } }}>
            <Grid container xs={12} item>
                <Grid item xs={12}>
                    <Box sx={{ alignItems: 'center', px: 4, py: 4, borderBottom: '2px solid #E4E4E4' }}>
                        <Typography sx={{ color: '#000', fontSize: { xs: '12.1px', sm: '24px' }, fontWeight: 700 }}>
                            {title}
                        </Typography>
                    </Box>
                </Grid>
                {
                    checkOrder.map((card, index) => (
                        card.isCheckBox && (
                            <>
                                {getCardType(card.card_number) === "Mastercard" && (
                                    <MasterCard image={data?.masterCard?.image} cardName={data?.masterCard?.cardName} accountNumber={data?.masterCard?.accountNumber} selectedValue={selectedValue} handleChangeRadioButton={handleChangeRadioButton} />
                                )}
                                {getCardType(card.card_number) === "Visa" && (
                                    <VisaCard image={data?.visaCard?.image} cardName={data?.visaCard?.cardName} accountNumber={data?.visaCard?.accountNumber} selectedValue={selectedValue} handleChangeRadioButton={handleChangeRadioButton} />
                                )}
                            </>
                        )
                    ))
                }
                <CreditCardType
                    cardTypeImage={cardTypeImage}
                    creditCardLable={creditCardLable}
                    addButtonLable={addButtonLable}
                    selectedValue={selectedValue}
                    handleChangeRadioButton={handleChangeRadioButton}
                    handleChange={handleChange}
                    textField={textField}
                    formik={formik}
                />
                <Box sx={{
                    alignItems: 'center', px: { xs: 1, md: 3, lg: 5 },
                    //  pb: { xs: '50px', sm: '70px', md: '100px', lg: '130px' } 
                }}>
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
                    {/* <PaymentMethodList
                        selected={selected}
                        handleChange={handleChange}
                        paymentMedthodDetails={paymentMedthodDetails}
                        handleDelete={handleDelete}
                    /> */}
                </Box>
                <AccountType
                    AccountName={'Easy paisa'}
                    selectedValue={selectedValue}
                    handleChangeRadioButton={handleChangeRadioButton}
                    handleChange={handleChange}
                    textField={easyPaisa}
                    formik={formik}
                />
                <AccountType
                    AccountName={'Jazz Cash'}
                    selectedValue={selectedValue}
                    handleChangeRadioButton={handleChangeRadioButton}
                    handleChange={handleChange}
                    textField={jazzCash}
                    formik={formik}
                />
            </Grid>
        </Box>
    );
};

export default PaymentMethod;