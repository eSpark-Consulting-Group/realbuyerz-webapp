'use client';
import React from "react";
import { agentProfileDescription } from "../../../app/propertyDeal/constaints";
import { Box } from "@mui/material";
import Slider from "react-slick";
const Sliders = () => {
    const sliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        showStatus: false,
        interval: 2000,
        showIndicators: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    }
    return (
        <>

            <Box sx={{
                display: "flex", background: "green"
            }}>
                <Slider {...sliderSettings}>
                    {agentProfileDescription.map((image, index) => (
                        console.log("images", image),
                        <div key={index}>
                            <img alt={image.title} src={image.images} style={{ width: "900px", height: "300px", maxWidth: "700px" }} />
                        </div>
                    ))}
                </Slider>

            </Box>
        </>
    );
}
export default Sliders;
