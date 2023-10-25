'use client';
import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import Image from "next/image";

import LoginImage from "./LoginPageImage";
import BuildingImage from "./buildingimage";
const SidePage = () => {
    return (
        <Grid container sx={{

        }}>
            <Grid item xs={12} md={12} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", background: "white", gap: "60px" }}>
                <LoginImage />
                <Box sx={{
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mx: "auto"
                }}>
                    <Typography sx={{
                        color: "#126FAA",
                        fontSize: { xs: "25px", md: "35px" },
                        fontFamily: "Inter",
                        fontWeight: 500,
                        textAlign: "center"
                    }}>Lorem ipsum dolor sit amet</Typography>
                    <Typography sx={{
                        color: "#FF631C",
                        fontSize: { xs: "15px", md: "20px" },
                        fontFamily: "Inter",
                        fontWeight: 400,
                        textAlign: "center"
                    }}>Vestibulum non tortor facilisis, tempus tellus quis</Typography>
                </Box>
                <BuildingImage />
            </Grid>
        </Grid >
    )
}
export default SidePage;