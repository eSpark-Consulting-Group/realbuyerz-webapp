import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import Image from "next/image";

const PropertyList = ({ data }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            width: "60%",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Box
            sx={{
              padding: "0px 0px 0px 0px",
            }}
          >

            <Title title={'Property Listed'} />
          </Box>
          <Box
            sx={{
              padding: "10px 0px 0px 20px",
            }}
          >
            <Image
              src='/images/Live-bidding-icons/category.svg'
              width={30}
              height={30}
              alt='icons'
            />
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
          {data.propertyListed.propertyType}
        </Typography>
        <Title title={'Profile Visibilty'} />
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
          {data.ProfileVisibilty.propertyType}
        </Typography>
        <Title title={'Lead Preferences'} />
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
          {data.LeadPreferences.propertyType}
        </Typography>
      </Grid>
    </Box>
  );
};

export default PropertyList;
