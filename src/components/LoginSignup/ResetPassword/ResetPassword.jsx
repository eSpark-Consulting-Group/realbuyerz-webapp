'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';

import { Box } from '@mui/material';

import Continue from '../ForgetPassword/Continue';
import PasswordAndConfirmFields from '../Login/PasswordAndConfirmField';
import SemiBoldTypography from '../Common/SemiBoldTypography';
import NormalTypography from '../Common/NormalTypography';

import { resetPasswordToken } from '@/src/utils/apis/auth/resetPasswordToken';

import resetPasswordSchema from '../../Schemas/resetPasswordValidationSchema';
import { LOGIN_FORM, LOGIN_ROUTERS } from '@/src/constants/Login';

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
          gap: '10px',
          px: 2,
        }}
      >
        <SemiBoldTypography text={LOGIN_FORM.resetPasswordCard.resetPassword} />

        <NormalTypography
          text={LOGIN_FORM.resetPasswordCard.createNewPassword}
          reset
        />

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
