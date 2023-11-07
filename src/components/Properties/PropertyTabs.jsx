'use client';
import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import AgentChip from './Agentchip';
import PropertyListingCard from './PropertyListingCard';

import { PROPERTIES_LISTING } from '@/app/constants/Properties';

function CustomTabPanel({ value, index, propertyType }) {
  const filteredProperties =
    value === 0
      ? PROPERTIES_LISTING
      : PROPERTIES_LISTING.filter(
          (property) => property.propertytype === propertyType
        );

  const propertyTitle = filteredProperties?.map((property) => ({
    id: property.id,
    title: property.title,
  }));

  const itemsPerRow = { xs: 12, sm: 6, md: 4, lg: 3, xl: 3 };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h2" py={2}>
            {`Location of ${propertyType} For sale in Karachi`}
          </Typography>
          <Grid container spacing={2}>
            {propertyTitle?.map(({ id, title }) => (
              <Grid item key={id} {...itemsPerRow}>
                <Typography fontWeight="300" fontSize="16px" textAlign="center">
                  <Link href={`/property/${id}`}>{title}</Link>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PropertyTabs() {
  const [value, setValue] = useState(0);
  const [propertyType, setPropertyType] = useState(''); // Add this line to store the selected property type

  useEffect(() => {
    setValue(0);
  }, []);

  const uniquePropertyTypes = [];
  const seenPropertyTypes = {};

  PROPERTIES_LISTING?.forEach((property) => {
    if (!seenPropertyTypes[property.propertytype]) {
      uniquePropertyTypes.push(property.propertytype);
      seenPropertyTypes[property.propertytype] = true;
    }
  });

  const tabData = [
    { label: 'All', propertyType: 'All' },
    ...uniquePropertyTypes.map((propertyType) => ({
      label: propertyType,
      propertyType: propertyType,
    })),
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const selectedPropertyType = tabData[newValue].label;

    // Update the selected property type
    setPropertyType(selectedPropertyType === 'All' ? '' : selectedPropertyType);
  };

  const filteredProperties =
    propertyType === ''
      ? PROPERTIES_LISTING
      : PROPERTIES_LISTING.filter(
          (property) => property.propertytype === propertyType
        );
  const isAgent = 'true';
  const agenttab = value;
  return (
    <>
      {isAgent == 'true' && (
        <AgentChip
          data={filteredProperties}
          chips={agenttab}
          label="Agent"
          variant="outlined"
          color="primary"
          sx={{ mb: 2 }}
        />
      )}

      <Box
        sx={{ borderRadius: '10px', border: '1px solid #E4E4E4', mt: '20px' }}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {tabData?.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  sx={{ fontSize: '20px', fontWeight: '700' }}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>
          {tabData?.map((tab, index) => (
            <CustomTabPanel
              key={index}
              value={value}
              index={index}
              propertyType={tab.propertyType}
            />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          borderRadius: '10px',
          border: '1px solid #E4E4E4',
          my: '50px',
          padding: '56px 30px',
        }}
      >
        <PropertyListingCard data={filteredProperties} />
      </Box>
    </>
  );
}
