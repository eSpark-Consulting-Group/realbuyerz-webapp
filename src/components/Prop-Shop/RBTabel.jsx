'use client';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PackageBox from './PackageBox';
import PriceBox from './PriceBox';
import SubscriptionHeader from './SubscriptionHeader';

export default function BasicTable({ columns, rows }) {
  return (
    <TableContainer TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              width: '100%',
              backgroundColor: '#EDF7FF',
            }}
          >
            {columns?.map((cell, i) => (
              <TableCell
                sx={{
                  width: { xs: '100%', md: '50%' },
                  padding: '13px !important',
                  border: 0,
                }}
                key={i}
              >
                <SubscriptionHeader headerName={cell?.headerName} />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row.name}
              // sx={{ flexDirection: { xs: 'column', md: 'row' } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  border: 0,
                  // width: { xs: '100%', md: '40%' },
                  px: 4,
                  py: 3,
                }}
              >
                <PackageBox
                  icon={row?.icon}
                  text={row?.text}
                  discription={row?.discription}
                />
              </TableCell>
              <TableCell
                sx={{
                  border: 0,
                  // width: { xs: '100%', md: '40%' },
                  px: 4,
                  py: 2,
                }}
              >
                <PriceBox price={row?.price} buttonText={row?.buttonText} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
