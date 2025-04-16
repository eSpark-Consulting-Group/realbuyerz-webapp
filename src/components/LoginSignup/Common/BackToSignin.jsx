import Image from 'next/image';

import { Button } from '@mui/material';

const BackToSignin = ({ text, handleBackToLogin, mail }) => {
  const emailModalStyles = {
    marginTop: '50px',
  };

  const continueStyles = {
    marginTop: '30px',
    display: 'flex',
    alignSelf: 'baseline',
    alignItems: 'center',
    '&:hover, &:focus, &:active': {
      textDecoration: 'underline',
      backgroundColor: 'transparent', // ✅ No hover effect
      outline: 'none', // ✅ Remove focus ring
    },
  };

  const embedStyles = mail ? emailModalStyles : continueStyles;

  return (
    <Button
      disableRipple
      sx={{
        fontWeight: 400,
        fontSize: '14px',
        color: '#126FAA',
        padding: 0,
        textTransform: 'math-auto',
        textDecoration: 'underline',
        ...embedStyles,
      }}
      onClick={() => {
        handleBackToLogin();
      }}
    >
      <Image
        src="/images/modal/lessthan.svg"
        width={20}
        height={20}
        alt="lessthan"
      />
      {text}
    </Button>
  );
};

export default BackToSignin;