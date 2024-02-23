import * as React from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import EditIcon from '@mui/icons-material/Edit';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
export default function ButtonBaseDemo({ url, handleOpen, data }) {
  const image = {
    url: url,
  };
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 2];
  const imageRef = React.useRef(null);
  

  const handleMouseEnter = () => {
    if (imageRef.current) {
      imageRef.current.style.opacity = 0.5;
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.opacity = 0.7;
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '220px',
        height: '220px',
        '@media (min-width: 280px) and (max-width: 319px)': {
          width: '200px',
          height: '200px',
        },
        backgroundColor: '#fff',
        mx: { xs: 'auto', sm: 0 },
        borderRadius: { xs: '100%', sm: '0 100% 100% 0' },
      }}
    >
      { id != 'profile' ? (<ButtonBase
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
            },
          },
        }}
      >
        <Box
          component={'img'}
          ref={imageRef}
          src={image?.url}
          alt={image?.title}
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
          }}
        />
      </ButtonBase>) : <Image src={data.profileImage} height={179} width={197} /> }
    </Box>
  );
}
