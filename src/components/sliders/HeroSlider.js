"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../../app/globals.css";

export default function HeroSlider({
  spaceBetween,
  effect,
  navigation,
  pagination,
  autoplay,
  delay,
  data,
}) {
  return (
    <>
      <Swiper
        spaceBetween={spaceBetween}
        effect={effect}
        navigation={navigation}
        pagination={{
          clickable: pagination,
        }}
        autoplay={{ delay: delay }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="hero_slider"
      >
        {data?.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
