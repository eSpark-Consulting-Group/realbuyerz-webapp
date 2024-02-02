import React from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ROUTERS_POSTING } from '@/app/constants/Dashboard';

const SeeAllPosting = ({ title }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(ROUTERS_POSTING.dashboardProposal);
  };
  return (
    <Button
      sx={{
        Weight: 500,
        fontSize: { xs: '17px', sm: '20px' },
        lineHeight: '24.2px',
        color: '#126FAA',
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        background: 'none',
        '&:hover': {
          background: 'none',
          textDecoration: 'underline',
        },
      }}
      onClick={handleClick}
    >
      {title}
    </Button>
  );
};

export default SeeAllPosting;
