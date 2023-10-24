'use client';
import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import Image from "next/image";
import { Rotate90DegreesCcw } from "@mui/icons-material";
const SidePage = () => {
    return (
        <Grid container sx={{
            // background: "pink",
            padding: "20px"

        }}>
            <Grid item xs={12} md={11} sx={{ background: "white", display: "flex", justifyContent: "center", flexDirection: "column", padding: "20px" }}>
                <Box
                    component="div"
                    sx={{
                        width: '700px',
                        height: '300px',
                        backgroundImage: 'url("/assets/images/boximage.svg")',
                        // backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        mx: "auto"
                    }}
                ></Box>
                {/* <Box
                    sx={{
                        // width: "400px"
                    }}>
                    <Image
                        src={"assets/images/boximage.svg"}
                        width={450}
                        height={500}
                    />
                </Box> */}
                <Box sx={{
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItem: "center", mx: "auto"
                }}>
                    {/* <Box sx={{ width: { xs: "300px", md: "500px" }, background: "purple", }}> */}
                    <Typography sx={{
                        color: "#126FAA",
                        fontSize: "35px",
                        fontFamily: "Inter",
                        fontWeight: 500,
                        textAlign: "center"
                    }}>Lorem ipsum dolor sit amet, </Typography>
                    <Typography sx={{
                        color: "#FF631C",
                        fontSize: "20px",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        textAlign: "center"

                    }}>Vestibulum non tortor facilisis, tempus tellus quis</Typography>
                    {/* </Box> */}
                    <Image
                        src="assets/images/highbuilding.svg"
                        width={500}
                        height={700}
                    />
                </Box>
            </Grid>

        </Grid >
    )
}
export default SidePage;