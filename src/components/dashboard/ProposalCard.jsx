'use client';
import { handleSubmitTrash } from '@/src/redux/slices/userAds/userAdsSlice';

import {
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import {
  handleAgentTrash,
  handleTrashProposal,
} from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';
import Link from 'next/link';
import PreviewModal from './preview/PreviewModal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useMutation } from '@tanstack/react-query';

const ProposalCard = ({
  data,
  currentTab,
  link,
  customKey,
  refetchProperties,
  deleteAPIHandler,
}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const pathName = usePathname();
  const properties = 'my-properties';
  const proposals = 'my-proposals';
  const all_posting = 'all-postings';
  const user = 'user';

  const handleTrash = (property_id, currentTab) => {
    if (pathName?.includes(user)) {
      deletePropertyHandler.mutate(property_id);
      dispatch(
        handleSubmitTrash({ property_id: property_id, currentTab: currentTab })
      );
    } else if (pathName?.includes(properties)) {
      deletePropertyHandler.mutate(property_id);
      dispatch(
        handleAgentTrash({
          property_id: property_id,
          currentTab: currentTab,
        })
      );
    } else if (pathName?.includes(proposals)) {
      deletePropertyHandler.mutate(property_id);
      dispatch(
        handleTrashProposal({
          property_id: property_id,
          currentTab: currentTab,
        })
      );
    }
  };
  const deletePropertyHandler = useMutation({
    mutationFn: deleteAPIHandler,
    onSuccess: (data) => {
      console.log(data);
      refetchProperties();
    },
    onError: (error) => {
      // Handle the error
      console.error(error);
    },
  });
  const handleClickOpen = () => {
    if (currentTab === 'Saved Request' || currentTab === 'Trash') {
      return null;
    } else if (currentTab === 'Active' && pathName?.includes(proposals)) {
      return null;
    } else {
      return setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(!open);
  };

  let editIconLink;
  if (currentTab === 'Draft') {
    editIconLink = `${pathName?.includes(all_posting) ? all_posting : properties}/draft/property/${data?.id || ''}`;
  }
  if (currentTab === 'All') {
    editIconLink = `/agent/property-management/update-property/${data?.id || ''}`;
  }

  if (currentTab === 'Active') {
    editIconLink = `/agent/my-proposals/update-proposal/${data?.id}/cover-letter`;
  }

  return (
    <Box
      sx={{
        width: { xs: '280px', sm: '320px', md: '100%' },
        height: 'auto',
        '@media (min-width:280px) and (max-width:319px)': {
          width: '240px',
        },
      }}
    >
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
                  src={
                    // data?.PropertyData[0]?.url ||
                    '/images/PropertyImg.png'
                  }
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
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  '@media (min-width: 600px) and (max-width:1150px)': {
                    justifyContent: `${pathName?.includes(user) ? 'center' : 'start'}`,
                  },
                  alignItems: { xs: 'flex-start', md: 'center' },
                  position: 'relative',
                  zIndex: 3,
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '15px', sm: '20px' },
                    fontWeight: 700,
                    lineHheight: '24px',
                    letterSpacing: '0em',
                    maxWidth: { xs: '220px', sm: '330px' },
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {data?.propertyName || ''}
                </Typography>
              </Box>
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
                  <Box
                    sx={{
                      display: 'flex',
                      marginBottom: '10px',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 700,
                        lineHeight: '17px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#000',
                      }}
                    >
                      Purpose:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 500,
                        lineHeight: '17px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#126FAA',
                        marginLeft: '5px',
                      }}
                    >
                      {data?.purpose || ''}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 700,
                        lineHeight: '17px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#000',
                      }}
                    >
                      Property Type:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 500,
                        lineHeight: '17px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#126FAA',
                        marginLeft: '5px',
                      }}
                    >
                      {data?.propertyType?.subTypeName || ''}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 700,
                        lineHeight: '17px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#000',
                      }}
                    >
                      City:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 500,
                        lineHeight: '17px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#126FAA',
                        marginLeft: '5px',
                      }}
                    >
                      {data?.propertyCity || ''}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 700,
                        lineHeight: '17px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#000',
                      }}
                    >
                      Location:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 500,
                        lineHeight: '17px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#126FAA',
                        marginLeft: '5px',
                      }}
                    >
                      {data?.propertyAddress || ''}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '15px',
                      maxWidth: !pathName?.includes(user) ? 700 : 1050,
                      letterSpacing: '0em',
                      textAlign: 'left',
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 4,
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
                    letterSpacing: '0em',
                    textAlign: 'left',
                    right: '20px',
                    padding: { xs: '20px', sm: '17px', md: '25px 30px' },
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
                right: { xs: 15, sm: 15 },
                top: {
                  xs: !pathName?.includes(user) ? 'auto' : 'auto',
                  sm: !pathName?.includes(user) ? 'auto' : 'auto',
                },
                bottom: {
                  xs: !pathName?.includes(user) ? 203 : 203,
                  sm: !pathName?.includes(user) ? 206 : 206,
                },
                left: { xs: 'auto', sm: 'auto' },
              }}
              onClick={() => handleTrash(data?.id, currentTab)}
            >
              <DeleteIcon />
            </IconButton>
            {(currentTab === 'Draft' ||
              (currentTab === 'Active' && pathName.includes(proposals)) ||
              currentTab === 'All') && (
              <Link href={editIconLink}>
                <Typography
                  color={'primary'}
                  sx={{
                    display: 'flex',
                    cursor: 'pointer',
                    position: { xs: 'absolute' },
                    zIndex: 10,
                    right: { xs: 60, sm: 60, md: 150 },
                    top: {
                      xs: !pathName?.includes(user) ? 330 : 81,
                      sm: !pathName?.includes(user) ? 382 : 112,
                      md: !pathName?.includes(user) ? 25 : 25,
                    },
                    bottom: {
                      xs: !pathName?.includes(user) ? 'auto' : 'auto',
                      sm: !pathName?.includes(user) ? 'auto' : 'auto',
                    },
                    left: { xs: 'auto', sm: 'auto', md: 'auto' },
                    '@media (min-width:280px) and (max-width:319px)': {
                      top: !pathName?.includes(user) && 320,
                      right: !pathName?.includes(user) && 50,
                    },
                  }}
                >
                  <EditIcon />
                </Typography>
              </Link>
            )}

            <Button
              variant="contained"
              disableRipple={true}
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: { xs: 'absolute' },
                zIndex: 10,
                width: '110px',
                height: '33px',
                right: { xs: 25, sm: 25, md: 25 },
                top: { xs: 20, sm: 20, md: 20 },
                left: { xs: 'auto', sm: 'auto', md: 'auto' },
                boxShadow: 'none',
                '&.MuiButton-contained': {
                  '&:hover': {
                    backgroundColor: '#fb631c',
                    boxShadow: 'none',
                  },
                },
              }}
              onClick={() => handleTrash(data?.id, currentTab)}
            >
              {deletePropertyHandler.isPending ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Trash'
              )}
            </Button>
          </>
        )}
      </Box>
      <PreviewModal open={open} onClose={handleClose} ads={data} />
    </Box>
  );
};

export default ProposalCard;
