"use client"
import React from "react";
import {
    Typography,
    Button,
    Avatar,
    Grid,
    Box
} from "@mui/material";
import Image from "next/image";
import { agentProfile } from "./constaints";
const ProfileAgent = () => {
    const handleClick = () => {
        console.log("hello")
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={11}>
                <Box
                    sx={{
                        maxWidth: {
                            xs: "270px",
                            sm: "400px",
                            lg: "400px",
                        },
                        height: 500,
                        background: "white",
                        borderRadius: 8,
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "left",
                        padding: 3,
                        gap: 2,
                        marginTop: "20px",
                        mx: { xs: "auto", md: "0px" }

                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 27,
                            fontWeight: 700,
                            fontFamily: "Inter",
                            color: "zinc",
                            wordBreak: "break-word"
                        }}
                    >PKR  {agentProfile.price}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 16,
                            fontWeight: 400,
                            fontFamily: "Inter",
                            color: "zinc",
                        }}
                    >
                        Reach out to us:
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "60px",
                            fontSize: "25px",
                            fontWeight: 500,
                            gap: "10px",
                            color: "white",
                            background: theme => theme.palette.primary.main,
                            borderRadius: 2,
                            fontFamily: "Inter"
                        }}
                    >
                        <Image src="assets/images/msgicon.svg" width={28} height={20} />
                        Message

                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            height: 195,
                            background: "white",
                            borderRadius: 2,
                            border: "1px solid #e0e0e0",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 2,
                            }}
                        >
                            <Avatar src={agentProfile.avartar} sx={{ width: 100, height: 100 }} />
                            <Typography
                                sx={{
                                    ml: 2,
                                    fontSize: 25,
                                    fontWeight: 600,
                                    fontFamily: "Inter",
                                    color: "#333",
                                }}
                            >
                                {agentProfile.name}
                            </Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", background: "#F5F6FB" }}>
                            <Button
                                sx={{
                                    width: "100%",
                                    fontSize: 20,
                                    background: "#F5F6FB",
                                    fontWeight: 500,
                                    fontFamily: "Inter",
                                    color: "#515151",
                                    textTransform: "capitalize",
                                    "&:hover": {
                                        background: "#F5F6FB",
                                    }
                                }}
                                onClick={handleClick}
                            >
                                View Agent Profile
                            </Button>
                        </Box>
                    </Box>
                    <Typography
                        sx={{
                            width: "100%",
                            fontFamily: "Inter",
                            color: "zinc",
                            fontSize: 16,
                            fontWeight: 400,
                            textAlign: "start",
                        }}
                    >
                        {agentProfile.description}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};
export default ProfileAgent;
