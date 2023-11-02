import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

const CollapsedLiveBiddingList = ({ list }) => {

  return (
    <Box>
      {list.map((item) =>
      (
        <Box key={item.id}>
          <Box
            sx={{
              width: '100%',
              borderRadius: '15px',
              display: 'flex',
              padding: '10px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                src={item.icons}
                width={30}
                height={30}
                alt='icons'
              />
            </Box>
          </Box>
        </Box>
      )
      )}
    </Box>
  );
};

export default CollapsedLiveBiddingList;
