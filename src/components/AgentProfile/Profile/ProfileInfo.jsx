import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/system';
import TooltipText from '../../global/TooltipText';

const ProfileInfo = ({ title, icon, alt }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {icon && (
        <Box sx={{ mr: 1, mt: 1 }}>
          <Image src={icon} width={15} height={15} alt={alt} />
        </Box>
      )}
      <TooltipText
        text={title}
        variant="body1"
        maxLength={20}
        typographyStyle={{
          color: '#777777',
          fontWeight: 'medium',
          marginTop: 1,
          fontSize: { xs: '13px', md: '16px' },
          display: 'flex',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
        }}
      />
    </Box>
  );
};

export default ProfileInfo;
