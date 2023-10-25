'use client';
import React from "react";
import { Grid, Box } from "@mui/material";
import DivBorder from "../Login/divbox";
import SignupCard from "./signupcard";
const SignupBox = () => {

    return (
        <Grid container >
            <Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: "center" }}>
                <Box sx={{
                    // background: "green",
                    display: "flex",
                }}>
                    <DivBorder height={640} />
                    <SignupCard />

                </Box>
            </Grid>
        </Grid>
    )
}
export default SignupBox;