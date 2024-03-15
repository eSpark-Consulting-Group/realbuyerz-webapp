'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Subscription from './Subscription';
import BuyConnects from './BuyConnects';
import { Buy_Connects, Buy_Product_Data } from '@/app/constants/BuyProduct';
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
  const { title, description, image, buttonText, textField, dropdown } =
    Buy_Connects;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} sm={12} md={12} lg={8.5} item>
          <Item>
            <Subscription title={Buy_Product_Data?.title} />
          </Item>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={3.5} item>
          <Item>
            <ProductCart />
          </Item>
        </Grid>

        <Grid xs={12} sm={12} md={12} lg={8.5} item>
          <Item>
            <BuyConnects
              title={title}
              image={image}
              fields={textField}
              description={description}
              buttonText={buttonText}
              dropdown={dropdown}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
