import Button from "@mui/material/Button"

const IMG= styled.img`
    display: block;
    width: 120px;
`

import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from "@mui/material/Typography"
import styled from '@emotion/styled'
import Modal from '@mui/material/Modal'
import {useState} from 'react'
import {Box, Divider, TextField} from "@mui/material"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Tabla({rows}) {
    const [open, setOpen] = useState(false);

    const [id, setId] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState('')

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)



    function editarUsuario(id) {
        fetch(`https://www.melivecode.com/api/users/${id}`)
            .then(response => response.json())
            .then(data => {
                data = data.user
                setId(data.id)
                setFname(data.fname)
                setLname(data.lname)
                setUsername(data.username)
                setEmail(data.email)
                setAvatar(data.avatar)
            });

        handleOpen()
    }

    function crearUsuario() {
        setId('')
        setFname('')
        setLname('')
        setUsername('')
        setEmail('')
        setAvatar('')

        handleOpen()
    }

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

    function fechEditarUsuario(event) {
        event.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "id": id,
            "fname": fname,
            "lname": lname,
            "username": username,
            "email": email,
            "avatar": avatar
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://www.melivecode.com/api/users/update", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result)
                {window.location.href=`/`}
            })
            .catch((error) => console.error(error));
        handleClose()
    }

    function fechCrearUsuario() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "fname": fname,
            "lname": lname,
            "username": username,
            "email": email,
            "avatar": avatar
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://www.melivecode.com/api/users/create", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result)
                {window.location.href=`/`}

            })
            .catch((error) => console.error(error));
    }

    return (
        <TableContainer sx={{display:'flex', flexDirection:'column', alignItems:'center', marginTop: '10px'}} component={Paper}>
            <Modal open={open}>
                <Box sx={{ width: 400, margin:'auto', marginTop:'40px', background:'white', p:'3px' }}>
                    <Typography variant="h5" gutterBottom>
                        {id === '' ? 'Datos del nuevo usuario' : 'Editar Usuario'}
                    <IconButton aria-label="close" onClick={handleClose} sx={{color: (theme) => theme.palette.grey[500]}}>
                        <CloseIcon />
                    </IconButton>
                    </Typography>
                    <Divider />
                    <Box sx={{ padding: "20px" }}>
                        <TextField id="nombre" label="Nombre" variant="outlined" fullWidth margin="normal" value={fname} onChange={e => setFname(e.target.value)}/>
                        <TextField id="apellido" label="Apellido" variant="outlined" fullWidth margin="normal" value={lname} onChange={e => setLname(e.target.value)}/>
                        <TextField id="usuario" label="Nombre de usuario" variant="outlined" fullWidth margin="normal" value={username} onChange={e => setUsername(e.target.value)}/>
                        <TextField id="email" label="Email" variant="outlined" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)}/>
                        <TextField id="img" label="Avatar" variant="outlined" fullWidth margin="normal" value={avatar} onChange={e => setAvatar(e.target.value)}/>
                        <Button variant="contained" fullWidth size="large" sx={{mt: 3}} onClick={id === '' ? fechCrearUsuario: fechEditarUsuario }>
                            {id === '' ? 'CREAR USUARIO' : 'Editar Usuario'}
                        </Button>
                    </Box>
                </Box>
            </Modal>

            <Typography sx={{flex: '1 1 100%', color: 'primary.main', p: '10px'}} variant="h6" id="tableTitle" component="div">
                USUAIROS

                <Button color="inherit" onClick={crearUsuario}>
                    Crear usuario
                </Button>
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
                                <Button variant="outlined" size="small" onClick={() => {editarUsuario(row.id)}}>Editar</Button>
                                <Button variant="outlined" size="small" onClick={() =>{delUsuario(row.id)}}>Eliminar</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}