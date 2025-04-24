import { Box } from '@mui/material';

const PostBox = ({ borderRadius, queryStyle }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        height: '100%',
        background: '#F6FBFF',
        zIndex: -1,
        top: 0,
        right: 0,
        width: {
          sm: '240px',
          md: '280px',
          lg: '319px',
        },
        borderRadius: borderRadius,
        '@media (min-width:280px) and (max-width: 800px)': {
          ...queryStyle,
          width: '100%',
          height: '170px',
        },
      }}
    ></Box>
  );
};

export default PostBox;
