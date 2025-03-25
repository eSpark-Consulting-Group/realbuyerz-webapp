export const carouselSetting = (Pagination, Navigation) => {
  return {
    slidesPerView: 3,
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
};
