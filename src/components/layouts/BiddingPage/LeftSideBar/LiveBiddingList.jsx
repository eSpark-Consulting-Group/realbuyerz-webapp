import { Collapse, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LiveBiddingList = ({list}) => {

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
                    width: "100%",
                    borderRadius: "15px",
                    display: "flex",
                    padding: "10px",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.icons}
                    <Typography
  
                      sx={{
                        color: "#000",
                        fontSize: "16px",
                        fontWeight: "500",
                        px: "20px",
                      }}
                    >
                      {item.itemName}
                    </Typography>
                  </Box>
                  {item.accordianIcon && (
                    <IconButton onClick={() => toggleCollapse(item.id)}>
                      <ExpandMoreIcon />
                    </IconButton>
                  )}
                </Box>
                <Collapse in={isItemOpen}>
                  {item.actions && item.actions.length > 0 && (
                    <Box sx={{
                      paddingLeft: '30px',
                      marginLeft: "30px",
                    }}>
                      <ul>
                        {item.actions.map((action, index) => (
                        <li style={{
                          fontWeight: '500',
                          fontSize: '14px',
                      paddingBottom: "10px"
                        }}>
                            <a href={action.link}>{action.title}</a>
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
    )
  
}

export default LiveBiddingList  