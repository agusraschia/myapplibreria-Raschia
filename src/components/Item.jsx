import React from "react";

const Item = ({nombre, imagen, precio}) => {
    return (
        <div className="card">
            <img src={imagen} cassName="card-img-top" alt={nombre} />
            <div className="card-body">
                <h5 className="card-tittle text-center"><b>{nombre}</b></h5>
                <p className="card-text text-center">${precio}</p>
            </div>
        </div>
    )
}

export default Item;