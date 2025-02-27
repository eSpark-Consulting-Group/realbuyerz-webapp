import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { PROPERTY_ESTATE } from '@/src/constants/Properties';
import { Box, Typography } from '@mui/material';
import TooltipText from './TooltipText';

function createData(type, location, price, purpose, bedroom, bath, parking) {
  return { type, location, price, purpose, bedroom, bath, parking };
}

const rows = [createData('Houses', 'gulshan', '1.5 Crore', 'Sell', 2, 2, 1)];

const StyledTableHeadRow = styled(TableRow)({
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '28px',
  '& th': {
    textAlign: 'center',
    color: 'white',
  },
});

const StyledTableRow = styled(TableRow)({
  backgroundColor: '#F8F8F8',
  '& td': {
    textAlign: 'center',
    padding: '16x 16px',

    borderRight: '1px solid #e0e0e0',
    borderBottom: '0px',
    '&:first-of-type': {
      borderLeft: 'none',
    },
    '&:last-child': {
      borderRight: 'none',
    },
  },
});

const PropertyOverview = ({ overview }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100%', md: '100%' },
          gap: '20px',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '18px', sm: '20px', md: '25px', lg: '30px' },
            fontWeight: 600,
            marginLeft: '10px',
          }}
        >
          {overview}
        </Typography>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 'none',
        }}
      >
        <Table
          sx={{
            minWidth: 900,
            borderCollapse: 'separate',
            borderSpacing: '0px 15px',
          }}
          aria-label="custom table"
        >
          <TableHead>
            <StyledTableHeadRow>
              {PROPERTY_ESTATE?.propertyAttributes?.map(
                (propertytype, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      borderCollapse: 'collapse',
                      color: 'white',
                      backgroundColor: 'black',
                      border: 'none',
                      width: `${100 / PROPERTY_ESTATE?.propertyAttributes?.length}%`,
                      textAlign: 'center',
                      fontSize: '15px',
                      padding: '15px',
                      px: '26px',
                      borderTopLeftRadius: index === 0 ? '28px' : '0',
                      borderBottomLeftRadius: index === 0 ? '28px' : '0',
                      borderTopRightRadius:
                        index ===
                        PROPERTY_ESTATE?.propertyAttributes?.length - 1
                          ? '28px'
                          : '0',
                      borderBottomRightRadius:
                        index ===
                        PROPERTY_ESTATE?.propertyAttributes?.length - 1
                          ? '28px'
                          : '0',
                    }}
                  >
                    {propertytype?.label}
                  </TableCell>
                )
              )}
            </StyledTableHeadRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <TableCell>
                  <TooltipText text={row?.type} maxLength={8} />
                </TableCell>
                <TableCell>
                  <TooltipText text={row?.location} maxLength={8} />
                </TableCell>
                <TableCell>
                  <TooltipText text={row?.price} maxLength={8} />
                </TableCell>
                <TableCell>
                  <TooltipText text={row?.purpose} maxLength={8} />
                </TableCell>
                <TableCell>
                  <TooltipText text={row?.bedroom} maxLength={8} />
                </TableCell>
                <TableCell>
                  <TooltipText text={row?.bath} maxLength={8} />
                </TableCell>
                <TableCell>
                  <TooltipText text={row?.parking} maxLength={8} />
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PropertyOverview;
