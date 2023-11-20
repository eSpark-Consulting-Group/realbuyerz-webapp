'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fade } from 'react-awesome-reveal';

import { Box, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import SliderCardTitle from './Slider/SliderCardTitle';
import SliderCardLocation from './Slider/SliderCardLocation';
import SliderCardPrice from './Slider/SliderCardPrice';

import SliderCardSeeDetails from './Slider/SliderCardSeeDetails';
import SliderCardIcons from './Slider/SliderCardIcons';

const PropertySlider = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          adaptiveHeight: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          adaptiveHeight: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {data?.recentProperties.properties.map((item, index) => {
          return (
            <Fade key={index} direction="left">
              <Card
                sx={{
                  maxWidth: 315,
                  '&:hover': {
                    boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.25)',
                  },
                }}
                key={item}
              >
                <CardMedia
                  component="img"
                  height="194"
                  image={item.image}
                  alt="Paella dish"
                />
                <CardContent>
                  <Box>
                    <Grid container rowSpacing={1}>
                      <Grid item xs={12}>
                        <SliderCardTitle title={item.name} />
                      </Grid>
                      <Grid item xs={12}>
                        <SliderCardLocation location={item.location} />
                      </Grid>
                      <Grid item xs={12}>
                        <SliderCardPrice price={item.price} />
                      </Grid>
                    </Grid>
                  </Box>
                  <Grid container rowSpacing={2} sx={{ marginTop: 0 }}>
                    <SliderCardIcons />
                  </Grid>
                </CardContent>
                <Grid container>
                  <SliderCardSeeDetails />
                </Grid>
              </Card>
            </Fade>
          );
        })}
      </Slider>
    </>
  );
};
export default PropertySlider;
