import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const ProfileCompletnes = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#FB631C" : "#308fe8",
    },
  }));

  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "#EDF7FF",
        }}
      >
        <Box></Box>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            fontFamily: "Inter, sans-serif",
            paddingLeft: "30px",
            paddingTop: "20px"
          }}
        >
          Profile Completeness:
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            // mt: 2,
            paddingLeft: "30px",
            paddingBottom: "15px",
          }}
        >
          <BorderLinearProgress variant="determinate" value={90} sx={{ flex: 1 }} />
          <Typography sx={{ ml:1 , mr:7 }}>{95}%</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "0px",
            border: "2px solid #E5E5E5",
          }}
        ></Box>
        <Typography
          variant="body2"
          sx={{
            width: "80%",
            color: "#000",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            fontFamily: "Inter, sans-serif",
            padding: "20px 20px 50px 30px",
          }}
        >
          Ways to stand out to clients right now...
        </Typography>
      </Grid>
    </>
  );
};

export default ProfileCompletnes;
