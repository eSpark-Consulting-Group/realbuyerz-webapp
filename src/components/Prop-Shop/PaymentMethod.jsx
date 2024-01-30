import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { PAYMENT_METHODE_DATA } from '@/app/constants/PaymentMethod';
import { addPaymentMethod, updatePaymentMethodSelection, deletePaymentMethod, setFormError, updateOrderMethodSelection, isResetForm, } from '@/src/redux/slices/settings/PakageCartSlice';
import { paymentSchema, easyPaisaSchema, jazzCashSchema } from '../Schemas/paymentValidation';

import RBCheckbox from '../AgentProfile/Agent-Profile-Forms/RBCheckbox';
import CreditCardType from './CreditCardType';
import AccountType from './AccountType';
import MasterCard from './MasterCard';
import VisaCard from './VisaCard';
import GeneralCard from './GeneralCard';

const PaymentMethod = ({ data }) => {
    const { image, title, textField, checkBoxLable, cardTypeImage, creditCardLable, addButtonLable, easyPaisa, jazzCash, } = data;
    const { JAZZ_CASH, EASY_PAISA, ACCOUNT_NAME_EASYPAISA, ACCOUNT_NAME_JAZZCASH, VISA, MASTER_CARD, NAME_ON_CARD, GENERAL_CARD } = PAYMENT_METHODE_DATA.constantLabel
    const [selectedValue, setSelectedValue] = useState(NAME_ON_CARD);
    const [selected, setSelected] = useState(false);
    const [checked, setChecked] = useState(false);
    const [cardTypeNumber, setCardTypeNumber] = useState();

    const dispatch = useDispatch();
    const { paymentMedthodDetails, checkOrder, resetCalled } = useSelector(
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
        validationSchema: selectedValue !== JAZZ_CASH && selectedValue !== EASY_PAISA ? paymentSchema : selectedValue === EASY_PAISA ? easyPaisaSchema : selectedValue === JAZZ_CASH && jazzCashSchema,
        onSubmit: (values) => {
            const updatedValues = { ...values, isCheckBox: checked }
            delete updatedValues.easypaisa_number
            delete updatedValues.jazzcash_number
            const findCard = paymentMedthodDetails.find((item) => {
                return item.card_number === formik.values.card_number
            })
            if (findCard && (selectedValue !== JAZZ_CASH || selectedValue !== EASY_PAISA)) {
                dispatch(updatePaymentMethodSelection({ isSelected: findCard.isSelected, cardNumber: findCard.card_number, isCheckBox: checked }));
            } else if (selectedValue === JAZZ_CASH || selectedValue === EASY_PAISA) {
                if (selectedValue === JAZZ_CASH) {
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
        if (
            (formik.values.name_on_card &&
                formik.values.card_number &&
                formik.values.expiry_date &&
                formik.values.cvv_no) ||
            (selectedValue === EASY_PAISA && formik.values.easypaisa_number) ||
            (selectedValue === JAZZ_CASH && formik.values.jazzcash_number)
        ) {
            formik.handleSubmit();
        }
    }, [formik.values, dispatch, selectedValue]);

    useEffect(() => {
        if (selectedValue === NAME_ON_CARD || selectedValue === JAZZ_CASH || selectedValue === EASY_PAISA || resetCalled === true) {
            formik.resetForm()
            dispatch(isResetForm(false))
            setChecked(false)
        }
    }, [selectedValue, resetCalled]);

    useEffect(() => {
        if (selectedValue === GENERAL_CARD || selectedValue === MASTER_CARD || selectedValue === VISA) {
            // const findPayment = paymentMedthodDetails.filter((item) => (
            //     item.card_number === cardTypeNumber
            // ))
            const findOrder = checkOrder.filter((item) => (
                item.card_number === cardTypeNumber
            ))
            // findPayment.length === 1 &&
            if ( findOrder.length === 1) {
                // dispatch(updatePaymentMethodSelection({ cardNumber: findPayment[0].card_number, isSelected: true, isCheckBox: true }));
                dispatch(updateOrderMethodSelection({ cardNumber: findOrder[0].card_number, isSelected: true, isCheckBox: true }));
            }
        }
        else if (selectedValue === NAME_ON_CARD || selectedValue === EASY_PAISA || selectedValue === JAZZ_CASH  ) {
            // paymentMedthodDetails.forEach((item) => {
            //     dispatch(updatePaymentMethodSelection({ cardNumber: item.card_number, isSelected: false, isCheckBox: item.isCheckBox }));
            //     return false
            // })
            checkOrder.forEach((item) => {
                dispatch(updateOrderMethodSelection({ cardNumber: item.card_number, isSelected: false, isCheckBox: item.isCheckBox }));
                return false
            })
        }
    }, [selectedValue]);
    console.log(resetCalled, 'homeeee')


    const getCardType = (cardNumber) => {
        const visaRegex = /^4\d{12}(?:\d{3})?$/;
        const mastercardRegex = /^5[1-5]\d{14}$/;

        if (visaRegex.test(cardNumber)) {
            return VISA;
        } else if (mastercardRegex.test(cardNumber)) {
            return MASTER_CARD;
        } else {
            return GENERAL_CARD;
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
                                {getCardType(card.card_number) === MASTER_CARD && (
                                    <MasterCard setCardTypeNumber={setCardTypeNumber} image={data?.masterCard?.image} cardName={data?.masterCard?.cardName} accountNumber={card?.card_number} selectedValue={selectedValue} handleChangeRadioButton={handleChangeRadioButton} />
                                )}
                                {getCardType(card.card_number) === VISA && (
                                    <VisaCard setCardTypeNumber={setCardTypeNumber} image={data?.visaCard?.image} cardName={data?.visaCard?.cardName} accountNumber={card?.card_number} selectedValue={selectedValue} handleChangeRadioButton={handleChangeRadioButton} />
                                )}
                                {getCardType(card.card_number) === GENERAL_CARD && (
                                    <GeneralCard setCardTypeNumber={setCardTypeNumber} image={data?.generalCard?.image} cardName={data?.generalCard?.cardName} accountNumber={card?.card_number} selectedValue={selectedValue} handleChangeRadioButton={handleChangeRadioButton} />
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
                    NAME_ON_CARD={NAME_ON_CARD}
                />
                <Box sx={{
                    alignItems: 'center', px: { xs: 1, md: 3, lg: 5 },
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
                </Box>
                <AccountType
                    AccountName={ACCOUNT_NAME_EASYPAISA}
                    selectedValue={selectedValue}
                    handleChangeRadioButton={handleChangeRadioButton}
                    handleChange={handleChange}
                    textField={easyPaisa}
                    formik={formik}
                />
                <AccountType
                    AccountName={ACCOUNT_NAME_JAZZCASH}
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