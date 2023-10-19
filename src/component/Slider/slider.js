'use client';
import React from "react";
import { agentProfileDescription } from "./constaints";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import Styles from './slider.module.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Box } from "@mui/material";
import Image from "next/image";
export default function Sliders() {
    return (
        <><Box sx={{

        }}>
            <Swiper navigation={true} modules={[Navigation]}
                style={{
                    width: "700px",
                    height: "100%",
                    backgroundColor: "blue",
                    float: "left",
                    borderRadius: "15px",

                }} >
                {agentProfileDescription.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image src={item.images} alt={`Slide ${index + 1}`}
                            width={850}
                            height={500}
                            style={{
                                objectFit: "cover"
                            }} />

                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
        </>
    );
}