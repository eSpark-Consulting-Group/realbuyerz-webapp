import { Button } from '@mui/material';

import BackToSignin from '../Common/BackToSignin';

import { LOGIN_FORM } from '@/src/constants/Login';

const Continue = ({
  handleBackToLogin,
  handleContinue,
  checkPasswordMatch,
}) => {
  return (
    <>
      <Button
        style={{
          display: 'flex',
          alignSelf: 'center',
          background: '#FB631C',
          width: '100px',
          borderRadius: '5px',
          color: 'white',
          '&:hover': {
            background: '#FF631C',
          },
        }}
        onClick={() => {
          handleContinue();
          checkPasswordMatch();
        }}
      >
        {LOGIN_FORM.loginCard.continue}
      </Button>
      <BackToSignin
        text={LOGIN_FORM.loginCard.backSignin}
        handleBackToLogin={handleBackToLogin}
      />
    </>
  );
};
export default Continue;
