import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import ListingInfo from "./listinginfo";

const Platform = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={6} >
                <Box sx={{
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px #E4E4E4 solid",
                    borderRadius: "10px",
                    width: "1200px",
                    gap: "6px",
                    padding: "30px",
                    justifyContent: "center"
                }}>
                    <Typography sx={{
                        textAlign: "center",
                        color: "black",
                        fontSize: "30px",
                        fontFamily: "Inter",
                        fontWeight: 500
                    }}>Reach Millions of Buyers on our Platforms</Typography>
                    <Typography sx={{
                        textAlign: "center",
                        color: "#126FAA",
                        fontSize: "25px",
                        fontFamily: "Inter",
                        fontWeight: 500
                    }}>In a few simple steps!</Typography>
                    <ListingInfo />
                </Box>

            </Grid>
        </Grid>
    )
}
export default Platform;