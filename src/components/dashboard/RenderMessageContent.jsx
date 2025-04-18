import Image from 'next/image';

import { Box } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';

import { getFileExtension } from '@/src/utils/chat/chatUtils';

import { FILES_EXTENSION } from '@/src/constants/Chats';

const RenderMessageContent = ({ data }) => {
  const images = data?.content?.slice(0, 4);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {images?.map((img, imgIndex) => {
        const ext = getFileExtension(img?.url);

        return (
          <Box
            key={imgIndex}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100px',
              height: '100px',
              backgroundColor: '#fff',
              marginRight: imgIndex !== data?.content.length - 1 && '10px',
            }}
          >
            {FILES_EXTENSION.includes(ext) ? (
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'inherit !important',
                }}
                component={'a'}
                target="_blank"
                href={img?.url}
              >
                {ext === 'pdf' ? (
                  <PictureAsPdfIcon fontSize="large" />
                ) : ext === 'docx' ? (
                  <DescriptionIcon fontSize="large" />
                ) : (
                  <Box sx={{ width: '24px', height: '24px' }}>
                    <Image
                      src="/icons/xlsx.svg"
                      alt="xlsx"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                )}
                {img.public_id.slice(0, 10) + '...'}
              </Box>
            ) : (
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${img.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                alt={'Image'}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default RenderMessageContent;
