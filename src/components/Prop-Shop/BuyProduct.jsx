'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Subscription from './Subscription';
import BuyConnects from './BuyConnects';
import { Buy_Connects, Buy_Product_Data } from '@/app/constants/BuyProduct';

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
  const { title, discription, image, buttonText, textField, dropdown } =
    Buy_Connects;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container xs={12} md={12} lg={12} item>
        <Grid xs={12} sm={12} md={12} lg={12} item>
          <Item>
            <Subscription title={Buy_Product_Data?.title} />
          </Item>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={12} item>
          <Item>
            <BuyConnects
              title={title}
              image={image}
              feilds={textField}
              discription={discription}
              buttonText={buttonText}
              dropdown={dropdown}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
