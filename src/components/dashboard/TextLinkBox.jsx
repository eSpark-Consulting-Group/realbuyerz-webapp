import Link from 'next/link';

import { Box, Typography } from '@mui/material';

import { VIEW_BUTTON } from '@/src/constants/agent/Live_Bidding';

const TextLinkBox = ({ id }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: {
          sm: 'start',
          lg: 'end',
        },
        '@media(min-width: 280px) and (max-width: 445px)': {
          justifyContent: 'center',
        },
        pt: 0.5,
        pr: 2,
        ml: { xs: '4px', lg: '0px' },
      }}
    >
      <Link href={`${VIEW_BUTTON?.link || '#'}${id || '#'}`}>
        <Typography
          sx={{
            color: '#FB631C',
            width: '86px',
            height: '25px',
            display: 'flex',
            justifyContent: 'center',
            border: '1px solid #FB631C',
            backgroundColor: '#fff',
            borderRadius: '15px',
            alignItems: 'center',
            fontSize: '12px',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#fb631c',
              color: '#fff',
            },
          }}
        >
          {VIEW_BUTTON?.text || ''}
        </Typography>
      </Link>
    </Box>
  );
};

export default TextLinkBox;
