import { Box, Typography } from "@mui/material";
import React from "react";

const HeroSection = (data) => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: `url(/images/hero_section/img_1.png)`,
          height: "678px",
          width: "1920px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center text-center justify-center ">
          <div className="text-center w-full text-white">
            <img
              src="/images/hero_section/logo.png"
              alt="Logo"
              className="ml-5 inline-flex item-center w-100"
            />
            <div classNameName="mx-auto">
              <h1 className="text-9xl font-extrabold leading-tight mb-4">
                Live buying, selling or rent vetted properties at the most
                trusted online real estate portal
              </h1>
              <p className="text-lg mb-8">
                A brief description of your hero section goes here.
              </p>
              <div className="space-x-4">
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
                >
                  Button 1
                </a>
                <a
                  href="#"
                  className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
                >
                  Button 2
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Box
        sx={{
          width: "1920px",
          height: "678px",
          backgroundImage: `url(/images/hero_section/img_1.png)`,
        }}
      >
        <Box
          sx={{
            color: "#FF631C",
          }}
        >
          <Typography
            component={"h1"}
            variant={"h1"}
            sx={{
              color: "#FB631C",
              fontFamily: "Inter",
              fontsStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              fontSize: "40px",
            }}
          >
            Live buying, selling or rent vetted properties at the most trusted
            online real estate portal
          </Typography>
        </Box>
      </Box> */}
    </>
  );
};

export default HeroSection;
