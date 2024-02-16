'use client';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import UserProfileImage from '@/src/components/UserDashboard/UserProfileImage';
import BackToDashboard from '@/src/components/UserDashboard/BackToDashboard';
import { ProposalsPage } from '@/app/constants/postRequest';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

const Page = () => {
  const { image, back_Button } = ProposalsPage;

  const pathname = usePathname();
  const segments = pathname.split('/');
  const getadid = segments[segments.length - 3];
  const getproposalId = segments[segments.length - 1];
  const userPostings = useSelector(
    (state) => state?.postRequestAds?.userPostings
  );
  const spacificPost = userPostings.find((item) => getadid == item.adId);
  const spacificPostProposals = spacificPost.proposals.find(
    (prop) => prop.proposalId == getproposalId
  );

  console.log(spacificPostProposals, 'idid');

  return (
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
        <Box sx={{ width: '100%', borderBottom: '1px solid #E4E4E4', p: 4 }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
              <UserProfileImage
                width={60}
                height={60}
                badgeWidth={'7px'}
                badgeHeigth={'7px'}
                padding={0.3}
                right={2}
                image={image}
                isActive={false}
              />
              <Box>
                <Typography
                  sx={{ fontSize: '15px', fontWeight: 500, color: '#126FAA' }}
                >
                  John Doe
                </Typography>
                <Typography>
                  <LocationOnIcon sx={{ fontSize: 28, color: '#757474' }} />
                  John DoeLahore, Pakistan - 3:16pm local time
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <Link href={`#`}>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    width: { xs: '200px', lg: '200px' },
                    height: '43.545px',
                    backgroundColor: '#fff',
                    border: '1px solid #FB631C',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#FB631C',
                    '&:hover': { backgroundColor: '#FB631C', color: 'white' },
                  }}
                >
                  {'Reject'}
                </Typography>
              </Link>
              <Link href={`#`}>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: '200px', lg: '200px' },
                    height: '43.545px',
                    backgroundColor: '#FB631C',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#FFF',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: '#FB631C',
                      border: '1px solid #FB631C',
                    },
                  }}
                >
                  {'Connect'}
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex' }}>
          <Box>
            <Typography>Applicant</Typography>
            <Typography>
              Kashif has applied to or been invited to your or your company’s
              job need experience custom template designers for custom posts
              archive creation
            </Typography>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </>
  );
};

export default Page;
