import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Menu,
  Tabs,
  Tab,
  Box,
  Typography,
  Stack,
  TextField,
  Slider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ProjectMenu = ({
  field,
  filterObject,
  setfilterObject,
  activeMenuOption,
  setActiveMenuOption,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const { key } = field || {};
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleClickOption = (event, newValue) => {
    event.preventDefault();
    scrollTopRef.current = scrollRef.current?.scrollTop || 0;
    setActiveMenuOption(newValue);
  };

  console.log(filterObject, 'filterObjectxx');

  const houseCategories = [
    {
      label: 'All',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'House',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Flat',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Upper Portion',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Lower Portion',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Farm House',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Room',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Penthouse',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
  ];

  const plotsCategories = [
    {
      label: 'All',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Residential Plots',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Commercial Plots',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Agricultural Land',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Industrial Land',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Plot File',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Plot Form',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
  ];

  const commercialCategories = [
    {
      label: 'All',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Office',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Shop',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Ware house',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    {
      label: 'Building',
      icon: '/images/listing-page/house.svg',
      activeIcon: '/images/listing-page/housesell.svg',
    },
    // {
    //   label: 'Other...',
    //   icon: '/images/listing-page/house.svg',
    //   activeIcon: '/images/listing-page/housesell.svg',
    // },
  ];

  const tabs = [
    { label: 'House', categories: houseCategories },
    { label: 'Plots', categories: plotsCategories },
    { label: 'Commercial', categories: commercialCategories },
  ];

  const renderMenu = (key) => {
    if (key === 'all') {
      return <AllMenu />;
    } else if (key === 'price') {
      return <PriceMenu />;
    } else if (key === 'size') {
      return <SizeMenu />;
    } else {
      return null;
    }
  };

  const categoryIndex = tabs[activeTab];

  const isCategory = tabs[activeTab]?.categories?.find(
    (cat) => cat?.label === activeMenuOption
  );

  const handleApply = () => {
    setfilterObject({
      ...filterObject,
      all: {
        label: tabs[activeTab]?.label,
        category: isCategory?.label || '',
      },
      price: { minimum: '', maximum: '' },
    });
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (filterObject?.all?.label === 'House') {
      setActiveTab(0);
    } else if (filterObject?.all?.label === 'Plots') {
      setActiveTab(1);
    } else if (filterObject?.all?.label === 'Commercial') {
      setActiveTab(2);
    }
    setActiveMenuOption(filterObject?.all?.category);
  };

  React.useEffect(() => {
    const handleScrollOrResize = () => {
      handleClose();
    };

    window.addEventListener('scroll', handleScrollOrResize);
    window.addEventListener('resize', handleScrollOrResize);

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [filterObject]);

  const scrollRef = useRef(null);
  const scrollTopRef = useRef(0);

  useEffect(() => {
    if (scrollRef?.current) {
      scrollRef.current.scrollTop = scrollTopRef?.current;
    }
  }, [activeMenuOption]);

  const AllMenu = () => (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ pt: 0.5, borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          sx={{ mx: 'auto', width: { xs: '100%', lg: '340px' } }}
        >
          {tabs?.map((tab, tabKey) => (
            <Tab
              label={tab?.label}
              key={tabKey}
              sx={{ fontSize: { xs: '14px', lg: '18px' }, fontWeight: 400 }}
            />
          ))}
        </Tabs>
      </Box>
      <Box
        ref={scrollRef}
        sx={{ my: 3, px: 2, overflow: 'auto', height: '230px' }}
      >
        <Box
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={3}
          sx={{
            flexWrap: 'wrap',
            margin: 'auto',
          }}
        >
          {tabs?.[activeTab]?.categories?.map((category, index) => (
            <Box
              key={index}
              onClick={(event) => handleClickOption(event, category?.label)}
              sx={{
                color: category?.label?.startsWith(activeMenuOption)
                  ? '#FB631C'
                  : '#000',
                border: category?.label?.startsWith(activeMenuOption)
                  ? '1px solid #126FAA'
                  : '1px solid #E7E7E7',
                backgroundColor: category?.label?.startsWith(activeMenuOption)
                  ? '#F4F5F7'
                  : 'transparent',
                borderRadius: '20px',
                minHeight: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                py: 1.5,
                px: 2.5,
                maxWidth: { xs: '100%', lg: '227px' },
                cursor: 'pointer',
                '&:hover': {
                  border: '1px solid #126FAA',
                  backgroundColor: '#F4F5F7',
                },
              }}
            >
              <Box
                component={'img'}
                src={
                  activeMenuOption?.startsWith(category?.label)
                    ? category?.activeIcon
                    : category?.icon
                }
                sx={{ width: { xs: '22px', lg: 'auto' }, height: 'auto' }}
              />
              <Typography
                sx={{
                  fontSize: { xs: '14px', lg: '18px' },
                  fontWeight: 400,
                  textWrap: 'nowrap',
                }}
              >
                {category?.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', lg: 'flex-end' },
          gap: 2,
          py: 2.5,
          px: 2,
        }}
      >
        <Button
          variant="outlined"
          color="warning"
          sx={{
            width: { xs: '100px', md: '120px', lg: '150px' },
            height: '45px',
            borderRadius: '10px',
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          disabled={!isCategory}
          onClick={handleApply}
          variant="contained"
          color="warning"
          sx={{
            width: { xs: '100px', md: '120px', lg: '150px' },
            height: '45px',
            borderRadius: '10px',
          }}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );

  const PriceMenu = () => {
    const [minPrice, setMinPrice] = useState(filterObject?.price?.minimum);
    const [maxPrice, setMaxPrice] = useState(filterObject?.price?.maximum);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 3,
          border: '1px solid #ddd',
          borderRadius: 2,
          backgroundColor: '#fff',
          mx: 'auto',
        }}
      >
        <Stack direction="row" justifyContent="space-between" mb={2}>
          <Typography fontWeight={600}>Price Range</Typography>
          <Typography fontWeight={600}>PKR</Typography>
        </Stack>

        <Stack
          direction={isSmallScreen ? 'column' : 'row'}
          spacing={1}
          alignItems={isSmallScreen ? 'stretch' : 'center'}
          mb={2}
        >
          <TextField
            size="small"
            type="number"
            placeholder="0"
            value={minPrice}
            inputProps={{ min: 0, max: 100000 }}
            onChange={(e) => {
              const value = e?.target?.value;
              if (value?.length <= 6 && Number(value) <= 100000) {
                setMinPrice(value);
              }
            }}
            fullWidth
            InputProps={{ sx: { borderRadius: 1 } }}
          />
          <Typography
            align={isSmallScreen ? 'center' : 'inherit'}
            sx={{ mx: isSmallScreen ? 0 : 1 }}
          >
            To
          </Typography>
          <TextField
            size="small"
            type="number"
            placeholder="Any"
            value={maxPrice}
            inputProps={{ min: 0, max: 100000 }}
            onChange={(e) => {
              const value = e?.target?.value;
              if (value?.length <= 6 && Number(value) <= 100000) {
                setMaxPrice(value);
              }
            }}
            fullWidth
            InputProps={{ sx: { borderRadius: 1 } }}
          />
        </Stack>

        <Slider
          value={[Number(minPrice), Number(maxPrice || 0)]}
          onChange={(e, newValue) => {
            setMinPrice(newValue[0]);
            setMaxPrice(newValue[1]);
          }}
          valueLabelDisplay="off"
          min={0}
          max={100000}
          sx={{ width: '90%', mx: 'auto', color: '#3fb9ff', mb: 3 }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', lg: 'flex-end' },
            gap: 2,
            px: 2,
          }}
        >
          <Button
            variant="outlined"
            color="warning"
            sx={{
              width: { xs: '100px', md: '120px', lg: '150px' },
              height: '45px',
              borderRadius: '10px',
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            // disabled={!isCategory}
            onClick={handleApply}
            variant="contained"
            color="warning"
            sx={{
              width: { xs: '100px', md: '120px', lg: '150px' },
              height: '45px',
              borderRadius: '10px',
            }}
          >
            Apply
          </Button>
        </Box>
      </Box>
    );
  };

  const SizeMenu = () => (
    <Typography sx={{ py: 1, px: 2 }}>SizeMenu</Typography>
  );

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          width: '100%',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px',
          border: '1px solid #E7E7E7',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        <Typography
          sx={{
            fontSize: '15px',
            fontWeight: 400,
            textTransform: 'capitalize',
          }}
        >
          {key === 'all' ? filterObject?.all?.category : key}
        </Typography>
        {open ? (
          <KeyboardArrowUpIcon
            sx={{
              color: '#666666',
              transition: 'transform 0.3s',
            }}
          />
        ) : (
          <KeyboardArrowDownIcon
            sx={{
              color: '#666666',
              transition: 'transform 0.3s',
            }}
          />
        )}
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // anchorOrigin={{
        //   vertical: 'bottom',
        //   horizontal: 'center',
        // }}
        // transformOrigin={{
        //   vertical: 'top',
        //   horizontal: 'left',
        // }}
        MenuListProps={{
          sx: { p: 0 },
        }}
        sx={{ mt: 1, width: '100%' }}
      >
        {renderMenu(key)}
      </Menu>
    </>
  );
};

export default ProjectMenu;
