// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import FilterAltOffRoundedIcon from '@mui/icons-material/FilterAltOffRounded';
// import ProjectsSliderFilter from './ProjectsSliderFilter';
// import ProjectsTabsFilter from './ProjectsTabsFilter';
// import {
//   Button,
//   MenuItem,
//   Select,
//   FormControl,
//   Container,
//   TextField,
//   Grid,
//   Box,
//   Popper,
//   Typography,
//   useMediaQuery,
//   InputAdornment,
//   IconButton,
// } from '@mui/material';
// import { styled } from '@mui/system';

// const ProjectsFilterComponent = ({ data }) => {
//   const globalUnits = useSelector((state) => state.globalUnits);
//   const [searchText, setSearchText] = useState('');
//   const [selectedPropertyAdType, setSelectedPropertyAdType] = useState('');
//   const [selectedAreaUnit, setSelectedAreaUnit] = useState(
//     globalUnits?.AREA_UNITS[0].value
//   );
//   const [selectedAreaRange, setSelectedAreaRange] = useState(['0', '5000']);
//   const [selectedPriceUnit, setSelectedPriceUnit] = useState(
//     globalUnits?.CURRENCY_UNITS[0].value
//   );
//   const [selectedPriceRange, setSelectedPriceRange] = useState(['0', '5000']);
//   const [selectedPropertyTab, setSelectedPropertyTab] = useState(0);
//   const [selectedProperty, setSelectedProperty] = useState('');

//   const [anchorEl1, setAnchorEl1] = useState(null);
//   const [anchorEl2, setAnchorEl2] = useState(null);
//   const [anchorEl3, setAnchorEl3] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const notificationPopupRef = useRef(null);

//   const handleClickOutside = (event) => {
//     if (
//       notificationPopupRef?.current &&
//       !notificationPopupRef?.current?.contains(event.target)
//     ) {
//       setAnchorEl1(null);
//       setAnchorEl2(null);
//       setAnchorEl3(null);
//       setDropdownOpen(null);
//     }
//   };

//   const handleClick1 = (event) => {
//     setAnchorEl1(anchorEl1 ? null : event.currentTarget);
//     setDropdownOpen(anchorEl1 ? null : 1);
//     // Close other poppers if open
//     setAnchorEl2(null);
//     setAnchorEl3(null);
//   };

//   const handleClick2 = (event) => {
//     setAnchorEl2(anchorEl2 ? null : event.currentTarget);
//     setDropdownOpen(anchorEl2 ? null : 2);
//     // Close other poppers if open
//     setAnchorEl1(null);
//     setAnchorEl3(null);
//   };

//   const handleClick3 = (event) => {
//     setAnchorEl3(anchorEl3 ? null : event.currentTarget);
//     setDropdownOpen(anchorEl3 ? null : 3);
//     // Close other poppers if open
//     setAnchorEl1(null);
//     setAnchorEl2(null);
//   };

//   const open1 = Boolean(anchorEl1);
//   const open2 = Boolean(anchorEl2);
//   const open3 = Boolean(anchorEl3);
//   const id1 = open1 ? 'simple-popper1' : undefined;
//   const id2 = open2 ? 'simple-popper2' : undefined;
//   const id3 = open3 ? 'simple-popper3' : undefined;

//   const handleAreaChange = (event, newValue) => {
//     setSelectedAreaUnit(newValue);
//   };
//   const handlePriceChange = (event, newValue) => {
//     setSelectedPriceUnit(newValue);
//   };
//   const handleAreaRangeChange = (event, newValue) => {
//     setSelectedAreaRange(newValue);
//   };
//   const handlePriceRangeChange = (event, newValue) => {
//     setSelectedPriceRange(newValue);
//   };
//   const handlePropertyTabChange = (event, newValue) => {
//     setSelectedPropertyTab(newValue);
//   };
//   const handlePropertyChange = (event, newValue) => {
//     setSelectedProperty(newValue);
//   };

//   const handleFilter = () => {
//     const filteredData = data?.filter((projects) => {
//       return (
//         projects?.title === searchText &&
//         projects?.description === searchText &&
//         projects?.purpose === selectedPropertyAdType &&
//         projects?.propertyType === selectedProperty?.title &&
//         projects?.propertyCategory === selectedPropertyTab &&
//         projects?.areaUnit === selectedAreaUnit &&
//         projects?.amountCurrency === selectedPriceUnit &&
//         projects?.amount <= selectedPriceRange[0] &&
//         projects?.amount >= selectedPriceRange[1] &&
//         projects?.amount <= selectedAreaRange[0] &&
//         projects?.amount >= selectedAreaRange[1] &&
//         projects?.status === 'submit'
//       );
//     });
//   };

//   const handleClearFilter = () => {
//     setSelectedPropertyAdType('');
//     setSelectedPropertyTab(0);
//     setSelectedProperty('');
//     setSelectedPriceUnit('');
//     setSelectedPriceRange(['0', '5000']);
//     setSelectedAreaUnit('');
//     setSelectedAreaRange(['0', '5000']);
//     setSearchText('');
//   };

//   useEffect(() => {
//     document.addEventListener('mouseleave', handleClickOutside);
//     handleFilter();
//     return () => {
//       document.removeEventListener('mouseleave', handleClickOutside);
//     };
//   }, [
//     searchText,
//     selectedAreaRange,
//     selectedAreaUnit,
//     selectedPriceRange,
//     selectedPriceUnit,
//     selectedProperty,
//     selectedPropertyAdType,
//     selectedPropertyTab,
//   ]);

//   const isSmallScreen = useMediaQuery('(max-width:742px)');

//   const CustomDropdownIcon = styled('img')(({ open }) => ({
//     transition: 'transform 0.3s ease',
//     transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
//     right: '15px !important',
//   }));

//   return (
//     <Container>
//       <Grid container spacing={{ xs: '10px', md: '10px', lg: '50px' }}>
//         <Grid item lg={2} md={3} sm={6} xs={12}>
//           <FormControl fullWidth>
//             <Select
//               fullWidth
//               IconComponent={(props) => (
//                 <CustomDropdownIcon
//                   {...props}
//                   src="/images/Dropdown.png"
//                   alt="Dropdown"
//                   open={props.open}
//                 />
//               )}
//               value={
//                 selectedPropertyAdType || globalUnits?.PROPERTY_TYPES[0]?.value
//               }
//               sx={{
//                 fontSize: '15px',
//                 height: '40px',
//                 '& .MuiOutlinedInput-notchedOutline': {
//                   borderColor: '#E7E7E7',
//                 },
//                 '&:hover .MuiOutlinedInput-notchedOutline': {
//                   borderColor: '#E7E7E7',
//                 },
//                 '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//                   borderColor: '#E7E7E7',
//                 },
//               }}
//               onChange={(e) => setSelectedPropertyAdType(e.target.value)}
//               MenuProps={{
//                 PaperProps: {
//                   sx: {
//                     borderRadius: '0 0 5px 5px',
//                   },
//                 },
//                 MenuListProps: {
//                   sx: {
//                     padding: '0px',
//                     '& .MuiMenuItem-root': {
//                       borderBottom: '1px solid #E7E7E7',
//                       '&:last-child': {
//                         borderBottom: 'none',
//                       },
//                     },
//                     '& .Mui-selected': {
//                       backgroundColor: 'transparent !important',
//                     },
//                   },
//                 },
//               }}
//             >
//               {globalUnits?.PROPERTY_TYPES?.map((unit, index) => (
//                 <MenuItem key={index} value={unit?.value}>
//                   {unit?.title}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item lg={2} md={3} sm={6} xs={12}>
//           <TextField
//             aria-describedby={id1}
//             variant="outlined"
//             value={selectedProperty?.title || 'All'}
//             onClick={handleClick1}
//             fullWidth
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 height: '40px',
//                 fontSize: '15px',
//                 '& fieldset': {
//                   borderColor: '#E7E7E7',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#E7E7E7',
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#E7E7E7',
//                 },
//               },
//             }}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle dropdown"
//                     onClick={handleClick1}
//                     edge="end"
//                     sx={{
//                       paddingRight: '25px',
//                       '&:hover': {
//                         backgroundColor: 'transparent !important',
//                         color: 'transparent',
//                       },
//                     }}
//                   >
//                     <img
//                       src="/images/Dropdown.png"
//                       alt="Dropdown"
//                       style={{
//                         transition: 'transform 0.3s ease',
//                         transform:
//                           dropdownOpen === 1
//                             ? 'rotate(180deg)'
//                             : 'rotate(0deg)',
//                       }}
//                     />
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Popper
//             id={id1}
//             open={open1}
//             anchorEl={anchorEl1}
//             placement="bottom-start"
//             ref={notificationPopupRef}
//             sx={{ zIndex: '1' }}
//           >
//             <Box
//               sx={{
//                 zIndex: 999,
//                 bgcolor: 'background.paper',
//                 height: 'auto',
//                 mt: '10px',
//                 borderRadius: '20px',
//               }}
//             >
//               <ProjectsTabsFilter
//                 data={globalUnits?.PROPERTY_TABS_DATA}
//                 selectedPropertyTab={selectedPropertyTab}
//                 selectedProperty={selectedProperty}
//                 handlePropertyTabChange={handlePropertyTabChange}
//                 handlePropertyChange={handlePropertyChange}
//                 setSelectedProperty={setSelectedProperty}
//                 setSelectedPropertyTab={setSelectedPropertyTab}
//               />
//             </Box>
//           </Popper>
//         </Grid>
//         <Grid item lg={2} md={3} sm={6} xs={12}>
//           <TextField
//             aria-describedby={id2}
//             variant="outlined"
//             value={
//               dropdownOpen === 2
//                 ? `${selectedPriceRange[0]} - ${selectedPriceRange[1]} ${selectedPriceUnit}`
//                 : 'Price'
//             }
//             onClick={handleClick2}
//             fullWidth
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 height: '40px',
//                 fontSize: '15px',
//                 '& fieldset': {
//                   borderColor: '#E7E7E7',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#E7E7E7',
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#E7E7E7',
//                 },
//               },
//             }}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle dropdown"
//                     onClick={handleClick2}
//                     edge="end"
//                     sx={{
//                       paddingRight: '25px',
//                       '&:hover': {
//                         backgroundColor: 'transparent !important',
//                         color: 'transparent',
//                       },
//                     }}
//                   >
//                     <img
//                       src="/images/Dropdown.png"
//                       alt="Dropdown"
//                       style={{
//                         transition: 'transform 0.3s ease',
//                         transform:
//                           dropdownOpen === 2
//                             ? 'rotate(180deg)'
//                             : 'rotate(0deg)',
//                       }}
//                     />
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Popper
//             id={id2}
//             open={open2}
//             anchorEl={anchorEl2}
//             placement="bottom-start"
//             ref={notificationPopupRef}
//             sx={{ zIndex: '1' }}
//           >
//             <Box
//               sx={{
//                 zIndex: 999,
//                 bgcolor: 'background.paper',
//                 height: 'auto',
//                 mt: '10px',
//                 borderRadius: '20px',
//               }}
//             >
//               <ProjectsSliderFilter
//                 title={'Price Range'}
//                 selectedUnit={selectedPriceUnit}
//                 selectedRange={selectedPriceRange}
//                 units={globalUnits?.CURRENCY_UNITS}
//                 handleRange={handlePriceRangeChange}
//                 handleUnit={handlePriceChange}
//               />
//             </Box>
//           </Popper>
//         </Grid>

//         <Grid item lg={2} md={1.8} sm={6} xs={12}>
//           <TextField
//             aria-describedby={id3}
//             variant="outlined"
//             value={
//               dropdownOpen === 3
//                 ? `${selectedAreaRange[0]} - ${selectedAreaRange[1]} ${selectedAreaUnit}`
//                 : 'Size'
//             }
//             onClick={handleClick3}
//             fullWidth
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 height: '40px',
//                 fontSize: '15px',
//                 '& fieldset': {
//                   borderColor: '#E7E7E7',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#E7E7E7',
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#E7E7E7',
//                 },
//               },
//             }}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle dropdown"
//                     onClick={handleClick3}
//                     edge="end"
//                     sx={{
//                       paddingRight: '25px',
//                       '&:hover': {
//                         backgroundColor: 'transparent !important',
//                         color: 'transparent',
//                       },
//                     }}
//                   >
//                     <img
//                       src="/images/Dropdown.png"
//                       alt="Dropdown"
//                       style={{
//                         transition: 'transform 0.3s ease',
//                         transform:
//                           dropdownOpen === 3
//                             ? 'rotate(180deg)'
//                             : 'rotate(0deg)',
//                       }}
//                     />
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Popper
//             id={id3}
//             open={open3}
//             anchorEl={anchorEl3}
//             placement={'bottom-start'}
//             ref={notificationPopupRef}
//             sx={{ zIndex: '1' }}
//           >
//             <Box
//               sx={{
//                 zIndex: 999,
//                 bgcolor: 'background.paper',
//                 height: 'auto',
//                 mt: '10px',
//                 borderRadius: '20px',
//               }}
//             >
//               <ProjectsSliderFilter
//                 title={'Area'}
//                 selectedUnit={selectedAreaUnit}
//                 selectedRange={selectedAreaRange}
//                 units={globalUnits?.AREA_UNITS}
//                 handleRange={handleAreaRangeChange}
//                 handleUnit={handleAreaChange}
//               />
//             </Box>
//           </Popper>
//         </Grid>
//         <Grid item lg={3.5} md={3.5} sm={10} xs={10}>
//           <TextField
//             fullWidth
//             placeholder="Search..."
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <IconButton edge="start" sx={{ paddingLeft: '20px' }}>
//                     <img src="/images/Search.png" alt="Search" />
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 height: '40px',
//                 '& fieldset': {
//                   borderColor: '#E7E7E7',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#E7E7E7',
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#E7E7E7',
//                 },
//               },
//             }}
//           />
//         </Grid>
//         <Grid
//           item
//           lg={1.3}
//           md={3}
//           sm={1}
//           xs={1}
//           sx={{ display: 'flex', alignItems: 'center' }}
//         >
//           <Typography
//             sx={{
//               fontSize: '16px',
//               fontWeight: 500,
//               color: '#126FAA',
//               textDecoration: 'underline',
//               p: 0,
//             }}
//           >
//             {isSmallScreen ? (
//               <FilterAltOffRoundedIcon
//                 sx={{
//                   height: '32px',
//                   width: 'auto',
//                   color: '#126FAA',
//                   fontWeight: '500',
//                 }}
//               />
//             ) : (
//               `Clear Filter`
//             )}
//           </Typography>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ProjectsFilterComponent;

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

const ProjectsFilterComponent = forwardRef(({ fields }, ref) => {
  const [activeMenuOption, setActiveMenuOption] = useState('All');
  const [filterObject, setfilterObject] = useState({
    purpose: 'Buy',
    all: { label: 'House', category: 'All' },
    price: { minimum: '', maximum: '' },
    size: '',
    search: '',
  });

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

  console.log(filterObject, 'filterObject');

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
                      border: '1px solid #E7E7E7',
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
                popupIcon={<KeyboardArrowDownIcon sx={{ color: '#666666' }} />}
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
                  const { key, ...rest } = props;
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
});

ProjectsFilterComponent.displayName = 'ProjectsFilterComponent';

export default ProjectsFilterComponent;
