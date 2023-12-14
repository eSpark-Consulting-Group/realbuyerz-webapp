export const AGENT_PREFERENCES = {
  heading: 'Preferences',
  saveChanges: ' Save Changes',
  preference: 'preference',
  updates: [
    {
      title: 'Email Notification',
      description: 'Allow to receive email notification',
      label: 'emailNotification',
      value: false,
    },
    {
      title: 'NewsLetter',
      description: 'Allow to stay updated & receive newsletter',
      label: 'newsLetters',
      value: false,
    },
    {
      title: 'Automated Reports',
      description: 'Allow to send us reports automatically incase of any issue',
      label: 'autoReport',
      value: false,
    },
  ],
  propertySize: [
    {
      label: 'Currency',
      placeholder: 'PKR',
      name: 'currencyUnit',
    },
    {
      label: 'Area Unit',
      placeholder: 'Sq.Ft',
      name: 'areaUnit',
    },
  ],
};

// export const PROPERTY_AREASIZE_AND_REPORT = {
//   report: {
//     emailNotification: false,
//     newsLetters: false,
//     autoReport: false,
//     currencyUnit: '',
//     areaUnit: '',
//   },
// };

// export const PREFERENCE = [
//   {
//     emailNotification: false,
//     newsLetter: false,
//     automatedReports: false,
//     currency: '',
//     areaUnit: '',
//   },
// ];
