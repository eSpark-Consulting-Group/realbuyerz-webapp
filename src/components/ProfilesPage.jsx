'use client';
import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Box,
  Pagination,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProfilesPage = ({ agents }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 16;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  return (
    <Box py={'50px'}>
      <Typography
        sx={{
          fontSize: { xs: '25px', sm: '25px', md: '30px', lg: '40px' },
          color: '#333333',
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        {'Top Perfomring Agents'}
      </Typography>
      <Grid container spacing={3}>
        {agents.slice(startIndex, endIndex).map((agent) => (
          <Grid key={agent.id} item xs={12} sm={6} md={3}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
              }}
            >
              <Box
                px={'80px'}
                pt={'30px'}
                sx={{
                  backgroundImage: `url(${agent?.agency_cover || '/images/default/default_project_image.jpg'})`,
                  backgroundPosition: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  height="100px"
                  image={agent?.profile_image}
                  alt={`${agent?.first_name} ${agent?.last_name}`}
                  sx={{ marginBottom: '-25px' }} // Adjust the negative margin value as needed
                />
              </Box>
              <Box p={2}>
                <Box sx={{ flex: '1 0 auto', py: 2 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    {agent?.first_name} {agent?.last_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    {agent?.business_name || `${agent?.first_name}'s Agency`}
                  </Typography>
                  <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant="h6" color="text.secondary">
                      Properties Details:
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {agent?.counts.totalCount}
                    </Typography>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </Box>
                  <Grid container display={'flex'}>
                    <Grid item xs={6}>
                      <Typography variant="h6" color="text.secondary">
                        for Sell: {agent?.counts.rentCount.total}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Houses: {agent?.counts.rentCount.Houses}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Plots:{agent?.counts.rentCount.Plots}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Commercials:{agent?.counts.rentCount.Commercials}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" color="text.secondary">
                        for Sell: {agent?.counts.sellCount.total}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Houses: {agent?.counts.sellCount.Houses}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Plots:{agent?.counts.sellCount.Plots}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Commercials:{agent?.counts.sellCount.Commercials}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Grid
                  container
                  justifyContent="space-between"
                  display={'flex'}
                  gap={'10px'}
                >
                  <Button variant="primary" color="primary" fullWidth>
                    Chat
                  </Button>
                  <Button variant="outlined" color="primary" fullWidth>
                    Profile Link
                  </Button>
                </Grid>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box mt={3} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(agents.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default ProfilesPage;
