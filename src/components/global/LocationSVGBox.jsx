import { Box } from '@mui/material';

const LocationSVGBox = ({ city }) => {
  return (
    <Box
      sx={{
        width: 70,
        height: 18,
        top: '10px',
        right: '0px',
        position: 'absolute',
        backgroundImage: `url('/images/amenities/location.svg')`,
        backgroundSize: 'contain',
        textAlign: 'center',
        color: 'white',
        fontSize: 10,
      }}
    >
      {city || "City"}
    </Box>
  );
};

export default LocationSVGBox;
