import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { PAYMENT_METHODE_DATA } from '@/app/constants/PaymentMethod';
import {
  updatePaymentMethodSelection,
  setFormError,
} from '@/src/redux/slices/settings/PakageCartSlice';

import RBCheckbox from '../AgentProfile/Agent-Profile-Forms/RBCheckbox';
import CreditCardType from './CreditCardType';
import AccountType from './AccountType';
import MasterCard from './MasterCard';
import VisaCard from './VisaCard';
import GeneralCard from './GeneralCard';

const PaymentMethod = ({
  data,
  formik,
  selectedValue,
  setSelectedValue,
  checked,
  setState,
  setChecked,
  paymentMedthodDetails,
  handleChange,
  handleChangeCheckBox,
  setTypeCard,
  typeCard,
  selectCardId,
}) => {
  const {
    image,
    title,
    textField,
    checkBoxLable,
    cardTypeImage,
    creditCardLable,
    addButtonLable,
    easyPaisa,
    jazzCash,
  } = data;
  const {
    JAZZ_CASH,
    EASY_PAISA,
    ACCOUNT_NAME_EASYPAISA,
    ACCOUNT_NAME_JAZZCASH,
    VISA,
    MASTER_CARD,
    NAME_ON_CARD,
    GENERAL_CARD,
  } = PAYMENT_METHODE_DATA.constantLabel;
  const [cardTypeNumber, setCardTypeNumber] = useState();

  const dispatch = useDispatch();
  const handleChangeRadioButton = (e) => {
    setSelectedValue(e.target.value);
    setState(false);
  };

  useEffect(() => {
    dispatch(setFormError(Object.values(formik.errors)));
  }, [formik.errors]);

  useEffect(() => {
    if (selectedValue === '') {
      setState(false);
    }
  }, [selectedValue]);

  useEffect(() => {
    if (
      selectedValue === GENERAL_CARD ||
      selectedValue === MASTER_CARD ||
      selectedValue === VISA
    ) {
      const findOrder = paymentMedthodDetails?.filter(
        (item) => item.card_number === cardTypeNumber
      );
      if (findOrder.length === 1) {
        dispatch(
          updatePaymentMethodSelection({
            cardNumber: findOrder[0].card_number,
            isSelected: true,
            isCheckBox: true,
          })
        );
      }
    } else if (
      selectedValue === NAME_ON_CARD ||
      selectedValue === EASY_PAISA ||
      selectedValue === JAZZ_CASH
    ) {
      paymentMedthodDetails?.forEach((item) => {
        dispatch(
          updatePaymentMethodSelection({
            cardNumber: item.card_number,
            isSelected: false,
            isCheckBox: item.isCheckBox,
          })
        );
        return false;
      });
    }
  }, [selectedValue]);

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
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '100%',
        height: { xs: 'auto', lg: 'auto ' },
        pb: '60px',
        border: '2px solid #E4E4E4',
        borderRadius: '10px',
        backgroundColor: '#fff',
        backgroundImage: `url('${image}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: { xs: '90%', sm: '70%', md: '70%', lg: '45%' },
      }}
    >
      <Grid container xs={12} item>
        <Grid item xs={12}>
          <Box
            sx={{
              alignItems: 'center',
              px: 4,
              py: 4,
              borderBottom: '2px solid #E4E4E4',
            }}
          >
            <Typography
              sx={{
                color: '#000',
                fontSize: { xs: '12.1px', sm: '24px' },
                fontWeight: 700,
              }}
            >
              {title}
            </Typography>
          </Box>
        </Grid>
        {paymentMedthodDetails?.map(
          (card) =>
            card?.isCheckBox && (
              <>
                {getCardType(card.card_number) === MASTER_CARD && (
                  <MasterCard
                    setCardTypeNumber={setCardTypeNumber}
                    image={data?.masterCard?.image}
                    cardName={data?.masterCard?.cardName}
                    accountNumber={card?.card_number}
                    selectedValue={selectedValue}
                    handleChangeRadioButton={handleChangeRadioButton}
                    cardNo={card?.card_number}
                    setTypeCard={setTypeCard}
                    typeCard={typeCard}
                    paymentMedthodDetails={paymentMedthodDetails}
                    setSelectedValue={setSelectedValue}
                  />
                )}
                {getCardType(card.card_number) === VISA && (
                  <VisaCard
                    setCardTypeNumber={setCardTypeNumber}
                    image={data?.visaCard?.image}
                    cardName={data?.visaCard?.cardName}
                    accountNumber={card?.card_number}
                    selectedValue={selectedValue}
                    handleChangeRadioButton={handleChangeRadioButton}
                    cardNo={card?.card_number}
                    setTypeCard={setTypeCard}
                    typeCard={typeCard}
                    paymentMedthodDetails={paymentMedthodDetails}
                    id={card.id}
                    setSelectCardId={selectCardId}
                    setSelectedValue={setSelectedValue}
                  />
                )}
                {getCardType(card.card_number) === GENERAL_CARD && (
                  <GeneralCard
                    setCardTypeNumber={setCardTypeNumber}
                    image={data?.generalCard?.image}
                    cardName={data?.generalCard?.cardName}
                    accountNumber={card?.card_number}
                    selectedValue={selectedValue}
                    handleChangeRadioButton={handleChangeRadioButton}
                    cardNo={card?.card_number}
                    setTypeCard={setTypeCard}
                    typeCard={typeCard}
                    setSelectCardId={selectCardId}
                    paymentMedthodDetails={paymentMedthodDetails}
                    setSelectedValue={setSelectedValue}
                  />
                )}
              </>
            )
        )}
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
          setTypeCard={setTypeCard}
        />
        <Box
          sx={{
            alignItems: 'center',
            px: { xs: 1, md: 3, lg: 5 },
          }}
        >
          <Typography
            sx={{
              color: '#333',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            <RBCheckbox
              sx={{ pr: 0 }}
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
