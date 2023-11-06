import React from 'react';
import { Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Price = ({ price, link }) => {
  return (
    <>
      <Typography
        color="primaryy"
        sx={{
          fontSize: 27,
          fontWeight: 700,
          wordBreak: 'break-word',
        }}
      >
        PKR {price}
      </Typography>
      <Typography
        color="primaryy"
        sx={{
          fontSize: 16,
          fontWeight: 400,
        }}
      >
        Reach out to us:
      </Typography>
      <Link href={link}>
        <Button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#FB631C',
            width: '100%',
            height: '60px',
            fontSize: '24px',
            fontWeight: 500,
            color: 'white',
            gap: '10px',
            borderRadius: 10,
          }}
        >
          <Image
            src="/images/agent-profile/msgicon.svg"
            width={30}
            height={26}
            alt={''}
          />
          <span>Message</span>
        </Button>
      </Link>
    </>
  );
};
export default Price;
