import React from "react";
import { Typography, Box } from "@mui/material";
const PostTitle = ({ text }) => {
    return (
        <Box sx={{
            borderBottom: "1px solid #E4E4E4",
            width: "100%",
        }}>
            <Typography sx={{
                color: "#126FAA",
                fontSize: "25px",
                fontFamily: "Inter",
                fontWeight: 600,
                textAlign: "center"
            }}>{text}</Typography>
        </Box>
    )
}
export default PostTitle;