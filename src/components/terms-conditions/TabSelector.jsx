import React from 'react';
import { Box, Typography } from '@mui/material';

const TabSelector = ({ terms, selectedTab, handleTabClick }) => {
  return (
    <Box
      sx={{
        borderRadius: '20px',
        border: '1px solid #E4E4E4',
        background: '#FFF',
      }}
    >
      <Box
        sx={{
          px: { xs: '20px', md: '30px' },
          py: { xs: '40px', md: '60px' },
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
                fontSize: { xs: '12px', md: '14px', lg: '16px' },
                fontWeight: '600',
              }}
            >
              {item?.tabName}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TabSelector;
