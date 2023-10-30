import React from 'react'
import { Typography } from "@mui/material";

const PropertyTitle = ({ title }) => {
    return (
        <div>
            <Typography sx={{ padding: "5px"}} variant="h3">Title</Typography>
            <Typography sx={{ padding: "5px",  fontSize: "16px", fontWeight: 400 }}>{title}</Typography>
        </div>
    )
}
export default PropertyTitle;