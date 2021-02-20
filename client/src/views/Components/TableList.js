import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function TableList({container,columns,rows,rowsPerPage,page}){
    return(
        <TableContainer className={container}>
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
            <TableRow>
                {columns.map((column) => (
                <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                >
                    {column.label}
                </TableCell>
                ))}
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                    const value = row[column.id];
                    return (
                        <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                    );
                    })}
                </TableRow>
                );
            })}
            </TableBody>
        </Table>
        </TableContainer>
    );
}