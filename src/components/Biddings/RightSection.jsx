import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import { BIDDINGS } from '@/app/constants/Biddings';
import Link from 'next/link';

const RightSection = ({ rightSection, report, apply, save }) => {
  return (
    <Box>
      <Box>
        <Button
          sx={{
            mx: '4px',
            mb: '20px',
            fontWeight: 600,
            height: { xs: 'auto', sm: 'auto', lg: '42px', xl: '42px' },
            color: '#FB631C',
            width: '100%',
            border: '2px solid #FB631C',
            '&:hover': {
              color: '#fff',
            },
            borderRadius: '50px',
          }}
          variant="outlined"
          onClick={apply}
        >
          {BIDDINGS?.applybutton.title}
        </Button>
        <Button
          sx={{
            mx: '4px',
            mb: '20px',
            fontWeight: 600,
            height: { xs: 'auto', sm: 'auto', lg: '42px', xl: '42px' },
            color: '#fff',
            width: '100%',
            borderRadius: '50px',
          }}
          onClick={save}
          variant="primary"
        >
          <Typography sx={{ color: '#fff' }}>
            {BIDDINGS?.savebutton.title}
          </Typography>
        </Button>
      </Box>
      <Box>
        <Link href="#" onclick={report}>
          <Typography
            variant="body1"
            sx={{
              color: '#126FAA',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: '500',
              pb: '10px',
            }}
          >
            <FlagIcon fontSize={'16px'} /> {BIDDINGS?.flagInappropiate}
          </Typography>
        </Link>
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
          {BIDDINGS?.sendProposal}
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
