import React from 'react'
import { Typography } from "@mui/material";

const Area = ({ area }) => {
    return (
        <div>
            <Typography sx={{ fontSize: "18px", fontWeight: 600, fontFamily: "Inter" }}>Area</Typography>
            <Typography sx={{ padding: "3px", fontSize: "16px", fontWeight: 400, fontFamily: "Inter" }}>{area}</Typography>
        </div>
    )
}
export default Area;