import Image from 'next/image';

import { Box } from '@mui/material';

import { FILE_TYPES } from '@/src/constants/Chats';

const RenderFileUploads = ({ fileInput, handleRemoveFile }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        maxWidth: '400px',
        maxHeight: '200px',
        overflow: 'auto',
        flexWrap: 'wrap',
      }}
    >
      {fileInput.length > 0 &&
        fileInput?.map((file, fileIndex) => {
          return (
            <Box
              key={fileIndex}
              className="file-upload-content-inbox"
              sx={{
                backgroundColor: '#eee',
                padding: '10px',
                marginBottom: '10px',
                width: { xs: '80px', sm: '150px' },
                height: { xs: '80px', sm: '150px' },
                boxShadow: '0px 0px 5px 2px #ccc',
                borderRadius: '5px',
                marginRight: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              {file?.data?.type === 'image/jpeg' ? (
                <Image
                  src={'/icons/JPEGFileIcon.svg'}
                  alt={'Selected'}
                  width={100}
                  height={100}
                  className="selected-file"
                />
              ) : FILE_TYPES.includes(file?.data?.type) ? (
                <Box
                  component={'p'}
                  sx={{
                    margin: 0,
                    textAlign: 'center',
                  }}
                >
                  {file?.data?.name}
                </Box>
              ) : (
                <Box
                  alt={'Selected'}
                  sx={{
                    width: { xs: '50px', sm: '100px' },
                    height: { xs: '50px', sm: '100px' },
                    backgroundImage: `url(${URL.createObjectURL(file?.data)})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              )}

              <Image
                src="/icons/CloseIcon.svg"
                alt={'Reply'}
                width={20}
                height={20}
                style={{
                  borderRadius: '50%',
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '5px',
                  top: '5px',
                }}
                onClick={() => handleRemoveFile(file?.id)}
              />
            </Box>
          );
        })}

      {fileInput.length > 0 && (
        <label htmlFor="all-file-input">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(000,000,000,0.4)',
              height: 'calc(100% - 10px)',
              width: '50px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            <Image
              src={'/icons/PlusIconWhite.svg'}
              alt={'Upload More'}
              width={20}
              height={20}
            />
          </Box>
        </label>
      )}
    </Box>
  );
};

export default RenderFileUploads;
