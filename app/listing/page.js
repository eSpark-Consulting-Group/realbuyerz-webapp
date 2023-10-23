'use client'
import { Box } from "@mui/system";
import React from "react";
import { tabData } from './constant'
import PropertyTabs from "./PropertyTabs"

const Listing = () => {
    const isAgent = "true"
    return (
        <Box className="min-h-screen" sx={{ px: "15%", py: "80px" }}>
            <PropertyTabs data={tabData} />
        </Box>
    );
};

export default Listing;
