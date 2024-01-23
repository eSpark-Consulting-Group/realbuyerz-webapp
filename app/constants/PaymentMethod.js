export const PAYMENT_METHODE_DATA = {
    title: 'Payment Method',
    image: '/images/agent_form/agent_form_background.png',
    checkBoxLable:'Save my payment details for further payments',
    creditCardLable:'Credit Card Payment',
    addButtonLable:'add',
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
        sizes: { xs: 12, sm: 12, md: 12, lg: 6 },
        checkBox:'true'
      },
      {
        id: 5,
        name: 'expiry_date',
        label: 'Expiry Date',
        type: 'string',
        place: 'XX-YY',
        value: '02-25',
        width: { xs: '100%', sm: '100%', md: '100%', lg: '96.6%' },
        sizes: { xs: 12, sm: 12, md: 12, lg: 3 },
      },
      
      {
        id: 4,
        name: 'cvv_no',
        label: 'CVV',
        type: 'number',
        place: 'XXX',
        value: 0,
        width: { xs: '100%', sm: '100%', md: '100%', lg: '82.6%', xl:'86%' },
        sizes: { xs: 12, sm: 12, md: 12, lg: 3},
      },
    ],
    cardType: [
      {
        icon:'/images/agent_form/visaCard.svg',
        alt:'visa card'
      },
      {
       icon: '/images/agent_form/masterCard.svg',
       alt:'master card'
      }
    ]
  };