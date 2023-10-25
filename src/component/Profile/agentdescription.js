import React from "react";
import { Typography } from "@mui/material";

const AgentDescription = ({ description }) => {
    return (
        <Typography
            sx={{
                width: '100%',
                fontFamily: 'Inter',
                color: 'zinc',
                fontSize: 16,
                fontWeight: 400,
                textAlign: 'start',
            }}
        >
            {description}
        </Typography>
    )
}
export default AgentDescription;