import React from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ROUTERS } from '@/app/constants/LiveBidding';
import { ROUTERS_POSTING } from '@/app/constants/Dashboard';

const SeeAllPosting = ({ title }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(ROUTERS_POSTING.dashboardProposal);
  };
  return (
    <Button
      sx={{
        font: 'Inter',
        Weight: 500,
        fontSize: '20px',
        lineHeight: '24.2px',
        color: '#126FAA',
        padding: { sm: 4, xs: 2 },
        mr: { sm: 0 },
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        background: 'none',
        '&:hover': {
          background: 'none',
        },
      }}
      onClick={handleClick}
    >
      {title}
    </Button>
  );
};

export default SeeAllPosting;
