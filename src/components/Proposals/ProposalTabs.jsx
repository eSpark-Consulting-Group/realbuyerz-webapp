import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProposalListingCard from './ProposalListingCard';
import { getUniqueProposalStatus } from '@/utils/propertyFilter'; // Import utility functions

function CustomTabPanel({ data, value, index, tabProposalStatus }) {
  const filteredProperties =
    value === 0
      ? data
      : data.filter((proposal) => proposal.proposalStatus === tabProposalStatus);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box
          sx={{
            px: '20px',
            py: '20px',
            overflow: 'scroll',
            height: '100vh',
          }}
        >
          <ProposalListingCard proposalsData={filteredProperties} />
        </Box>
      )}
    </div>
  );
}

function ProposalTabs({ filteredProposalsData }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(0);
  }, []);

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const uniqueProposalStatuses = getUniqueProposalStatus(filteredProposalsData);

  const tabData = [
    { label: 'All', tabProposalStatus: 'All' },
    ...uniqueProposalStatuses.map((proposalStatus) => ({
      label: proposalStatus,
      tabProposalStatus: proposalStatus,
    })),
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderRadius: '10px', border: '1px solid #E4E4E4', mt: '20px' }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {tabData?.map((tab, index) => {
              const filteredCount =
                tab.tabProposalStatus === 'All'
                  ? filteredProposalsData.length
                  : filteredProposalsData.filter(
                    (proposal) => proposal.proposalStatus === tab.tabProposalStatus
                  ).length;

              return (
                <Tab
                  key={tab.label}
                  label={`${tab.label} (${filteredCount})`}
                  sx={{ fontSize: '20px', fontWeight: '700' }}
                  {...a11yProps(index)}
                />
              );
            })}
          </Tabs>
        </Box>
        {tabData?.map((tab, index) => (
          <CustomTabPanel
            data={filteredProposalsData}
            key={tab.label}
            value={value}
            index={index}
            tabProposalStatus={tab.tabProposalStatus}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ProposalTabs;
