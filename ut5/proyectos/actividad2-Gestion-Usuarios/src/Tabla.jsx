const IMG= styled.img`

    display: block;
    width: 120px;
`

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import styled from '@emotion/styled'

export default function Tabla({rows}) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" color="blue" component="div">
                        USUAIROS
                    </Typography>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Imagen</TableCell>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Apellidos</TableCell>
                        <TableCell align="right">Nombre de usuario</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right"><IMG src={row.avatar} /></TableCell>
                            <TableCell align="right">{row.fname}</TableCell>
                            <TableCell align="right">{row.lname}</TableCell>
                            <TableCell align="right">{row.username}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}