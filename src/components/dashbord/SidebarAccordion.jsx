'use client';
import React, { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const SidebarAccordion = ({ sidebarLinks }) => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      {sidebarLinks?.map((item, index) => (
        <div key={index}>
          <Box>
            <Accordion
              expanded={
                item.sublinks == null ? null : expanded === `panel${index + 1}`
              }
              onChange={handleChange(`panel${index + 1}`)}
              sx={{
                boxShadow: 'none !important',
                width: '100%',
                border: 0,
                '.mui-vf72v2-MuiPaper-root-MuiAccordion-root.Mui-expanded': {
                  boxShadow: 'none !important',
                  border: 0,
                },
              }}
            >
              <AccordionSummary
                expandIcon={item?.sublinks == null ? null : <ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={`panel${index + 1}a-header`}
                sx={{
                  mx: 'auto',
                  p: 1.4,
                  mb: 0,
                  minHeight: '55px',
                  gap: 2,
                  width: '95%',
                  height: '43px',
                 borderRadius: '10px',
                  backgroundColor: `${
                    item?.link == pathname ? '#FF631C33' : null
                  }`,
                }}
              >
                {item?.icon && (
                  <Image width={20} height={20} src={item?.link == pathname ? item?.active : item?.icon} alt="icon" />
                )}
                {item?.link ? ( <Link
                  style={{ width: '100%', height: '100%' }}
                  href={`${item?.link}`}
                >
                  <Typography
                     sx={{
                      width: '100%',
                      height: '100%',
                      fontSize : '17px',
                      fontWeight: 400,
                      ml: 2,
                      color: `${item?.link == pathname ? '#FB631C' : '#595959'}`,
                    }}
                  >
                    {item?.text}
                  </Typography>
                </Link>) : (<Typography
                    variant="body1"
                    sx={{
                      width: '100%',
                      height: '100%',
                       fontSize : '17px',
                      fontWeight: 400,
                      ml: 2,
                color: `${item?.link == pathname ? '#FB631C' : '#595959'}`,
                    }}
                  >
                    {item?.text}
                  </Typography>)}
               
              </AccordionSummary>
              {item?.sublinks &&
                item?.sublinks?.map((eachItem, index) => (
                  <div key={index}>
                    <AccordionDetails
                      key={index}
                      sx={{
                        pl: 6.5,
                        pt: 1.5,
                        pb: 1.5,
                        mb: 0.7,
                        boxShadow: 'none !important',
                        alignItems: 'center',
                        '&:hover': { backgroundColor: '#E6F5F4 !important' },
                        borderRight: `${
                          eachItem?.link == pathname
                            ? '2px solid #068987 !important'
                            : null
                        }`,
                        backgroundColor: `${
                          eachItem?.link == pathname
                            ? '#E6F5F4 !important'
                            : null
                        }`,
                      }}
                    >
                      <Link
                        style={{ width: '100%', height: '100%' }}
                        href={`${eachItem?.link}`}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            width: '100%',
                            height: '100%',
                            color: '#595959',
                          }}
                        >
                          {eachItem?.text}
                        </Typography>
                      </Link>
                    </AccordionDetails>
                  </div>
                ))}
            </Accordion>
          </Box>
        </div>
      ))}
    </div>
  );
};

export default SidebarAccordion;
