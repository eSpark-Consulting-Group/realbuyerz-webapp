import React from "react";
import { Grid, Box } from "@mui/material";
import Platform from "@/src/component/PostListing/platform";
import AdInformation from "@/src/component/PostListing/addInformation";
import LocationPurpose from "@/src/component/PostListing/locationandpurpose";
import PropertySize from "@/src/component/PostListing/propertysize";
import PropertyFeature from "@/src/component/PostListing/featureandamenties";
import PropertyGallery from "@/src/component/PostListing/propertyimageandvideos";
const PostListing = () => {
    return (
        <Grid container sx={{ background: "green", paddingTop: "30px" }}>
            <Grid item xs={12} md={1} sx={{ background: "pink" }} >JJJDJ</Grid>
            <Grid item xs={12} md={10} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} >
                <Box sx={{

                    // width: "100%",
                    // display: "flex",
                    // gap: "20px"
                    // justifyContent: "center"
                }}>
                    <Platform />
                    <AdInformation />
                    <LocationPurpose />
                    <PropertySize />
                    <PropertyFeature />
                    <PropertyGallery />
                </Box>




            </Grid>
            <Grid item xs={12} md={1} sx={{ background: "pink" }} >XXX</Grid>
        </Grid>
    )
}
export default PostListing;