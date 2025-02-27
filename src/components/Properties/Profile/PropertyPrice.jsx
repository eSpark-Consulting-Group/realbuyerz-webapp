import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import TooltipText from '../../global/TooltipText';
import { useRouter } from 'next/navigation';

const Price = ({ price, link, pkr, message, reach }) => {
  const router = useRouter();

  const handleGotoInbox = (e, link = '#') => {
    e?.preventDefault();
    return router?.push(link);
  };

  return (
    <>
      <TooltipText
        text={`${pkr} ${price}`}
        maxLength={20}
        variant="primaryy"
        typographyStyle={{
          fontSize: { xs: '20px', md: '22px', lg: '25px' },
          fontWeight: 700,
          wordBreak: 'break-word',
          paddingBottom: { xs: '5px', md: '8px', lg: '10px' },
        }}
      />
      <Typography
        color="primaryy"
        sx={{
          fontSize: { xs: '14px', md: '14px', lg: '16px' },
          fontWeight: 400,
        }}
      >
        {reach}
      </Typography>
      <Button
        onClick={(e) => handleGotoInbox(e, link)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#FB631C',
          width: '100%',
          height: { xs: '40px', sm: '50px', md: '50px', lg: '60px' },
          fontSize: '24px',
          fontWeight: 500,
          color: 'white',
          gap: '10px',
          borderRadius: '10px',
        }}
      >
        <Box
          component={'img'}
          src="/images/agent-profile/msgicon.svg"
          alt={'Images'}
          sx={{
            width: { xs: '20px', sm: '20px', md: '25px', lg: '28px' },
            height: 'auto',
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: '15px', sm: '18px', md: '20px', lg: '25px' },
          }}
        >
          {message}
        </Typography>
      </Button>
    </>
  );
};
export default Price;
