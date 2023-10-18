"use client"
import React from "react";
import Styles from "./profile.module.css";
import {
    Typography,
    Button,
    Avatar,
    Box
} from '@material-ui/core';
import { agentProfile } from "./constaints";
const ProfileAgent = ({ price, agentName, avatarSrc, description }) => {
    const handleClick = () => {
        console.log("hello")
    }
    return (
        <Box className={Styles.container}>
            <Typography className={Styles.price}>PKR {agentProfile.price}</Typography>
            <Typography className={Styles.contact}>Reach out to us:</Typography>
            <Box className={Styles.buttonContainer}>
                <Box className={Styles.buttonBackground} />
                <Button className={Styles.button}>Message</Button>
            </Box>
            <Box className={Styles.secondcontainer}>
                <Typography className={Styles.agentName}>{agentProfile.name}</Typography>

                <Box className={Styles.avatarContainer}>
                    <Box className={Styles.avatarBackground}>
                        <Avatar src="assets/images/avatar.svg" className={Styles.avatarImage}{...agentProfile.avartar} />
                    </Box>
                </Box>
                <Box className={Styles.buttonContainers}>
                    <Button onClick={handleClick} className={Styles.buttonLabel}>View Agent Profile</Button>
                </Box>
            </Box>
            <Typography className={Styles.description}>{agentProfile.description}</Typography>
        </Box>
    );
};
export default ProfileAgent;
