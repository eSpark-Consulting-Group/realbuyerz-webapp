'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  //   justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  border: 'none',
  //   boxShadow: 'none',
  color: theme.palette.text.secondary,
}));

export default function ProfilePasswordForm() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
