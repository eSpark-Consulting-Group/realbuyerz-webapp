import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const LiveBinddingPropertiesList = ({list}) => {
  return (
    <Box sx={{ paddingLeft: "20px" }}>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" , mx:.5 , color: "#333333"}}>
          Status:
        </Typography>
        <Typography variant="body1" sx={{color: "#333333" ,fontWeight: 500}}>{list.status}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" , mx:.5 ,color: "#333333"}}>
          City:
        </Typography>
        <Typography variant="body1" sx={{color: "#333333" ,fontWeight: 500}}>{list.city}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" , mx:.5 ,color: "#333333"}}>
          Area:
        </Typography>
        <Typography variant="body1" sx={{color: "#333333" ,fontWeight: 500}}>{list.area}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" , mx:.5 ,color: "#333333"}}>
          Proposal:
        </Typography>
        <Typography variant="body1" sx={{color: "#333333" ,fontWeight: 500}}>{list.proposal}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" , mx:.5 ,color: "#333333"}}>
          Connects:
        </Typography>
        <Typography variant="body1" sx={{color: "#333333", fontWeight: 500}}>{list.connects}</Typography>
      </Box>
    </Box>
  );
};

export default LiveBinddingPropertiesList;
