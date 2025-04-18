'use client';
import React, { forwardRef, useState } from 'react';
import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ProjectMenu from './ProjectMenu';
import { getDefaultFilter } from '../../utils/defaultFilter';
import CustomPopper from './customPopper';
import ResetFilter from './resetFilter';

const ProjectsFilterComponent = forwardRef(({ fields, filterObject, setfilterObject }, ref) => {
  const [activeMenuOption, setActiveMenuOption] = useState('All');

  const handleChangeSelect = (key, val) => {
    if (key === 'all') {
      setfilterObject({ ...filterObject, all: { label: 'House', category: val } });
    } else if (key === 'price') {
      setfilterObject({ ...filterObject, price: { minimum: 20, maximum: 80 } });
    } else {
      setfilterObject({ ...filterObject, [key]: val });
    }
  };

  const handleReset = () => {
    setActiveMenuOption('All');
    setfilterObject(getDefaultFilter());
  };

  return (
    <Grid container spacing={4} justifyContent={{ lg: 'center' }} ref={ref}>
      {fields?.map((field, index) => (
        <Grid item xs={12} sm={6} md={4} lg={field?.grid?.lg} key={`${field?.key}-${index}`}>
          <Typography>{field?.title || ''}</Typography>
          {field?.type === 'menu' ? (
            <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
              <ProjectMenu
                field={field}
                filterObject={filterObject}
                setfilterObject={setfilterObject}
                activeMenuOption={activeMenuOption}
                setActiveMenuOption={setActiveMenuOption}
              />
            </Box>
          ) : (
            <Autocomplete
              disableRipple
              freeSolo={field?.freeSolo}
              PopperComponent={CustomPopper}
              sx={autocompleteStyles}
              popupIcon={<KeyboardArrowDownIcon sx={{ color: '#666666' }} />}
              disablePortal
              id={`combo-box-${index}`}
              value={filterObject?.[field?.key] || ''}
              onChange={(e, newValue) => handleChangeSelect(field?.key, newValue?.value)}
              options={field?.options}
              renderInput={(params) => (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: field?.key === 'search' && 1 }}>
                  <TextField
                    {...params}
                    type={field?.type}
                    onChange={(e) => handleChangeSelect(field?.key, e?.target?.value)}
                    placeholder={field?.placeholder || 'Select Type'}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          border: '1px solid #E7E7E7',
                        },
                      },
                    }}
                  />
                  {field?.key === 'search' && <ResetFilter handleReset={handleReset} />}
                </Box>
              )}
              renderOption={(props, option, { index }) => (
                <Box
                  key={index}
                  {...props}
                  sx={{ my: 0, py: 0, borderTop: index !== 0 ? '1px solid #E7E7E7' : null }}
                >
                  <Typography
                    sx={{
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
          )}
        </Grid>
      ))}
    </Grid>
  );
});

ProjectsFilterComponent.displayName = 'ProjectsFilterComponent';

const autocompleteStyles = {
  my: '12px',
  background: '#fff',
  '& .MuiOutlinedInput-root': {
    borderRadius: '5px',
    height: '40px',
    '& fieldset': { border: '1px solid #E7E7E7' },
  },
  '& .MuiAutocomplete-inputRoot': {
    paddingLeft: '12px !important',
  },
  '& .MuiAutocomplete-clearIndicator': {
    display: 'none',
  },
  '& .MuiAutocomplete-popupIndicator:hover': {
    backgroundColor: 'transparent',
  },
};

export default ProjectsFilterComponent;
