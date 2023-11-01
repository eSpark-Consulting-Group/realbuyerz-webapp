import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const LiveBinddingPropertiesList = ({list}) => {
  return (
    <Box sx={{ paddingLeft: "20px" }}>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" , mx:.5 }}>
          Status:
        </Typography>
        <Typography variant="body1">{list.status}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" , mx:.5 }}>
          City:
        </Typography>
        <Typography variant="body1">{list.city}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" , mx:.5 }}>
          Area:
        </Typography>
        <Typography variant="body1">{list.area}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" , mx:.5 }}>
          Proposal:
        </Typography>
        <Typography variant="body1">{list.proposal}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" , mx:.5 }}>
          Connects:
        </Typography>
        <Typography variant="body1">{list.connects}</Typography>
      </Box>
    </Box>
  );
};

export default LiveBinddingPropertiesList;
