import { isValidPhoneNumber } from 'react-phone-number-input';

import * as Yup from 'yup';
export const profileValidationSchema = Yup.object({
  firstName: Yup.string().min(2).max(25).required('Enter First Name'),
  lastName: Yup.string().min(2).max(25).required('Enter Last Name'),
  email: Yup.string().email().required('Enter email'),
  landlineNumber: Yup.number().min(4),
  profileImage: Yup.mixed(),
  country: Yup.string().min(3).max(25),
  city: Yup.string().min(3).max(25),
  address: Yup.string().min(3).max(46),
  bio: Yup.string().min(10),
  whatsapp: Yup.string()
    .test('phone', 'Invalid Phone Number', (value) =>
      value ? isValidPhoneNumber(value) : true
    ),
});
