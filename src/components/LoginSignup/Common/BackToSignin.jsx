import Image from 'next/image';

import { Button } from '@mui/material';

const BackToSignin = ({ text, handleBackToLogin }) => {
  return (
    <Button
      sx={{
        fontWeight: 400,
        fontSize: '12px',
        color: '#126FAA',
        padding: 0,
        textTransform: 'math-auto',
        marginTop: '50px',
        textDecoration: 'underline',
        display: 'flex',
        alignSelf: 'baseline',
        alignItems: 'center',
      }}
      onClick={() => {
        handleBackToLogin();
      }}
    >
      <Image
        src="/images/modal/lessthan.svg"
        width={18}
        height={18}
        alt="lessthan"
      />
      {text}
    </Button>
  );
};

export default BackToSignin;
