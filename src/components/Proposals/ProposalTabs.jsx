'use client';
import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProposalListingCard from './ProposalListingCard';

function CustomTabPanel({ data, value, index, proposalStatus }) {
  const filteredProperties =
    value === 0
      ? data
      : data.filter(
        (proposal) => proposal.proposalStatus === proposalStatus
      );

  const proposalTitle = filteredProperties?.map((proposal) => ({
    id: proposal.id,
    title: proposal.title,
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
          <ProposalListingCard data={filteredProperties} />
        </Box>
      )}
    </div>
  );
}



function ProposalTabs({ filteredData }) {
  const [value, setValue] = useState(0);
  const [proposalStatus, setProposalStatus] = useState('');

  useEffect(() => {
    setValue(0);
  }, []);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const uniqueProposalStatuss = [];
  const seenProposalStatuss = {};

  filteredData?.forEach((proposal) => {
    if (!seenProposalStatuss[proposal.proposalStatus]) {
      uniqueProposalStatuss.push(proposal.proposalStatus);
      seenProposalStatuss[proposal.proposalStatus] = true;
    }
  });

  const tabData = [
    { label: 'All', proposalStatus: 'All' },
    ...uniqueProposalStatuss.map((proposalStatus) => ({
      label: proposalStatus,
      proposalStatus: proposalStatus,
    })),
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const selectedProposalStatus = tabData[newValue].label;

    // Update the selected proposal type
    setProposalStatus(
      selectedProposalStatus === 'All' ? '' : selectedProposalStatus
    );
  };

  return (
    <>
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
              {tabData?.map((tab, index) => {
                const filteredCount =
                  tab.proposalStatus === 'All'
                    ? filteredData.length
                    : filteredData.filter(
                      (proposal) =>
                        proposal.proposalStatus === tab.proposalStatus
                    ).length;

                return (
                  <Tab
                    key={index}
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
              data={filteredData}
              key={index}
              value={value}
              index={index}
              proposalStatus={tab.proposalStatus}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
export default ProposalTabs;
