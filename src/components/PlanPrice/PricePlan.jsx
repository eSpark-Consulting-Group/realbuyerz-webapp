'use client';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Basic from './Basic';
import Hot from './Hot';
import Super from './Super';
import { PLAN_PRICE } from '@/app/constants/PricePlane';
import { Button, Grid, Modal } from '@mui/material';
import Image from 'next/image';

const PricePlan = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            // minHeight: '100vh',
            // position: 'absolute',
            // top: 0,
            // left: 0,
            // right: 0,
            // bottom: 0,
            margin: 'auto',
            overflowY: { xs: 'scroll', sm: 'scroll' },
            // maxHeight: '100vh',
            height: '100vh',
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              // display: { xs: 'none', md: 'block' },
              marginLeft: { xs: 0, sm: 50, md: 88 },
            }}
          >
            <Image
              src={'/images/plan-price/Vector.png'}
              width={30}
              height={30}
              alt="close"
            />
          </Button>

          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 3, sm: 0, md: 0, lg: 0 }}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Grid item sx={{ marginTop: { xs: '430px', sm: 0 } }}>
              <Basic BasicData={PLAN_PRICE.Basic} />
            </Grid>
            <Grid item>
              <Hot HotData={PLAN_PRICE.Hot} />
            </Grid>
            <Grid item>
              <Super SuperData={PLAN_PRICE.Super} />
            </Grid>
            {/* <Grid item xs={12}>  <Button
                            onClick={handleClose}
                            sx={{
                                display: { md: 'none', xs: 'inline' },
                                position: 'absolute',
                                top: 0,
                                right: 0
                            }}
                        >
                            <Image
                                src={'/images/plan-price/close.svg'}
                                width={35}
                                height={35}
                                alt='close' />
                        </Button></Grid> */}
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default PricePlan;
