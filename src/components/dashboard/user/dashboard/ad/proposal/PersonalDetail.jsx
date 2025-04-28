import { format } from 'date-fns';

import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import UserProfileImage from '@/src/components/dashboard/UserProfileImage';

const PersonalDetail = ({ agentProposal, image }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2.5,
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <UserProfileImage
        width={60}
        height={60}
        badgeWidth={'7px'}
        badgeHeigth={'7px'}
        padding={0.3}
        right={2}
        image={agentProposal?.agentProperty?.user?.profileImage || image}
        isActive={false}
      />

      <Box
        sx={{
          textAlign: { xs: 'center', md: 'left' },
          pb: { xs: '10px', md: '0px' },
        }}
      >
        <Typography
          sx={{
            fontSize: '15px',
            fontWeight: 500,
            color: '#126FAA',
            textTransform: 'capitalize',
          }}
        >
          {`${agentProposal?.agentProperty.user?.firstName || ''} ${agentProposal?.agentProperty.user?.lastName || ''}`}
        </Typography>

        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <LocationOnIcon sx={{ fontSize: 28, color: '#757474' }} />

          <span>
            {`${agentProposal?.agentProperty?.city || ''} ${agentProposal?.agentProperty?.country || ''}`}{' '}
            -{' '}
            {format(
              new Date(agentProposal?.agentProperty?.created_at),
              'h:mma'
            ).toLowerCase()}{' '}
            local time
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default PersonalDetail;
