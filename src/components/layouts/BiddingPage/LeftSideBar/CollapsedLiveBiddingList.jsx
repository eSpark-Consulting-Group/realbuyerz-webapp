import React, { useState } from 'react';
import { Box, Collapse, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Image from 'next/image';

const CollapsedLiveBiddingList = ({ list }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleCollapse = (itemId) => {
    if (itemId === openItemId) {
      setOpenItemId(null);
    } else {
      setOpenItemId(itemId);
    }
  };

  return (
    <Box>
      {list.map((item) => {
        const isItemOpen = item.id === openItemId;

        return (
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
        );
      })}
    </Box>
  );
};

export default CollapsedLiveBiddingList;
