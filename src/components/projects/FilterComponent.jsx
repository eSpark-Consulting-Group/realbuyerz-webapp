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

  // const dispatchSubmitValuesToRedux = (
  //   selectedAreaUnit,
  //   selectedAreaRange
  // ) => {
  //   dispatch(submitFilters(selectedAreaUnit, selectedAreaRange));
  // };

  const areaUnits = [
    { value: 'sqm', title: 'Square Meter' },
    { value: 'sqft', title: 'Square Feet' },
  ];
  
   useEffect(() => {
    handleFilter();
 }, [selectedPropertyType, selectedAdType, selectedPriceRange, selectedAreaRange, searchText]);
  
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <InputLabel>Property Type</InputLabel>
            <Select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              {Array.from(new Set(data.map((item) => item.propertyType))).map(
                (type, index) => (
                  <MenuItem key={index} value={type}>
                    {type}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Button aria-describedby={id1} type="button" onClick={handleClick1}>
            Toggle Popper 1
          </Button>
          <Popper id={id1} open={open1} anchorEl={anchorEl1}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              The content of Popper 1.
            </Box>
          </Popper>
        </Grid>
        <Grid item xs={2}>
          <Button aria-describedby={id2} type="button" onClick={handleClick2}>
            Toggle Popper 2
          </Button>
          <Popper id={id2} open={open2} anchorEl={anchorEl2}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              The content of Popper 2.
            </Box>
          </Popper>
        </Grid>
        <Grid item xs={2}>
          <Button aria-describedby={id3} type="button" onClick={handleClick3}>
            Toggle Popper 3
          </Button>
          <Popper
            id={id3}
            open={open3}
            anchorEl={anchorEl3}
            position={'bottom-start'}
            zIndex={999}
          >
            <Box
              sx={{
                zIndex: 999,
                p: '20px',
                bgcolor: 'background.paper',
                height: 'auto',
                // width: '300px',
              }}
            >
              <SizeFilter
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
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Price Range</InputLabel>
            <Slider
              value={priceRange}
              onChange={(event, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Size Range</InputLabel>
            <Slider
              value={sizeRange}
              onChange={(event, newValue) => setSizeRange(newValue)}
              valueLabelDisplay="auto"
            />
          </FormControl>
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
