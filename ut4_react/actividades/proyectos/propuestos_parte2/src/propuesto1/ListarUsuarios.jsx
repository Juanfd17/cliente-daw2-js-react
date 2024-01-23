import './ListarUsuarios.css'

function ListarUsuarios(props) {
    const usuarios = [
        { nombre: "Manolito", id: 1 },
        { nombre: "Antonia", id: 2 },
        { nombre: "Leopoldo", id: 3 }
    ];

    return (
        <div>
            <h1>Listar Usuarios</h1>

            <ul>
                {usuarios.map((usuario) =>  {
                    return <li key={usuario.id} className={"lista"}>{usuario.nombre}</li>
                })}
            </ul>
        </div>
    );
}

export default ListarUsuarios;