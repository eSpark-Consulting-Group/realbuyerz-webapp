import { isValidPhoneNumber } from 'react-phone-number-input';

import * as Yup from 'yup';
export const profileValidationSchema = Yup.object({
  firstName: Yup.string().min(2).max(25).required('Enter First Name'),
  lastName: Yup.string().min(2).max(25).required('Enter Last Name'),
  email: Yup.string().email().required('Enter email'),
  landlineNumber: Yup.number().min(4).required('Enter Landline'),
  profileImage: Yup.mixed().required('Image is required'),
  country: Yup.string().min(3).max(25).required('Enter Country'),
  // city: Yup.string().min(3).max(25).required('Enter City'),
  address: Yup.string().min(3).max(40).required('Enter Address'),
  // bio: Yup.string().min(10).required('Enter Bio'),
  whatsapp: Yup.string()
    .test('phone', 'Invalid Phone Number', (value) =>
      value ? isValidPhoneNumber(value) : true
    )
    .required('Whatsapp is required'),
  // phoneNumber: Yup.string()
  //   .test('phone', 'Invalid Phone Number', (value) =>
  //     value ? isValidPhoneNumber(value) : true
  //   )
  //   .required('Whatsapp is required'),
});
