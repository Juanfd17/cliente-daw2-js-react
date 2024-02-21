import React from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Divider,
} from "@mui/material";

const CrearUsuario = () => {

    function crearUsuario() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "fname": document.querySelector("#nombre").value,
            "lname": document.querySelector("#apellido").value,
            "username":document.querySelector("#usuario").value,
            "email": document.querySelector("#email").value,
            "avatar": document.querySelector("#img").value,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://www.melivecode.com/api/users/create", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

    return (
        <div>
            <Box sx={{ width: 400, margin:'auto', marginTop:'40px' }}>
                <Typography variant="h5" gutterBottom>
                    Datos del nuevo usuario
                </Typography>
                <Divider />
                <Box sx={{ padding: "20px" }}>
                    <TextField id="nombre" label="Nombre" variant="outlined" fullWidth margin="normal"/>
                    <TextField id="apellido" label="Apellido" variant="outlined" fullWidth margin="normal"/>
                    <TextField id="usuario" label="Nombre de usuario" variant="outlined" fullWidth margin="normal"/>
                    <TextField id="email" label="Email" variant="outlined" fullWidth margin="normal"/>
                    <TextField id="img" label="Avatar" variant="outlined" fullWidth margin="normal"/>
                    <Button variant="contained" fullWidth size="large" sx={{ mt: 3 }} onClick={crearUsuario}>
                        CREAR USUARIO
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default CrearUsuario;
