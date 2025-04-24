'use client';
import { Box, TextField, Autocomplete } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import LabelDisplay from './LabelDisplay';
import DisplayError from './DisplayError';

import { boxStyles } from './styles';

const SelectCityType = ({ image, label, cityOptions, formik }) => {
  const options = cityOptions?.map((opt) => opt?.label);

  return (
    <Box
      sx={{
        ...boxStyles('auto'),
        pb: { xs: 2, sm: 2, xl: 0 },
      }}
    >
      <LabelDisplay text={label} image={image} alt={'city'} span isMobile />

      <Box sx={{ width: { xs: '90%', sm: '80%', md: '80%', lg: '70%' } }}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            gap: 1,
            mt: 0.8,
            mb: { xs: 3, xl: 0 },
          }}
        >
          <LabelDisplay text={label} span mb={2} />

          <Autocomplete
            name={'city'}
            popupIcon={<KeyboardArrowDownIcon sx={{ color: '#777777' }} />}
            clearIcon={null}
            value={formik?.values?.city || null}
            onBlur={formik?.handleBlur}
            error={formik?.touched?.city && Boolean(formik?.errors?.city)}
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{
              width: { xs: '100%', sm: '94%', md: '100%', lg: '400px' },
              mb: 2,
              borderColor: '#E7E7E7',
              '& .MuiOutlinedInput-root': {
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: formik?.errors?.city ? 'red' : '#E7E7E7',
                },
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: formik?.errors?.city ? 'red' : '#E7E7E7',
                },
              '& .MuiAutocomplete-popupIndicator': {
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              },
              '& fieldset': {
                borderRadius: '10px',
                border: formik?.errors['city']
                ? 'solid 1px red'
                : '1px solid #E7E7E7',
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select City"
                InputLabelProps={{
                  sx: {
                    color: '#969696',
                  },
                }}
              />
            )}
            onChange={(e, value) => {
              formik?.handleChange('city')(value || '');
            }}
          />

          <DisplayError
            formik={formik}
            errorLabel={{ first: 'city' }}
            extra={{ mb: 1 }}
          />
        </Box>

        <TextField
          label="Property Address"
          variant="outlined"
          fullWidth
          value={formik?.values.address}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          name="address"
          error={formik?.touched.address && Boolean(formik?.errors?.address)}
          InputProps={{
            sx: {
              borderRadius: '10px',
            },
          }}
          InputLabelProps={{
            sx: {
              color: '#969696 !important',
              '&.Mui-focused': {
                color: 'red',
              },
            },
          }}
          sx={{
            mb: 1,
            width: { xs: '100%', sm: '94%', md: '100%', lg: '400px' },
            '& fieldset': {
              border: formik?.errors['address']
                ? 'solid 1px red'
                : '1px solid #E7E7E7',
              borderRadius: '10px',
            },
          }}
        />

        <DisplayError formik={formik} errorLabel={{ first: 'address' }} />
      </Box>
    </Box>
  );
};
export default SelectCityType;
