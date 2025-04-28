'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import { Box, Divider, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import PreviewModal from './preview/PreviewModal';
import PropertyNameBox from './PropertyNameBox';
import EditIconButton from './EditIconButton';
import TrashButton from './TrashButton';
import TextBox from './TextBox';

import { saveUserProposal } from '@/src/utils/apis/bidding/saveUserProposal';

import {
  handleAgentTrash,
  handleTrashProposal,
} from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';
import { handleSubmitTrash } from '@/src/redux/slices/userAds/userAdsSlice';

const ProposalCard = ({
  data,
  currentTab,
  link,
  customKey,
  refetchProperties,
  deleteAPIHandler,
  updatePath,
  refetchSavedProposal,
}) => {
  const pathName = usePathname();

  const dispatch = useDispatch();

  const properties = 'my-properties';
  const proposals = 'my-proposals';
  const user = 'user';
  const propertyId = data?.id || '';

  const [open, setOpen] = useState(false);

  const handleTrash = (property_id, currentTab) => {
    deletePropertyHandler.mutate(property_id);
    const actionPayload = { property_id, currentTab };

    if (pathName?.includes(user)) {
      dispatch(handleSubmitTrash(actionPayload));
    } else if (pathName?.includes(properties)) {
      dispatch(handleAgentTrash(actionPayload));
    } else if (pathName?.includes(proposals)) {
      if (currentTab == 'Saved Request') {
        mutate(property_id);
      }

      dispatch(handleTrashProposal(actionPayload));
    }
  };

  const deletePropertyHandler = useMutation({
    mutationFn: deleteAPIHandler,
    onSuccess: () => {
      refetchProperties();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleClickOpen = () => {
    if (['Saved Request', 'Trash'].includes(currentTab)) return;
    if (currentTab === 'Active' && pathName?.includes(proposals)) return;
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const { mutate, isPending } = useMutation({
    mutationFn: saveUserProposal,
    onSuccess: () => {
      refetchSavedProposal();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  let editIconLink;
  if (currentTab === 'All' || currentTab === 'Draft') {
    editIconLink = updatePath
      ? `${updatePath}/${propertyId || ''}`
      : `/agent/property-management/update-property/${propertyId || ''}`;
  }

  if (currentTab === 'Active') {
    editIconLink = `/agent/my-proposals/update-proposal/${propertyId}/cover-letter`;
  }

  const isLoading = isPending || deletePropertyHandler.isPending;

  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: '280px', sm: '320px', md: '100%' },
        '@media (min-width:280px) and (max-width:319px)': {
          width: '240px',
        },
        height: 'auto',
        zIndex: 1,
      }}
    >
      <Link href={link || '#'}>
        <Box
          onClick={handleClickOpen}
          sx={{
            minHeight: {
              xs: `${pathName?.includes(user) ? '310px' : '535px'}`,
              sm: `${pathName?.includes(user) ? '350px' : '600px'}`,
              md: '300px',
            },
            display: 'flex',
            gap: 3,
            flexDirection: { xs: 'column', md: 'row' },
            background: '#F5F6FA',
            border: 'solid 1px #E4E4E4',
            borderRadius: '20px',
            padding: { xs: 0.5, sm: '10px', md: 1.8 },
            marginTop: customKey === 0 && '30px',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {!pathName?.includes(user) && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: { xs: 0.8, sm: 0 },
              }}
            >
              <Box
                component={'img'}
                src={data?.PropertyData[0]?.url || '/images/PropertyImg.png'}
                alt="Property Image"
                sx={{
                  minWidth: { xs: '250px', sm: '300px' },
                  maxWidth: { xs: '250px', sm: '300px' },
                  width: 'auto',
                  height: { xs: '220px', sm: '250px' },
                  borderRadius: '5px',
                  '@media (min-width:280px) and (max-width:319px)': {
                    minWidth: '220px',
                    height: '210px',
                  },
                }}
              />
            </Box>
          )}

          <Box
            sx={{
              width: {
                xs: '100%',
                md: `${!pathName?.includes(user) ? 'calc(100% - 300px)' : '100%'}`,
              },
              display: 'flex',
              flexDirection: 'column',
              padding: { xs: '10px', md: 0 },
            }}
          >
            <PropertyNameBox pathName={pathName} user={user} data={data} />

            <Divider
              sx={{
                marginY: { xs: '10px', sm: '20px' },
              }}
            />

            <Box
              sx={{
                mt: 2,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <TextBox text1={'Purpose:'} text2={data?.purpose || ''} />
                <TextBox
                  text1={'Property Type:'}
                  text2={data?.propertyType?.typeName || ''}
                />
                <TextBox text1={'City:'} text2={data?.propertyCity || ''} />
                <TextBox
                  text1={'Location:'}
                  text2={data?.propertyAddress || ''}
                />

                <Typography
                  sx={{
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '15px',
                    maxWidth: !pathName?.includes(user) ? 700 : 1050,
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4,
                    color: '#333',
                  }}
                >
                  {data?.propertyDescription || ''}
                </Typography>
              </Box>

              <Typography
                sx={{
                  position: { xs: 'relative', md: 'absolute' },
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '17px',
                  right: '20px',
                  padding: { xs: '20px', sm: '17px', md: '25px 30px' },
                  color: '#333',
                }}
              >
                {`Amount: ${data?.propertyPrice || ''} ${data?.amountCurrency || 'PKR'}`}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Link>

      {currentTab !== 'Trash' && (
        <>
          <IconButton
            aria-label="delete"
            sx={{
              display: { xs: 'flex', md: 'none' },
              position: { xs: 'absolute' },
              zIndex: 10,
              right: 15,
              top: {
                xs: 'auto',
                sm: 'auto',
              },
              bottom: {
                xs: 203,
                sm: 206,
              },
              left: 'auto',
            }}
            onClick={() => handleTrash(data?.id, currentTab)}
          >
            <DeleteIcon />
          </IconButton>

          {(currentTab === 'Draft' ||
            (currentTab === 'Active' && pathName.includes(proposals)) ||
            currentTab === 'All') && (
            <EditIconButton
              editIconLink={editIconLink}
              pathName={pathName}
              user={user}
            />
          )}

          <TrashButton
            handleTrash={handleTrash}
            data={data}
            currentTab={currentTab}
            isLoading={isLoading}
          />
        </>
      )}

      <PreviewModal open={open} onClose={handleClose} ads={data} />
    </Box>
  );
};

export default ProposalCard;
