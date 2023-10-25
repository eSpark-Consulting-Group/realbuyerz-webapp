import React from 'react'
import { Typography } from "@mui/material";
const Location = ({ locationpurpose, propertyType, city }) => {
    return (
        <div>
            <Typography sx={{ padding: "5px", fontSize: "18px", fontWeight: 600 }} >Location & Purpose</Typography>
            <Typography sx={{ padding: "5px", fontSize: "16px", fontWeight: 400 }}>Purpose: {locationpurpose}</Typography>
            <Typography sx={{ padding: "5px", fontSize: "16px", fontWeight: 400 }}>Property Type: {propertyType}</Typography>
            <Typography sx={{ padding: "5px", fontSize: "16px", fontWeight: 400 }}>City: {city}</Typography>
            <Typography sx={{ padding: "5px", fontSize: "16px", fontWeight: 400 }} variant="body1">Location:</Typography>
        </div>
    )
}
export default Location;