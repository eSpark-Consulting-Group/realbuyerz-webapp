'use client';
import BiddingDetails from '@/src/components/Biddings/BiddingDetails';
import NotFoundSection from '@/src/components/Global/NotFoundSection';
import ProposalCard from '@/src/components/Proposal/ProposalCard';
import { a11yProps } from '@/src/utils/tabs';
import { Box, Divider, Tab, Tabs, Typography } from '@mui/material';
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
          mb: 4,
          mx: { xs: 'auto', lg: 0 },
          width: 'auto',
          maxWidth: { md: '1200px', xl: '1200px', xxl: '1500px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            mx: { xs: 1, md: 0 },
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '20px',
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
          className="scrollbar-container"
          sx={{
            mr: { xs: 0.8, sm: 2, md: 'auto' },
            ml: { xs: 0.8, sm: 2, md: 'auto' },
            pt: { xs: 2.5, sm: 3, md: 5 },
            pb: { xs: 2, sm: 2, md: 3 },
            px: { xs: 0, sm: 0, md: 3 },
            maxHeight: '950px',
            width: 'auto',
          }}
        >
          <Box sx={{ marginLeft: '10PX' }}>
            {currentTab === 'Active' && (
              <Typography sx={{ fontSize: '25px', fontWeight: 500 }}>
                Active proposals
              </Typography>
            )}
            {currentTab === 'Archive' && (
              <Typography sx={{ fontSize: '25px', fontWeight: 500 }}>
                Archive proposals
              </Typography>
            )}
            {currentTab === 'Rejected' && (
              <Typography sx={{ fontSize: '25px', fontWeight: 500 }}>
                Rejected proposals
              </Typography>
            )}
            {currentTab === 'Trash' && (
              <Typography sx={{ fontSize: '25px', fontWeight: 500 }}>
                Rejected proposals
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              display: 'flex',
              mx: 'auto',
              '@media (max-width: 755px)': {
                justifyContent:
                  (currentTab === 'Save Request' && find_save?.length <= 1) ||
                  (currentTab === 'Active' &&
                    find_proposals_active?.length <= 1) ||
                  (currentTab === 'Archive' &&
                    find_proposals_archive?.length <= 1) ||
                  (currentTab === 'Rejected' &&
                    find_proposals_rejected?.length <= 1) ||
                  (currentTab === 'Trash' && trashed_ad?.length <= 1)
                    ? 'center'
                    : 'start',
              },
              justifyContent: {
                sm:
                  (currentTab === 'Save Request' && find_save?.length <= 2) ||
                  (currentTab === 'Active' &&
                    find_proposals_active?.length <= 2) ||
                  (currentTab === 'Archive' &&
                    find_proposals_archive?.length <= 2) ||
                  (currentTab === 'Rejected' &&
                    find_proposals_rejected?.length <= 2) ||
                  (currentTab === 'Trash' && trashed_ad?.length <= 2)
                    ? 'center'
                    : 'start',
              },
              alignItems: 'center',
              flexDirection: { sm: 'row', md: 'column' },
              gap: { xs: 1.5, sm: 2.5, md: 3.5 },
            }}
          >
            {(currentTab === 'Save Request' && find_save?.length === 0) ||
            (currentTab === 'Active' && find_proposals_active?.length === 0) ||
            (currentTab === 'Archive' &&
              find_proposals_archive?.length === 0) ||
            (currentTab === 'Rejected' &&
              find_proposals_rejected?.length === 0) ||
            (currentTab === 'Trash' && trashed_ad?.length === 0) ? (
              <NotFoundSection heading={'Sorry!'} message={'No Data Found.'} />
            ) : (
              <>
                {currentTab === 'Save Request' ? (
                  <BiddingDetails ads={find_save} height={'1098px'} />
                ) : currentTab === 'Active' ? (
                  find_proposals_active?.map((item, index) => (
                    <ProposalCard
                      key={index}
                      data={item}
                      currentTab={currentTab}
                      link={`my-proposals/proposal/${item?.proposal_id || '#'}`}
                      propertyColor={'#333333'}
                      keyColor={'#126FAA'}
                    />
                  ))
                ) : currentTab === 'Archive' ? (
                  find_proposals_archive?.map((item, index) => (
                    <ProposalCard
                      key={index}
                      data={item}
                      currentTab={currentTab}
                      propertyColor={'#333333'}
                      keyColor={'#126FAA'}
                    />
                  ))
                ) : currentTab === 'Rejected' ? (
                  find_proposals_rejected?.map((item, index) => (
                    <ProposalCard
                      key={index}
                      data={item}
                      currentTab={currentTab}
                      propertyColor={'#333333'}
                      keyColor={'#126FAA'}
                    />
                  ))
                ) : currentTab === 'Trash' ? (
                  trashed_ad?.map((item, index) => (
                    <ProposalCard
                      key={index}
                      data={item}
                      currentTab={currentTab}
                      propertyColor={'#333333'}
                      keyColor={'#126FAA'}
                    />
                  ))
                ) : null}
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AgentProposals;
