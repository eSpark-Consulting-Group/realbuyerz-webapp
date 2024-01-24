import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import { BIDDINGS } from '@/app/constants/Biddings';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTERS } from '@/app/constants/LiveBidding';

const RightSection = ({ rightSection }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2.5,
        }}
      >
        <Link href={ROUTERS?.postListing}>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '100%', lg: '100%' },
              height: '43.545px',
              backgroundColor: '#FB631C',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 500,
              color: '#FFF',
            }}
          >
            {BIDDINGS?.applybutton?.title}
          </Typography>
        </Link>

        <Link href={'#'}>
          <Typography
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              width: { xs: '100%', lg: '100%' },
              height: '43.545px',
              backgroundColor: '#fff',
              border: '1px solid #FB631C',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 500,
              color: '#FB631C',
              '&:hover': { backgroundColor: '#FB631C', color: 'white' },
            }}
          >
            <Image
              src={
                isHovered
                  ? BIDDINGS?.savebutton?.hoverImage
                  : BIDDINGS?.savebutton?.defaultImage
              }
              width={10}
              height={8}
            />
            {BIDDINGS?.savebutton?.title}
          </Typography>
        </Link>
      </Box>
      <Box sx={{ pt: 2, pb: 1 }}>
        <Typography
          variant="body1"
          sx={{
            color: '#126FAA',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 500,
          }}
        >
          <FlagIcon fontSize={'12px'} /> {BIDDINGS?.flagInappropiate}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '5px', pb: 1 }}>
        <Typography
          variant="body1"
          sx={{
            color: '#333',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '400',
            textWrap: 'wrap',
          }}
        >
          {' '}
          {BIDDINGS?.sendProposal}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#126FAA',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '400',
            textWrap: 'wrap',
          }}
        >
          {rightSection.connects} {BIDDINGS?.connects}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '5px' }}>
        <Typography
          variant="body1"
          sx={{
            color: '#333',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '400',
            pb: '10px',
          }}
        >
          {' '}
          {BIDDINGS?.availableConnects}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#126FAA',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '400',
            pb: '10px',
          }}
        >
          0
        </Typography>
      </Box>
    </Box>
  );
};

export default RightSection;
