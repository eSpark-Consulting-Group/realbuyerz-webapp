export const PAYMENT_METHODE_DATA = {
    title: 'Payment Method',
    image: '/images/agent_form/agent_form_background.png',
    checkBoxLable:'Save my payment details for further payments',
    textField: [
      {
        id: 1,
        name: 'name_on_card',
        label: 'Name on card',
        type: 'string',
        place: 'Enter name on card',
        value: 50,
        width: { xs: '100%', sm: '100%', md: '100%', lg: '96.8%' },
        sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
        pt:'-20px'
      },
      {
        id: 3,
        name: 'card_number',
        label: 'Card Number',
        type: 'number',
        place: 'XXX-XXX-XXX-XXXX',
        value: 0,
        width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        sizes: { xs: 12, sm: 12, md: 12, lg: 7 },
        checkBox:'true'
      },
      {
        id: 5,
        name: 'expiry_date',
        label: 'Expiry Date',
        type: 'date',
        place: 'XX-XX-XXXX',
        value: 0,
        width: { xs: '100%', sm: '100%', md: '100%', lg: '96.6%' },
        sizes: { xs: 12, sm: 12, md: 12, lg: 2.5 },
      },
      {
        id: 4,
        name: 'cvv_no',
        label: 'CVV',
        type: 'number',
        place: 'XXX',
        value: 0,
        width: { xs: '100%', sm: '100%', md: '100%', lg: '82.6%' },
        sizes: { xs: 12, sm: 12, md: 12, lg: 2.5 },
      },
    ],
    cardType: [
      '/images/agent_form/visaCard.svg',
      '/images/agent_form/masterCard.svg',
    ]
  };