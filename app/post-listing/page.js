import React from "react";
import { Grid, Box } from "@mui/material";
import Platform from "@/src/component/PostListing/platform";
import AddInformation from "@/src/component/PostListing/addInformation";
const PostListing = () => {
    return (
        <Grid container sx={{ background: "green", paddingTop: "30px" }}>
            <Grid item xs={12} md={1} sx={{ background: "pink" }} >JJJDJ</Grid>
            <Grid item xs={12} md={10} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                <Box sx={{
                    // width: "100%",
                    // display: "flex",
                    // justifyContent: "center"
                }}>
                    <Platform />
                    <AddInformation />
                </Box>




            </Grid>
            <Grid item xs={12} md={1} sx={{ background: "pink" }} >XXX</Grid>
        </Grid>
    )
}
export default PostListing;