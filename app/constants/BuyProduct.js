export const Buy_Product_Data = {
  title: 'Subscription',
  BuyProductColumns: {
    FirstHeaderName: 'Package',
    SecondHeaderName: 'Price',
  },
  BuyProductRows: [
    {
      id: 1,
      icon: '/images/prop-shop/basic.svg',
      text: 'Basic',
      alt: 'basic_image',
      discription: 'Get a slot for 4 listing with initial 60 connection',
      price: 'Rs.2500',
      buttonText: 'Add to cart',
    },
    {
      id: 2,
      icon: '/images/prop-shop/hot.svg',
      text: 'Hot',
      alt: 'hot_image',
      discription: 'Get a slot for 8 listing with initial 80 connection',
      price: 'Rs.65000',
      buttonText: 'Add to cart',
    },
    {
      id: 3,
      icon: '/images/prop-shop/super.svg',
      text: 'Super',
      alt: 'super_image',
      discription: 'Get a slot for 12 listing with initial 100 connection',
      price: 'Rs.17500',
      buttonText: 'Add to cart',
    },
  ],
};

export const Empty_Cart_data = { title: 'Added in cart', item: 'No items' };

export const Order_Summary = {
  titile: 'Order Summary',
  Total: 'Total:',
  buttonText: 'Proceed To Payment',
};

export const Buy_Connects = {
  title: 'Buy Connects',
  discription: '(Only applicable if you buy a subscription)',
  buttonText: 'Buy',
  image: '/images/agent_form/agent_form_background.png',
  dropdown: {
    name: 'your_new_connects_balance_will_be',
    label: 'Your new connects balance will be',
    value: 0,
  },
  textField: [
    {
      id: 1,
      name: 'your_available_connects',
      label: 'Your available connects',
      type: 'number',
      place: 0,
    },
    {
      id: 2,
      name: 'select_the_amount_to_buy',
      label: 'Select the amount to buy',
      type: 'number',
      place: 0,
    },
    {
      id: 3,
      name: 'your_account_will_be_charged',
      label: 'Your account will be charged',
      type: 'number',
      place: 0,
    },
    {
      id: 4,
      name: 'your_new_connects_balance_will_be',
      label: 'Your new connects balance will be',
      type: 'number',
      place: 0,
    },
    {
      id: 5,
      name: 'these_connects_will_expire_on',
      label: 'These connects will expire on',
      type: 'number',
      place: 0,
    },
  ],
};
