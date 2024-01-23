import './UserCard.css'

function UserCard({name, amount=0, worker, avatar, address, greet}) {
    return (
        <div className="card" onClick={() => greet(name)}>
            <div className="avatar">
                <img src={avatar}/>
            </div>

            <h5 className="card-title">{name}</h5>

            <p className="card-text">{(worker)?"Trabaja por " + amount + "€": "estudia"}</p>

            <ul className="lista">
                <li>Ciudad: {address.city}</li>
                <li>Calle: {address.address}</li>
            </ul>
        </div>
    );
}

export default UserCard;