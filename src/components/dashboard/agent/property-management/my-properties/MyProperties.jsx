'use client';
import { useEffect, useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';

import ProposalCard from '@/src/components/dashboard/ProposalCard';
import ProposalCardContainer from '../../../ProposalCardContainer';
import FilterControls from '../../../user/dashboard/all-postings/FilterControls';

import {
  a11yProps,
  findData,
  justifyContent,
} from '@/src/utils/dashboardUtils';
import {
  deleteProperty,
  fetchMyProperties,
  fetchPropertyTypes,
} from '@/src/utils/properties';

import { ALL_POSTLISTING_FILTRATION } from '@/src/constants/agent/My_Properties';

const MyProperties = () => {
  const { fields, reset_button } = ALL_POSTLISTING_FILTRATION;

  const { agentPostings, active, draft, trash } = useSelector(
    (state) => state?.postListingAds
  );
  const user_id = useSelector((state) => state?.currentUser?.user?.id);

  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState('All');
  const [myPropertiesData, setMyPropertiesData] = useState([]);
  const [subTypeData, setSubTypeData] = useState([]);
  const [filterObject, setFilterObject] = useState({
    purpose: '',
    propertyCity: '',
    location: '',
    subType: '',
  });

  const find_posting = findData(user_id, agentPostings);
  const find_active = findData(user_id, active);
  const find_draft = findData(user_id, draft);
  const find_trash = findData(user_id, trash);

  useEffect(() => {
    const filters = {};
    Object.keys(filterObject).forEach((val) => {
      if (filterObject[val]) {
        filters[val] = filterObject[val];
      }
    });
    mutate(filters);
  }, [filterObject]);

  const { mutate, isPending, data } = useMutation({
    mutationFn: fetchMyProperties,
    onSuccess: (data) => {
      const items = data.response.data;
      setMyPropertiesData([...(items?.active || []), ...(items?.draft || [])]);
    },
    onError: (error) => {
      toast.error(error.response.data.messag);
    },
  });

  useEffect(() => {
    propertyTypesData.mutate();
  }, []);

  const propertyTypesData = useMutation({
    mutationFn: fetchPropertyTypes,
    onSuccess: (data) => {
      let subTypesArr = [];
      data.response.data.forEach((val) => {
        subTypesArr = [...subTypesArr, ...val.subTypes];
      });
      const subTypes = subTypesArr.map((val) => {
        return { label: val.subTypeName, value: val.subTypeName };
      });
      setSubTypeData(subTypes);
    },
    onError: (error) => {
      toast.error(error.response.data.messag);
    },
  });

  const items = data?.response?.data;
  const tabs = [
    {
      label: 'All',
      items: [...(items?.active || []), ...(items?.draft || [])],
    },
    { label: 'Active', items: items?.active },
    { label: 'Draft', items: items?.draft },
    { label: 'Trash', items: items?.trash },
  ];

  const handleChangeTab = (event, newValue) => {
    const fullLabel = event?.target?.innerText;
    const tabLabel = fullLabel.split(' (')[0];

    setCurrentTab(tabLabel);
    setValue(newValue);

    const selectedTab = tabs.find((tab) => tab.label === tabLabel);
    if (selectedTab?.items) {
      setMyPropertiesData(selectedTab.items);
    }
  };

  const handleChangeSelect = (key, val) => {
    setFilterObject({
      ...filterObject,
      [key]: val,
    });
  };

  const handleReset = () => {
    setFilterObject({
      ...filterObject,
      purpose: '',
      propertyCity: '',
      location: '',
      subType: '',
    });
  };

  const justify = (no) => {
    return justifyContent(
      find_posting,
      find_active,
      find_draft,
      find_trash,
      currentTab,
      filterObject,
      no
    );
  };

  return (
    <>
      <Box
        sx={{
          mx: { md: 'auto', lg: 0 },
          maxWidth: { sm: 'auto', md: '1200px', xl: '1200px', xxl: '1500px' },
        }}
      >
        <Grid
          container
          columnGap={2}
          rowGap={2}
          sx={{
            alignItems: 'flex-end',
          }}
        >
          {fields &&
            fields?.map((field, index) => (
              <FilterControls
                index={index}
                field={field}
                filterObject={filterObject}
                subTypeData={subTypeData}
                handleChangeSelect={handleChangeSelect}
                key={index}
              />
            ))}

          <Grid item xs={12} md={1}>
            <Button
              onClick={() => handleReset()}
              variant="text"
              disableRipple
              sx={{
                color: '#126FAA',
                textDecoration: 'underline',
                '&:hover, &:focus': {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                },
              }}
            >
              {reset_button || ''}
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          background: '#fff',
          borderRadius: '10px',
          border: '1px solid #E4E4E4',
          mt: 4,
          mb: 6,
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
            {tabs?.map((tab, i) => (
              <Tab
                key={i}
                label={`${tab.label} (${tab.items?.length || 0})`}
                {...a11yProps(i)}
                disableRipple={true}
                sx={{
                  textTransform: 'math-auto',
                }}
              />
            ))}
          </Tabs>
        </Box>

        <Divider />

        <ProposalCardContainer justify={justify}>
          {myPropertiesData?.length < 1 ? (
            isPending ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              <Typography>No Data Found</Typography>
            )
          ) : (
            myPropertiesData?.map((item, index) => (
              <ProposalCard
                deleteAPIHandler={deleteProperty}
                refetchProperties={mutate}
                key={index}
                data={item}
                currentTab={currentTab}
              />
            ))
          )}
        </ProposalCardContainer>
      </Box>
    </>
  );
};

export default MyProperties;
