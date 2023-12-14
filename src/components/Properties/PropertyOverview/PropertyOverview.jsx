'use client';
import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Paper,
  TableContainer,
} from '@mui/material';

import { PROPERTY_ESTATE } from '@/app/constants/Properties';

const PropertyOverview = ({ propertyData, overview }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100%', md: '100%' },
          gap: '9px',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '15px', md: '30px' },
            fontWeight: 600,
            marginLeft: '10px',
          }}
        >
          {overview}
        </Typography>
        <Box
          sx={{
            border: '2px solid #F8F8F8',
            borderTop: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            height: '170px',
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              justifyContent: { xs: 'center', md: 'none' },
              overflow: 'auto',
              maxHeight: '300px',
              borderSpacing: '10px',
              borderRadius: '50px',
              px: '20px',
              backgroundColor: '#000',
              marginBottom: '10px',
            }}
          >
            <Table>
              <TableBody>
                <TableRow sx={{}}>
                  {PROPERTY_ESTATE?.propertyAttributes?.map(
                    (propertytype, index) => (
                      <TableCell
                        key={index}
                        sx={{
                          borderCollapse: 'collapse',
                          color: 'white',
                          backgroundColor: 'black',
                          overflow: 'hidden',
                        }}
                      >
                        {propertytype?.label}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer
            component={Paper}
            sx={{
              justifyContent: { xs: 'center', md: 'none' },
              overflow: 'auto',
              maxHeight: '300px',
              borderSpacing: '10px',
            }}
          >
            <Table
              sx={{
                borderRadius: '20px',
              }}
            >
              <TableBody>
                <TableRow>
                  {Object.keys(propertyData?.propertyOverview).map(
                    (key, index) => (
                      <TableCell
                        key={index}
                        sx={{
                          background: '#F8F8F8',
                          border: '1px solid #B8B8B8',
                          marginBottom: '20px',
                          padding: '20px',
                        }}
                      >
                        {propertyData?.propertyOverview[key]}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};
export default PropertyOverview;
