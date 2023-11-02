'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Grid } from '@mui/material';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

import { PROPERTY_ESTATE } from '@/app/constants/PropertyConstants';

const Sliders=()=> {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={11}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            style={{ width: '100%', height: '100%', borderRadius: '15px' }}
          >
            {PROPERTY_ESTATE.sliderImages.map(
              (item, index) => (
                (
                  <SwiperSlide key={index}>
                    <Image
                      src={item.images}
                      alt={`Slide ${index + 1}`}
                      width={870}
                      height={500}
                      style={{ objectFit: 'cover', borderRadius: '20px' }}
                    />
                  </SwiperSlide>
                )
              )
            )}
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
}
export default Sliders;
