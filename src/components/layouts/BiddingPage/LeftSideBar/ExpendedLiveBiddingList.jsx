import React, { useState } from 'react';
import { Box, Collapse, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Image from 'next/image';

const ExpendedLiveBiddingList = ({ list }) => {
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
      {list?.map((item) => {
        const isItemOpen = item.id === openItemId;
        return (
          <Box key={item.id}>
            <Box
              sx={{
                width: '100%',
                maxWidth: '300px',
                borderRadius: '15px',
                display: 'flex',
                padding: '10px',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
              onClick={() => toggleCollapse(item.id)}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Image src={item.icon} width={30} height={30} alt="icons" />
                <Typography
                  sx={{
                    color: '#000',
                    fontSize: '16px',
                    fontWeight: '500',
                    px: '20px',
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
              {item.subItem && (
                <IconButton onClick={() => toggleCollapse(item.id)}>
                  {isItemOpen ? (
                    <ExpandLessIcon sx={{ color: '#000' }} />
                  ) : (
                    <ExpandMoreIcon sx={{ color: '#000' }} />
                  )}
                </IconButton>
              )}
            </Box>
            <Collapse in={isItemOpen}>
              {item.subItem && item.subItem.length > 0 && (
                <Box
                  sx={{
                    paddingLeft: '30px',
                    marginLeft: '30px',
                  }}
                >
                  <ul>
                    {item.subItem.map((item, index) => (
                      <li
                        style={{
                          fontWeight: '500',
                          fontSize: '14px',
                          paddingBottom: '10px',
                          color: '#000',
                        }}
                        key={index}
                      >
                        <a href={item.link}>{item.subTitle}</a>
                      </li>
                    ))}
                  </ul>
                </Box>
              )}
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
};

export default ExpendedLiveBiddingList;
