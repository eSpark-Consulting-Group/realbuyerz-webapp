'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Grid } from '@mui/material';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { propertyData } from '../propertyconstants';

export default function Sliders() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={11}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            style={{ width: '100%', height: '100%', borderRadius: '15px' }}
          >
            {propertyData.SliderImages.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.images}
                  alt={`Slide ${index + 1}`}
                  width={870}
                  height={500}
                  style={{ objectFit: 'cover', borderRadius: '20px' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
}
