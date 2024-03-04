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
} from '@mui/material';

const FilterComponent = ({ data, onFilterChange, onClearFilter }) => {
  const [propertyType, setPropertyType] = useState('');
  const [adType, setAdType] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sizeRange, setSizeRange] = useState([0, 100]);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    handleFilter();
  }, [propertyType, adType, priceRange, sizeRange, searchText]);

  const handleFilter = () => {
    const filteredResult = data.filter(
      (item) =>
        item.propertyType === propertyType &&
        item.adType === adType &&
        item.price >= priceRange[0] &&
        item.price <= priceRange[1] &&
        item.size >= sizeRange[0] &&
        item.size <= sizeRange[1] &&
        (item.location.toLowerCase().includes(searchText.toLowerCase()) ||
          item.title.toLowerCase().includes(searchText.toLowerCase()))
    );
    console.log(onFilterChange);
    setFilteredData(filteredResult);
    // onFilterChange(filteredResult);
  };

  const handleClearFilter = () => {
    setPropertyType('');
    setAdType('');
    setPriceRange([0, 100]);
    setSizeRange([0, 100]);
    setSearchText('');
    setFilteredData(data);
    onClearFilter();
  };

  console.log(filteredData);
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
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

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Ad Type</InputLabel>
            <Select value={adType} onChange={(e) => setAdType(e.target.value)}>
              {Array.from(new Set(data.map((item) => item.adType))).map(
                (type, index) => (
                  <MenuItem key={index} value={type}>
                    {type}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
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

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Grid>

        {/* <Grid item xs={12} sm={6}>
            <Button variant="contained" onClick={handleSearch} fullWidth>
              Search
            </Button>
          </Grid> */}

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
