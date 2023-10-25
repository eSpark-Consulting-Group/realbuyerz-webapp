import React from 'react'
import { Typography } from "@mui/material";

const Title = ({ title }) => {

    return (
        <div>
            <Typography sx={{ padding: "5px", fontFamily: "Inter" }} variant="h3">Title</Typography>
            <Typography sx={{ padding: "5px", fontFamily: "Inter", fontSize: "16px", fontWeight: 400 }}>{title}</Typography>
        </div>
    )
}
export default Title;