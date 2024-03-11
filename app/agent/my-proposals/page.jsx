'use client';
import ProposalCard from '@/src/components/Proposal/ProposalCard';
import { a11yProps } from '@/utils/tabs';
import { Box, Divider, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AgentProposals = () => {
  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState('Save Request');

  const { save, proposalsTrash } = useSelector(
    (state) => state?.postListingAds
  );
  const proposals = useSelector((state) => state?.proposals);
  const user_id = useSelector((state) => state?.currentUser?.user?.id);
  const userAds = useSelector((state) => state?.postRequestAds?.userPostings);
  const find_save = save
    ?.filter((saveItem) =>
      userAds?.some((ad) => ad?.property_id === saveItem?.property_id)
    )
    ?.map((saveItem) => ({
      ...userAds?.find((ad) => ad?.property_id === saveItem?.property_id),
      saveItem,
    }));
  const trashed_ad = proposalsTrash
    ?.filter((saveItem) =>
      userAds?.some((ad) => ad?.property_id === saveItem?.property_id)
    )
    ?.map((saveItem) => ({
      ...userAds?.find((ad) => ad?.property_id === saveItem?.property_id),
      saveItem,
    }));

  const find_trash = proposalsTrash?.filter(
    (trash) => trash?.user_id === user_id
  );

  const find_proposals_active = proposals?.filter(
    (proposal) =>
      proposal?.agent_id === user_id && proposal?.status === 'Connected'
  );
  const find_proposals_archive = proposals?.filter(
    (proposal) =>
      proposal?.agent_id === user_id && proposal?.status === 'Archive'
  );
  const find_proposals_rejected = proposals?.filter(
    (proposal) =>
      proposal?.agent_id === user_id && proposal?.status === 'Rejected'
  );

  const tabs = [
    {
      label: 'Save Request',
      prop: a11yProps(0),
      items: find_save?.length || 0,
    },
    {
      label: 'Active',
      prop: a11yProps(1),
      items: find_proposals_active?.length || 0,
    },
    {
      label: 'Archive',
      prop: a11yProps(2),
      items: find_proposals_archive?.length || 0,
    },
    {
      label: 'Rejected',
      prop: a11yProps(3),
      items: find_proposals_rejected?.length || 0,
    },
    {
      label: 'Trash',
      prop: a11yProps(3),
      items: find_trash?.length || 0,
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
            ? find_save?.map((item, index) => (
                <ProposalCard
                  key={index}
                  data={item}
                  currentTab={currentTab}
                  link={`my-proposals/property/${item?.property_id || '#'}`}
                />
              ))
            : currentTab === 'Active'
              ? find_proposals_active?.map((item, index) => (
                  <ProposalCard
                    key={index}
                    data={item}
                    currentTab={currentTab}
                    link={`my-proposals/proposal/${item?.proposal_id || '#'}`}
                  />
                ))
              : currentTab === 'Archive'
                ? find_proposals_archive?.map((item, index) => (
                    <ProposalCard
                      key={index}
                      data={item}
                      currentTab={currentTab}
                    />
                  ))
                : currentTab === 'Rejected'
                  ? find_proposals_rejected?.map((item, index) => (
                      <ProposalCard
                        key={index}
                        data={item}
                        currentTab={currentTab}
                      />
                    ))
                  : currentTab === 'Trash'
                    ? trashed_ad?.map((item, index) => (
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
