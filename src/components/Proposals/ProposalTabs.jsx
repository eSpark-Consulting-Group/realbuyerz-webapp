import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProposalListingCard from './ProposalListingCard';
import { Typography } from '@mui/material';
import { NO_RESULTS_FOUND } from '@/app/constants/Proposals';
import { filterPropertiesByStatus } from '@/utils/SearchFilter';
import { getUniqueProposalStatus, getFilteredCount } from '@/utils/proposalFilter';

const ProposalTabs = ({ filteredProposalsData }) => {
  const [value, setValue] = useState(0);
  const uniqueProposalStatuses = getUniqueProposalStatus(filteredProposalsData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        background: '#fff',
        borderRadius: '10px',
        border: '1px solid #E4E4E4',
        mt: '20px',
      }}
    >
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Proposal Status Tabs"
          centered
        >
          {uniqueProposalStatuses.map((status, index) => (
            <Tab
              key={status}
              label={`${status} (${getFilteredCount(filteredProposalsData, status)})`}
              sx={{ fontSize: '20px', fontWeight: '700' }}
            />
          ))}
        </Tabs>
        </Box>
        {uniqueProposalStatuses.map((status, index) => (
          <ProposalTabPanel
            key={status}
            value={value}
            index={index}
            status={status}
            filteredProposalsData={filteredProposalsData}
          />
        ))}
      </Box>
    </Box>
  );
};

const ProposalTabPanel = ({ value, index, status, filteredProposalsData }) => {
  const filteredData = filterPropertiesByStatus(filteredProposalsData, status);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`proposal-tabpanel-${index}`}
      aria-labelledby={`proposal-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          {filteredData.length > 0 ? (
            <ProposalListingCard proposalsData={filteredData} />
          ) : (
            <Box textAlign="center">
              <Typography variant="h6">{NO_RESULTS_FOUND}</Typography>
            </Box>
          )}
        </Box>
      )}
    </div>
  );
};

export default ProposalTabs;
