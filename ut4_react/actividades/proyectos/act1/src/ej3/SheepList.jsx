import React from 'react';

function SheepList(props) {
    const imagen = "https://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png";

    let imagenes = [];
    for (let i = 0; i < props.contador; i++) {
        imagenes.push(<img src={imagen}/>);
    }

    return (
        <div>
            {imagenes}
        </div>
    );
}

export default SheepList;