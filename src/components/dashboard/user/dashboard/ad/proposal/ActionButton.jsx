import { Button, CircularProgress, Typography } from '@mui/material';

const commonInThree = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '200px',
  height: '43.545px',
  borderRadius: '50px',
  fontSize: '14px',
  fontWeight: 500,
};

const commonInTwo = {
  gap: 1,
  backgroundColor: '#fff',
  border: '1px solid #FB631C',
  color: '#FB631C',

  '&:hover': {
    backgroundColor: '#FB631C',
    color: 'white',
  },
};

const singleBtnStyle = {
  backgroundColor: '#FB631C',
  color: '#FFF',

  '&:hover': {
    backgroundColor: 'white',
    color: '#FB631C',
    border: '1px solid #FB631C',
  },
};
const ActionButton = ({ handleAction, isPending, text, extra = false }) => {
  const styles = extra ? commonInTwo : singleBtnStyle;

  return (
    <Button>
      <Typography
        sx={{
          ...commonInThree,
          ...styles,
        }}
        onClick={() => handleAction()}
      >
        {isPending ? (
          <CircularProgress
            sx={{
              height: '30px  !important',
              width: '30px !important',
            }}
            color="inherit"
          />
        ) : (
          text
        )}
      </Typography>
    </Button>
  );
};

export default ActionButton;
