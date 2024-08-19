import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const PropertyCardSaleBody = ({ sellData, link }) => {
  return (
    <Grid container spacing={1} pb={4}>
      {['Houses', 'Commercials', 'Plots'].map((propertyType, index) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
          <Box
            sx={{
              width: '100%',
              height: 80,
              maxWidth: 'sm',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              borderColor: '#E5E7EB',
              borderWidth: 1,
              position: 'relative',
              '&:hover': {
                backgroundColor: '#FFF9F6',
                border: '1px solid #FB631C',
              },
              '&:hover .property-type-text': {
                color: '#FB631C',
                fontSize: '13px',
              },
              '&:hover .property-icon': {
                opacity: 1,
                marginLeft: '10px',
              },
            }}
          >
            <Box>
              <Link href={`${link}/${propertyType.toLowerCase()}`}>
                <Typography
                  sx={{
                    color: '#126FAA',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    textAlign: 'center',
                  }}
                >
                  {sellData[index]}
                </Typography>
              </Link>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '-10px',
                }}
              >
                <ArrowOutwardIcon
                  sx={{
                    fontSize: '16px',
                    color: '#FB631C',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                  className="property-icon"
                />
                <Link href={`${link}/${propertyType.toLowerCase()}`}>
                  <Typography
                    sx={{
                      color: '#777',
                      fontSize: '12px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                      marginRight: '8px',
                    }}
                    className="property-type-text"
                  >
                    {propertyType}
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyCardSaleBody;
