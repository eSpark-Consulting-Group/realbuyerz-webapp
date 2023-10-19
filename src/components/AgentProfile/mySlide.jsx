"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeReviewCard from "./CardSlider"
export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <Slider {...settings}>
      <div>
      <RecipeReviewCard  />
      </div>
      <div>
      <RecipeReviewCard  />
      </div>
      <div>
      <RecipeReviewCard  />
      </div>
      <div>
      <RecipeReviewCard  />
      </div>
      <div>
      <RecipeReviewCard  />
      </div>
      
      
    </Slider>
  );
}