import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar, Button } from "@mui/material";
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
                  alignItems: "center",
                  paddingTop: "10px"
                }}
              >
                <Box
                  sx={{
                    padding: "0px 0px 0px 31px",
                  }}
                >
                  <Typography
                    variant="Body1"
                    sx={{
                      color: "#000",
                      fontWeight: 600,
                      fontSize: "12px",
                      lineHeight: "19.36px",
                    }}
                  >
                    {data.proprtyTitle}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "0px 0px 0px 20px",
                  }}
                >
                  {data.icons}
                </Box>
              </Box>
              <Typography
                // variant="body2"
                sx={{
                  color: "#666",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "16.94px",
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "4%",
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
