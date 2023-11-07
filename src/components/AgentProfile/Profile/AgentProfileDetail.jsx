import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

// import { locationIcon, rentIcon, salesIcon } from '@/app/constents/AgentProfile';

const AgentProfileDetail = ({ title, description, data }) => {
  return (
    <Grid
      item
      xs={11}
      sm={12}
      md={6}
      sx={{
        display: 'flex',
        width: '100%',
        mx: { xs: 'auto', sm: 0 },
        justifyContent: { xs: 'center', sm: 'start' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginLeft: { xs: 0, sm: '50px' },
          my: { xs: 2 },
          alignItems: { xs: 'center', sm: 'start' },
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', color: '#1176AD', mt: 2 }}
        >
          {title}
        </Typography>
        {description?.map((item, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {item?.icon && (
              <Box sx={{ mr: 1, mt: 1 }}>
                <Image
                  src={item?.icon}
                  width={15}
                  height={15}
                  alt={item?.alt}
                />
              </Box>
            )}
            <Typography
              variant="body1"
              sx={{
                color: '#777777',
                fontWeight: 'medium',
                marginTop: 1,
              }}
            >
              {item?.text}
              {item?.email}
            </Typography>
          </Box>
        ))}
      </Box>
    </Grid>
  );
};

export default AgentProfileDetail;
