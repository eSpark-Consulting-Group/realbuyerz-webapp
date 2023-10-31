import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LiveBinddingPropertiesList = ({list}) => {
  return (
    <Box sx={{ paddingLeft: "20px" }}>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Status:&nbsp;
        </Typography>
        <Typography variant="body1">{list.status}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          City:&nbsp;
        </Typography>
        <Typography variant="body1">{list.city}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Area:&nbsp;
        </Typography>
        <Typography variant="body1">{list.area}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Proposal:&nbsp;
        </Typography>
        <Typography variant="body1">{list.proposal}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Connects:&nbsp;
        </Typography>
        <Typography variant="body1">{list.connects}</Typography>
      </Box>
    </Box>
  );
};

export default LiveBinddingPropertiesList;
