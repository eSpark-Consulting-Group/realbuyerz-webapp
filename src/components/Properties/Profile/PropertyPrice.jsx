import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Price = ({ price, link, pkr, message, reach }) => {
  return (
    <>
      <Typography
        color="primaryy"
        sx={{
          fontSize: { xs: '20px', md: '22px', lg: '25px' },
          fontWeight: 700,
          wordBreak: 'break-word',
          paddingBottom: '10px',
        }}
      >
        {pkr} {price}
      </Typography>
      <Typography
        color="primaryy"
        sx={{
          fontSize: { xs: '12px', md: '14px', lg: '16px' },
          fontWeight: 400,
        }}
      >
        {reach}
      </Typography>
      <Link href={link}>
        <Button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#FB631C',
            width: '100%',
            height: { xs: '30px', sm: '40px', md: '50px', lg: '60px' },
            fontSize: '24px',
            fontWeight: 500,
            color: 'white',
            gap: '10px',
            borderRadius: 10,
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
      </Link>
    </>
  );
};
export default Price;
