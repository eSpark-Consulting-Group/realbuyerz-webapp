
import React from 'react';
import { Typography, Box, TextField, Button, } from '@mui/material';
import Image from 'next/image';
import { PropertyInformation } from './postlistingConstants';
import PostTitle from './posttitle';
const PropertyFeature = () => {
    const handleChange = (event) => {
        const value = event.target.value;
    };
    const addiotionalFeature = "Add additional features e.g. Rooftop terrace, 24/7 security, Walking trails, Washing area etc"
    const addAmenties = "Add Amenities"
    return (
        <Box sx={{
            background: "white",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px",
            border: "1px #E4E4E4 solid",
            borderRadius: "10px",

        }}>
            <PostTitle text={PropertyInformation.postTitles.text4} />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: '500px',
                    height: '300px',
                    backgroundImage: 'url("/assets/images/realbuyer.svg")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    mx: "auto",
                    gap: "15px"
                }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",

                }}>
                    {PropertyInformation.feature.map((item, index) => (
                        <Box>
                            <Box sx={{
                                display: "flex",
                                alignSelf: "flex-start",
                                alignItems: "center",
                                fontSize: "20px",
                                fontFamily: "Inter",
                                fontWeight: 400,
                                gap: "8px"

                            }} key={index}>
                                <Image
                                    src={item.image}
                                    width={47}
                                    height={45} />
                                <Typography>{item.title}</Typography>
                            </Box>
                            <Box>
                                {/* <TextField
                                    type="number"
                                    label="Enter a number"
                                    onChange={handleChange}
                                // Add additional props as needed
                                /> */}
                            </Box>
                        </Box>

                    ))}
                </Box>
                <Typography sx={{
                    color: "#666666",
                    fontSize: "18px",
                    fontFamily: "Inter",
                    fontWeight: 400
                }}>
                    {addiotionalFeature}</Typography>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderRadius: "5px",
                    border: "1px #FB631C solid",
                    padding: "10px"
                }}><Image src={"assets/images/add.svg"}
                    width={20}
                    height={20}
                    /><Button sx={{
                        color: "#FB631C",
                    }}>{addAmenties}</Button></Box>
            </Box>
        </Box>

    )
}


export default PropertyFeature
