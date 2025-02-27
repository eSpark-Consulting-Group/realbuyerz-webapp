import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import Link from 'next/link';

import { AGENT_PROFILE_DATA } from '@/src/constants/AgentProfile';
import TooltipText from '../../global/TooltipText';

const ViewAgentProfile = ({ image, name, link }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        background: 'white',
        borderRadius: 2,
        border: '1px solid #e0e0e0',
        marginTop: '40px',
        gap: '20px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '10px', md: '0px' },
          pt: 1.5,
          px: 1.5,
        }}
      >
        <Avatar
          src={image}
          sx={{ width: { xs: 80, lg: 100 }, height: 'auto' }}
        />
        <TooltipText
          text={name}
          maxLength={14}
          variant="secondary"
          typographyStyle={{
            ml: 2,
            fontSize: { xs: '16px', md: '20px', lg: '24px' },
            fontWeight: 600,
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#F5F6FB',
          borderTop: '1px solid #E4E4E4',
          py: 1.2,
        }}
      >
        <Link href={link}>
          <Typography
            variant="dimSecondary"
            sx={{
              width: '100%',
              fontSize: { xs: '13px', sm: '14px', md: '16px', lg: '18px' },
              background: '#F5F6FB',
              fontWeight: 500,
              textTransform: 'capitalize',
              color: '#515151',
              '&:hover': {
                background: '#F5F6FB',
              },
            }}
          >
            {AGENT_PROFILE_DATA.agentProfile}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
export default ViewAgentProfile;
