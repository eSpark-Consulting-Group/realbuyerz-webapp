import Image from 'next/image';

import { Box, Typography } from '@mui/material';

const CategoryBox = ({ category, px, fontSize }) => {
  return (
    <>
      <Box className="border top" />
      <Box className="border bottom" />
      <Box className="border left" />
      <Box className="border right" />
      <Box
        sx={{
          background: '#fff',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '150px',
          margin: 'auto',
          gap: '10px',
        }}
      >
        <Image
          src={category?.image}
          alt={category?.name}
          height={30}
          width={30}
        />
        <Typography
          variant="body1"
          sx={{
            color: '#838383',
            fontSize,
            fontWeight: 400,
            px,
          }}
        >
          {category?.name}
        </Typography>
      </Box>
    </>
  );
};

export default CategoryBox;
