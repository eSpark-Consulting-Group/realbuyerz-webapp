import React from "react";

import {
    Box,
    Grid,
    Typography,
  } from "@mui/material";
const PropertyCardBody = ({
    items
}) => {
    console.log(items, )
  return (
    <Grid container spacing={2} pb={4}>
      {["1", "2", "3"].map((number) => (
        <Grid item xs={4} key={number}>
          <Box
            sx={{
              width: "100%",
              height: 80,
              maxWidth: "sm",
              border: 0.5,
              borderColor: "#777777",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 1,
              
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "lg",
                  fontWeight: "bold",
                  color: "#126FAA",
                  textAlign: "center",
                }}
              >
                {items[`PropertyNumber${number}`]}
              </Typography>
              <Typography sx={{ fontSize: "xs", color: "#777777" }}>
                {items[`PropertieName${number}`]}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyCardBody;
