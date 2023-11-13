'use client';
import React from 'react';
import { Agent_Profile_Form_Data } from '@/app/constants/AgentProfileForm';
import ProfileForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfileForm';
import ProfileFormMidText from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfileFormMidText';
import ProfilePasswordForm from '@/src/components/AgentProfile/Agent-Profile-Forms/ProfilePasswordForm';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { EditProfileSchema } from '@/src/components/Schemas';

const AgentProfile = () => {
  const [FirstDropdownValue, setFirstDropdownValue] = React.useState(
    '/images/agent_form/pakistan_flag.png'
  );
  const [SecondDropdownValue, setSecondDropdownValue] = React.useState(
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
  const allfields = { ...userDetail, ...userPassword };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: allfields,
    validationSchema: EditProfileSchema,
    onSubmit: (values, action) => {
      values.whatsapp = `${FirstDropSelect?.code}${values.whatsapp}`;
      values.mobile = `${SecondDropSelect?.code}${values.mobile}`;

      console.log(values, 'values');
      action.resetForm();
    },
  });

  return (
    <Box>
      <Grid
        container
        xs={11}
        item
        sx={{
          mx: '30px',
          display: 'block',
          border: '2px solid #E4E4E4',
          background: '#fff',
          borderRadius: '5px',
          mb: '20px',
        }}
      >
        <ProfileForm
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          data={Agent_Profile_Form_Data}
          FirstDropdownValue={FirstDropdownValue}
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
