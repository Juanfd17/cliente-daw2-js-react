import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Box, Button, Divider, TextField, Typography} from "@mui/material";

function EditarUsuario() {
    const { id } = useParams();
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        fetch(`https://www.melivecode.com/api/users/${id}`)
            .then(response => response.json())
            .then(data => {
                data = data.user
                setFname(data.fname);
                setLname(data.lname);
                setUsername(data.username);
                setEmail(data.email);
                setAvatar(data.avatar);
            });
    }, [id]);

    const handleSubmit = (event) => {
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
    };



    return (
        <div>
            <Box sx={{width: 400, margin: 'auto', marginTop: '40px'}}>
                <Typography variant="h5" gutterBottom>
                    Datos del usuario a editar
                </Typography>
                <Divider/>
                <Box sx={{padding: "20px"}}>
                    <TextField id="nombre" label="Nombre" variant="outlined" fullWidth margin="normal" value={fname} onChange={e => setFname(e.target.value)}/>
                    <TextField id="apellido" label="Apellido" variant="outlined" fullWidth margin="normal" value={lname} onChange={e => setLname(e.target.value)}/>
                    <TextField id="usuario" label="Nombre de usuario" variant="outlined" fullWidth margin="normal" value={username} onChange={e => setUsername(e.target.value)}/>
                    <TextField id="email" label="Email" variant="outlined" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)}/>
                    <TextField id="img" label="Avatar" variant="outlined" fullWidth margin="normal" value={avatar} onChange={e => setAvatar(e.target.value)}/>
                    <Button variant="contained" fullWidth size="large" sx={{mt: 3}} onClick={handleSubmit}>
                        EDITAR USUARIO
                    </Button>
                </Box>
            </Box>
        </div>
    );
}

export default EditarUsuario;