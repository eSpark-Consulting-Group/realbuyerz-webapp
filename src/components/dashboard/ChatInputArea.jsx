import Image from 'next/image';

import { Box, Typography } from '@mui/material';

import { FILES_ARRAY } from '@/src/constants/Chats';

const ChatInputArea = ({
  uploadOptionsRef,
  commonInputBoxStyles,
  displayUploadOptions,
  toggleVisibility,
  setDisplayUploadOptions,
  isClosing,
  setIsSendingVoiceNote,
}) => {
  return (
    <Box ref={uploadOptionsRef}>
      <Box
        sx={{ ...commonInputBoxStyles }}
        className={[
          'upload-files-icons',
          displayUploadOptions
            ? 'anition-upload-files-icon'
            : 'remove-anition-upload-files-icon',
        ].join(' ')}
        onClick={() =>
          displayUploadOptions
            ? toggleVisibility()
            : setDisplayUploadOptions(true)
        }
      >
        <Image
          src="/icons/SendFileChatIcon.svg"
          alt={'Send File'}
          className="sendfile-icon"
          width={18}
          height={18}
        />
      </Box>

      {displayUploadOptions && (
        <Box
          sx={{
            width: '100px',
            position: 'absolute',
            bottom: '35px',
          }}
          className={
            displayUploadOptions && !isClosing
              ? 'draw-in-animation'
              : 'draw-out-animation'
          }
        >
          {FILES_ARRAY?.slice(0, 2).map((lab, ind) => (
            <label htmlFor={lab.id} key={ind}>
              <Box
                sx={{
                  ...commonInputBoxStyles,
                  marginTop: ind === 1 ? '4px' : '',
                }}
              >
                <Image
                  alt={'Image'}
                  src={lab.imageSrc}
                  width={18}
                  height={18}
                />
              </Box>
            </label>
          ))}

          <Box
            onClick={() => {
              setDisplayUploadOptions(false);
              setIsSendingVoiceNote(true);
            }}
            sx={{
              display: { xs: 'none', md: 'none' },
              alignItems: 'center',
              marginBottom: '10px',
              paddingX: '10px',
              cursor: 'pointer',
            }}
          >
            <Image
              alt={'Mic'}
              src={'/icons/MicIcon.svg'}
              width={20}
              height={20}
              style={{
                marginRight: '5px',
              }}
            />

            <Typography>Voice</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ChatInputArea;
