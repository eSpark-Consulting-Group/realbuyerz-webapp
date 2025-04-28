'use client';
import { useEffect, useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  Box,
  CircularProgress,
  Divider,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';

import ProposalCard from '@/src/components/dashboard/ProposalCard';
import ProposalCardContainer from '../../../ProposalCardContainer';

import {
  a11yProps,
  findProposal,
  findSome,
  JustifyForFindProposal,
} from '@/src/utils/dashboardUtils';
import { fetchMyProperties } from '@/src/utils/properties';
import { myProposalSaved } from '@/src/utils/apis/bidding/saveUserProposal';

const MyProposals = () => {
  const proposals = useSelector((state) => state?.proposals);
  const user_id = useSelector((state) => state?.currentUser?.user?.id);
  const userAds = useSelector((state) => state?.postRequestAds?.userPostings);
  const { save, proposalsTrash } = useSelector(
    (state) => state?.postListingAds
  );

  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState('Saved Request');
  const [myPropertiesData, setMyPropertiesData] = useState([]);

  const find_save = findSome(save, userAds);
  const trashed_ad = findSome(save, proposalsTrash);
  const find_proposals_active = findProposal(user_id, proposals, 'Connected');
  const find_proposals_archive = findProposal(user_id, proposals, 'Archived');
  const find_proposals_rejected = findProposal(user_id, proposals, 'Rejected');

  const params = {
    page: 1,
    pageSize: 50,
    proposals: true,
  };

  const { mutate, isPending, data } = useMutation({
    mutationFn: fetchMyProperties,
    onError: (error) => {
      toast.error(error.response.data.messag);
    },
  });

  const savedProposals = useMutation({
    mutationFn: myProposalSaved,
    onSuccess: (data) => {
      setMyPropertiesData(data.response.data);
    },
    onError: (error) => {
      toast.error(error.response.data.messag);
    },
  });

  const items = data?.response?.data;
  const tabsConfig = [
    {
      label: 'Saved Request',
      key: 'saved',
      data: savedProposals.data?.response?.data,
    },
    { label: 'Active', key: 'activeProposals', data: items?.activeProposals },
    {
      label: 'Archive',
      key: 'archivedProposals',
      data: items?.archivedProposals,
    },
    {
      label: 'Submitted',
      key: 'submittedProposals',
      data: items?.submittedProposals,
    },
    {
      label: 'Rejected',
      key: 'rejectedProposals',
      data: items?.rejectedProposals,
    },
    { label: 'Trash', key: 'trashProperties', data: items?.trashProperties },
  ];

  useEffect(() => {
    if (currentTab == 'Saved Request') {
      savedProposals.mutate();
    }
    mutate(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeTab = (event, newValue) => {
    const fullLabel = event?.target?.innerText;
    const tabLabel = fullLabel.split(' (')[0];

    setCurrentTab(tabLabel);
    setValue(newValue);

    const selectedTab = tabsConfig.find((tab) => tab.label === tabLabel);
    if (selectedTab?.data) {
      setMyPropertiesData(selectedTab.data);
    }
  };

  const justify = (no) => {
    return JustifyForFindProposal(
      find_save,
      find_proposals_active,
      find_proposals_archive,
      find_proposals_rejected,
      trashed_ad,
      currentTab,
      no
    );
  }

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
            {tabsConfig.map((tab, i) => (
              <Tab
                key={i}
                label={`${tab.label} (${tab.data?.length || 0})`}
                {...a11yProps(i)}
                disableRipple
                sx={{ textTransform: 'none', color: '#000 !important' }}
              />
            ))}
          </Tabs>
        </Box>

        <Divider />

        <ProposalCardContainer justify={justify}>
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
        </ProposalCardContainer>
      </Box>
    </>
  );
};

export default MyProposals;
