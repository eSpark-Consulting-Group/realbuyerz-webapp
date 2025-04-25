import Image from 'next/image';

import { Box } from '@mui/material';

const SwiperArrow = ({
  direction,
  className,
  src,
  right,
  left,
  height,
  width = 40,
}) => {
  const positionStyle = direction === 'next' ? { right } : { left };

  return (
    <Box
      className={className}
      sx={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 1,
        ...positionStyle,
      }}
    >
      <Image src={src} width={width} height={height} alt="navigation arrow" />
    </Box>
  );
};

export default SwiperArrow;
