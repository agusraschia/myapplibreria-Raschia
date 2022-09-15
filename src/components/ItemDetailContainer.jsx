import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import GetItem from "./GetItem";



const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
      fetch ('https://api.mercadolibre.com/sites/MLA/search?q=libro%20orgullo%20y%20prejuicio&limit=1')
      .then((respuesta) => respuesta.json ())
      .then((data) => { 
      setItems (data.results);
      
    });
  
    }, []);
    
  
    return <div className="container">
  
      <GetItem items= {items} />
      
    </div>;
     
  };



export default ItemDetailContainer;