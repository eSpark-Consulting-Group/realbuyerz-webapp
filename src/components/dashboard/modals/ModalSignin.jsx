import Image from 'next/image';

import { Modal } from '@mui/material';
import { Box } from '@mui/system';

import LoginCard from '../../LoginSignup/Login/LoginCard';

const ModalSignin = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          width: '95%',
          height: '95%',
          maxWidth: { xs: '380px', md: '400px', lg: '500px' },
          maxHeight: '650px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          overflow: 'hidden',
          boxShadow: '-4px -4px 11px 0px #00000026,0px 4px 4px 0px #00000040',
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Image
            alt="Close Icon"
            src="/images/close_icon.svg"
            onClick={handleClose}
            width={15}
            height={15}
            className="modal-closeicon"
          />
        </Box>
        <Box
          sx={{
            maxHeight: '80vh',
            overflow: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: 'transparent transparent',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <LoginCard handleClose={handleClose} fromModal={true} />
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalSignin;