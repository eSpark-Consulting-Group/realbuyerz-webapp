'use client';
import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { TERM_CONDOTIONS } from '../constants/TermCondition';

const TermsConditions = () => {
  const [selectedTab, setSelectedTab] = useState(TERM_CONDOTIONS[0]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <Box
      sx={{
        background: '#FFF',
        border: '2px solid #E4E4E4',
        px: '40px',
        py: '60px',
        my: '40px',
        borderRadius: '20px',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: ' #FB631C',
          fontSize: '30px',
          fontWeight: '600',
          textAlign: 'center',
          pb: '60px',
        }}
      >
        Terms and Conditions
      </Typography>
      <Grid container sx={{ display: 'flex', gap: '30px' }}>
        <Grid
          item
          xs={3}
          sx={{
            borderRadius: '20px',
            border: '1px solid #E4E4E4',
            background: '#FFF',
          }}
        >
          <Box
            sx={{
              px: '30px',
              py: '60px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {TERM_CONDOTIONS?.map((item) => (
              <Box
                key={item.id}
                variant={'outland'}
                sx={{
                  mx: 'auto',
                  width: '100%',
                  height: '50px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#FFEEE7',
                    borderRadius: '50px',
                  },
                  borderRadius: '5px',
                  padding: '10px',
                  px: '20px',
                  display: 'flex', // Add display flex
                  alignItems: 'center', // Center vertically
                }}
                onClick={() => handleTabClick(item)}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: '#333',
                    fontSize: '16px',
                    fontWeight: '600',
                  }}
                >
                  {item.tabName}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid
          item
          xs={8.2}
          sx={{
            borderRadius: '20px',
            border: '1px solid #E4E4E4',
            background: '#FFF',
          }}
        >
          <Box sx={{ px: '50px', py: '30px' }}>
            <Typography
              variant="body1"
              sx={{
                color: '#333',
                fontSize: '16px',
                fontWeight: '600',
                textTransform: 'uppercase',
                pb: '40px',
              }}
            >
              {selectedTab?.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#333',
                fontSize: '14px',
                fontWeight: '400',
              }}
              dangerouslySetInnerHTML={{ __html: selectedTab?.content }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TermsConditions;
