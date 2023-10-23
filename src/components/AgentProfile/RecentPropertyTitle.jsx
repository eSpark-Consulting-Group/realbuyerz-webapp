import React from "react";
import Typography from "@mui/material/Typography";

const RecentPropertyTitle = ({ data }) => {
  return (
    <Typography
      variant="h4"
      align="center"
      fontWeight={600}
      marginBottom="50px"
    >
      {data.title}
    </Typography>
  );
};

export default RecentPropertyTitle;
