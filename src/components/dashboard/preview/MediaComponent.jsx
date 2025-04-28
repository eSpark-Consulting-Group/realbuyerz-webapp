import { Box, Typography } from '@mui/material';

import AdMediaSlider from '../ads-form-components/AdMediaSlider';

const MediaComponent = ({ title, images = [], videos = [], mediaType, form }) => {

  return (
    <Box
      sx={{
        p: 5,
        borderBottom: '1px solid #E4E4E4',
        '@media(min-width:280px) and (max-width:450px)': { px: 0.3 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '20px' },
          fontWeight: 500,
          '@media(min-width:280px) and (max-width:450px)': { pl: 3, mb: 1 },
        }}
      >
        {title}
      </Typography>

      {/* Conditional Rendering to prevent empty renders */}
      {images?.length > 0 || videos?.length > 0 ? (
        <Box
          sx={{
            pt: 2,
            width: { xs: '640px' },
            overflowX: 'auto',
            '@media(min-width:280px) and (max-width:450px)': {
              width: 'auto',
              px: 1,
            },
          }}
        >
          <AdMediaSlider
            media={images.length > 0 ? images : videos}
            mediaType={mediaType}
            form={form}
          />
        </Box>
      ) : (
        <Typography>No media available</Typography>
      )}
    </Box>
  );
};

export default MediaComponent;
