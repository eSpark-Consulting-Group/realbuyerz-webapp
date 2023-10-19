import { Box } from "@mui/system";
import React from "react";
import PropertyListingCard from "./PropertyListingCard";
import { properties } from "./constant";

const Listing = () => {
    return (
        // <Box className="min-h-screen container-width">
        <Box className="min-h-screen " sx={{ px: "15%" }}>
            <Box >

            </Box>
            <Box sx={{ borderRadius: "10px", border: "1px solid #E4E4E4", my: "50px", padding: "56px 30px" }} >
                <PropertyListingCard data={properties} />
            </Box>
        </Box>

    );
};

export default Listing;
