'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { Box, CircularProgress, Typography } from '@mui/material';

import BackToDashboard from '@/src/components/dashboard/BackToDashboard';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import ProposalDetails from './ProposalDetails';
import PersonalDetail from './PersonalDetail';
import ActionButton from './ActionButton';

import { checkData } from '@/src/utils/dashboardUtils';
import useViewportHeight from '@/src/utils/useViewportHeight';
import { transformApiObject } from '@/src/utils/objectsConversion';
import { acceptProposal } from '@/src/utils/apis/bidding/acceptProposal';
import { rejectProposal } from '@/src/utils/apis/bidding/rejectProposal';
import { archivedProposal } from '@/src/utils/apis/bidding/archiveProposal';
import { viewUserProposal } from '@/src/utils/apis/bidding/viewUserProposal';

import { PROPOSAL_PAGE } from '@/src/constants/Preview_Data';

const SpacificProposal = () => {
  const { image, back_Button, applicant_Title, applicant_Message } =
    PROPOSAL_PAGE;

  const pathname = usePathname();

  const segments = pathname?.split('/');
  const proposalId = segments[segments?.length - 1];
  const userPropertyId = segments[segments?.length - 3];

  const viewportHeight = useViewportHeight();

  const [agentProposal, setAgentProposal] = useState({});

  const handleConnect = () => acceptRequestHandler.mutate(agentProposal.id);

  const handleReject = () => rejectRequestHandler.mutate(agentProposal.id);

  const handleArchived = () => archivedRequestHandler.mutate(agentProposal.id);

  useEffect(() => {
    mutate(userPropertyId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { mutate, isPending } = useMutation({
    mutationFn: viewUserProposal,
    onSuccess: (data) => {
      const item = data.response?.data;

      const findProposal = item.items.find(
        (it) => it.agentProperty.id === proposalId
      );

      setAgentProposal({
        ...findProposal,
        agentProperty: transformApiObject(findProposal.agentProperty),
      });
    },
    onError: (error) => {
      toast.error(error.response.data.messag);
    },
  });

  const acceptRequestHandler = useMutation({
    mutationFn: acceptProposal,
    onSuccess: () => {},
    onError: (error) => {
      toast.error(error.response.data.messag);
    },
  });

  const rejectRequestHandler = useMutation({
    mutationFn: rejectProposal,
    onSuccess: () => {},
    onError: (error) => {
      toast.error(error.response.data.messag);
    },
  });

  const archivedRequestHandler = useMutation({
    mutationFn: archivedProposal,
    onSuccess: () => {},
    onError: (error) => {
      toast.error(error.response.data.messag);
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
      ) : checkData(
          agentProposal?.agentProperty,
          agentProposal?.userStatus,
          'Connected',
          'Rejected'
        ) ? (
        <>
          <Box sx={{ pb: 3 }}>
            <BackToDashboard
              buttonLabel={back_Button?.text}
              link={back_Button?.link}
            />
          </Box>

          <Box
            sx={{
              backgroundColor: '#fff',
              border: '1px solid #E4E4E4',
              maxWidth: { lg: '1200px' },
              height: 'auto',
            }}
          >
            <Box
              sx={{ width: '100%', borderBottom: '1px solid #E4E4E4', p: 4 }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: { xs: 'column', md: 'row' },
                }}
              >
                <PersonalDetail agentProposal={agentProposal} image={image} />

                <Box
                  sx={{
                    display: 'flex',
                    gap: 1.5,
                    flexDirection: { xs: 'column', md: 'row' },
                    '@media (min-width: 700px) and (max-width: 950px)': {
                      flexDirection: 'row',
                    },
                  }}
                >
                  <ActionButton
                    handleAction={handleArchived}
                    isPending={archivedRequestHandler.isPending}
                    text={'Archive'}
                    extra
                  />

                  <ActionButton
                    handleAction={handleReject}
                    isPending={rejectRequestHandler.isPending}
                    text={'Reject'}
                    extra
                  />

                  <ActionButton
                    handleAction={handleConnect}
                    isPending={acceptRequestHandler.isPending}
                    text={'Connect'}
                  />
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', md: '330px' },
                  borderRight: { xs: '0px', md: '1px solid #E4E4E4' },
                  borderBottom: { xs: '1px solid #E4E4E4', md: '0px' },
                  p: { xs: 5, md: 3 },
                }}
              >
                <Typography sx={{ fontSize: '12px', fontWeight: 600 }}>
                  {applicant_Title || ''}
                </Typography>

                <Typography>{`${agentProposal.agentProperty.user?.firstName || ''} ${agentProposal.agentProperty.user?.lastName || ''} ${applicant_Message || ''}`}</Typography>
              </Box>

              <ProposalDetails agentProposal={agentProposal} />
            </Box>
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

export default SpacificProposal;
