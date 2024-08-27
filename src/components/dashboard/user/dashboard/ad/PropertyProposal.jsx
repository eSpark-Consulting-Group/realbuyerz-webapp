'use client';

import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Divider } from '@mui/material';
import { usePathname } from 'next/navigation';

import { useMutation } from '@tanstack/react-query';

import ProposalDetails from '@/src/components/dashboard/ProposalDetails';
import DashboardTitle from '@/src/components/dashboard/user/dashboard/DashboardTitle';
import BackToDashboard from '@/src/components/dashboard/BackToDashboard';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import ProposalAgentProfile from '@/src/components/dashboard/ProposalAgentProfile';

import { PROPOSAL_PAGE } from '@/src/constants/Preview_Data';

import { viewUserProposal } from '@/src/utils/apis/bidding/viewUserProposal';
import { transformApiObject } from '@/src/utils/objectsConversion';
import useViewportHeight from '@/src/utils/useViewportHeight';

const PropertyProposal = () => {
  const { image, back_Button, view_Button, title } = PROPOSAL_PAGE;

  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];

  const viewportHeight = useViewportHeight();

  const [userPosts, setUserPosts] = useState({});
  const [agentProposals, setAgentProposals] = useState([]);

  useEffect(() => {
    mutate(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const transformApiArray = (apiArray, id) => {
    return apiArray.map((apiObj) => {
      return {
        ...apiObj,
        agentProperty: {
          ...transformApiObject(apiObj.agentProperty),
          user_property_id: id,
        },
      };
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: viewUserProposal,
    onSuccess: (data) => {
      const item = data.response?.data;

      setUserPosts(transformApiObject(item.userProperty));
      setAgentProposals(transformApiArray(item.items, item.userProperty.id));
    },
    onError: (error) => {
      // Handle the error
      console.error(error);
    },
  });

  return (
    <>
      {isPending ? (
        <Box
          sx={{
            height: {
              xs: `calc(${viewportHeight}px - 146px)`,
              sm: `calc(${viewportHeight}px - 166px)`,
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      ) : userPosts !== undefined && userPosts !== null && agentProposals ? (
        <>
          <BackToDashboard
            buttonLabel={back_Button?.text}
            link={back_Button?.link}
          />
          <DashboardTitle
            title={title}
            mt={'20px'}
            fontSize={'30px'}
            ml={'57px'}
            marginProposal={'10px'}
          />
          <Box
            sx={{
              background: '#fff',
              borderRadius: '10px',
              border: '1px solid #E4E4E4',
              mt: 6,
              mb: 6,
              mx: { xs: 'auto', lg: 0 },
              width: { xs: '100%', lg: '1200px' },
              '@media (min-width: 1440px) and (max-width: 1568px)': {
                width: '100%',
              },
              '@media (min-width: 960px) and (max-width: 1439px)': {
                width: '90%',
              },
            }}
          >
            <ProposalDetails
              city={userPosts?.city}
              area={userPosts?.area}
              location={userPosts?.location}
              title={userPosts?.title}
              amount={userPosts?.amount}
              status={userPosts?.purpose}
              proposal={agentProposals?.length}
              postedTime={userPosts?.created_at}
              description={userPosts?.description}
            />
            <Divider />
            <ProposalAgentProfile
              proposalData={agentProposals || ''}
              image={image}
              ViewText={view_Button?.text}
              ViewLink={view_Button?.link}
              Height={'1420px'}
            />
          </Box>
        </>
      ) : (
        <NotFoundSection
          heading={'Sorry!'}
          message={'Property id invalid, Please add correct id.'}
        />
      )}
    </>
  );
};

export default PropertyProposal;
