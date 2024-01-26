'use client';
import React, { useState } from 'react';
import { Agent_Profile_Form_Data } from '@/app/constants/AgentProfileForm';
import ProfileForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfileForm';
import ProfileFormMidText from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfileFormMidText';
import ProfilePasswordForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfilePasswordForm';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { passwordValidationSchema } from '@/src/components/Schemas/passwordValidationSchema';

const AgentProfile = () => {
  const [checkValue, setCheckValue] = useState(false);

  const [FirstDropdownValue, setFirstDropdownValue] = useState(
    '/images/agent_form/pakistan_flag.png'
  );
  const [SecondDropdownValue, setSecondDropdownValue] = useState(
    '/images/agent_form/pakistan_flag.png'
  );

  const { fields, buttonText, passwordfields } = Agent_Profile_Form_Data;

  const dropdowns = fields
    ?.filter((item) => item?.dropdowns)
    .map((val) => val?.dropdowns);

  const FirstDropSelect = dropdowns[0]?.find(
    (item) => item.icon === FirstDropdownValue
  );
  const SecondDropSelect = dropdowns[1]?.find(
    (item) => item.icon === SecondDropdownValue
  );
  const userDetail = Object.fromEntries(
    fields.map((field) => [field.name, ''])
  );
  const userPassword = Object.fromEntries(
    passwordfields?.map((field) => [field.name, ''])
  );

  const profileInitialValues = {
    ...userDetail,
  };

  const passwordInitialValues = {
    ...userPassword,
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      ...passwordInitialValues,
    },

    validationSchema: passwordValidationSchema,

    onSubmit: (values, action) => {
      values.whatsapp = `${FirstDropSelect?.code}${values.whatsapp}`;
      values.mobile = `${SecondDropSelect?.code}${values.mobile}`;

      console.log(values, 'values');
      setCheckValue(false);
      action.resetForm();
    },
  });

  return (
    <Box
      sx={{
        background: '#fff',
        textAlign: { xs: 'center', sm: 'left' },
        mx: { xs: 'auto', lg: 0 },
        width: {
          lg: '1200px',
          '@media (min-width: 1440px) and (max-width: 1568px)': {
            width: '100%',
          },
          '@media (min-width: 960px) and (max-width: 1439px)': {
            width: '90%',
          },
        },
      }}
    >
      <ProfileForm
        values={values}
        errors={errors}
        touched={touched}
        buttonText={buttonText}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        data={Agent_Profile_Form_Data}
        FirstDropdownValue={FirstDropdownValue}
        profileInitialValues={profileInitialValues}
        setFirstDropdownValue={setFirstDropdownValue}
        SecondDropdownValue={SecondDropdownValue}
        setSecondDropdownValue={setSecondDropdownValue}
      />
      <ProfileFormMidText />
      <ProfilePasswordForm
        values={values}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        checked={checkValue}
        setChecked={setCheckValue}
        data={Agent_Profile_Form_Data}
      />
      <Button
        type="submit"
        sx={{
          ml: { xs: 0, sm: 2.1, md: 4.1, lg: 7 },
          mb: { xs: 3, md: 5 },
          width: { xs: '90%', sm: 'auto', md: '160px' },
          height: { xs: '45px', md: '45px' },
          '&:hover': { color: '#fff' },
        }}
        variant="primary"
        onClick={checkValue ? handleSubmit : null}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default AgentProfile;
