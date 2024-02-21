import Button from "@mui/material/Button";

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
    function delUsuario(id) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "id": id
        });

        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://www.melivecode.com/api/users/delete", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

    return (
        <TableContainer sx={{display:'flex', flexDirection:'column', alignItems:'center', marginTop: '10px'}} component={Paper}>
            <Typography sx={{flex: '1 1 100%', color: 'primary.main', p: '10px'}} variant="h6" id="tableTitle" component="div">
                USUAIROS
            </Typography>
            <Table sx={{width:'90%' ,p:'30px', marginBottom:'10px'}} component={Paper} aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Imagen</TableCell>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Apellidos</TableCell>
                        <TableCell align="right">Nombre de usuario</TableCell>
                        <TableCell align="right">Accion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row"> {row.id}</TableCell>
                            <TableCell align="right"><IMG src={row.avatar} /></TableCell>
                            <TableCell align="right">{row.fname}</TableCell>
                            <TableCell align="right">{row.lname}</TableCell>
                            <TableCell align="right">{row.username}</TableCell>
                            <TableCell align="right">
                                <Button variant="outlined" size="small" onClick={() => {window.location.href=`/editarUsuario/${row.id}`}}>Editar</Button>
                                <Button variant="outlined" size="small" onClick={() =>{delUsuario(row.id)}}>Eliminar</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}