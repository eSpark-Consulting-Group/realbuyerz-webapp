import Image from 'next/image';

import { Box, Typography } from '@mui/material';

const Avatar = ({ data, minWidth = 40, height = 40, mobile, chat }) => {
  function renderAvatarName(name) {
    const nameComponents = name.split(' ');

    if (nameComponents.length === 3) {
      //
      const firstName = nameComponents[0];
      const lastName = nameComponents[2];
      return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
    } else if (nameComponents.length === 2) {
      //
      const firstName = nameComponents[0];
      const lastName = nameComponents[1];
      return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
    } else if (nameComponents.length === 1) {
      //
      const firstName = nameComponents[0];
      return `${firstName[0].toUpperCase()}`;
    } else {
      //
      return 'Invalid Name';
    }
  }

  const renderAvatar = (data) => {
    if (data?.avatar) {
      return (
        <Image
          alt={'Avatar'}
          src={chat ? data?.avatar : `/images/${data?.avatar}.svg`}
          width={minWidth}
          height={height}
          style={{
            borderRadius: '50%',
            display: mobile || 'flex',
          }}
        />
      );
    } else {
      return (
        <Box
          sx={{
            minWidth,
            height,
            borderRadius: '50%',
            background: data?.background,
            color: '#fff',
            display: { xs: mobile || 'flex', sm: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography>{renderAvatarName(data?.title)}</Typography>
        </Box>
      );
    }
  };
  return renderAvatar(data);
};

export default Avatar;
