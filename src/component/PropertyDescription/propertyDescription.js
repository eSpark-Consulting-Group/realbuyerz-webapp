import React from "react";
import { Typography, Box,Grid } from "@mui/material";
import { Amenities } from "./constaints";
import { Area } from "./constaints";
import { Demand } from "./constaints";
import { Purpose } from "./constaints";
import { PropertyType } from "./constaints";
import { City } from "./constaints";
import { propertyTitle } from "./constaints";
import { propertyDescription } from './constaints';
const PropertyDescription = () => {
    return (
        <Grid container spacing={2} sx={{  }}>
  <Grid item xs={12} md={11}   >
    <Box sx={{ padding: "15px", gap:"4px"}}>
      <Typography variant="h3">Title</Typography>
      <Typography>{propertyTitle.titleone}</Typography>
      <Typography variant="h3">Description</Typography>
      <Typography>{propertyDescription.placeone}</Typography>
      <Typography variant="body1">Location & Purpose</Typography>
      <Typography>Purpose: {Purpose.sell}</Typography>
      <Typography>Property Type: {PropertyType.house}</Typography>
      <Typography>City: {City.karachi}</Typography>
      <Typography variant="body1">Location:</Typography>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
        width="100%"
        height="300"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Box>
        <Typography variant="h6">Amenities</Typography>
        <Typography>{Amenities.park}</Typography>
        <Typography>{Amenities.masjid}</Typography>
        <Typography>{Amenities.playground}</Typography>
        <Typography>{Amenities.security}</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Area</Typography>
        <Typography>{Area.area}</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Demand</Typography>
        <Typography>{Demand.demand}</Typography>
      </Box>
    </Box>
  </Grid>
 
</Grid>
       
    );
}
export default PropertyDescription;