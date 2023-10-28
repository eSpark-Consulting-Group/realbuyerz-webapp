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
  Paper,
  TableContainer, useMediaQuery
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles/';

import { propertyData } from '../propertyConstants';

const useStyles = makeStyles({
  root: {
    color: "white",
    background: 'black',
    borderRadius: 30,
    borderColor: "green",
    marginBottom: "10px",
    padding: '0 30px',

  }
});
const PropertyOverview = () => {
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
        <Typography sx={{  fontWeight: 600 }} variant='h3'>
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
                {propertyData.propertyAttributes.map((propertytype, index) => (
                  <TableCell key={index} sx={{ borderCollapse: "collapse", color: "white" }}>
                    {propertytype.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody >
              <TableRow >
                {Object.keys(propertyData.PropertyDetails).map((key, index) => (
                  <TableCell key={index} sx={{ background: "#F8F8F8", border: "1px solid #B8B8B8", marginBottom: "20px" }}>
                    {propertyData.PropertyDetails[key]}
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
export default PropertyOverview;

