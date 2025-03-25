import React from 'react';
import { Box } from '@mui/material';
import { getFileExtension } from '@/src/utils/getFileExtension';
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DescriptionIcon from "@mui/icons-material/Description";

const RenderMessageContent = ({ data }) => {
  const filesExt = ["pdf", "docx", "xlsx"]
  const images = data?.content?.slice(0, 4);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {images?.map((img, imgIndex) => {
        const ext = getFileExtension(img?.url)
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
            {filesExt.includes(ext) ? (
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color:"inherit !important",
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
                    <img
                      src="/icons/xlsx.svg"
                      alt="xlsx"
                      style={{ width: '100%', height: '100%' }}
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
