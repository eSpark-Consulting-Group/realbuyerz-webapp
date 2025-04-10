import React from 'react';
import { Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // ⛔ Removed Navigation
import 'swiper/css';
import 'swiper/css/pagination';
import PropertyCard from './PropertyCard';
import Link from 'next/link';

const sliderSettings = {
  slidesPerView: 'auto',
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: false,
  modules: [Pagination],
};

const ProjectsSlider = ({ data }) => {
  return (
    <Swiper {...sliderSettings}>
      <Grid container sx={{ display: 'flex' }} columnSpacing={2}>
        {data?.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: '99%',
              height: '100%',
              maxWidth: '400px',
              padding: 2,
            }}
          >
            <Link href={`${item?.id || '#'}`}>
              <PropertyCard item={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Grid>
    </Swiper>
  );
};

export default ProjectsSlider;
