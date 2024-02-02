import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Typography, Box, Grid } from '@mui/material';

const itemsToShow = 10;

const ProjectsSlider = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = Math.min(data.length, itemsToShow);
  console.log(currentPage);
  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const sliderSettings = {
    slidesPerView: 3,
    // pagination: { clickable: true },
    onSlideChange: (swiper) => handleChangePage(swiper.activeIndex + 1),
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    modules: [Pagination, Navigation],
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1920: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <Swiper {...sliderSettings}>
      {data.slice(0, totalItems).map((project) => (
        <SwiperSlide key={project.id}>
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 'auto',
            }}
          >
            <Grid
              key={project.id}
              item
              xs={11}
              my={'20px'}
              sx={{
                backgroundColor: '#fff',
                border: '1px solid #E4E4E4',
              }}
            >
              {/* Your existing code for the grid item */}
              <img
                src={project.image}
                height={'auto'}
                width={'100%'}
                alt={`Project ${project.id}`}
              />

              <Box sx={{ p: '20px' }}>
                <Box
                  sx={{ display: 'flex', alignItems: 'flex-end', pb: '20px' }}
                >
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 500,
                      lineHeight: '24px',
                      pr: '5px',
                    }}
                  >
                    PKR
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '25px',
                      fontWeight: 600,
                      lineHeight: '30px',
                    }}
                  >
                    {project.price}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '20px',
                    pb: '15px',
                    textWrap: 'wrap',
                  }}
                >
                  {project.location}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    pb: '15px',
                  }}
                >
                  {project.size}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '21px',
                    pb: '15px',
                  }}
                >
                  {project.orientation}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '25px',
                  }}
                >
                  {project.description.length > 200
                    ? `${project.description.slice(0, 200)}...`
                    : project.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsSlider;
