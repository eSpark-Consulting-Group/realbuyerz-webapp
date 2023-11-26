import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Pagination,
  Divider,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

// import { PROPERTY_STATS } from '@/app/constants/Proposals';

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

const ProposalListingCard = ({ proposalsData }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = proposalsData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      {currentItems?.map((proposal, index) => (
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
                m: '20px',
                borderRadius: '5px ',
                height: '85%',
                width: '90%',
                position: 'relative',
              }}
            >
              <Image
                src={proposal.imageUrl}
                layout="fill"
                objectFit="cover"
                style={styles.image}
                alt=""
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
              pr: '30px',
              pl: '20px',
            }}
          >
            <Grid container sx={{}}>
              <Grid
                item
                xs={9}
                sx={{ display: 'flex', gap: '5px', justifyContent: 'center' }}
              >
                <Typography
                  sx={{
                    fontSize: '25px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                  }}
                >
                  {proposal.title}
                </Typography>
              </Grid>
              <Grid item xs={3} textAlign={'right'}>
                <Link href={`./proposals/${proposal.id}`}>
                  <Button variant="primary">
                    <Typography variant="secondary">
                      Restore Property
                    </Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Divider sx={{ py: '5px' }} />
            <Grid container>
              <Grid item xs={10} sx={{ gap: '5px', alignItems: 'center' }}>
                {/* {PROPERTY_STATS?.map((propertyStats) => (
                  <Box
                    key={propertyStats.value}
                    sx={{
                      display: 'flex',
                      fontSize: '16px',
                      pt: '10px',
                      gap: '5px',
                    }}
                  >
                    <Typography sx={{ fontWeight: '500' }}>
                      {propertyStats.title}:
                    </Typography>
                    <Typography sx={{ color: '#126FAA', fontWeight: '500' }}>
                      {proposal[propertyStats.value]}
                    </Typography>
                  </Box>
                ))} */}
              </Grid>
              <Grid item xs={2} sx={{ justifyContent: 'center' }}>
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    fontSize: '16px',
                    pt: '10px',
                    gap: '5px',
                  }}
                >
                  <Typography sx={{ fontWeight: '500' }}>Amount:</Typography>
                  <Typography sx={{ color: '#126FAA', fontWeight: '500' }}>
                    {proposal.amount}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ pt: '5px' }}></Box>
            {/* Direction */}
            <Typography
              sx={{ fontSize: '18px', fontWeight: '600', pt: '15px' }}
            >
              {proposal.direction}
            </Typography>
            {/* Description */}
            <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>
              {proposal.description}
            </Typography>
          </Grid>
        </Grid>
      ))}

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={Math.ceil(proposalsData.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          siblingCount={1}
          boundaryCount={1}
          color="primary"
        />
      </Box>
    </>
  );
};

export default ProposalListingCard;
