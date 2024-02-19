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
import PropertyTabs from './TabsFilter';
import { AREA_UNITS, CURRENCY_UNITS, PROPERTY_TABS_DATA,PROPETY_TYPES } from '@/app/constants/Projects/projectsFilter';

const FilterComponent = ({ data }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [selectedAdType, setSelectedAdType] = useState('');
  const [selectedAreaUnit, setSelectedAreaUnit] = useState('');
  const [selectedAreaRange, setSelectedAreaRange] = useState([0, 1000]);
  const [selectedPriceUnit, setSelectedPriceUnit] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);
console.log(selectedAreaRange, 'selectedAreaRange');
  const [selectedPropertyTab, setSelectedPropertyTab] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState('');


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
    setSelectedAreaRange([0, 1000]);
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
    setSelectedPriceRange([0, 1000]);
    setSubmittedValues(null);
  };
  const handleFilter = () => {
    setSelectedPriceUnit('');
  };
  const handleClearFilter = () => {
    setSelectedPriceUnit('');
  };

  const handlePropertyTabChange = (event, newValue) => {
    setSelectedPropertyTab(newValue);
    setSelectedProperty(null); // Reset selected chip when changing data
  };

  const handlePropertyChange = (event) => {
    const chipIndex = event.target.value;
    setSelectedProperty(tab.content[chipIndex]);
  };
  // const dispatchSubmitValuesToRedux = (
  //   selectedAreaUnit,
  //   selectedAreaRange
  // ) => {
  //   dispatch(submitFilters(selectedAreaUnit, selectedAreaRange));
  // };

  useEffect(() => {
    handleFilter();
  }, [
    selectedPropertyType,
    selectedAdType,
    selectedPriceRange,
    selectedAreaRange,
    searchText,
  ]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <Select
              value={selectedPropertyType || PROPETY_TYPES[0]?.value}
              onChange={(e) => setSelectedPropertyType(e.target.value)}
            >
              {PROPETY_TYPES.map((unit, index) => (
                <MenuItem key={index} value={unit?.value}>
                  {unit?.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <TextField
            aria-describedby={id1}
            variant="outlined"
            value={selectedProperty.title || 'Any'}
            onClick={handleClick1}
            onChange={handleFilter}
          />
          <Popper
            id={id1}
            open={open1}
            anchorEl={anchorEl1}
            placement="bottom-start"
          >
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              <PropertyTabs
                data={PROPERTY_TABS_DATA}
                handlePropertyTabChange={handlePropertyTabChange}
                handlePropertyChange={handlePropertyChange}
                selectedPropertyTab={selectedPropertyTab}
                selectedProperty={selectedProperty}
                setSelectedProperty={setSelectedProperty}
                setSelectedPropertyTab={setSelectedPropertyTab} />
            </Box>
          </Popper>
        </Grid>
        <Grid item xs={2}>
          <TextField
            aria-describedby={id2}
            variant="outlined"
            value={selectedPriceUnit.toUpperCase() || 'Any'}
            onClick={handleClick2}
            onChange={handleFilter}
          />
          <Popper
            id={id2}
            open={open2}
            anchorEl={anchorEl2}
            placement="bottom-start"
            zIndex={999}
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
              <SizeFilter
                title={'Price Range'}
                selectedUnit={selectedPriceUnit}
                units={CURRENCY_UNITS}
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
          <TextField
            aria-describedby={id3}
            variant="outlined"
            value={selectedAreaUnit || 'Any'}
            onClick={handleClick3}
            onChange={handleFilter}
          />
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
                height: 'auto',
                mt: '10px',
              }}
            >
              <SizeFilter
                title={'Area'}
                selectedUnit={selectedAreaUnit}
                units={AREA_UNITS}
                handleChange={handleAreaChange}
                selectedRange={selectedAreaRange}
                handleRangeChange={handleAreaRangeChange}
                handleApply={handleAreaApply}
                handleCancel={handleAreaCancel}
              />
            </Box>
          </Popper>
        </Grid>

        <Grid item xs={2.5}>
          <TextField
            fullWidth
            placeholder="Search Projects"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Grid>
<Grid item xs={1.5}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={handleClearFilter}>Clear Filter</Button></Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Button variant="contained" onClick={handleFilter} fullWidth>
            Apply Filter
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FilterComponent;
