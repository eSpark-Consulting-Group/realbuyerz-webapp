import * as React from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import EditIcon from '@mui/icons-material/Edit';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function ButtonBaseDemo({ url, handleOpen, data }) {
  const imageRef = React.useRef(null);
  const [imageSrc, setImageSrc] = React.useState(
    url || data?.image || '/images/avatar.jpeg'
  );
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (imageRef.current) {
      imageRef.current.style.opacity = 0.5;
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.opacity = 1;
    }
  };

  const handleImageError = () => {
    setImageSrc('/images/avatar.svg');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: { xs: '200px', sm: '220px' },
        height: { xs: '200px', sm: '220px' },
        '@media (min-width: 280px) and (max-width: 319px)': {
          width: '200px',
          height: '200px',
        },
        backgroundColor: '#fff',
        mx: { xs: 'auto', sm: 0 },
        borderRadius: { xs: '100%', sm: '0 100% 100% 0' },
      }}
    >
      {pathname === '/user/user-settings/user-profile' ||
      pathname === '/agent/agent-settings/agent-profile' ? (
        <ButtonBase
          focusRipple
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleOpen}
          sx={{
            position: 'relative',
            width: '179px',
            height: '179px',
            overflow: 'hidden',
            borderRadius: '100%',
            '&:hover, &.Mui-focusVisible': {
              '& .editIcon': {
                display: 'block',
                color: '#FB631C',
              },
            },
          }}
        >
          <Image
            ref={imageRef}
            src={imageSrc}
            alt={data?.title || 'Default Image'}
            height={179}
            width={197}
            onError={handleImageError}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.1s ease-in-out',
              borderRadius: '100%',
            }}
          />
          <EditIcon
            className="editIcon"
            sx={{
              position: 'absolute',
              textAlign: 'center',
              fontSize: '60px',
              color: '#FB631C',
              display: 'none',
              zIndex: 2,
              transition: 'opacity 0.9s ease-in-out',
              '&:hover': { color: '#FB631C' },
            }}
          />
        </ButtonBase>
      ) : (
        <Box
          component={'img'}
          src={imageSrc}
          // height={179}
          // width={150}
          alt={data?.title || 'Default Image'}
          onError={handleImageError}
          sx={{
            width: { xs: '95%', sm: '88%', lg: '93%' },
            height: { xs: 'auto' },
            objectFit: 'cover',
            transition: 'opacity 0.1s ease-in-out',
            borderRadius: '100%',
          }}
        />
      )}
    </Box>
  );
}
