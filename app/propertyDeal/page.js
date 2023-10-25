import React from "react";
import Sliders from "@/src/component/Slider/slider";
import ProfileAgent from "@/src/component/Profile/profile";
import PropertyLocation from "@/src/component/PropertyDetails/propertyDetails";
import PropertyDescription from "@/src/component/PropertyDescription/propertyDescription";
import { Box, Grid } from "@mui/material";
const PropertyDeal = () => {
  return (
    <>
      <Grid container sx={{ paddingTop: "20px", display: "flex", justifyContent: "center" }}>
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "50px" }}>
          <Sliders />
          <PropertyLocation />
          <PropertyDescription />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProfileAgent />
        </Grid>
      </Grid>
    </>
  )
}
export default PropertyDeal;

