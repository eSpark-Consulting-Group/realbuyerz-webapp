import React from 'react';
import { Box } from '@mui/system';

const DivBorder = ({ height }) => {
    return (
        <Box sx={{
            display: { xs: "none", md: "flex" },
            width: { xs: "240px", md: "450px" },
            height: height,
            borderRadius: "15px",
            border: "5px #1176AD solid",
            position: "relative"
        }}></Box>
    )
}
export default DivBorder;