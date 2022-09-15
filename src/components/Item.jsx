import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="card">
      <img src={item.thumbnail} classNam="card-img-top" alt={item.tittle} />
      <div className="card-body">
        <h5 className="card-title">{item.tittle}</h5>
        <p className="card-text">$ {item.price}</p>
        <a href={item.permalink} className="btn btn-primary" target = "_blank">
          Comprar
        </a>
      </div>
    </div>
  );
};

export default Item;
