'use client';
import React from "react";
import { Grid, } from "@mui/material";

import RealEstate from "./RealEstateImage";
import BuildingImage from "./Buildingimage";
import LoginPageText from "./LoginPageText";

const SidePage = () => {
    return (
        <Grid>
            <Grid item xs={12} md={12} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", flexDirection: "column", alignItems: "center", background: "white", gap: "60px", padding: "10px" }}>
               <RealEstate />
                <LoginPageText />
                <BuildingImage />
            </Grid>
        </Grid >
    )
}
export default SidePage;