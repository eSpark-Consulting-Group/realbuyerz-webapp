import { formatDistanceToNow } from 'date-fns';

import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const UserPropertyContent = ({ userPropertyDetail }) => {
  return (
    <Box
      sx={{
        marginLeft: '10px',
      }}
    >
      <Typography
        sx={{
          fontSize: '15px',
          fontWeight: 500,
          color: '#126FAA',
          ml: 0.5,
        }}
      >
        {`${userPropertyDetail?.first_name || ''} ${userPropertyDetail?.last_name || ''}`}
      </Typography>

      <Typography
        sx={{
          color: '#757474',
          fontSize: '15px',
          fontWeight: 500,
        }}
      >
        <LocationOnIcon sx={{ fontSize: 28, color: '#757474' }} />
        {`${userPropertyDetail?.city || ''} ${userPropertyDetail?.country || ''}`}
      </Typography>

      <Typography variant="body1" sx={{ ml: { xs: 0, md: 0.5 } }}>
        {userPropertyDetail?.created_at &&
          formatDistanceToNow(new Date(userPropertyDetail?.created_at), {
            addSuffix: true,
          })}
      </Typography>
    </Box>
  );
};

export default UserPropertyContent;
