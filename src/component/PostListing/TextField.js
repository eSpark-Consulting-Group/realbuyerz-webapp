import React from "react";
import { TextField } from "@mui/material";
const RBTextField = ({ placeholder }) => {
    return (
        <TextField sx={{
            width: "100%",
            color: "#969696",
            fontSize: "18px",
            fontFamily: "Inter",
            fontWeight: 400
        }}>{placeholder}</TextField>

        // variant = "outlined"
        // value = { value }
        // onChange = {(e) => setValue(e.target.value)}
        // select
        // label = "Select City"
    )
}
export default RBTextField;