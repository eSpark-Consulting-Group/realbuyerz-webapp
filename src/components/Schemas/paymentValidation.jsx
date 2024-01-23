import * as Yup from 'yup';

const paymentSchema = Yup.object().shape({
  name_on_card: Yup.string().required('Name on card is required'),
  card_number: Yup.string().matches(/^\d{16}$/, 'Invalid card number').required('Card number is required'),
  expiry_date: Yup.string().matches(/^(0[1-9]|1[0-2])-(\d{2})$/, 'Invalid expiry date (MM-YY format)').required('Expiry date is required'), 
  cvv_no: Yup.string().matches(/^\d{3}$/, 'Invalid CVV').required('CVV is required'),
});

export default paymentSchema;