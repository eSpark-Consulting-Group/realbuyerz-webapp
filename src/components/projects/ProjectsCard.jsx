'use client';
import {
  Typography,
  Box,
  Grid,
  Pagination,
  PaginationItem,
} from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

const itemsPerPage = 9;

const ProjectsCard = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProjects = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Grid
        container
        sx={{ display: 'flex', justifyContent: 'space-between', gap: 'auto' }}
      >
        {visibleProjects.map((project) => (
          <Grid
            key={project.id}
            item
            xs={3.8}
            my={'20px'}
            sx={{
              backgroundColor: '#fff',
              border: '1px solid #E4E4E4',
            }}
          >
            <Link href={`/projects/${project.id}`}>
              <img
                src={project.image}
                height={'auto'}
                width={'100%'}
                alt={`Project ${project.id}`}
              />
            </Link>
            <Box sx={{ p: '20px' }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: '20px' }}>
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: 500,
                    lineHeight: '24px',
                    pr: '5px',
                  }}
                >
                  PKR
                </Typography>
                <Typography
                  sx={{
                    fontSize: '25px',
                    fontWeight: 600,
                    lineHeight: '30px',
                  }}
                >
                  {project.price}
                </Typography>
              </Box>
              <Link href={`/projects/${project.id}`}>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '20px',
                    pb: '15px',
                    textWrap: 'wrap',
                  }}
                >
                  {project.location}
                </Typography>
              </Link>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '20px',
                  pb: '15px',
                }}
              >
                {project.size}
              </Typography>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 600,
                  lineHeight: '21px',
                  pb: '15px',
                }}
              >
                {project.orientation}
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '25px',
                }}
              >
                {project.description.length > 200
                  ? `${project.description.slice(0, 200)}...`
                  : project.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      {data?.length > itemsPerPage && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChangePage}
            color="primary"
            size="medium"
            sx={{ '& .MuiPaginationItem-root': { borderRadius: '10px' } }}
            renderItem={(item) => (
              <PaginationItem
                key={item.page}
                {...item}
                sx={{
                  borderRadius: '10px',
                  color: 'primary.main',
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                  },
                }}
              />
            )}
          />
        </Box>
      )}
    </>
  );
};

export default ProjectsCard;
