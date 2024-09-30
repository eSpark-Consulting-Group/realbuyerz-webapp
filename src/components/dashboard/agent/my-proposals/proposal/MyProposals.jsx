'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Box,
  CircularProgress,
  Divider,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';

import ProposalCard from '@/src/components/dashboard/ProposalCard';
// import NotFoundSection from '@/src/components/global/NotFoundSection';

import {
  a11yProps,
  findProposal,
  findSome,
  JustifyForFindProposal,
} from '@/src/utils/dashboardUtils';
import { useMutation } from '@tanstack/react-query';
import { fetchMyProperties } from '@/src/utils/properties';
import { myProposalSaved } from '@/src/utils/apis/bidding/saveUserProposal';

const MyProposals = () => {
  const proposals = useSelector((state) => state?.proposals);
  const user_id = useSelector((state) => state?.currentUser?.user?.id);
  const userAds = useSelector((state) => state?.postRequestAds?.userPostings);
  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState('Saved Request');

  const { save, proposalsTrash } = useSelector(
    (state) => state?.postListingAds
  );

  const find_save = findSome(save, userAds);
  const trashed_ad = findSome(save, proposalsTrash);
  const find_proposals_active = findProposal(user_id, proposals, 'Connected');
  const find_proposals_archive = findProposal(user_id, proposals, 'Archived');
  const find_proposals_rejected = findProposal(user_id, proposals, 'Rejected');

  const [myPropertiesData, setMyPropertiesData] = useState([]);
  const params = {
    page: 1,
    pageSize: 50,
    proposals: true,
  };
  const { mutate, isPending, data } = useMutation({
    mutationFn: fetchMyProperties,
    onError: (error) => {
      // Handle the error
      console.error(error);
    },
  });

  const savedProposals = useMutation({
    mutationFn: myProposalSaved,
    onSuccess: (data) => {
      setMyPropertiesData(data.response.data);
    },
    onError: (error) => {
      // Handle the error
      console.error(error);
    },
  });

  const items = data?.response?.data;
  const tabs = [
    {
      label: 'Saved Request',
      prop: a11yProps(0),
      items: savedProposals.data?.response?.data.length || 0,
    },
    {
      label: 'Active',
      prop: a11yProps(1),
      items: items?.activeProposals?.length || 0,
    },
    {
      label: 'Archive',
      prop: a11yProps(2),
      items: items?.archivedProposals?.length || 0,
    },
    {
      label: 'Accept',
      prop: a11yProps(3),
      items: items?.acceptedProposals?.length || 0,
    },
    {
      label: 'Rejected',
      prop: a11yProps(4),
      items: items?.rejectedProposals?.length || 0,
    },
    {
      label: 'Trash',
      prop: a11yProps(5),
      items: items?.trashProperties?.length || 0,
    },
  ];

  useEffect(() => {
    if (currentTab == 'Saved Request') {
      savedProposals.mutate();
    }
    mutate(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeTab = (event, newValue) => {
    let tab = event?.target?.innerText.split(' ');
    if (tab.length > 1) {
      tab = tab.slice(0, -1).join(' ');
    } else {
      tab = tab.join(' ');
    }
    setCurrentTab(tab);
    setValue(newValue);
    if (tab == 'Saved Request') {
      setMyPropertiesData(savedProposals.data?.response?.data);
    }
    if (tab == 'Active') {
      setMyPropertiesData(items?.activeProposals);
    }
    if (tab == 'Archive') {
      setMyPropertiesData(items?.archivedProposals);
    }
    if (tab == 'Accept') {
      setMyPropertiesData(items?.acceptedProposals);
    }
    if (tab == 'Rejected') {
      setMyPropertiesData(items?.rejectedProposals);
    }
    if (tab == 'Trash') {
      setMyPropertiesData(items?.trashProperties);
    }
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
                  color: '#000 !important',
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
          <Box
            sx={{
              display: 'flex',
              mx: 'auto',
              '@media (max-width: 755px)': {
                justifyContent: JustifyForFindProposal(
                  find_save,
                  find_proposals_active,
                  find_proposals_archive,
                  find_proposals_rejected,
                  trashed_ad,
                  currentTab,
                  1
                ),
              },
              justifyContent: {
                sm: JustifyForFindProposal(
                  find_save,
                  find_proposals_active,
                  find_proposals_archive,
                  find_proposals_rejected,
                  trashed_ad,
                  currentTab,
                  2
                ),
              },
              alignItems: 'center',
              flexDirection: { sm: 'row', md: 'column' },
              gap: { xs: 1.5, sm: 2.5, md: 3.5 },
            }}
          >
            {myPropertiesData?.length < 1 ? (
              isPending ? (
                <Box
                  sx={{
                    height: '300px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <CircularProgress size={32} color="inherit" />
                </Box>
              ) : (
                <Typography>No Data Found</Typography>
              )
            ) : (
              myPropertiesData?.map((item, index) => (
                <ProposalCard
                  refetchProperties={() => mutate(params)}
                  refetchSavedProposal={() => savedProposals.mutate()}
                  key={index}
                  data={item.property || item}
                  currentTab={currentTab}
                  link={
                    currentTab === 'Active'
                      ? `my-proposals/proposal/${item?.id || '#'}`
                      : '#'
                  }
                />
              ))
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MyProposals;
