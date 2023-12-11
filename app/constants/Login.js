export const LOGIN_FORM = {
  password: 'password',
  confirmPassword: 'confirmPassword',
  email: 'email',
  contactNo: 'contactNumber',
  firstName: 'firstName',
  lastName: 'lastName',
  text: 'text',
  forgetpassword: 'forgetpassword',
  loginCard: {
    createAccount: 'Create Account',
    quickEasy: 'It’s Quick & Easy',
    rememberMe: 'Remember me',
    forgetPassword: 'Forget Password?',
    welcome: 'Hey! Welcome',
    verifiedBuyers: 'Login to reach out hundreds of verified buyers daily',
    login: 'Log in',
    googleLogin: 'Login with Google',
    label: 'Already have an account?',
    connect: 'Lorem ipsum dolor sit amet',
    propertyDealer: 'Vestibulum non tortor facilisis, tempus tellus quis',
    checkEmail: 'Check your email',
    enterEmail: 'Enter email address',
    email: 'Email address',
    continue: 'Continue',
    passwordForget: 'Forget Password',
    validEmail: 'Please enter a valid email address',
    resetPassword: 'We’ve sent password reset instructions to:',
    resend: 'Resend',
    backSignin: 'Back to sign-in',
    emailSent: 'Email sent sucessfully',
    passwordMatch: 'Password match',
    passwordDontMatch: 'Password donot match',
  },
  signupForm: {
    signup: 'Sign up',
    signin: 'Sign in',
    label: 'Doesn’t have an account yet?',
    maxLength: 11,
    userType: 'usertype',
  },
  dropdownOptions: [
    { value: 'none', label: 'None' },
    { value: 'user', label: 'User' },
    { value: 'agent', label: 'Agent' },
    { value: 'dealer', label: 'Dealer' },
  ],
  rectangleHeight: {
    signupFormHeight: '750px',
    loginFormHeight: '656px',
  },
  resetPasswordCard: {
    resetPassword: 'Reset Your Password',
    createNewPassword: 'Please create a new password',
  },
};

export const LOGIN_FORM_DATA = {
  initialFormData: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    confirmPassword: '',
  },
  passwordFields: {
    password: '',
    showPassword: false,
    confirmPassword: '',
    showConfirmPassword: false,
  },
};

export const LOGIN_ROUTERS = {
  signin: '/signin',
  signup: '/signup',
  forgetPassword: '/forget-password',
};
export const AUTH_COMPONENTS = {
  signin: 'signin',
  signup: 'signup',
  forgetPassword: 'forgetpassword',
  resetPassword: 'resetpassword',
};

export const FORM_LABEL = {
  emailUsername: 'Email / Username',
  firstName: 'First Name',
  lastName: 'Last Name',
  emailAddress: 'Email Address',
  contactNo: 'Contact Number',
  applicant: 'Applicant',
  number: 'number',
  password: 'Password',
  confirmPassword: 'Confirm Password',
};
