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
    TableContainer,useMediaQuery 
} from "@mui/material";
import { useTheme, } from '@mui/material/styles';
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
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (

<>
<Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width:{xs:"80%",md:"90%"},
        justifyContent:{xs:"center",md:"none"},
        gap: '8px',
        marginRight:"50px",
      }}
    >
      <Typography variant='h3'>
        Overview
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          overflow: isSmallScreen ? 'auto' : 'hidden', 
        }}
      >
        <Table>
          <TableHead sx={{
            borderRadius: "50px",
            background: 'black',
          }}>
            <TableRow>
              {tableData.map((item, index) => (
                <TableCell key={index} sx={{ color: "white" }}>
                  {item.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
            <TableRow sx={{
            gap: "10px",
          }}>
              {tableData.map((item, index) => (
                <TableCell key={index} sx={{ background: "#F8F8F8", border: "1px solid #B8B8B8" }}>
                  {PropertyDetails[item.label.toLowerCase()]}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
            {/* <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    paddingRight: "80px",
                    width:"100%"
                }}
            >
                <Typography variant='h2'
                >
                    Overview</Typography>
        
             <Box
      sx={{
        // width: "700px",
        height: 200,
        position: 'relative',
        background: 'white',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        overflow: 'hidden',
        border: '1px #E4E4E4 solid',
        flexDirection: 'column',
        display: 'inline-flex',
        overflow: isSmallScreen ? 'auto' : 'hidden',  // Add overflow property

      }}
    >
    <Box sx={{
      width:"700px",
      height: 70,
      background: '#121212',
      borderRadius: 50,
      alignItems: 'center',

      }}>
       {tableData.map((item, index) => (
        <Typography variant='h5'
          key={index}
          sx={{
            left: 100 * index, // Adjust the left position as needed
            top: 20,
            marginLeft:"7px",
            position: 'absolute',
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Inter',
           
          }}
        >
          {item.label}
        </Typography>
    
       ))}
    </Box>
<Box
sx={{
    paddingTop:"30px",
    paddingLeft:"30px",
    display:"flex"
}}
>
{Object.keys(PropertyDetails).map((key, index) => (
        <Box
          key={index}
          sx={{
            width: '90px',
            height: '70px',
            background: '#F8F8F8',
            // display:"inline-flex",
            // flexDirection:"row",
            padding:"10px",
            border: '1px #E4E4E4 solid'
          }}
        >
          <Typography variant='body1'>{PropertyDetails[key]}</Typography>
        </Box>
      ))}
</Box>
    
    </Box>
            </Box> */}
        </>
    );
};
export default PropertyLocation;

