'use client';
import { Box, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { LOGIN_FORM, LOGIN_ROUTERS } from '@/src/constants/Login';
import { resetPasswordToken } from '@/src/utils/apis/auth/resetPasswordToken';
import resetPasswordSchema from '../../Schemas/resetPasswordValidationSchema';
import Continue from '../ForgetPassword/Continue';
import PasswordAndConfirmFields from '../Login/PasswordAndConfirmField';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    showPassword: false,
    showConfirmPassword: false,
    password: '',
    confirmPassword: '',
  });

  const handleFieldToggle = (fieldName) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  };

  const router = useRouter();
  const searchParams = useSearchParams();

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {
      mutate({ password: values.password, token: searchParams.get('token') });
    },
  });

  const passwordsMatch =
    formik.values.password === formik.values.confirmPassword;

  const backToSignin = () => {
    router.push(LOGIN_ROUTERS.signin);
  };

  const { mutate } = useMutation({
    mutationFn: resetPasswordToken,
    onSuccess: () => {
      router.push(LOGIN_ROUTERS.signin);
    },
  });

  return (
    <Box
      sx={{
        width: { xs: '90%', md: '500px' },
        height: { xs: '400px', md: '600px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '-4px -4px 11px rgba(0, 0, 0, 0.15)',
        borderRadius: '10px',
        background: '#fff',
        margin: 'auto',
        zIndex: 2,
        '@media (max-width: 1286px)': {
          width: '400px',
        },
        '@media (max-width: 400px)': {
          width: '90% ',
        },
      }}
    >
      <Box
        sx={{
          width: { xs: '70%', md: '320px' },
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          gap: { xs: '7px', md: '15px' },
          paddingTop: { xs: '0px', md: '40px' },
        }}
      >
        <Typography
          sx={{
            color: '#FF631C',
            fontSize: { xs: '18px', md: '30px' },
            fontWeight: 600,
          }}
        >
          {LOGIN_FORM.resetPasswordCard.resetPassword}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '12px', md: '16px' },
            fontWeight: 400,
          }}
        >
          {LOGIN_FORM.resetPasswordCard.createNewPassword}
        </Typography>
        <PasswordAndConfirmFields
          formik={formik}
          formData={formData}
          handleFieldToggle={handleFieldToggle}
          passwordsMatch={passwordsMatch}
        />
        <Continue
          checkPasswordMatch={formik.handleSubmit}
          handleBackToLogin={backToSignin}
          handleContinue={formik.handleSubmit}
        />
      </Box>
    </Box>
  );
};

export default ResetPassword;
