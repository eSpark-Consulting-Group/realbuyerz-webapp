import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import ListingInfo from "./listinginfo";
import PlatformContent from "./platformcontent";
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
                    padding: "50px",
                    justifyContent: "center"
                }}>
                    <PlatformContent />
                    <ListingInfo />
                </Box>

            </Grid>
        </Grid>
    )
}
export default Platform;