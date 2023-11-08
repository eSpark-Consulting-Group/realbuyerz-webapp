import React from 'react';
import { Box } from '@mui/system';
import Image from 'next/image';

const InputMessage = ({ inputRef, handleSendMessage }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignContent: 'center',
        mx: '4',
        position: 'sticky',
        bottom: 10,
      }}
    >
      <Box
        sx={{
          borderRadius: '40px',
          width: '91.5%',
          height: '50px',
          position: 'relative',
          mx: 1,
        }}
      >
        <button
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: '20px',
            zIndex: 1,
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
        >
          <Image
            src={'./images/inbox/addIcon.svg'}
            width={30}
            height={30}
            alt="chatIcon"
          />
        </button>
        <input
          ref={inputRef}
          type="text"
          style={{
            width: '100%',
            height: '50px',
            border: '1px solid #E4E4E4',
            borderRadius: '50px',
            paddingLeft: '60px',
          }}
          placeholder="Write message"
        />
      </Box>
      <button onClick={handleSendMessage}>
        <Image
          src={'./images/inbox/sendIcon.svg'}
          width={40}
          height={40}
          alt="chatIcon"
        />
      </button>
    </Box>
  );
};

export default InputMessage;
