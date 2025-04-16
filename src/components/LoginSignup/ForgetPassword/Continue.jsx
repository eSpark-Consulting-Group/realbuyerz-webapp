import { Box, Button } from '@mui/material';

import BackToSignin from '../Common/BackToSignin';

import { LOGIN_FORM } from '@/src/constants/Login';

const Continue = ({
  handleBackToLogin,
  handleContinue,
  checkPasswordMatch,
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 3,
        }}
      >
        <Button
          sx={{
            background: '#FB631C',
            width: '100px',
            borderRadius: '5px',
            color: 'white',
            height: '29px',
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
      </Box>

      <BackToSignin
        text={LOGIN_FORM.loginCard.backSignin}
        handleBackToLogin={handleBackToLogin}
      />
    </>
  );
};
export default Continue;