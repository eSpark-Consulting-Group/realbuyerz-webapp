'use client';
import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

import Heading from './Heading';
import Image from 'next/image';
import { HERO_SECTION_CONTENT } from '@/app/constants/Constants';
import LinearProgressBar from './LinearProgress';
import Link from 'next/link';

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
    <Container
      sx={{
        pt: { xs: '40px', sm: '50px', md: '55px', lg: '90px' },
        textAlign: 'center',
      }}
    >
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
          gap={1}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            px: '40px',
            py: '7px',
          }}
        >
          {data?.map((category, index) => (
            <Grid
              item
              key={category?.id}
              sx={{
                width: '131px',
                height: '130px',
                maxWidth: '150px',
                my: '15px',
                background: '#FFF',
                border: '2px solid #fff',
                position: 'relative',
                display: 'flex',
                '@media (min-width: 1340px) and (max-width: 1920px)': {
                  p: '15px',
                },
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
                  maxWidth: '150px',
                  margin: 'auto',
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
                    color: '#838383',
                    fontSize: '14px',
                    fontWeight: 400,
                  }}
                >
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
