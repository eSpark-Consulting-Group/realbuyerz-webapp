'use client';
import {
  Autocomplete,
  Box,
  Grid,
  Popper,
  TextField,
  Typography,
} from '@mui/material';
import React, { forwardRef, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterAltOffRoundedIcon from '@mui/icons-material/FilterAltOffRounded';
import ProjectMenu from './ProjectMenu';

const ProjectsFilterComponent = forwardRef(
  ({ fields, filterObject, setfilterObject }, ref) => {
    const [activeMenuOption, setActiveMenuOption] = useState('All');
    const handleChangeSelect = (key, val) => {
      if (key === 'all') {
        setfilterObject({
          ...filterObject,
          all: { label: 'House', category: val },
        });
      } else if (key === 'price') {
        setfilterObject({
          ...filterObject,
          price: { minimum: 20, maximum: 80 },
        });
      } else {
        setfilterObject({
          ...filterObject,
          [key]: val,
        });
      }
    };

    const handleReset = () => {
      setActiveMenuOption('All');
      setfilterObject({
        purpose: 'Buy',
        all: { label: 'House', category: 'All' },
        price: { minimum: '', maximum: '' },
        size: '',
        search: '',
      });
    };

    console.log({ filterObject });

    return (
      <Grid container spacing={4} justifyContent={{ lg: 'center' }} ref={ref}>
        {fields &&
          fields?.map((field, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={field?.grid?.lg}
              key={`${field?.key}-${index}`}
            >
              <Typography>{field?.title || ''}</Typography>
              {field?.type === 'menu' ? (
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
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
                  PopperComponent={(props) => (
                    <Popper
                      {...props}
                      sx={{ boxShadow: ' 0px 0px 10px 0px #00000040;' }}
                    />
                  )}
                  sx={{
                    my: '12px',
                    background: '#fff',
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: '1px solid #E7E7E7',
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
                        // border: '1px solid #E7E7E7',
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
                  popupIcon={
                    <KeyboardArrowDownIcon sx={{ color: '#666666' }} />
                  }
                  disablePortal
                  id={`combo-box-${index}`}
                  value={filterObject?.[field?.key] || ''}
                  onChange={(e, newValue) =>
                    handleChangeSelect(field?.key, newValue?.value)
                  }
                  options={field?.options}
                  renderInput={(params) => (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: field?.key === 'search' && 1,
                      }}
                    >
                      <TextField
                        {...params}
                        type={field?.type}
                        onChange={(e) =>
                          handleChangeSelect(field?.key, e?.target?.value)
                        }
                        placeholder={field?.placeholder || 'Select Type'}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                              border: '1px solid #E7E7E7',
                            },
                            '&.Mui-focused': {
                              boxShadow: 'none',
                              outline: 'none',
                            },
                          },
                        }}
                        InputLabelProps={{
                          sx: {
                            margin: 0,
                            padding: 0,
                            fontSize: '14px',
                            '@media (min-width: 280px) and (max-width: 375px)':
                              {
                                fontSize: '10px',
                              },
                          },
                        }}
                      />
                      {field?.key === 'search' && (
                        <>
                          <Typography
                            onClick={handleReset}
                            sx={{
                              display: { xs: 'none', lg: 'flex' },
                              fontSize: '16px',
                              fontWeight: 500,
                              color: '#126FAA',
                              textDecoration: 'underline',
                              textWrap: 'nowrap',
                              cursor: 'pointer',
                              pl: 3,
                            }}
                          >
                            Clear filter
                          </Typography>
                          <FilterAltOffRoundedIcon
                            onClick={() => handleReset()}
                            sx={{
                              display: { xs: 'flex', lg: 'none' },
                              height: '32px',
                              width: 'auto',
                              color: '#126FAA',
                              fontWeight: '500',
                              cursor: 'pointer',
                            }}
                          />
                        </>
                      )}
                    </Box>
                  )}
                  renderOption={(props, option, { index }) => {
                    const { ...rest } = props;
                    return (
                      <Box
                        key={index}
                        {...rest}
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
                    );
                  }}
                />
              )}
            </Grid>
          ))}
      </Grid>
    );
  }
);

ProjectsFilterComponent.displayName = 'ProjectsFilterComponent';

export default ProjectsFilterComponent;