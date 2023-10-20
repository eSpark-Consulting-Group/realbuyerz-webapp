import { Box } from "@mui/system";
import React from "react";
import PropertyListingCard from "./PropertyListingCard";
import Chips from "./isAgentChip";
import { properties } from "./constant";
import { tabData } from './constant'
import PropertyTabs from "./PropertyTabs"

const Listing = () => {
    const isAgent = "true"
    return (
        <Box className="min-h-screen" sx={{ px: "15%" }}>

            <PropertyTabs data={tabData} />
            <Box sx={{ borderRadius: "10px", border: "1px solid #E4E4E4", my: "50px", padding: "56px 30px" }}>
                <PropertyListingCard data={properties} />
            </Box>
        </Box>

    );
};

export default Listing;
