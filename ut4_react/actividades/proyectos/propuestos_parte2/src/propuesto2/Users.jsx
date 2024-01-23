import React from 'react';
import UserCard from "./UserCard.jsx";

function Users({usuarios}) {
    return (
        <div className="usuarios">
            {usuarios.map(usuario =>  {
                return <UserCard name={usuario.name} amount={usuario.amount} worker={usuario.worker} avatar={usuario.avatar} address={usuario.address} greet={usuario.greet}> </UserCard>
            })}
        </div>
    );
}

export default Users;