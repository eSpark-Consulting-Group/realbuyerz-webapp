import React, { useState, useEffect } from 'react';
import {
  Slider,
  Button,
  Menu,
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

const FilterComponent = ({ data, onFilterChange, onClearFilter }) => {
  const [propertyType, setPropertyType] = useState('');
  const [adType, setAdType] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sizeRange, setSizeRange] = useState([0, 100]);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

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
          <div>
            <Button aria-describedby={id} type="button" onClick={handleClick}>
              Toggle Popper
            </Button>
            <Popper
              sx={{ zIndex: 999 }}
              id={'id'}
              open={open}
              anchorEl={anchorEl}
              placement="bottom-start"
            >
              <Box
                sx={{ zIndex: 999, backgroundColor: '#fff' }}
                height={'auto'}
                width={800}
              >
                <SelectProperyType
                  image={PROPERTY_INFORMATION.propertyType.images}
                  label={PROPERTY_INFORMATION.propertyType.text}
                  iconTitle={PROPERTY_INFORMATION.IconTitle}
                  plotType={PROPERTY_INFORMATION.propertyPlot}
                  commercialType={PROPERTY_INFORMATION.propertyCommercial}
                  propertyBuyingDetails={PROPERTY_BUYING_DETAIL.sellingDetails}
                  formik={Formik}
                />
                <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: { xs: 'center', sm: 'flex-end' },
            '@media(min-width: 280px) and (max-width:400px)': {
              flexDirection: 'column',
            },
            alignItems: 'center',
            gap: '10px',
            width: '90%',
          }}
        >
          <Button
            sx={{
              width: { xs: '40%', sm: '200px' },
              '@media(min-width: 280px) and (max-width:400px)': {
                width: '100%',
              },
              borderRadius: '5px',
              border: '1px solid #FB631C',
              background: '#FFF',
              color: '#FB631C',
              height: '45px',
              flexShrink: 0,
              fontSize: { xs: '12px', sm: '15px' },
              fontWeight: 400,
              '&:hover': {
                color: '#fff',
                backgroundColor: '#FB631C',
              },
            }}
          >
            {PROPERTY_INFORMATION.saveDraft}
          </Button>
          <Button
            sx={{
              width: { xs: '40%', sm: '200px' },
              '@media(min-width: 280px) and (max-width:400px)': {
                width: '100%',
                      },
              variant:'secondary',
              borderRadius: '5px',
              border: '1px solid #FB631C',
              color: '#fff',
              background: '#FB631C',
              height: '45px',
              flexShrink: 0,
              fontSize: { xs: '13px', sm: '15px' },
              fontWeight: 400,
              '&:hover': {
                color: '#FB631C',
                backgroundColor: '#fff',
              },
            }}
            type="submit"
          >
            {'Apply'}
          </Button>
        </Box>
              </Box>
            </Popper>
          </div>
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
