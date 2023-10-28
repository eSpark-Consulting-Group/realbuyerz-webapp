import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import { PropertyInformation } from "./postlistingConstants";
import PostTitle from "./posttitle";
const PropertyGallery = () => {
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
            <PostTitle text={PropertyInformation.postTitles.text5} />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    width: '500px',
                    height: '700px',
                    backgroundImage: 'url("/assets/images/realbuyer.svg")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    mx: "auto",
                }}>
                <Box sx={{
                    display: "flex",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    fontSize: "20px",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    gap: "8px",



                }}>
                    <Image
                        src={PropertyInformation.upload.images}
                        width={47}
                        height={45} />
                    <Typography>{PropertyInformation.upload.text}</Typography>
                </Box>
                <Box sx={{ width: "100%", height: "auto", border: "1px #FB631C dotted", display: "flex", flexDirection: "row", background: "gray" }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        width: "800px",
                        alignItems: "center",
                        background: "green",
                        gap: "10px",

                    }} >
                        <Button style={{
                            color: "white",
                            fontSize: "20px",
                            backgroundColor: " #FB631C",
                            textTransform: "capitalize"

                        }}>{PropertyInformation.uploadButton.textone}</Button>
                        <Button style={{
                            color: "#FB631C",
                            fontSize: "20px",
                            backgroundColor: "white",
                            borderRadius: "10px",
                            border: "1px #FB631C solid",
                            textTransform: "capitalize"

                        }}>{PropertyInformation.uploadButton.texttwo}</Button></Box>
                    <Box> {PropertyInformation.uploadInstruction.map((item, index) => (

                        <ul key={index}>
                            <li sx={{
                                display: "flex",
                                alignSelf: "flex-start",
                                alignItems: "center",
                                fontSize: "20px",
                                fontFamily: "Inter",
                                fontWeight: 400,
                                gap: "8px"
                            }} >
                                <Image src={item.image}
                                    width={17}
                                    height={13}
                                />
                                <Typography sx={{
                                    color: "#333333",
                                }}>{item.text} </Typography>
                            </li>
                        </ul>
                    ))}</Box>
                </Box>

            </Box>
        </Box>
    )
}
export default PropertyGallery;