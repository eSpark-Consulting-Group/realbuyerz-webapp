'use client';
import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Heading from './Heading';
import Image from 'next/image';
import { HERO_SECTION_CONTENT } from '@/app/constants/Constants';
import LinearProgressBar from './LinearProgress';

const BrowseByCategory = ({ data }) => {
  const [hovered, setHovered] = useState(Array(data.length).fill(false));
  const handleItemHover = (index, isHovered) => {
    setHovered((prevHoveredItems) => {
      const updatedHoveredItems = [...prevHoveredItems];
      updatedHoveredItems[index] = isHovered;
      return updatedHoveredItems;
    });
  };
  return (
    <Container sx={{ pt: '90px', textAlign: 'center' }}>
      <Heading
        heading={HERO_SECTION_CONTENT.browseCategory}
        paragraph={HERO_SECTION_CONTENT.propertiesCategory}
      />
      <Box
        sx={{
          background: '#F5F6FB',
          my: '20px',
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          {data?.map((category, index) => (
            <Grid
              item
              key={category?.id}
              sx={{
                p: '20px',
                my: '15px',
                background: '#FFF',
                border: '2px solid #fff',
                position: 'relative',
              }}
              onMouseEnter={() => handleItemHover(index, true)}
              onMouseLeave={() => handleItemHover(index, false)}
            >
              <LinearProgressBar position="top" hovered={hovered[index]} />
              <LinearProgressBar position="bottom" hovered={hovered[index]} />
              <LinearProgressBar position="left" hovered={hovered[index]} />
              <LinearProgressBar position="right" hovered={hovered[index]} />
              <Box
                sx={{
                  background: '#fff',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  maxWidth: '100px',
                }}
              >
                <Link href={`/category/${category?.id}`}>
                  <Image
                    src={category?.image}
                    alt={category?.name}
                    height={30}
                    width={30}
                  />
                </Link>
                <Typography
                  variant="body1"
                  sx={{
                    py: '8px',
                    px: '15px',
                  }}
                >
                  {' '}
                  {category?.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default BrowseByCategory;
