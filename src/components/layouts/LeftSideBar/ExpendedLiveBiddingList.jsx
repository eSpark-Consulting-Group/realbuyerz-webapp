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
        console.log(item, 'list');
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
                '&:hover': { backgroundColor: '#FF631C33' },
              }}
              onClick={() => toggleCollapse(item.id)}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  // backgroundColor: '#FF631C33',
                }}
              >
                <Image src={item.icon} width={30} height={30} alt="icons" />
                <Typography
                  sx={{
                    color: '#000',
                    fontSize: '16px',
                    fontWeight: '500',
                    px: '19px',
                  }}
                >
                  <a href={item.link}>{item.title}</a>
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
                    // backgroundColor: '#FF631C33',
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
