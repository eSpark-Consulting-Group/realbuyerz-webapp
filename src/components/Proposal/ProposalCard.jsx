'use client';
import { handleSubmitTrash } from '@/src/redux/slices/userAds/userAdsSlice';

import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import {
  handleAgentTrash,
  handleTrashProposal,
} from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';
import Link from 'next/link';
import PreviewModal from '../PostListing/preview/PreviewModal';

const ProposalCard = ({ key, data, currentTab, link }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const pathName = usePathname();
  const properties = 'my-properties';
  const proposals = 'my-proposals';
  const user = 'user';

  const handleTrash = (property_id, currentTab) => {
    if (pathName?.includes(user)) {
      dispatch(
        handleSubmitTrash({ property_id: property_id, currentTab: currentTab })
      );
    } else if (pathName?.includes(properties)) {
      dispatch(
        handleAgentTrash({
          property_id: property_id,
          currentTab: currentTab,
        })
      );
    } else if (pathName?.includes(proposals)) {
      dispatch(
        handleTrashProposal({
          property_id: property_id,
          currentTab: currentTab,
        })
      );
    }
  };
  const handleClickOpen = () => {
    if (currentTab === 'Save Request' || currentTab === 'Trash') {
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
  return (
    <Box
      sx={{
        position: 'relative',
        width: 'auto',
        height: 'auto',
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 'auto',
          height: 'auto',
          zIndex: 1,
        }}
      >
        <Link href={link || '#'}>
          <Grid
            container
            onClick={handleClickOpen}
            sx={{
              background: '#F5F6FA',
              border: 'solid 1px #E4E4E4',
              borderRadius: '20px',
              padding: { xs: '10px', md: '25px 30px' },
              marginBottom: '30px',
              marginTop: key === 0 && '30px',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Grid item xs={0} sm={4} md={3.65}>
              <Box
                component={'img'}
                src={`${data?.images || ''}`}
                sx={{
                  width: '100%',
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={8.35}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0 20px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: { xs: 'flex-start', md: 'center' },
                  position: 'relative',
                  zIndex: 3,
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: 700,
                    lineHheight: '24px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                  }}
                >
                  {data?.title || ''}
                </Typography>
              </Box>
              <Divider
                sx={{
                  marginY: '20px',
                }}
              />
              <Box
                sx={{
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
                        color: '#126FAA',
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
                        color: '#333333',
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
                        color: '#126FAA',
                      }}
                    >
                      Proporty Type:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 500,
                        lineHeight: '17px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#333333',
                        marginLeft: '5px',
                      }}
                    >
                      {data?.properType || ''}
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
                        color: '#126FAA',
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
                        color: '#333333',
                        marginLeft: '5px',
                      }}
                    >
                      {data?.city || ''}
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
                        color: '#126FAA',
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
                        color: '#333333',
                        marginLeft: '5px',
                      }}
                    >
                      {data?.location || ''}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '15px',
                      letterSpacing: '0em',
                      textAlign: 'left',
                      flex: 1,
                    }}
                  >
                    {data?.description || ''}
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
                    padding: { xs: '10px', md: '25px 30px' },
                  }}
                >
                  {`Amount: ${data?.amount || ''}${data?.amountCurrency || ''}`}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Link>
        {currentTab !== 'Trash' && (
          <Button
            variant="contained"
            sx={{
              position: { xs: 'relative', md: 'absolute' },
              zIndex: 10,
              right: 25,
              top: 20,
            }}
            onClick={() => handleTrash(data?.property_id, currentTab)}
          >
            Trash
          </Button>
        )}
      </Box>
      <PreviewModal open={open} onClose={handleClose} ads={data} />
    </Box>
  );
};

export default ProposalCard;
