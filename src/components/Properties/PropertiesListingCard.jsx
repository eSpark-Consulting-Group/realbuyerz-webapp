'use client';
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

import { AMOUNT, RESTORE_PROPERTY } from '@/app/constants/Proposals';
import Location from '../PostListing/preview/Location';
import { BIDDINGS } from '@/app/constants/Biddings';
import LocationAndPurpose from '../Properties/LocationAndPurpose';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  },
  section: {
    margin: '20px 0',
  },
  image: {
    // width: '100%',
    // height: '100%',
    width: '360px',
    height: '260px',
    display:'flex',
    justifyContent:'center',
    // border:'1px solid red',
    // objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '#00000040',
    '@media (min-width: 600px)': {
      width: 360,
      height: 360,
    },
  },
};
const PropertiesListingCard = ({ proposalsData }) => {
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
      {currentItems?.map((proposal, index) => {
        console.log(proposal, 'curr')
        const imagePath = proposal?.propertyImagesAndVideos?.images[0];
        return (
          <Grid
            key={index}
            container
            justifyContent="center"
            sx={{
              border: '1px solid red',
              my: '30px',
              // height: '300px',
              display: 'flex',
              flexDirection: 'row',
              borderRadius: '20px',
              border: '1px #E4E4E4 solid',
              background: '#F5F6FB',
              '@media (max-width: 768px)': {
                flexDirection: 'column',
              },
            }}
          >
            <Grid item xs={12} md={3.5}>
              <Box
                sx={{
                  m: '20px',
                  borderRadius: '10px ',
                  height: '85%',
                  width: {xs:'auto', md:'90%'},
                  position: 'relative',
                  boxShadow: '#00000040',
                  display:'flex',
                  justifyContent:'center',

                }}
              >

                <Link href={`my-proposals/${proposal?.id}`}>
                  <Image
                    src={URL?.createObjectURL(imagePath)}
                    width={390}
                    height={250}
                    // layout="fill"
                    // objectFit="cover"
                    style={styles.image}
                    alt=""
                    sx={{
                      borderRadius: '5px'
                    }}
                  />
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={8.5}
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
                  xs={12}
                  sm={4}
                  md={9}
                  sx={{ display: 'flex', gap: '5px', justifyContent:{xs: 'center', sm:'flex-start', md:'center'} }}
                >
                  <Link href={`my-proposals/${proposal?.id}`}>
                    <Typography
                      sx={{
                        fontSize: '20px',
                        fontWeight: 700,
                        lineHeight:'24.2px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {proposal?.adInfomation?.title}
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={8} md={3}  sx={{
                  display:'flex',
                  justifyContent:{xs:'center', sm:'flex-end'}
                }}>
                  <Button variant="primary" sx={{width:'120px', height:'35px'}}>
                    <Typography variant="secondary" sx={{fontSize:'14px'}}>
                      Draft
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
              <Divider sx={{ py: '5px' }} />
              <Grid container>
                <Grid item xs={12} sm={8} md={10} sx={{ gap: '5px', alignItems: 'center' }}>
                  <LocationAndPurpose location={BIDDINGS?.location} values={proposal?.locationAndPurpose} />
                </Grid>
                <Grid item xs={12} sm={4} md={2} sx={{ justifyContent: 'center' , mb:{xs:'20px', sm:0} }}>
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      fontSize: '16px',
                      pt: '10px',
                      gap: '5px',
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: '#333',
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        fontSize: '14px',
                      }}
                    >
                      {AMOUNT}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#126FAA',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        fontSize: '14px',
                      }}
                    >
                      {proposal?.propertySizeAndPricing?.amount?.amount}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Typography sx={{ fontSize: '12px', lineHeight: '14.52px', fontWeight: 400, pr: '30px' }}>
                {proposal?.adInfomation?.description}
              </Typography>
            </Grid>
          </Grid>
        )

      })}

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={Math.ceil(proposalsData?.length / itemsPerPage)}
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

export default PropertiesListingCard;
