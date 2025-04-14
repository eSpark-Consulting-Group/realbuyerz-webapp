import React from 'react';
import PropertyCard from './PropertyCard';
import { Box, Pagination } from '@mui/material';
import Link from 'next/link';

const SeeAllCard = ({ data }) => {
  const [page, setPage] = React.useState(1);
  const cardsPerPage = 6;

  const handleChange = (event, value) => {
    event.preventDefault();
    setPage(value);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const totalPages = Math?.ceil(data?.length / cardsPerPage);

  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = data?.slice(startIndex, endIndex);

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: { xs: 'center', sm: 'left' },
          gap: 8,
        }}
      >
        {currentCards?.map((card, index) => (
          <Link href={`/projects/${card?.propertyId}`} key={index}>
            <PropertyCard item={card} />
          </Link>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          shape="rounded"
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default SeeAllCard;
