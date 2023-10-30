'use client';
import React from "react";
import { Typography, Box } from "@mui/material";

const LoginPageText = () => {
    return (
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
    )
}
export default LoginPageText;