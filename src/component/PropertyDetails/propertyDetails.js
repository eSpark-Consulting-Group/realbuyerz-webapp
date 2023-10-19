"use client"
import React from 'react';
import {
    Box,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Typography,
} from "@mui/material";
import { PropertyDetails } from './constaint';
const PropertyLocation = () => {
    const tableData = [
        { label: "Type" },
        { label: "Location" },
        { label: "Price" },
        { label: "Purpose" },
        { label: "Bedroom" },
        { label: "Bath" },
        { label: "Parking" },
    ];
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    paddingRight: "80px"
                }}
            >
                <Typography
                    sx={{

                        color: "black",
                        fontSize: "18px",
                        fontFamily: "monospace",
                        fontWeight: 800,
                    }}
                >
                    Overview</Typography>

                <Table
                    style={{
                        width: "300px",
                        border: "1px solid #F8F8F8"

                    }}
                >
                    <TableHead sx={{

                        borderRadius: "30px",
                        color: "yellow",
                        fontSize: "30px",
                        fontFamily: "inherit",
                        fontWeight: "500px"
                    }}>
                        <TableRow
                            sx={{
                                color: "#fff",
                                borderRadius: "20px"
                            }}
                        >
                            {tableData.map((item, index) => (
                                <TableCell key={index}
                                    sx={{
                                        background: "black",
                                        color: "#fff",
                                    }}
                                >
                                    <Typography
                                        className={item.className}>{item.label}</Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {Object.keys(PropertyDetails).map((key) => (
                                <TableCell
                                    sx={{
                                        background: "#F8F8F8",
                                        border: "1px solid #B8B8B8"
                                    }}
                                    key={key}>
                                    {PropertyDetails[key]}
                                </TableCell>
                            )
                            )}
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
        </>
    );
};
export default PropertyLocation;
