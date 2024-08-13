'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import FilterAltOffRoundedIcon from '@mui/icons-material/FilterAltOffRounded';
import ProjectsSliderFilter from './ProjectsSliderFilter';
import ProjectsTabsFilter from './ProjectsTabsFilter';
import {
  Button,
  MenuItem,
  Select,
  FormControl,
  Container,
  TextField,
  Grid,
  Box,
  Popper,
  Typography,
  useMediaQuery,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/system';

const ProjectsFilterComponent = ({ data }) => {
  const globalUnits = useSelector((state) => state.globalUnits);
  const [searchText, setSearchText] = useState('');
  const [selectedPropertyAdType, setSelectedPropertyAdType] = useState('');
  const [selectedAreaUnit, setSelectedAreaUnit] = useState(
    globalUnits?.AREA_UNITS[0].value
  );
  const [selectedAreaRange, setSelectedAreaRange] = useState(['0', '5000']);
  const [selectedPriceUnit, setSelectedPriceUnit] = useState(
    globalUnits?.CURRENCY_UNITS[0].value
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState(['0', '5000']);
  const [selectedPropertyTab, setSelectedPropertyTab] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState('');

  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const notificationPopupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      notificationPopupRef?.current &&
      !notificationPopupRef?.current?.contains(event.target)
    ) {
      setAnchorEl1(null);
      setAnchorEl2(null);
      setAnchorEl3(null);
      setDropdownOpen(null);
    }
  };

  const handleClick1 = (event) => {
    setAnchorEl1(anchorEl1 ? null : event.currentTarget);
    setDropdownOpen(anchorEl1 ? null : 1);
    // Close other poppers if open
    setAnchorEl2(null);
    setAnchorEl3(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
    setDropdownOpen(anchorEl2 ? null : 2);
    // Close other poppers if open
    setAnchorEl1(null);
    setAnchorEl3(null);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(anchorEl3 ? null : event.currentTarget);
    setDropdownOpen(anchorEl3 ? null : 3);
    // Close other poppers if open
    setAnchorEl1(null);
    setAnchorEl2(null);
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const id1 = open1 ? 'simple-popper1' : undefined;
  const id2 = open2 ? 'simple-popper2' : undefined;
  const id3 = open3 ? 'simple-popper3' : undefined;

  const handleAreaChange = (event, newValue) => {
    setSelectedAreaUnit(newValue);
  };
  const handlePriceChange = (event, newValue) => {
    setSelectedPriceUnit(newValue);
  };
  const handleAreaRangeChange = (event, newValue) => {
    setSelectedAreaRange(newValue);
  };
  const handlePriceRangeChange = (event, newValue) => {
    setSelectedPriceRange(newValue);
  };
  const handlePropertyTabChange = (event, newValue) => {
    setSelectedPropertyTab(newValue);
  };
  const handlePropertyChange = (event, newValue) => {
    setSelectedProperty(newValue);
  };

  const handleFilter = () => {
    const filteredData = data?.filter((projects) => {
      return (
        projects?.title === searchText &&
        projects?.description === searchText &&
        projects?.purpose === selectedPropertyAdType &&
        projects?.propertyType === selectedProperty?.title &&
        projects?.propertyCategory === selectedPropertyTab &&
        projects?.areaUnit === selectedAreaUnit &&
        projects?.amountCurrency === selectedPriceUnit &&
        projects?.amount <= selectedPriceRange[0] &&
        projects?.amount >= selectedPriceRange[1] &&
        projects?.amount <= selectedAreaRange[0] &&
        projects?.amount >= selectedAreaRange[1] &&
        projects?.status === 'submit'
      );
    });
    console.log(filteredData, 'filtered');
  };

  const handleClearFilter = () => {
    setSelectedPropertyAdType('');
    setSelectedPropertyTab(0);
    setSelectedProperty('');
    setSelectedPriceUnit('');
    setSelectedPriceRange(['0', '5000']);
    setSelectedAreaUnit('');
    setSelectedAreaRange(['0', '5000']);
    setSearchText('');
  };

  useEffect(() => {
    document.addEventListener('mouseleave', handleClickOutside);
    handleFilter();
    return () => {
      document.removeEventListener('mouseleave', handleClickOutside);
    };
  }, [
    searchText,
    selectedAreaRange,
    selectedAreaUnit,
    selectedPriceRange,
    selectedPriceUnit,
    selectedProperty,
    selectedPropertyAdType,
    selectedPropertyTab,
  ]);

  const isSmallScreen = useMediaQuery('(max-width:742px)');

  const CustomDropdownIcon = styled('img')(({ open }) => ({
    transition: 'transform 0.3s ease',
    transform: open ? 'rotate(180deg)' : 'rotate(0deg)', 
    right: '15px !important',
  }));

  return (
    <Container>
      <Grid container spacing={{ xs: '10px', md: '10px', lg: '50px' }}>
        <Grid item lg={1.8} md={3} sm={6} xs={12}>
          <FormControl fullWidth>
            <Select
              fullWidth
              IconComponent={(props) => (
                <CustomDropdownIcon
                  {...props}
                  src="/images/Dropdown.png"
                  alt="Dropdown"
                  open={props.open}
                />
              )}
              value={
                selectedPropertyAdType || globalUnits?.PROPERTY_TYPES[0]?.value
              }
              sx={{
                height: '40px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#E7E7E7', 
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#E7E7E7', 
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#E7E7E7', 
                },
              }}
              onChange={(e) => setSelectedPropertyAdType(e.target.value)}
              MenuProps={{
                PaperProps: {
                  sx: {
                    borderRadius: '0 0 5px 5px',
                  },
                },
                MenuListProps: {
                  sx: {
                    padding: '0px',
                    '& .MuiMenuItem-root': {
                      borderBottom: '1px solid #E7E7E7',
                      '&:last-child': {
                        borderBottom: 'none',
                      },
                    },
                    '& .Mui-selected': {
                      backgroundColor: 'transparent !important', 
                    },
                  },
                },
              }}
            >
              {globalUnits?.PROPERTY_TYPES?.map((unit, index) => (
                <MenuItem key={index} value={unit?.value}>
                  {unit?.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={1.8} md={3} sm={6} xs={12}>
          <TextField
            aria-describedby={id1}
            variant="outlined"
            value={selectedProperty?.title || 'All'}
            onClick={handleClick1}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                height: '40px',
                '& fieldset': {
                  borderColor: '#E7E7E7',
                },
                '&:hover fieldset': {
                  borderColor: '#E7E7E7',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#E7E7E7',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle dropdown"
                    onClick={handleClick1}
                    edge="end"
                    sx={{
                      paddingRight: '25px',
                      '&:hover': {
                        backgroundColor: 'transparent !important',
                        color: 'transparent',
                      },
                    }}
                  >
                    <img
                      src="/images/Dropdown.png"
                      alt="Dropdown"
                      style={{
                        transition: 'transform 0.3s ease',
                        transform:
                          dropdownOpen === 1
                            ? 'rotate(180deg)'
                            : 'rotate(0deg)',
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Popper
            id={id1}
            open={open1}
            anchorEl={anchorEl1}
            placement="bottom-start"
            ref={notificationPopupRef}
            sx={{ zIndex: '1' }}
          >
            <Box
              sx={{
                zIndex: 999,
                bgcolor: 'background.paper',
                height: 'auto',
                mt: '10px',
                borderRadius: '20px',
              }}
            >
              <ProjectsTabsFilter
                data={globalUnits?.PROPERTY_TABS_DATA}
                selectedPropertyTab={selectedPropertyTab}
                selectedProperty={selectedProperty}
                handlePropertyTabChange={handlePropertyTabChange}
                handlePropertyChange={handlePropertyChange}
                setSelectedProperty={setSelectedProperty}
                setSelectedPropertyTab={setSelectedPropertyTab}
              />
            </Box>
          </Popper>
        </Grid>
        <Grid item lg={1.8} md={3} sm={6} xs={12}>
          <TextField
            aria-describedby={id2}
            variant="outlined"
            value={
              dropdownOpen === 2
                ? `${selectedPriceRange[0]} - ${selectedPriceRange[1]} ${selectedPriceUnit}`
                : 'Price'
            }
            onClick={handleClick2}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                height: '40px',
                '& fieldset': {
                  borderColor: '#E7E7E7',
                },
                '&:hover fieldset': {
                  borderColor: '#E7E7E7',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#E7E7E7',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle dropdown"
                    onClick={handleClick2}
                    edge="end"
                    sx={{
                      paddingRight: '25px',
                      '&:hover': {
                        backgroundColor: 'transparent !important',
                        color: 'transparent',
                      },
                    }}
                  >
                    <img
                      src="/images/Dropdown.png"
                      alt="Dropdown"
                      style={{
                        transition: 'transform 0.3s ease',
                        transform:
                          dropdownOpen === 2
                            ? 'rotate(180deg)'
                            : 'rotate(0deg)',
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Popper
            id={id2}
            open={open2}
            anchorEl={anchorEl2}
            placement="bottom-start"
            ref={notificationPopupRef}
            sx={{ zIndex: '1' }}
          >
            <Box
              sx={{
                zIndex: 999,
                bgcolor: 'background.paper',
                height: 'auto',
                mt: '10px',
                borderRadius: '20px',
              }}
            >
              <ProjectsSliderFilter
                title={'Price Range'}
                selectedUnit={selectedPriceUnit}
                selectedRange={selectedPriceRange}
                units={globalUnits?.CURRENCY_UNITS}
                handleRange={handlePriceRangeChange}
                handleUnit={handlePriceChange}
              />
            </Box>
          </Popper>
        </Grid>

        <Grid item lg={1.8} md={3} sm={6} xs={12}>
          <TextField
            aria-describedby={id3}
            variant="outlined"
            value={
              dropdownOpen === 3
                ? `${selectedAreaRange[0]} - ${selectedAreaRange[1]} ${selectedAreaUnit}`
                : 'Size'
            }
            onClick={handleClick3}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                height: '40px',
                '& fieldset': {
                  borderColor: '#E7E7E7',
                },
                '&:hover fieldset': {
                  borderColor: '#E7E7E7',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#E7E7E7',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle dropdown"
                    onClick={handleClick3}
                    edge="end"
                    sx={{
                      paddingRight: '25px',
                      '&:hover': {
                        backgroundColor: 'transparent !important',
                        color: 'transparent',
                      },
                    }}
                  >
                    <img
                      src="/images/Dropdown.png"
                      alt="Dropdown"
                      style={{
                        transition: 'transform 0.3s ease',
                        transform:
                          dropdownOpen === 3
                            ? 'rotate(180deg)'
                            : 'rotate(0deg)',
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Popper
            id={id3}
            open={open3}
            anchorEl={anchorEl3}
            placement={'bottom-start'}
            ref={notificationPopupRef}
            sx={{ zIndex: '1' }}
          >
            <Box
              sx={{
                zIndex: 999,
                bgcolor: 'background.paper',
                height: 'auto',
                mt: '10px',
                borderRadius: '20px',
              }}
            >
              <ProjectsSliderFilter
                title={'Area'}
                selectedUnit={selectedAreaUnit}
                selectedRange={selectedAreaRange}
                units={globalUnits?.AREA_UNITS}
                handleRange={handleAreaRangeChange}
                handleUnit={handleAreaChange}
              />
            </Box>
          </Popper>
        </Grid>
        <Grid item lg={3.5} md={9} sm={10} xs={10}>
          <TextField
            fullWidth
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton edge="start" sx={{ paddingLeft: '20px' }}>
                    <img src="/images/Search.png" alt="Search" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                height: '40px',
                '& fieldset': {
                  borderColor: '#E7E7E7',
                },
                '&:hover fieldset': {
                  borderColor: '#E7E7E7', 
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#E7E7E7', 
                },
              },
            }}
          />
        </Grid>
        <Grid item lg={1.3} md={3} sm={2} xs={2}>
          <Button
            sx={{
              height: '52px',
              color: '#126FAA',
              textDecoration: 'underline',
              p: 0,
            }}
            onClick={handleClearFilter}
            fullWidth
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>
              {isSmallScreen ? (
                <FilterAltOffRoundedIcon
                  sx={{
                    height: '40px',
                    width: '40px',
                    color: '#126FAA',
                    fontWeight: '500',
                  }}
                />
              ) : (
                `Clear Filter`
              )}
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectsFilterComponent;
