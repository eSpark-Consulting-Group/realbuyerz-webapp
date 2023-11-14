'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Subscription from './Subscription';
import { title } from '@/app/constants/BuyProduct';
import ProductCart from './ProductCart';

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
       //
        }}
      >
        <Subscription title={title} />
        <ProductCart />
      </Grid>
    </Box>
  );
}
