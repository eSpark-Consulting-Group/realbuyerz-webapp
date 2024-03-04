import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Typography, Box, Grid, Skeleton } from '@mui/material';
import Link from 'next/link';

const itemsToShow = 10;

const ProjectsSlider = ({ data, category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  const totalItems = Math.min(data.length, itemsToShow) || 10;
  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };
  const NoData = [1, 2, 3, 1, 2, 3, 1, 2, 3, 5];
  const filterData = data?.filter(
    (item) => item?.proportyCategory === category
  );
  const filteredData = filterData?.length ? filterData : NoData;
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
      {filteredData?.slice(0, totalItems).map((project) => (
        <SwiperSlide key={project?.id}>
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 'auto',
            }}
          >
            <Grid
              key={project?.id}
              item
              xs={11}
              my={'20px'}
              sx={{
                backgroundColor: '#fff',
                border: '1px solid #E4E4E4',
              }}
            >
              <Link href={`/projects/${project.id}`}>
                {!project?.images?.length == 0 ? (
                  <img
                    src={
                      project?.images[0]?.path ||
                      `/images/default/default_project_image.jpg`
                    }
                    height={'auto'}
                    width={'100%'}
                    alt={`Project ${project?.id}`}
                  />
                ) : (
                  <Skeleton variant="rectangular" width={`100%`} height={300} />
                )}
              </Link>
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
                    {project?.amountCurrency || (
                      <Skeleton variant="rectangular" width={100} height={20} />
                    )}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '25px',
                      fontWeight: 600,
                      lineHeight: '30px',
                    }}
                  >
                    {project?.amount || (
                      <Skeleton variant="rectangular" width={100} height={30} />
                    )}
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
                  {project?.location || (
                    <>
                      <Skeleton />
                      <Skeleton />
                    </>
                  )}
                </Typography>
                <Box display={'flex'} gap={'5px'}>
                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '20px',
                      pb: '15px',
                    }}
                  >
                    {project?.area || (
                      <Skeleton variant="text" height={'2rem'} width={100} />
                    )}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '20px',
                      pb: '15px',
                    }}
                  >
                    {project?.areaUnit || (
                      <Skeleton variant="text" height={'2rem'} width={100} />
                    )}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '21px',
                    pb: '15px',
                  }}
                >
                  {project?.orientation || (
                    <Skeleton variant="text" height={'2rem'} />
                  )}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '25px',
                  }}
                >
                  {project?.description || (
                    <>
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                    </>
                  )}
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
