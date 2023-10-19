"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function AgntSlider() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        loop={true}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          type: "fraction"
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        // className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://dummyimage.com/100" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://dummyimage.com/100" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://dummyimage.com/100" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://dummyimage.com/100" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://dummyimage.com/100" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://dummyimage.com/100" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://dummyimage.com/100" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://dummyimage.com/100" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://dummyimage.com/100" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://dummyimage.com/100" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://dummyimage.com/100" alt="" />
        </SwiperSlide>
        
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p>
    </>
  );
}
