import * as Yup from 'yup';
import { LOGIN_FORM } from '@/src/constants/Login';

export const signupValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'First Name can only contain letters')
    .min(2, 'First Name must be at least 2 characters')
    .max(20, 'First Name must be at most 20 characters')
    .required('First Name is required'),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Last Name can only contain letters')
    .min(2, 'Last Name must be at least 2 characters')
    .max(20, 'Last Name must be at most 20 characters')
    .required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Email must be a valid format'
    )
    .trim('Email must not contain leading or trailing spaces')
    .required('Email is required'),
  contactNumber: Yup.string()
    .max(
      LOGIN_FORM.signupForm.maxLength,
      `Contact Number can't exceed ${LOGIN_FORM.signupForm.maxLength} characters`
    )
    .required('Contact number is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /[@$!%*?&]/,
      'Password must contain at least one special character'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});
