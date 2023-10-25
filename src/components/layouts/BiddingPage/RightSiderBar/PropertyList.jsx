import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";

const PropertyList = ({ data }) => {
  return (
    <Box sx={{mb: 2}}>
      <Grid item xs={12}>
        {data.map((data, i) => {
          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  width: "60%",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    padding: "20px 0px 5px 31px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "bold",

                      lineHeight: "normal",
                      fontFamily: "Inter",
                    }}
                  >
                    {data.proprtyTitle}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "12px 0px 10px 20px",
                  }}
                >
                  {data.icons}
                </Box>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "0.56px",
                  paddingLeft: "31px",
                  paddingBottom: "2px",
                }}
              >
                {data.propertyType}
              </Typography>
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PropertyList;
