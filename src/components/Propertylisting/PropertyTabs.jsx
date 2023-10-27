"use client";
import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Chips from "./isAgentChip";
import PropertyListingCard from "./PropertyListingCard";
import Link from "next/link";
import { properties } from "../../../app/constents/PropertiesConstant";

function CustomTabPanel({ value, index, propertyType }) {
    const filteredProperties =
        value === 0 // If "All" tab is selected
            ? properties
            : properties.filter(property => property.propertytype === propertyType);

    const propertyTitle = filteredProperties.map((property) => ({
        id: property.id,
        title: property.title,
    }));

    const itemsPerRow = { xs: 12, sm: 6, md: 4, lg: 3, xl: 3 };

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography variant="h2" py={2}>
                        {`Location of ${propertyType} For sale in Karachi`}
                    </Typography>
                    <Grid container spacing={2}>
                        {propertyTitle.map(({ id, title }, index) => (
                            <Grid item key={id} {...itemsPerRow}>
                                <Typography fontWeight="300" fontSize="16px" textAlign="center">
                                    <Link href={`/property/${id}`}>{title}</Link>
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function PropertyTabs({ data }) {
    const [value, setValue] = useState(0);
    const [propertyType, setPropertyType] = useState(""); // Add this line to store the selected property type


    useEffect(() => {
        setValue(0);
    }, []);

    const propertyTypes = [...new Set(properties.map(property => property.propertytype))];
    const tabData = [
        { label: "All", propertyType: "All" }, // Add the "All" tab
        ...propertyTypes.map(propertyType => ({
            label: propertyType,
            propertyType: propertyType,
        })),
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
        const selectedPropertyType = tabData[newValue].label;

        // Update the selected property type
        setPropertyType(selectedPropertyType === "All" ? "" : selectedPropertyType);
    };

    const filteredProperties =
        propertyType === "" ? properties : properties.filter(property => property.propertytype === propertyType);
    const isAgent = "true";
    const agenttab = value;
    return (
        <>
            {isAgent == "true" && (
                <Chips
                    data={filteredProperties}
                    chips={agenttab}
                    label="Agent"
                    variant="outlined"
                    color="primary"
                    sx={{ mb: 2 }}
                />
            )}

            <Box
                sx={{ borderRadius: "10px", border: "1px solid #E4E4E4", mt: "20px" }}
            >
                <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            {tabData.map((tab, index) => (
                                <Tab
                                    key={index}
                                    label={tab.label}
                                    sx={{ fontSize: "20px", fontWeight: "700" }}
                                    {...a11yProps(index)}
                                />
                            ))}
                        </Tabs>
                    </Box>
                    {tabData.map((tab, index) => (
                        <CustomTabPanel
                            key={index}
                            value={value}
                            index={index}
                            propertyType={tab.propertyType}
                        />
                    ))}
                </Box>
            </Box>

            <Box
                sx={{
                    borderRadius: "10px",
                    border: "1px solid #E4E4E4",
                    my: "50px",
                    padding: "56px 30px",
                }}
            >
                <PropertyListingCard data={filteredProperties} />

            </Box>
        </>
    );
}
