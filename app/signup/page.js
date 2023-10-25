import { Grid } from "@mui/material";
import React from "react";
import SidePage from "@/src/component/LoginSidePage/sidepage";
import SignupBox from "@/src/component/Signup/signupbox";

const Signup = () => {
    return (
        <Grid container sx={{ paddingBottom: "90px", paddingTop: "90px" }}>
            <Grid item xs={12} md={1} ></Grid>
            <Grid item xs={12} md={10} sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", md: "row" }, padding: "10px", paddingBottom: "10px", paddingTop: "10px" }} >
                <Grid item xs={12} md={6} sx={{}}>
                    <SidePage />
                </Grid>
                <Grid item xs={12} md={6} sx={{}}>
                    <SignupBox />
                </Grid>
            </Grid>
            <Grid item xs={12} md={1} ></Grid>
        </Grid>
    )
}
export default Signup;