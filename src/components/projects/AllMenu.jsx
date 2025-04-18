import React, { useEffect, useRef } from 'react';
import { Box, Button, Tab, Tabs, Typography } from '@mui/material';

import { tabs } from '@/src/constants/Projects/projectsFilter';

const AllMenu = ({
  activeTab,
  setActiveTab,
  setAnchorEl,
  filterObject,
  setfilterObject,
  activeMenuOption,
  setActiveMenuOption,
}) => {
  const scrollRef = useRef(null);
  const scrollTopRef = useRef(0);

  const handleTabChange = (_, newValue) => setActiveTab(newValue);

  const handleClickOption = (event, value) => {
    event?.preventDefault();
    scrollTopRef.current = scrollRef?.current?.scrollTop || 0;
    setActiveMenuOption(value);
  };

  const handleClose = () => {
    setAnchorEl(null);
    const label = filterObject?.all?.label;
    if (label === 'House') setActiveTab(0);
    else if (label === 'Plots') setActiveTab(1);
    else if (label === 'Commercial') setActiveTab(2);

    setActiveMenuOption(filterObject?.all?.category);
  };

  const handleApply = () => {
    const categoryLabel = tabs[activeTab]?.categories?.find(
      (cat) => cat?.label === activeMenuOption
    )?.label;

    setfilterObject({
      ...filterObject,
      all: {
        label: tabs[activeTab]?.label,
        category: categoryLabel || '',
      },
    });

    handleClose();
  };

  useEffect(() => {
    const label = filterObject?.all?.label;
    if (label === 'House') setActiveTab(0);
    else if (label === 'Plots') setActiveTab(1);
    else if (label === 'Commercial') setActiveTab(2);

    setActiveMenuOption(filterObject?.all?.category);
  }, []);

  const renderCategoryOption = (category, index) => {
    const isActive = category?.label?.startsWith(activeMenuOption);
    return (
      <Box
        key={index}
        onClick={(event) => handleClickOption(event, category?.label)}
        sx={{
          color: isActive ? '#FB631C' : '#000',
          border: `1px solid ${isActive ? '#126FAA' : '#E7E7E7'}`,
          backgroundColor: isActive ? '#F4F5F7' : 'transparent',
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
          component="img"
          src={isActive ? category?.activeIcon : category?.icon}
          sx={{ width: { xs: '22px', lg: 'auto' }, height: 'auto' }}
        />
        <Typography
          sx={{
            fontSize: { xs: '14px', lg: '18px' },
            fontWeight: 400,
            whiteSpace: 'nowrap',
          }}
        >
          {category?.label}
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {/* Tabs Section */}
      <Box sx={{ pt: 0.5, borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          sx={{ mx: 'auto', width: { xs: '100%', lg: '340px' } }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              disableRipple
              sx={{ fontSize: { xs: '14px', lg: '18px' }, fontWeight: 400 }}
            />
          ))}
        </Tabs>
      </Box>

      {/* Category Options */}
      <Box sx={{ my: 3, px: 2, overflow: 'auto', height: '230px' }} ref={scrollRef}>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={3}
          sx={{ flexWrap: 'wrap', margin: 'auto' }}
        >
          {tabs[activeTab]?.categories?.map(renderCategoryOption)}
        </Box>
      </Box>

      {/* Action Buttons */}
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
          disabled={
            !tabs[activeTab]?.categories?.some(
              (cat) => cat.label === activeMenuOption
            )
          }
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

export default AllMenu;
