export const Agent_Profile_Form_Data = {
  heading: 'Change Password',
  buttonText: 'Save changes',
  image: '/images/agent_form/agent_form_background.png',
  feilds: [
    {
      label: 'Full Name',
      place: 'Enter First Name',
      type: 'text',
      helperText: 'First Name',
      sizes:{xs:12, sm:12, md:5}
    },
    {
      label: '',
      place: 'Enter Last Name',
      type: 'text',
      helperText: 'Last Name',
      pt:'25px',
      sizes:{xs:12, sm:12, md:5}
    },
    {
      label: 'Email',
      place: '@gmail.com',
      type: 'email',
      helperText: '',
      sizes:{xs:12, sm:12, md:5}
    },
    {
      label: 'Landline',
      place: 'Enter Landline',
      type: 'number',
      helperText: '',
      sizes:{xs:12, sm:12, md:4}
    },
    // {
    //   label: 'Whatsapp',
    //   place: '+92',
    //   type: 'number',
    //   helperText: '',
    //   dropdowns: ['Pakistan', 'Japan', 'China'],
    // sizes:{xs:12, sm:12, md:6}
    // },
    // {
    //   label: 'Mobile',
    //   place: '+92',
    //   type: 'number',
    //   helperText: '',
    //   dropdowns: ['Pakistan', 'Japan', 'China'],
    //   buttonText: 'Verify',
    // sizes:{xs:12, sm:12, md:6}
    // },
    {
      label: 'Country',
      place: 'Enter Country',
      type: 'text',
      helperText: '',
      sizes:{xs:12, sm:12, md:4}
    },
    {
      label: 'City',
      place: 'Enter City',
      type: 'text',
      helperText: '',
      sizes:{xs:12, sm:12, md:6}
    },
    {
      label: 'Address',
      place: 'Add Address',
      type: 'text',
      helperText: '',
      sizes:{xs:12, sm:12, md:6}
    },
    {
      id: 'outlined-multiline-static',
      label: 'Bio',
      place: 'Enter Bio',
      type: 'textArea',
      helperText: '',
      rows: '4',
      sizes:{xs:12, sm:12, md:6}
    },
  ],
  passwordFeilds: [
    {
      label: 'Enter Old Password',
      place: 'Enter Old Password',
      type: 'password',
      helperText: '',
      sizes:{xs:12, sm:12, md:6}
    },
    {
      label: 'Enter New Password',
      place: 'Enter New Password',
      type: 'password',
      helperText: '',
      sizes:{xs:12, sm:12, md:6}
    },
    {
      label: 'Confirm Password',
      place: 'Confirm Password',
      type: 'password',
      helperText: '',
      sizes:{xs:12, sm:12, md:6}
    },
    {
      label: 'Update details in all property listings',
      type: 'checkbox',
      helperText: '',
      sizes:{xs:12, sm:12, md:6}
    },
  ],
};
