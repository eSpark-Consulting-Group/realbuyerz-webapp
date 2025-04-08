import { Navigation, Pagination } from 'swiper/modules';

export const carouselSetting = {
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

export const homePartnersSliderSetting = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  arrows: false,
  cssEase: 'linear',
  pauseOnHover: false,
  animationDelay: '2s',
  rtl: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const propertySliderSetting = {
  dots: false,
  infinite: true,
  adaptiveHeight: true,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true,
        dots: false,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true,
        dots: false,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

export const popularLocationSliderSetting = {
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
    425: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1130: {
      slidesPerView: 3,
    },
  },
};

export const browseByCategorySliderSetting = {
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
    320: {
      slidesPerView: 2,
    },
    460: {
      slidesPerView: 3,
    },
    620: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    960: {
      slidesPerView: 6,
    },
    1180: {
      slidesPerView: 7,
    },
    1400: {
      slidesPerView: 8,
    },
  },
};