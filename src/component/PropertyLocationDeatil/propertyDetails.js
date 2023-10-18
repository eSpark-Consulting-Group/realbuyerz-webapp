"use client"
import {
    Box
} from '@material-ui/core';
import React from 'react';
import Styles from "./property.module.css";
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Typography,
} from '@material-ui/core';
import { PropertyDetails } from './constaint';
const PropertyLocation = () => {
    // const TableCell = ["Type", "Location", "Price", "Purpose", "Bedroom", "Bath", "Parking"]
    return (
        <>
            <Box
                sx={{
                    display: "flex",

                }}
            >
                <Typography
                    sx={{

                        color: "green",
                        fontSize: "18px",
                        fontFamily: "monospace",
                        fontWeight: 800,
                    }}
                >
                    Overview</Typography>
            </Box>
            <Table
                style={{
                    width: "300px"

                }}
            >
                <TableHead>
                    <TableRow style={{
                        background: "gray",
                        borderRadius: "15px"
                    }}>
                        <TableCell>
                            <Typography className={Styles.headerText}>Type</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={Styles.headerText}>Location</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={Styles.headerText}>Price</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={Styles.headerText}>Purpose</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={Styles.headerText}>Bedroom</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={Styles.headerText}>Bath</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={Styles.headerText}>Parking</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{PropertyDetails.type}</TableCell>
                        <TableCell>Data 2</TableCell>
                        <TableCell>Data 3</TableCell>
                        <TableCell>Data 4</TableCell>
                        <TableCell>Data 5</TableCell>
                        <TableCell>Data 6</TableCell>
                        <TableCell>Data 7</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
};
export default PropertyLocation;
