import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        // flexGrow: 1,
        // width: "1920px",
        height: "381px",
        background:
          "linear-gradient(180deg, #000F22 0%, rgba(14, 30, 46, 0.97) 60.69%, #00152C 100%)",
      }}
    >
      <Grid container spacing={2}>
        {/* <Box
          item
          xs={4}
          sx={{
            justifyContent: "center",
            display: "flex",
            backgroundColor: "red",
          }}
        >
          <Box>
            <img
              style={{
                width: "155px",
                height: "37px",
                marginTop: "5px",
                marginBottom: "5px",
              }}
              src="/images/LOGO.png"
              alt=""
            />
            <Typography
              component={"p"}
              variant={"p"}
              sx={{
                color: "#FFF",
                leadingTrim: "both",
                textEdge: "cap",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "17px",
                width: "625px",
                height: "45.88px",
                flexDirection: "column",
                justifyContent: "center",
                my: 2,
              }}
            >
              Rb online is a digital platform designed to help you with all your
              real estate worries! We pledge to make real estate experiences
              more accessible to everyone - whether they need to buy, sell, or
              rent properties, products, project, or services!
            </Typography>
            <Typography
              component={"p"}
              variant={"p"}
              sx={{
                color: "#FFF",
                leadingTrim: "both",
                textEdge: "cap",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "17px",
                width: "552px",
                height: "11.969px",
                flexDirection: "column",
                justifyContent: "center",
                my: 3,
              }}
            >
              With jagah Online, you don’t to worry about finding the right
              place, again!
            </Typography>
          </Box>
        </Box> */}
        <Grid item xs={4}>
          <Box>{/* <h1>hello</h1> */}</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>{/* <h1>hello</h1> */}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
