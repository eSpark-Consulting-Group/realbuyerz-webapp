import {
  Autocomplete,
  Box,
  Grid,
  Popper,
  TextField,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FilterControls = ({
  index,
  field,
  filterObject,
  subTypeData,
  handleChangeSelect,
}) => {
  return (
    <Grid item xs={12} sm={5.5} md={3.8} lg={2.3} key={index}>
      <Box sx={{ width: '100%' }}>
        <Typography>{field?.title || ''}</Typography>

        <Autocomplete
          PopperComponent={(props) => (
            <Popper
              {...props}
              sx={{ boxShadow: ' 0px 0px 10px 0px #00000040;' }}
            />
          )}
          sx={{
            marginTop: '12px',
            background: '#fff',

            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },

            '&:hover fieldset': {
              border: 'none',
            },

            '& .css-1v0wyq6-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-clearIndicator':
              {
                color: '#66666666',
                display: 'inline-flex',
                '&:hover': {
                  color: '#66666666',
                },
              },

            '& .MuiOutlinedInput-root': {
              borderRadius: '5px',
              height: '40px',
              '& fieldset': {
                border: '1px solid #E7E7E7',
              },
            },

            '& .MuiAutocomplete-inputRoot': {
              margin: '0 !important',
              padding: '0 !important',
              paddingLeft: '12px !important',
            },

            '& .MuiInputLabel-root': {
              fontSize: '14px',
              marginTop: -0.9,
              marginLeft: -0.5,
              '@media (min-width: 280px) and (max-width: 375px)': {
                fontSize: '10px',
              },
            },

            '& .MuiAutocomplete-root': {
              margin: '0 !important',
              padding: '0 !important',
            },

            '& .MuiAutocomplete-option': {
              borderBottom: '1px solid #E7E7E7',
            },

            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            },

            '& .MuiAutocomplete-clearIndicator': {
              display: 'none',
            },

            '& .MuiAutocomplete-popupIndicator': {
              '&:hover': {
                backgroundColor: 'transparent',
              },
            },
          }}
          popupIcon={<KeyboardArrowDownIcon sx={{ color: '#66666666' }} />}
          disablePortal
          id={`combo-box-${index}`}
          value={filterObject?.[field?.key] || null}
          onChange={(e) => handleChangeSelect(field?.key, e?.target?.innerText)}
          options={(field?.key == 'subType'
            ? subTypeData
            : field?.options
          )?.map((opt) => opt)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={field?.placeholder || 'Select Type'}
              InputLabelProps={{
                sx: {
                  margin: 0,
                  padding: 0,
                  fontSize: '14px',
                  '@media (min-width: 280px) and (max-width: 375px)': {
                    fontSize: '10px',
                  },
                },
              }}
            />
          )}
          renderOption={(props, option, { index }) => (
            <Box
              {...props}
              sx={{
                my: 0,
                py: 0,
                borderTop: `${index !== 0 ? '1px solid #E7E7E7' : null}`,
              }}
            >
              <Typography
                sx={{
                  letterSpacing: '0em',
                  maxWidth: { xs: '200px' },
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >
                {option?.label || ''}
              </Typography>
            </Box>
          )}
        />
      </Box>
    </Grid>
  );
};

export default FilterControls;
