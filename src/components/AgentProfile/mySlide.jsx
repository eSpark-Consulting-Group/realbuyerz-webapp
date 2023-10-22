"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeReviewCard from "./CardSlider";
import { Box } from "@mui/system";
export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: false,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        adaptiveHeight: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    <Slider {...settings}>
        <Box>
          <RecipeReviewCard />
        </Box>
        <Box>
          <RecipeReviewCard />
        </Box>
        <Box>
          <RecipeReviewCard />
        </Box>
        <Box>
          <RecipeReviewCard />
        </Box>
        <Box>
          <RecipeReviewCard />
        </Box>
        <Box>
          <RecipeReviewCard />
        </Box>
        <Box>
          <RecipeReviewCard />
        </Box>
        <Box>
          <RecipeReviewCard />
        </Box>
        <Box>
          <RecipeReviewCard />
        </Box>
        <Box>
          <RecipeReviewCard />
        </Box>
        <Box>
          <RecipeReviewCard />
        </Box>
    </Slider>
    </>
  );
}
