'use client';
import React, { useState } from 'react';
import { Button, Tab, Tabs, Typography, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import ProjectsFilterApplicatonButtons from './ProjectsFilterApplicatonButtons';

function ProjectsTabsFilter({
  data,
  handleTabChange,
  handleChange,
  selectedPropertyTab,
  selectedProperty,
  setSelectedProperty,
  handleCancel,
  handleApply,
}) {
  const [selectPropertyTab, setSelectPropertyTab] = useState(0);
  const [selectProperty, setSelectProperty] = useState('');

  const handlePropertyTabChange = (event, newValue) => {
    setSelectPropertyTab(newValue);
    setSelectProperty(globalUnits?.PROPERTY_TABS_DATA?.content[chipIndex]);
    console.log(selectPropertyTab, 'selectPropertyTab');
    console.log(selectProperty, 'selectProperty');
  };

  const handlePropertyChange = (event) => {
    const chipIndex = event.target.value;
    setSelectProperty(globalUnits?.PROPERTY_TABS_DATA?.content[chipIndex]);
  };
  return (
    <Box
      zIndex={999}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: '20px',
        borderRadius: '20px',
        boxShadow: '0px 0px 10px 0px #00000040',
      }}
    >
      <Tabs value={selectPropertyTab} onChange={handlePropertyTabChange}>
        {data?.map((tab, index) => (
          <Tab key={index} label={tab?.label} />
        ))}
      </Tabs>
      {data?.map((tab, tabIndex) => (
        <TabPanel key={tabIndex} value={selectPropertyTab} index={tabIndex}>
          <Box width={'600px'} py={'20px'}>
            {tab?.content?.map((chip, chipIndex) => (
              <Button
                key={chipIndex}
                variant={'outlined'}
                px={'10px'}
                my={'20px'}
                style={{
                  margin: '4px',
                  borderRadius: '20px',
                  height: '55px',
                  borderColor: `${selectProperty === chip ? '#1877f2' : '#E7E7E7'}`,
                  backgroundColor: `${selectProperty === chip ? '##F4F5F7' : '#fff'}`,
                }}
                onClick={() => setSelectProperty(chip)}
              >
                <Image
                  src={
                    selectProperty === chip ? chip?.activeImage : chip?.image
                  }
                  width={30}
                  height={30}
                  alt={tab?.label}
                />
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    color: '#fb631c',
                    pl: '10px',
                  }}
                >
                  {chip?.title}
                </Typography>
              </Button>
            ))}
            <Select
              value={
                selectProperty
                  ? tab?.content?.findIndex((chip) => chip === selectProperty)
                  : ''
              }
              onChange={handlePropertyChange}
              displayEmpty
              fullWidth
              variant="outlined"
              style={{ display: 'none' }}
            >
              {tab?.content?.map((chip, chipIndex) => (
                <MenuItem key={chipIndex} value={chipIndex}>
                  {chip?.title}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </TabPanel>
      ))}

      <ProjectsFilterApplicatonButtons
        apply={handleApply}
        cancel={handleCancel}
      />
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default ProjectsTabsFilter;
