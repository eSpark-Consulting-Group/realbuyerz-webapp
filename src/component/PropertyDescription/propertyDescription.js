import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { propertyData } from './constaints';
import Title from "./title";
import Description from "./description";
import Location from "./location";
import Amenities from "./Amenities";
import Area from "./Area";
import Demand from "./demand";
const PropertyDescription = () => {
  return (
    <Grid container spacing={2} >
      <Grid item xs={12} md={11} sx={{ padding: "5px", }}  >
        <Box
          sx={{ padding: "15px" }}>
          <Title title={propertyData.title} />
          <Description description={propertyData.description} />
          <Location locationpurpose={propertyData.location.purpose}
            propertyType={propertyData.location.propertyType}
            city={propertyData.location.city} />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
            width="100%"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Box>
            <Amenities amenity={propertyData.amenities} />
          </Box>
          <Box>
            <Area area={propertyData.area} />
          </Box>
          <Box>
            <Demand demand={propertyData.demand} />
          </Box>
        </Box>
      </Grid>
    </Grid>

  );
}
export default PropertyDescription;