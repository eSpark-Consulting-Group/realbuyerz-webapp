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
  Grid,
  Paper,
  TableContainer, useMediaQuery
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles/';
import { PropertyDetails } from './constaint';
const useStyles = makeStyles({
  root: {
    // "&.MuiTableHead - root": {

    color: "white",
    background: 'black',
    borderRadius: 30,
    borderColor: "green",
    marginBottom: "10px",
    padding: '0 30px',

  },
  class: "MuiTableHead-root makeStyles-root-1 css-15wwp11-MuiTableHead-root"

});
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
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: "80%", md: "90%" },
          gap: '9px',
          marginRight: { xs: "50px", md: "50px" },
        }}
      >
        <Typography sx={{ fontFamily: "Inter", fontWeight: 600 }} variant='h3'>
          Overview
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            justifyContent: { xs: "center", md: "none" },
            overflow: isSmallScreen ? 'auto' : 'hidden',
            borderSpacing: "10px",
          }}
        >
          <Table sx={{
            borderRadius: "20px"

          }}>

            <TableHead
              className={classes.root}
            >
              <TableRow
                sx={{
                  gap: "10px"

                }}
              >
                {tableData.map((item, index) => (
                  <TableCell key={index} sx={{ borderCollapse: "collapse", color: "white" }}>
                    {item.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody >
              <TableRow >
                {tableData.map((item, index) => (
                  <TableCell key={index} sx={{ background: "#F8F8F8", border: "1px solid #B8B8B8", marginBottom: "20px" }}>
                    {PropertyDetails[item.label.toLowerCase()]}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
export default PropertyLocation;

