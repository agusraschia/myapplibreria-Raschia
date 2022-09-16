import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import GetItem from "./GetItem";



const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const {genero} = useParams();

    useEffect(() => {
        let categoria = "";

        if (genero == "hombre") {
             categoria = "men's clothing";
            } else if (genero == "mujer") {
            categoria = "women's clothing";
            } else { 
            categoria = "all";

            }
        


      fetch ('https://api.mercadolibre.com/sites/MLA/search?q=libros%20del%20fondo%20editorial')
      .then((respuesta) => respuesta.json ())
      .then((data) => { 
      setItems (data.results);
      
    });
  
    }, [genero]);
    
  
    return <div className="container">
  
      <GetItem items= {items} />
      
    </div>;
     
  };



export default ItemDetailContainer;