"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://dummyimage.com/300" />
      </div>
      <div>
        <img src="https://dummyimage.com/300" />
      </div>
      <div>
        <img src="https://dummyimage.com/300" />
      </div>
      <div>
        <img src="https://dummyimage.com/300" />
      </div>
      <div>
        <img src="https://dummyimage.com/300" />
      </div>
      <div>
        <img src="https://dummyimage.com/300" />
      </div>
      <div>
        <img src="https://dummyimage.com/300" />
      </div>
      <div>
        <img src="https://dummyimage.com/300" />
      </div>
      
    </Slider>
  );
}