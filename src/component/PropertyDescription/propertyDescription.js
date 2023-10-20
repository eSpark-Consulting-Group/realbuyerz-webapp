import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { Amenities } from "./constaints";
import { Area } from "./constaints";
import { Demand } from "./constaints";
import { Purpose } from "./constaints";
import { PropertyType } from "./constaints";
import { City } from "./constaints";
import { propertyTitle } from "./constaints";
import { propertyDescription } from "./constaints";

const PropertyDescription = () => {
    return (
        <Grid container spacing={2} sx={{

            // paddingBottom: "19px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            width: "100%"
        }}>
            <Grid item xs={12}>
                <Box sx={{
                    color: "#333333",
                    fontSize: "30px",
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    wordWrap: "break-word"
                }}
                >Title</Box>
                <Typography variant="h4">{propertyTitle.titleone}</Typography>
                <Typography
                    sx={{
                        textAlign: 'left',
                        color: '#333333',
                        fontSize: '30px',
                        fontFamily: 'Inter',
                        fontWeight: 600,
                        overflowWrap: 'break-word',

                    }}
                >Description</Typography>
                <Box
                    sx={{
                        color: "#333333",
                        fontSize: "16px",
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        width: { xs: "400px", md: "700px" }
                    }}>
                    <Typography>
                        {propertyDescription.placeone}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>

                <Typography sx={{
                    color: "#333333",
                    fontSize: "16px",
                    fontFamily: 'Inter',
                    fontWeight: 400
                }} >Location & Purpose</Typography>
                <Box sx={{
                    color: "#333333",
                    fontSize: "16px",
                    fontFamily: 'Inter',
                    fontWeight: 400,
                }}>
                    Purpose: {Purpose.sell}<Box /></Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{
                color: "#333333",
                fontSize: "16px",
                fontFamily: 'Inter',
                fontWeight: 400,
            }}>
                <Typography variant="subtitle1">Property Type: {PropertyType.house}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Typography variant="subtitle1">City: {City.karachi}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Location:</Typography>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" width="100%" height="200px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">Amenities</Typography>
                <ul>
                    <li>{Amenities.park}</li>
                    <li>{Amenities.masjid}</li>
                    <li>{Amenities.playground}</li>
                    <li>{Amenities.security}</li>
                </ul>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h5">Area</Typography>
                <Typography>{Area.area}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h5">Demand</Typography>
                <Typography sx={{
                    color: "#333333",
                    fontSize: "16px",
                    fontFamily: 'Inter',
                    fontWeight: 400,
                }}>{Demand.demand}</Typography>
            </Grid>
        </Grid>
    );
};

export default PropertyDescription;
