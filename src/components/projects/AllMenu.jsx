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
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleClickOption = (event, newValue) => {
    event?.preventDefault();
    scrollTopRef.current = scrollRef?.current?.scrollTop || 0;
    setActiveMenuOption(newValue);
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
    });
    handleClose();
  };

  useEffect(() => {
    if (filterObject?.all?.label === 'House') {
      setActiveTab(0);
    } else if (filterObject?.all?.label === 'Plots') {
      setActiveTab(1);
    } else if (filterObject?.all?.label === 'Commercial') {
      setActiveTab(2);
    }
    setActiveMenuOption(filterObject?.all?.category);
  }, []);

  return (
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
              disableRipple
              label={tab?.label}
              key={tabKey}
              sx={{ fontSize: { xs: '14px', lg: '18px' }, fontWeight: 400 }}
            />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ my: 3, px: 2, overflow: 'auto', height: '230px' }}>
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
};

export default AllMenu;
