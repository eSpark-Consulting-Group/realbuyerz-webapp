import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Proposals({ data }) {
  return (
    <>
      {data.map((items) => {
        return (
          <Grid xs={12} columnSpacing={2}>
            <Box
              sx={{
                border: "1px solid #E4E4E4",
                borderRadius: "10px",
                padding: "20px 0px 20px 31px",
                background: "#FFF",
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
                {items.proposalTitle}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  fontFamily: "Inter, sans-serif",
                  paddingTop: "10px",
                  color: "#FB631C",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  letterSpacing: "0.56px",
                }}
              >
                {items.proposal}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </>
  );
}

export default Proposals;
