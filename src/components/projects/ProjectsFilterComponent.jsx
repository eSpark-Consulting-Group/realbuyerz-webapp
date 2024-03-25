import React, { useState, useEffect } from 'react';
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
} from '@mui/material';
import ProjectsSliderFilter from './ProjectsSliderFilter';
import { useSelector } from 'react-redux';
import ProjectsTabsFilter from './ProjectsTabsFilter';
import FilterAltOffRoundedIcon from '@mui/icons-material/FilterAltOffRounded';

const ProjectsFilterComponent = ({ data }) => {
  const globalUnits = useSelector((state) => state.globalUnits);
  const [searchText, setSearchText] = useState('');
  const [selectedPropertyAdType, setSelectedPropertyAdType] = useState('');
  const [selectedAreaUnit, setSelectedAreaUnit] = useState('sqft');
  const [selectedAreaRange, setSelectedAreaRange] = useState(['0', '5000']);
  const [selectedPriceUnit, setSelectedPriceUnit] = useState('pkr');
  const [selectedPriceRange, setSelectedPriceRange] = useState(['0', '5000']);
  const [selectedPropertyTab, setSelectedPropertyTab] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState('');

  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const handleClick1 = (event) => {
    setAnchorEl1(anchorEl1 ? null : event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(anchorEl3 ? null : event.currentTarget);
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const id1 = open1 ? 'simple-popper1' : undefined;
  const id2 = open2 ? 'simple-popper2' : undefined;
  const id3 = open3 ? 'simple-popper3' : undefined;

  const handleAreaChange = (event) => {
    setSelectedAreaUnit(event.target.value);
  };

  const handleAreaRangeChange = (event, newValue) => {
    setSelectedAreaRange(newValue);
  };

  const handlePriceChange = (event) => {
    setSelectedPriceUnit(event.target.value);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setSelectedPriceRange(newValue);
  };

  const handlePropertyTabChange = (event, newValue) => {
    setSelectedPropertyTab(newValue);
    setSelectedProperty(null);
  };

  const handlePropertyChange = (event) => {
    const chipIndex = event.target.value;
    setSelectedProperty(globalUnits?.PROPERTY_TABS_DATA?.content[chipIndex]);
  };

  const handlePriceApply = () => {};

  const handlePriceCancel = () => {};
  const handleAreaApply = () => {};
  const handleAreaCancel = () => {};
  const handlePropertyApply = () => {};
  const handlePropertyCancel = () => {};
  const handleFilter = () => {
    const filteredData = data?.filter((projects) => {
      return (
        projects?.title === searchText &&
        projects?.description === searchText &&
        projects?.purpose === selectedPropertyAdType &&
        projects?.propertyType === selectedProperty?.title &&
        projects?.propertyCategory === selectedPropertyTab &&
        projects?.areaUnit === selectedAreaUnit.toLowerCase() &&
        projects?.amountCurrency === selectedPriceUnit.toUpperCase() &&
        projects?.amount <= selectedPriceRange[0] &&
        projects?.amount >= selectedPriceRange[1] &&
        projects?.amount <= selectedAreaRange[0] &&
        projects?.amount >= selectedAreaRange[1]
      );
    });
    console.log(filteredData, 'filtered');
  };

  // console.log(searchText, 'searchText');
  // console.log(selectedAreaUnit.toLowerCase(), 'selectedAreaUnit');
  // console.log( selectedPropertyAdType.charAt(0).toUpperCase() + selectedPropertyAdType?.slice(1),
  //   'selectedPropertyAdType'
  // );
  // console.log(selectedProperty?.title,  'selectedProperty');
  // console.log(selectedPropertyTab, 'selectedPropertyTab');
  // console.log(selectedPriceUnit.toUpperCase(),'selectedPriceUnit');
  // console.log(selectedPriceRange[0], 'selectedPriceRange[0]');
  // console.log(selectedPriceRange[1], 'selectedPriceRange[1]');
  // console.log(selectedAreaRange[0], 'selectedAreaRange[0]');
  // console.log(selectedAreaRange[1], 'selectedAreaRange[1]');

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
    handleFilter();
  }, [selectedPropertyAdType, searchText]);
const isSmallScreen = useMediaQuery('(max-width:742px)');
  return (
    <>
      <Container>
        <Grid container spacing={{xs:'10px',md:'10px',lg:'50px'}}>
          <Grid item lg={1.8} md={3} sm={6} xs={12}>
            <FormControl fullWidth>
            <Select
              fullWidth
                value={
                  selectedPropertyAdType ||
                  globalUnits?.PROPERTY_TYPES[0]?.value
                }
                onChange={(e) => setSelectedPropertyAdType(e.target.value)}
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
              value={selectedProperty?.title || 'Any'}
              onClick={handleClick1}
              fullWidth
            />
            <Popper
              id={id1}
              open={open1}
              anchorEl={anchorEl1}
              placement="bottom-start"
              sx={{ zIndex: '1' }}
            >
              <Box
                sx={{
                  zIndex: 999,
                  bgcolor: 'background.paper',
                  height: 'auto',
                  mt: '10px',
                }}
              >
                <ProjectsTabsFilter
                  data={globalUnits?.PROPERTY_TABS_DATA}
                  selectedPropertyTab={selectedPropertyTab}
                  selectedProperty={selectedProperty}
                  handlePropertyTabChange={handlePropertyTabChange}
                  handlePropertyChange={handlePropertyChange}
                  setSelectedProperty={setSelectedProperty}
                  handleApply={handlePropertyApply}
                  handleCancel={handlePropertyCancel}
                />
              </Box>
            </Popper>
          </Grid>
          <Grid item lg={1.8} md={3} sm={6} xs={12}>
            <TextField
              aria-describedby={id2}
              variant="outlined"
              value={`${selectedPriceRange[0]} -  ${selectedPriceRange[1]}  ${selectedPriceUnit.toUpperCase()}`}
              onClick={handleClick2}fullWidth
            />
            <Popper
              id={id2}
              open={open2}
              anchorEl={anchorEl2}
              placement="bottom-start"
              sx={{ zIndex: '1' }}
            >
              <Box
                sx={{
                  zIndex: 999,
                  bgcolor: 'background.paper',
                  height: 'auto',
                  mt: '10px',
                  // width: '300px',
                }}
              >
                <ProjectsSliderFilter
                  title={'Price Range'}
                  selectedUnit={selectedPriceUnit}
                  units={globalUnits?.CURRENCY_UNITS}
                  selectedRange={selectedPriceRange}
                  handleChange={handlePriceChange}
                  handleRangeChange={handlePriceRangeChange}
                  handleApply={handlePriceApply}
                  handleCancel={handlePriceCancel}
                />
              </Box>
            </Popper>
          </Grid>
          <Grid item lg={1.8} md={3} sm={6} xs={12}>
            <TextField
              aria-describedby={id3}
              variant="outlined"
              value={`${selectedAreaRange[0]} - ${selectedAreaRange[1]} ${selectedAreaUnit.toUpperCase()}`}
              onClick={handleClick3}fullWidth
            />
            <Popper
              id={id3}
              open={open3}
              anchorEl={anchorEl3}
              placement={'bottom-start'}
              sx={{ zIndex: '1' }}
            >
              <Box
                sx={{
                  zIndex: 999,
                  bgcolor: 'background.paper',
                  height: 'auto',
                  mt: '10px',
                }}
              >
                <ProjectsSliderFilter
                  title={'Area'}
                  selectedUnit={selectedAreaUnit}
                  units={globalUnits?.AREA_UNITS}
                  selectedRange={selectedAreaRange}
                  handleChange={handleAreaChange}
                  handleRangeChange={handleAreaRangeChange}
                  handleApply={handleAreaApply}
                  handleCancel={handleAreaCancel}
                />
              </Box>
            </Popper>
          </Grid>

          <Grid item lg={3.5} md={9} sm={10} xs={10}>
            <TextField
              fullWidth
              placeholder="Search Projects"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Grid>
          <Grid item lg={1.3} md={3} sm={2} xs={2}>
            <Button
              sx={{
                height: '52px',
                color: '#126FAA',
                textDecoration: 'underline',
                p:0,
              }}
              onClick={handleClearFilter}
              fullWidth
            >
              <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>
              {isSmallScreen ? <FilterAltOffRoundedIcon sx={{height:'40px', width:'40px'}}/>: `Clear Filter` }
                
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProjectsFilterComponent;
