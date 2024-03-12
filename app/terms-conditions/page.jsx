'use client';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Page = () => {
  const terms = useSelector((state) => state?.terms?.TERM_CONDITIONS);
  const [selectedTab, setSelectedTab] = useState(terms.content[0]);
  const handleTabClick = (tabId) => {
    const selectedTab = terms?.content?.find((tab) => tab?.id === tabId);
    if (selectedTab) {
      setSelectedTab(selectedTab);
    }
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
        {terms?.title}
      </Typography>
      <Grid container sx={{ display: 'flex', gap: '30px' }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
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
            {terms.content?.map((item) => (
              <Box
                key={item?.id}
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
                  borderRadius: '50px',
                  backgroundColor: selectedTab === item ? '#FFEEE7' : 'inherit',
                  padding: '10px',
                  px: '20px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onClick={() => handleTabClick(item?.id)}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: '#333',
                    fontSize: '16px',
                    fontWeight: '600',
                    '@media (min-width": 280px) and (max-width: 480px)': {
                      marginBottom: '20px',
                    },
                  }}
                >
                  {item?.tabName}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={8.2}
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
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                pb: '40px',
              }}
            >
              {selectedTab?.title}
            </Typography>

            <p
              variant="body1"
              sx={{
                color: '#333',
                fontSize: '14px',
                fontWeight: '400',
              }}
              dangerouslySetInnerHTML={{ __html: selectedTab?.content }}
            ></p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
