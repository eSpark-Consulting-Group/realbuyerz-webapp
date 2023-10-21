'use client';
import React from "react";
import { agentProfileDescription } from "./constaints";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Grid } from "@mui/material";
import Image from "next/image";
export default function Sliders() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={11}>
          <Swiper navigation={true} modules={[Navigation]} style={{ width: "100%", height: "100%", borderRadius: "15px" }}>
            {agentProfileDescription.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.images}
                  alt={`Slide ${index + 1}`}
                  width={870}
                  height={500}
                  style={{ objectFit: "cover", borderRadius: "20px" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>

      </Grid>
    </>
  );
}