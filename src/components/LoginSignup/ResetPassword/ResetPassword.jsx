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
        width: '100%',
        maxWidth: '500px',
        minWidth: { sm: 'auto', md: '100%', lg: '500px' },
        height: '100%',
        minHeight: '600px',
        maxHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '-4px -4px 11px 0px #00000026,0px 4px 4px 0px #00000040',
        borderRadius: 2,
        background: '#fff',
      }}
    >
      <Box
        sx={{
          mx: 'auto',
          width: '100%',
          maxWidth: { xs: '90%', sm: '85%', lg: '86%' },
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          padding: '5px',
          gap: { xs: '10px', md: '10px' },
          px: 2,
        }}
      >
        <Typography
          sx={{
            color: '#FF631C',
            fontWeight: 600,
            fontSize: { xs: '19px', sm: '21px', md: '25px', lg: '30px' },
          }}
        >
          {LOGIN_FORM.resetPasswordCard.resetPassword}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '13px', sm: '14px', md: '16px' },
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
