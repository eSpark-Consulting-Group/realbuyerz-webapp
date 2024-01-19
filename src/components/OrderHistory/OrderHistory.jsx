import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { SpaceRow } from './SpaceRow';

const OrderHistory = ({ history }) => {
    const { tableHead, tableData, space, title } = history
    return (
        <>
            <TableContainer component={Paper} sx={{ maxWidth: '1200px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <SpaceRow space={space} title={title} />
                        <SpaceRow space={space} />
                        <TableRow>
                            {tableHead?.map((item) => (
                                <TableCell>{item.name}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData?.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell sx={{ maxWidth: '130px !important' }}>{row.description}</TableCell>
                                <TableCell >{row.time}</TableCell>
                                <TableCell >{row.date}</TableCell>
                                <TableCell >{row.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default OrderHistory
