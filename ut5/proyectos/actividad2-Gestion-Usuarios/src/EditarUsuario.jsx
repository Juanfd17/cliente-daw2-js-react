import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Box, Button, Divider, TextField, Typography} from "@mui/material";

function EditarUsuario() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://www.melivecode.com/api/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(user);

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`https://www.melivecode.com/api/users/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.error(error));
    };

    if (!user) {
        return 'Loading...';
    }

    return (
        <div>
            <Box sx={{width: 400, margin: 'auto', marginTop: '40px'}}>
                <Typography variant="h5" gutterBottom>
                    Datos del usuario a editar
                </Typography>
                <Divider/>
                <Box sx={{padding: "20px"}}>
                    <TextField id="nombre" label="Nombre" variant="outlined" fullWidth margin="normal" value={user.fname} onChange={e => setUser({...user, fname: e.target.value})}/>
                    <TextField id="apellido" label="Apellido" variant="outlined" fullWidth margin="normal" value={user.lname} onChange={e => setUser({...user, lname: e.target.value})}/>
                    <TextField id="usuario" label="Nombre de usuario" variant="outlined" fullWidth margin="normal" value={user.username} onChange={e => setUser({...user, username: e.target.value})}/>
                    <TextField id="email" label="Email" variant="outlined" fullWidth margin="normal" value={user.email} onChange={e => setUser({...user, email: e.target.value})}/>
                    <TextField id="img" label="Avatar" variant="outlined" fullWidth margin="normal" value={user.avatar} onChange={e => setUser({...user, avatar: e.target.value})}/>
                    <Button variant="contained" fullWidth size="large" sx={{mt: 3}} onClick={handleSubmit}>
                        EDITAR USUARIO
                    </Button>
                </Box>
            </Box>
        </div>
    );
}

export default EditarUsuario;