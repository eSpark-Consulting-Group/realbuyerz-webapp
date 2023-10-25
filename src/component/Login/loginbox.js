'use client';
import React from "react";
import { Grid, Box } from "@mui/material";
import DivBorder from "./divbox";
import LoginCard from "./logincard";
const LoginBox = () => {

    return (
        <Grid container >
            <Grid item xs={10} md={12} sx={{ display: 'flex', alignItems: "center" }}>
                <Box sx={{
                    background: "white",
                    display: "flex",

                }}>
                    <DivBorder height={580} />
                    <LoginCard />

                </Box>
            </Grid>
        </Grid>
    )
}
export default LoginBox;