import React, { useState, useEffect } from 'react';
import {
  Slider,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Container,
  TextField,
  Grid,
  Box,
  Tabs,
  Tab,
  Popper,
} from '@mui/material';
import SelectProperyType from '../PostListing/SelectPropertyType';
import {
  PROPERTY_BUYING_DETAIL,
  PROPERTY_INFORMATION,
} from '@/app/constants/postListing';
import { Formik } from 'formik';
import SizeFilter from './SizeFilter';
import DynamicTabs from './TabsFilter';

const FilterComponent = ({ data }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [selectedAdType, setSelectedAdType] = useState('');
  const [selectedAreaUnit, setSelectedAreaUnit] = useState('');
  const [selectedAreaRange, setSelectedAreaRange] = useState([0, 1000]);
  const [selectedPriceUnit, setSelectedPriceUnit] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);
  // const [submittedValues, setSubmittedValues] = useState(null);
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
  const handleAreaApply = () => {
    dispatchSubmitValuesToRedux(selectedAreaUnit, selectedAreaRange);
    setSubmittedValues({ selectedAreaUnit, selectedAreaRange });
  };
  const handleAreaCancel = () => {
    setSelectedAreaUnit('');
    setSelectedAreaRange([0, 100]);
    setSubmittedValues(null);
  };
  
  const handlePriceChange = (event) => {
    setSelectedPriceUnit(event.target.value);
  };
  const handlePriceRangeChange = (event, newValue) => {
    setSelectedPriceRange(newValue);
  };
  const handlePriceApply = () => {
    dispatchSubmitValuesToRedux(selectedPriceUnit, selectedPriceRange);
    setSubmittedValues({ selectedPriceUnit, selectedPriceRange });
  };
  const handlePriceCancel = () => {
    setSelectedPriceUnit('');
    setSelectedPriceRange([0, 100]);
    setSubmittedValues(null);
  };
 const handleFilter = () => {
    setSelectedPriceUnit('');
  };
  const handleClearFilter = () => {
    setSelectedPriceUnit('');
  };
  // const dispatchSubmitValuesToRedux = (
  //   selectedAreaUnit,
  //   selectedAreaRange
  // ) => {
  //   dispatch(submitFilters(selectedAreaUnit, selectedAreaRange));
  // };

  const areaUnits = [
    { value: 'sqft', title: 'Sq.ft' },
    { value: 'sqm', title: 'Sq.M' },
    { value: 'sqyd', title: 'Sq.Yd' },
    { value: 'marla', title: 'Marla' },
    { value: 'kanal', title: 'Kanal' },
  ];
  const currencyUnits = [
    { value: 'pkr', title: 'PKR' },
    { value: 'usd', title: 'USD' },
    { value: 'gbp', title: 'GBP' },
    { value: 'cad', title: 'CAD' },
    { value: 'eur', title: 'Euro' },
  ];
  const propertyType = [
    { value: ' ', title: 'Any' },
    { value: 'sell', title: 'Sell' },
    { value: 'rent', title: 'Rent' },
  ];
  const tabs = [
    {
      label: 'Houses',
      content: [
        { label: 'Face', icon: 'asdna' },
        { label: 'Location', icon: 'asdna' },
        { label: 'Face', icon: 'asdna' },
        { label: 'Location', icon: 'asdna' },
      ],
    },
    {
      label: 'Plots',
      content: [
        { label: 'Work', icon: 'asdna' },
        { label: 'Face', icon:'asdna' },
        { label: 'Work', icon: 'asdna' },
        { label: 'Face', icon:'asdna' },
      ],
    },
    {
      label: 'Commercials',
      content: [
        { label: 'Location', icon: 'asdna' },
        { label: 'Work', icon: 'asdna' },
        { label: 'Location', icon: 'asdna' },
        { label: 'Work', icon: 'asdna' },
      ],
    },
  ];
   useEffect(() => {
    handleFilter();
 }, [selectedPropertyType, selectedAdType, selectedPriceRange, selectedAreaRange, searchText]);
  
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <FormControl fullWidth >
            <Select
              value={selectedPropertyType || propertyType[0]?.value}
              onChange={(e) => setSelectedPropertyType(e.target.value)}
            >
              {propertyType.map((unit, index) => (
    <MenuItem key={index} value={unit?.value}>
      {unit?.title}
    </MenuItem>
  ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
           <TextField aria-describedby={id1} variant="outlined" value={selectedPropertyType} onClick={handleClick1}/>
          <Popper id={id1} open={open1} anchorEl={anchorEl1} placement='bottom-start'>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                <DynamicTabs tabs={tabs} />
            </Box>
          </Popper>
        </Grid>
        <Grid item xs={2}>
          <TextField aria-describedby={id2} variant="outlined" value={selectedPriceUnit.toUpperCase() || 'Any'} onClick={handleClick2}/>
          <Popper 
            id={id2}
            open={open2}
            anchorEl={anchorEl2}
            placement='bottom-start'
            zIndex={999}
          >
            <Box
              sx={{
                zIndex: 999,
                bgcolor: 'background.paper',
                height: 'auto',mt:'10px'
                // width: '300px',
              }}
            >
              <SizeFilter
                title={'Price Range'}
                selectedUnit={selectedPriceUnit}
                units={currencyUnits}
                handleChange={handlePriceChange}
                selectedRange={selectedPriceRange}
                handleRangeChange={handlePriceRangeChange}
                handleApply={handlePriceApply}
                handleCancel={handlePriceCancel}
              />
            </Box>
          </Popper>
        </Grid>
        <Grid item xs={2}>
           <TextField aria-describedby={id3} variant="outlined" value={selectedAreaUnit || 'Any'}  onClick={handleClick3}/>
          <Popper
            id={id3}
            open={open3}
            anchorEl={anchorEl3}
            placement={'bottom-start'}
            zIndex={999}
          >
            <Box
              sx={{
                zIndex: 999,
                bgcolor: 'background.paper',
                height: 'auto',mt:'10px'
              }}
            >
              <SizeFilter
                title={'Area'}
                selectedUnit={selectedAreaUnit}
                units={areaUnits}
                handleChange={handleAreaChange}
                selectedRange={selectedAreaRange}
                handleRangeChange={handleAreaRangeChange}
                handleApply={handleAreaApply}
                handleCancel={handleAreaCancel}
              />
            </Box>
          </Popper>
        </Grid>

        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button variant="contained" onClick={handleFilter} fullWidth>
            Apply Filter
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button variant="contained" onClick={handleClearFilter} fullWidth>
            Clear Filter
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FilterComponent;
