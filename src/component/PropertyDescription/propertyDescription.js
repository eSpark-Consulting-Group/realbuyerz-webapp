import React from 'react'
import { Typography } from "@mui/material";

const PropertyDescription = ({ description }) => {
    return( 
    <div>
        <Typography sx={{ padding: "5px" }} variant="h3" >Description</Typography>
        <Typography sx={{ padding: "5px", fontSize: "16px", fontWeight: 400 }}>{description}</Typography>
        </div>
   
    )
}
export default PropertyDescription;