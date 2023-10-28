'use client'
import React, { useState } from "react";
import { Typography, Box, TextField, MenuItem, Switch } from "@mui/material";
import Image from "next/image";

import { PropertyInformation } from "./postlistingConstants";
import PostTitle from "./posttitle";
const PropertySize = () => {
    const [value, setValue] = useState('');
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <Box sx={{
            background: "white",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "30px",
            border: "1px #E4E4E4 solid",
            borderRadius: "10px",

        }}>
            <PostTitle text={PropertyInformation.postTitles.text3} />

            <Box

                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    width: '500px',
                    height: '600px',
                    gap: "15px",
                    backgroundImage: 'url("/assets/images/realbuyer.svg")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    mx: "auto",

                }}>
                {PropertyInformation.propertySize.map((item, index) => (

                    <Box key={index}>
                        <Box sx={{
                            display: "flex",
                            alignSelf: "flex-start",
                            alignItems: "center",
                            fontSize: "20px",
                            fontFamily: "Inter",
                            fontWeight: 400,
                            gap: "8px"
                        }} >
                            <Image src={item.image}
                                width={45}
                                height={45}
                            />
                            <Typography sx={{
                                color: "#333333",
                            }}>{item.text} </Typography><span style={{ color: "#FF0000" }}>*</span>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px"
                        }}>
                            <TextField
                                placeholder={item.placeholder}
                                sx={{
                                    width: "500px"
                                }}
                            />
                            <TextField
                                style={{ width: '200px', color: "#777777" }}
                                variant="outlined"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                select
                                label="Select City"
                            >
                                <MenuItem key={1} value="test0">
                                    {item.option1}
                                </MenuItem>
                                <MenuItem key={2} value="test1">
                                    {item.option2}
                                </MenuItem>
                            </TextField>
                        </Box>
                    </Box>
                ))}
                {PropertyInformation.installment.map((item, index) => (

                    <Box key={index}>
                        <Box sx={{
                            display: "flex",
                            alignSelf: "flex-start",
                            alignItems: "center",
                            fontSize: "20px",
                            fontFamily: "Inter",
                            fontWeight: 400,
                            gap: "8px"
                        }} >
                            <Image src={item.image}
                                width={45}
                                height={45}
                            />
                            <Typography sx={{
                                color: "#333333",
                            }}>{item.title} </Typography><span style={{ color: "#FF0000" }}>*</span>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px"
                        }}>
                            <Typography
                                sx={{
                                    color: "#333333",
                                    width: "650px"
                                }}
                            >
                                {item.description}
                            </Typography>

                            <Switch {...label} />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
export default PropertySize;