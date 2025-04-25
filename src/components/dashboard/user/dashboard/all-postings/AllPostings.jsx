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
import FilterControls from './FilterControls';

import {
  a11yProps,
  findData,
  justifyContent,
} from '@/src/utils/dashboardUtils';
import {
  deleteUserProperty,
  fetchUserProperties,
} from '@/src/utils/userProperties';
import { fetchPropertyTypes } from '@/src/utils/properties';

import { ALL_POSTLISTING_FILTRATION } from '@/src/constants/agent/My_Properties';

const AllPostings = () => {
  const { userPostings, draft, trash, active } = useSelector(
    (state) => state?.postRequestAds
  );
  const user_id = useSelector((state) => state?.currentUser?.user?.id);

  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState('All');
  const [allPostingData, setAllPostingData] = useState([]);
  const [subTypeData, setSubTypeData] = useState([]);
  const [filterObject, setfilterObject] = useState({
    purpose: '',
    propertyCity: '',
    location: '',
    subType: '',
  });
  const { fields, reset_button } = ALL_POSTLISTING_FILTRATION;

  const find_posting = findData(user_id, userPostings);
  const find_draft = findData(user_id, draft);
  const find_active = findData(user_id, active);
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

  const sortHandler = (properties) => {
    const sorted = [...properties].sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );
    return sorted;
  };

  const { mutate, isPending, data } = useMutation({
    mutationFn: fetchUserProperties,
    onSuccess: (data) => {
      const items = data.response.data;
      setAllPostingData([...(items?.active || []), ...(items?.draft || [])]);
    },
    onError: (error) => {
      console.error(error);
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
      setAllPostingData(selectedTab.items);
    }
  };

  const handleChangeSelect = (key, val) => {
    setfilterObject({
      ...filterObject,
      [key]: val,
    });
  };

  const handleReset = () => {
    setfilterObject({
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
            fields.map((field, index) => (
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
                  fontSize: '16px',
                  fontWeight: 400,
                }}
              />
            ))}
          </Tabs>
        </Box>

        <Divider />

        <ProposalCardContainer justify={justify}>
          {!isPending ? (
            allPostingData?.length < 1 ? (
              <Typography>No Data Found</Typography>
            ) : (
              sortHandler(allPostingData)?.map((item, index) => (
                <ProposalCard
                  deleteAPIHandler={deleteUserProperty}
                  refetchProperties={mutate}
                  key={index}
                  data={item}
                  currentTab={currentTab}
                  updatePath={'/user/update-request'}
                />
              ))
            )
          ) : (
            <CircularProgress size={28} color="inherit" />
          )}
        </ProposalCardContainer>
      </Box>
    </>
  );
};

export default AllPostings;
