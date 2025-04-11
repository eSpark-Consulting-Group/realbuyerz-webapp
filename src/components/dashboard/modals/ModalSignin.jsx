import { Modal } from '@mui/material';
import { Box } from '@mui/system';

import LoginCard from '../../LoginSignup/Login/LoginCard';

const ModalSignin = ({ open, handleClose }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: 'flex',
        }}
      >
        <Box
          sx={{
            margin: 'auto',
          }}
        >
          <LoginCard handleClose={handleClose} fromModal={true} />
        </Box>
      </Modal>
    </>
  );
};

export default ModalSignin;
