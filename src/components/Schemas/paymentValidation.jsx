import * as Yup from 'yup';

const paymentSchema = Yup.object().shape({
  name_on_card: Yup.string().required('Name on card is required'),
  card_number: Yup.string().matches(/^\d{16}$/, 'Invalid card number').required('Card number is required'),
  expiry_date: Yup.string()
    .matches(/^(0[1-9]|1[0-2])-(\d{2})$/, 'Invalid expiry date (MM-YY format)')
    .required('Expiry date is required')
    .test('not-in-past', 'Expiry date should not be in the past', function (value) {
      if (!value) return true;
      const [month, year] = value.split('-');
      const currentDate = new Date();
      const cardDate = new Date(`20${year}`, month - 1);
      return cardDate > currentDate;
    }),
  cvv_no: Yup.string().matches(/^\d{3,4}$/, 'Invalid CVV').required('CVV is required'),
});

export default paymentSchema;
