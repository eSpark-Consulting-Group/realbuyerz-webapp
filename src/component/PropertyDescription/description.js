import React from 'react'
import { Typography } from "@mui/material";
const Description = ({ description }) => {

    return (
        <div>
            <Typography sx={{ padding: "5px", fontFamily: "Inter" }} variant="h3">Description</Typography>
            <Typography sx={{ padding: "5px", fontFamily: "Inter", fontSize: "16px", fontWeight: 400 }}>{description}</Typography>
        </div>
    )
}
export default Description;