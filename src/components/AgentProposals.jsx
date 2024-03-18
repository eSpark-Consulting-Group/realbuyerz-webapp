'use client';
import ProposalCard from '@/src/components/dashboard/ProposalCard';
import { a11yProps } from '@/src/utils/tabs';
import { Box, Divider, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AgentProposals = () => {
  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState('Save Request');
  const { saveRequest, archive, trash, active } = useSelector(
    (state) => state?.postListingAds
  );

  const tabs = [
    {
      label: 'Save Request',
      prop: a11yProps(0),
      items: saveRequest?.length || 0,
    },
    {
      label: 'Active',
      prop: a11yProps(1),
      items: active?.length || 0,
    },
    {
      label: 'Archive',
      prop: a11yProps(2),
      items: archive?.length || 0,
    },
    {
      label: 'Rejected',
      prop: a11yProps(3),
      items: trash?.length || 0,
    },
    {
      label: 'Trash',
      prop: a11yProps(3),
      items: trash?.length || 0,
    },
  ];

  const handleChangeTab = (event, newValue) => {
    let tab = event?.target?.innerText.split(' ');
    if (tab.length > 1) {
      tab = tab.slice(0, -1).join(' ');
    } else {
      tab = tab.join(' ');
    }
    setCurrentTab(tab);
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          background: '#fff',
          borderRadius: '10px',
          border: '1px solid #E4E4E4',
          mt: 0,
          mb: 6,
          mx: { xs: 'auto', lg: 0 },
          maxWidth: { lg: '1200px', xl: '1200px', xxl: '1500px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '30px',
          }}
        >
          <Tabs
            variant="scrollable"
            value={value}
            onChange={handleChangeTab}
            aria-label="basic tabs example"
          >
            {tabs?.map(({ label, prop, items }, i) => (
              <Tab
                key={i}
                label={`${label} (${items})`}
                {...prop}
                disableRipple={true}
                sx={{
                  textTransform: 'math-auto',
                }}
              />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box
          sx={{
            p: { xs: 2, sm: 3 },
          }}
        >
          {currentTab === 'Save Request'
            ? saveRequest?.map((item, index) => (
                <ProposalCard key={index} data={item} currentTab={currentTab} />
              ))
            : currentTab === 'Active'
              ? active?.map((item, index) => (
                  <ProposalCard
                    link={'my-proposals/prosal/id'}
                    key={index}
                    data={item}
                    currentTab={currentTab}
                  />
                ))
              : currentTab === 'Archive'
                ? archive?.map((item, index) => (
                    <ProposalCard
                      key={index}
                      data={item}
                      currentTab={currentTab}
                    />
                  ))
                : currentTab === 'Trash'
                  ? trash?.map((item, index) => (
                      <ProposalCard
                        key={index}
                        data={item}
                        currentTab={currentTab}
                      />
                    ))
                  : null}
        </Box>
      </Box>
    </>
  );
};

export default AgentProposals;
