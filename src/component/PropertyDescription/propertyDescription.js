import React from "react";
import { Box, Grid } from "@mui/material";

import Title from "./title";
import Description from "./description";
import Location from "./location";
import Amenities from "./Amenities";
import Area from "./Area";
import Demand from "./demand";
import { propertyData } from "../propertyconstants";

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