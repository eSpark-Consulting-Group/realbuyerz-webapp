import { Grid } from "@mui/material";
import React from "react";
import SidePage from "@/src/component/LoginSidePage/sidepage";
import Login from "@/src/component/Login/login";
const Signin = () => {
    return (
        <Grid container sx={{ background: "green", paddingTop: "30px", display: "flex", justifyContent: "center" }}>
            <Grid item xs={12} md={6} sx={{}}>
                <SidePage />
            </Grid>
            <Grid item xs={12} md={6} sx={{}}>
                <Login />
            </Grid>

        </Grid>
    )
}
export default Signin;