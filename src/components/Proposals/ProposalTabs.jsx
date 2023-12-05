import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import ProposalListingCard from './ProposalListingCard';
import { getUniqueProposalStatus } from '@/utils/propertyFilter';
import { NO_RESULTS_FOUND } from '@/app/constants/Proposals';

const ProposalTabs = ({ filteredProposalsData }) => {
  const [value, setValue] = useState(0);
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

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

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderRadius: '10px', border: '1px solid #E4E4E4', mt: '20px' }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabData?.map((tab, index) => {
              const filteredData = search
                ? filteredProposalsData.filter(
                    (item) =>
                      item.amount?.toLowerCase() === search?.toLowerCase() ||
                      item.title?.toLowerCase() === search?.toLowerCase() ||
                      item.location?.propertyType.toLowerCase() ===
                        search?.toLowerCase() ||
                      item.location?.city.toLowerCase() ===
                        search?.toLowerCase() ||
                      item?.location?.location.toLowerCase() ===
                        search?.toLowerCase() ||
                      item.location?.purpose.toLowerCase() ===
                        search?.toLowerCase()
                  )
                : null;

              const filteredDataCount =
                filteredData?.length ||
                (search ? 0 : filteredProposalsData.length);
              const filteredPropertiesCount =
                tab.tabProposalStatus === 'All'
                  ? filteredProposalsData.length
                  : filteredProposalsData.filter(
                      (proposal) =>
                        proposal.proposalStatus === tab.tabProposalStatus
                    ).length;

              const filteredCount =
                tab.tabProposalStatus === 'All'
                  ? filteredDataCount
                  : filteredPropertiesCount;

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
            search={search}
          />
        ))}
      </Box>
    </Box>
  );
};

const CustomTabPanel = ({ data, value, index, tabProposalStatus, search }) => {
  const filteredProperties =
    value === 0
      ? data
      : data.filter(
          (proposal) => proposal.proposalStatus === tabProposalStatus
        );

  const filteredData = search
    ? filteredProperties?.filter(
        (item) =>
          item.amount?.toLowerCase() === search?.toLowerCase() ||
          item.title?.toLowerCase() === search?.toLowerCase() ||
          item.location?.propertyType.toLowerCase() === search?.toLowerCase() ||
          item.location?.city.toLowerCase() === search?.toLowerCase() ||
          item?.location?.location?.toLowerCase() === search?.toLowerCase() ||
          item.location?.purpose.toLowerCase() === search?.toLowerCase()
      )
    : null;
  const displayData = filteredData || filteredProperties;
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
            overflowY: 'scroll',
            height: '100vh',
          }}
        >
          {displayData.length > 0 ? (
            <ProposalListingCard proposalsData={displayData} />
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '40px',
                  color: '#333',
                }}
              >
                {NO_RESULTS_FOUND}
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </div>
  );
};

export default ProposalTabs;
