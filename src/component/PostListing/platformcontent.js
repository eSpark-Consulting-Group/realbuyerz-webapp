import React from "react";
import { Typography, Box } from "@mui/material";
const PlatformContent = () => {
    const simplesteps = "In a few simple steps!"
    const MillionsBuyers = "Reach Millions of Buyers on our Platforms"
    return (
        <Box>
            <Typography sx={{
                textAlign: "center",
                color: "black",
                fontSize: "30px",
                fontFamily: "Inter",
                fontWeight: 500
            }}>{MillionsBuyers}</Typography>
            <Typography sx={{
                textAlign: "center",
                color: "#126FAA",
                fontSize: "25px",
                fontFamily: "Inter",
                fontWeight: 500
            }}>{simplesteps}</Typography>
        </Box>
    )
}
export default PlatformContent;