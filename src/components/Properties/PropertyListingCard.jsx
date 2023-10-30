'use client';
import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Pagination } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  section: {
    margin: '20px 0',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    '@media (min-width: 600px)': {
      width: 360,
      height: 360,
    },
  },
};

function PropertyListingCard({ data }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <>
      {currentItems?.map((property, index) => (
        <Grid
          key={index}
          container
          justifyContent="center"
          sx={{
            my: '30px',
            display: 'flex',
            flexDirection: 'row',
            borderRadius: '5px',
            border: '1px #E4E4E4 solid',
            background: '#F5F6FB',
            '@media (max-width: 768px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                m: '20px 20px 20px 20px',
                borderRadius: '5px ',
                height: '85%',
                width: '90%',
                position: 'relative',
              }}
            >
              <Image
                src={property.imageUrl}
                layout="fill"
                objectFit="cover"
                style={styles.image}
                sx={{
                  borderRadius: '5px ',
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            style={styles.section}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pr: '76px',
              pl: '20px',
            }}
          >
            <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <Typography
                // variant="secondary"
                sx={{ fontSize: '20px', fontWeight: '500' }}
              >
                PKR
              </Typography>
              <Typography
                // variant="h3"
                sx={{ fontSize: '25px', fontWeight: '600' }}
              >
                {property.price}
              </Typography>
            </Box>
            <Typography
              // variant="secondary"
              sx={{ fontSize: '16px', fontWeight: '400', pt: '30px' }}
            >
              {property.location}
            </Typography>
            <Typography
              // variant="secondary"
              sx={{ fontSize: '16px', fontWeight: '600', pt: '15px' }}
            >
              {property.area} sqft
            </Typography>
            <Typography
              // variant="h3"
              sx={{ fontSize: '18px', fontWeight: '600', pt: '15px' }}
            >
              {property.direction}
            </Typography>
            <Typography
              // variant="secondary"
              sx={{ fontSize: '16px', fontWeight: '400' }}
            >
              {property.description}
            </Typography>

            <div className="posted-1-day-ago">
              <Typography
                // variant="body2"
                sx={{ fontSize: '16px', fontWeight: '400', pt: '15px' }}
              >
                Posted {property.postedDate}
              </Typography>
            </div>
            <Box
              container
              spacing={2}
              style={styles.section}
              gap={'20px'}
              sx={{ display: 'flex' }}
            >
              <Box className="view-more">
                <Link href={`/property/${property.id}`}>
                  <Button variant="primary">
                    <Typography variant="secondary">View More</Typography>
                  </Button>
                </Link>
              </Box>
              <Box className="agent-profile">
                <Link href={`/property/${property.agentName}`}>
                  <Button variant="primary">
                    <Typography variant="secondary">Agent Profile</Typography>
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          siblingCount={1}
          boundaryCount={1}
          // showFirstButton
          // showLastButton
          color="primary"
        />
      </Box>
    </>
  );
}

export default PropertyListingCard;
