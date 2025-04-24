import { Box } from '@mui/material';

import MapFrame from './MapFrame';
import LabelDisplay from './LabelDisplay';
import DisplayError from './DisplayError';

import { boxStyles } from './styles';

const SelectLocationType = ({
  propertyInformation,
  formik,
  filteredUserProperty,
}) => {
  return (
    <>
      <Box
        sx={{
          ...boxStyles('auto', 2),
        }}
      >
        <LabelDisplay
          text={propertyInformation?.location?.text}
          image={propertyInformation?.location?.images}
          alt={'location'}
          span
          isMobile
        />

        <Box sx={{ width: { xs: '90%', sm: '80%', md: '80%', lg: '70%' } }}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              mt: 0.8,
              mb: 3,
            }}
          >
            <LabelDisplay
              text={propertyInformation?.location?.text}
              span
              mb={2}
            />

            <MapFrame
              width="100%"
              height="103px"
              formik={formik}
              filteredUserProperty={filteredUserProperty}
            />

            <DisplayError
              doubleCheck
              formik={formik}
              errorLabel={{ first: 'longitude', second: 'latitude' }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SelectLocationType;
