'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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

export default function BuyProductTable() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        xs={12}
        md={12}
        item
        sx={{
          backgroundColor: 'red',
        }}
      >
        <Grid xs={12} md={6}>
          <Item>Box 1</Item>
        </Grid>
        <Grid xs={12} md={6}>
          <Item>Box 2</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
