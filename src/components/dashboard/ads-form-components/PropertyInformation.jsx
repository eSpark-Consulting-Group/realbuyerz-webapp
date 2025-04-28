'use client';
import { Typography, Box, TextField } from '@mui/material';

import TextDisplay from './TextDisplay';

import { boxStyles } from './styles';

const PropertyInformation = ({ postData, formik }) => {
  const specialIndex = 1;
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: { xs: 1, sm: 2 },
      }}
    >
      {postData?.addInfo.map((item, index) => (
        <Box sx={{ ...boxStyles('auto') }} key={index}>
          <TextDisplay
            text={item?.text}
            image={item?.image}
            alt={'purpose'}
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
                position: 'relative',
                gap: 1,
                mt: 0.8,
              }}
            >
              <TextDisplay text={item?.text} span />

              <TextField
                placeholder={item?.placeholder}
                sx={{
                  mb: 1,
                  width: { xs: '100%', lg: '741px' },
                  '& textarea': {
                    minHeight: index === specialIndex ? '192px' : '0',
                  },
                  '& fieldset': {
                    border: formik?.errors[item?.label]
                      ? 'solid 1px red'
                      : '1px solid #E7E7E7',
                    borderRadius: '10px',
                  },
                }}
                inputProps={{
                  sx: {
                    '&::placeholder': {
                      fontSize: { xs: '15px', md: '18px' },
                    },
                  },
                }}
                name={item?.label}
                value={formik?.values[item?.label]}
                onBlur={formik?.handleBlur}
                error={
                  formik?.touched[item?.label] &&
                  Boolean(formik?.errors[item?.label])
                }
                onChange={formik?.handleChange}
                multiline
              />

              {formik?.errors[item?.label] && (
                <Typography
                  sx={{
                    color: 'red',
                  }}
                >
                  {formik?.errors[item?.label]}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default PropertyInformation;
