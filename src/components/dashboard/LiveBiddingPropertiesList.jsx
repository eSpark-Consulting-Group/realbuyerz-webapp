import { usePathname } from 'next/navigation';

import { Typography, Box } from '@mui/material';

const LiveBiddingPropertiesList = ({
  city,
  status,
  location,
  proposal,
  connects,
  cardKeys,
  noConnects,
  pl,
  justifyContent,
}) => {
  const pathName = usePathname();
  const agent = '/agent';
  const user = '/user';

  return (
    <Box
      sx={{
        width: '100%',
        paddingLeft: pl ? pl : '17px',
        '@media(min-width: 280px) and (max-width: 445px)': {
          justifyContent: 'center',
        },
      }}
    >
      {status && (
        <CommonTypographyBox
          text={cardKeys?.status}
          textSecond={status}
          justifyContent={justifyContent}
        />
      )}

      {city && (
        <CommonTypographyBox
          text={cardKeys?.city}
          textSecond={city}
          justifyContent={justifyContent}
        />
      )}

      {location && (
        <CommonTypographyBox
          text={cardKeys?.area}
          textSecond={location}
          justifyContent={justifyContent}
        />
      )}

      {pathName?.includes(user) && proposal > 0 ? (
        <CommonTypographyBox
          text={cardKeys?.proposal}
          textSecond={proposal || 0}
        />
      ) : null}

      {pathName.includes(agent) && connects ? (
        <>
          {noConnects && (
            <CommonTypographyBox
              text={cardKeys?.connects}
              textSecond={connects}
            />
          )}
        </>
      ) : null}
    </Box>
  );
};

const CommonTypographyBox = ({ text, textSecond, justifyContent }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        '@media(min-width: 280px) and (max-width: 445px)': {
          justifyContent: justifyContent ? justifyContent : 'center',
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontWeight: 'bold', mx: 0.5, color: '#333333' }}
      >
        {text || ''}
      </Typography>

      <Typography variant="body1" sx={{ color: '#333333', fontWeight: 500 }}>
        {textSecond || ''}
      </Typography>
    </Box>
  );
};

export default LiveBiddingPropertiesList;
