import Link from 'next/link';

import { Box, Typography } from '@mui/material';

import { VIEW_PROPSALS } from '@/src/constants/user/Dashboard';

const ViewProposalLinkBox = ({ id }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: {
          xs: 'start',
          sm: 'flex-start',
          md: 'flex-end',
        },
        '@media(min-width: 280px) and (max-width: 445px)': {
          justifyContent: 'center',
        },
        px: { sm: '0px', md: '0px', lg: 6 },
        pt: { xs: 2, sm: 0 },
      }}
    >
      <Link href={`dashboard/ad/${id}`}>
        <Typography
          sx={{
            width: '200px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50px',
            border: '1px solid #D5E1D5',
            background: '#FB631C',
            color: '#FFF',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
          }}
        >
          {VIEW_PROPSALS || ''}
        </Typography>
      </Link>
    </Box>
  );
};

export default ViewProposalLinkBox;
