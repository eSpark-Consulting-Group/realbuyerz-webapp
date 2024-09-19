import * as Yup from 'yup';

export const passwordValidationSchema = Yup.object({
  oldPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Enter Old Password'),
  newPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Enter New Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Enter New Password'),
});
