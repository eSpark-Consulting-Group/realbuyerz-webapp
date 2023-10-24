import React from "react";


const LoginPagelayout = () => {
    return (
        <Grid container sx={{ background: "green", paddingTop: "30px", display: "flex", justifyContent: "center" }}>
            <Grid >
                <Grid item xs={12} md={6} sx={{}}>
                    <SidePage />
                </Grid>
                <Grid item xs={12} md={6} sx={{}}>
                    <Login />
                </Grid>
            </Grid>
        </Grid>
    )
}
export default LoginPagelayout