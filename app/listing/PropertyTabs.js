'use client'
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { tabData } from "./constant";
import Chips from "./isAgentChip";



function CustomTabPanel({ value, index }) {
    const { title, content } = tabData[index];
    const itemsPerRow = { xs: 12, sm: 6, md: 4, lg: 3, xl: 3 };

    return (<div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
    >
        {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography variant="h2" py={2}>
                    {title}
                </Typography>
                <Grid container spacing={2}>
                    {content.map((value, index) => (
                        <Grid item key={index} {...itemsPerRow}>
                            <Typography fontWeight={"300"} fontSize={"16px"} textAlign={"center"}>{value}</Typography>
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const isAgent = "true"
    const agenttab = value;
    console.log(agenttab);
    return (
        <>
            {isAgent && (
                <Chips chips={agenttab} label="Agent" variant="outlined" color="primary" sx={{ mb: 2 }} />
            )}

            <Box sx={{ borderRadius: "10px", border: "1px solid #E4E4E4", mt: "20px" }}>
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
                        <CustomTabPanel key={index} value={value} index={index} />
                    ))}
                </Box></Box></>
    );
}