'use client';
import React from "react";
import { Grid, } from "@mui/material";

import LoginImage from "./LoginPageImage";
import BuildingImage from "./buildingimage";
import LoginPageText from "./logincontent";

const SidePage = () => {
    return (
        <Grid container sx={{

        }}>
            <Grid item xs={12} md={12} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", flexDirection: "column", alignItems: "center", background: "white", gap: "60px", padding: "10px" }}>
                <LoginImage />
                <LoginPageText />
                <BuildingImage />
            </Grid>
        </Grid >
    )
}
export default SidePage;