import React from 'react'
import { Typography } from "@mui/material";
const Demand = ({ demand }) => {
    return (
        <div>
            <Typography sx={{ fontSize: "18px", fontWeight: 600, fontFamily: "Inter" }}>Demand</Typography>
            <Typography sx={{ padding: "3px", fontSize: "16px", fontWeight: 400, fontFamily: "Inter" }}>{demand}</Typography>
        </div>
    )
}
export default Demand;