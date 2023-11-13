'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Subscription from './Subscription';
import { title } from '@/app/constants/BuyProduct';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  alignItems: 'center',
  display: 'flex',
  border: 'none',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}));

export default function BuyProduct() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        xs={12}
        md={12}
        lg={11}
        Item
        sx={{
          // pr: { xs: 2, md: 0 },
          // pt: { xs: 2, md: 1 },
          // pb: { xs: 2, md: 7 },
          border: '2px solid #E4E4E4',
          borderRadius: '10px',
          backgroundColor: '#fff',
        }}
      >
        <Subscription title={title} />
      </Grid>
    </Box>
  );
}
