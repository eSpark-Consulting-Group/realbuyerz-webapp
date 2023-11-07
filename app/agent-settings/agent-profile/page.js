'use client';
import { Agent_Profile_Form_Data } from '@/app/constants/AgentProfileForm';
import ProfileForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfileForm';
import ProfileFormMidText from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfileFormMidText';
import ProfilePasswordForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfilePasswordForm';
import AgentProfiles from '@/src/components/AgentProfile/AgentProfiles';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { AGENT_PROFILE_DATA } from '@/app/constants/AgentProfile';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { EditProfileSchema } from '@/src/components/Schemas';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  alignItems: 'center',
  display: 'flex',
  border: 'none',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}));

const AgentProfile = () => {
  const { feilds, buttonText, passwordFeilds, Profile } =
    Agent_Profile_Form_Data;
  const userDetail = Object.fromEntries(
    feilds.map((field) => [field.name, ''])
  );
  const userPassword = Object.fromEntries(
    passwordFeilds?.map((field) => [field.name, ''])
  );
  const allFeilds = { ...userDetail, ...userPassword };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: allFeilds,
      validationSchema: EditProfileSchema,
      onSubmit: (values, action) => {
        console.log(values, 'values');
        action.resetForm();
      },
    });
  return (
    <Box>
      <Grid
        container
        xs={11}
        md={9}
        item
        sx={{
          mx: 'auto',
          display: 'block',
          border: '2px solid #E4E4E4',
          my: { xs: 4, sm: 10 },
        }}
      >
        <AgentProfiles data={AGENT_PROFILE_DATA} />
        <ProfileForm
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          data={Agent_Profile_Form_Data}
        />
        <ProfileFormMidText />
        <ProfilePasswordForm
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          data={Agent_Profile_Form_Data}
        />
        <Button
          type="submit"
          sx={{
            ml: { xs: 2, md: 7 },
            mb: { xs: 3, md: 5 },
            width: { xs: '90%', sm: 'auto', md: '160px' },
            height: { xs: '100%', sm: 'auto', md: '45px' },
            '&:hover': { color: '#fff' },
          }}
          variant="primary"
          onClick={handleSubmit}
        >
          {buttonText}
        </Button>
      </Grid>
    </Box>
  );
};

export default AgentProfile;
