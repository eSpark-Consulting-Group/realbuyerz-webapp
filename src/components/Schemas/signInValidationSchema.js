import * as yup from 'yup';

export const AuthSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
});
