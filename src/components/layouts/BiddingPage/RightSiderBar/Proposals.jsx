import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Proposals({ data }) {
  return (
    <Grid xs={12} columnSpacing={2} sx={{mb: 3}}>
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
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          Proposals:
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
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
          My Proposals
        </Typography>
      </Box>
    </Grid>
  );
}

export default Proposals;
