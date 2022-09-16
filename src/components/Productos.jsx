import React from "react";
import {useEffect} from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Producto from "./Producto";


const Productos = () => {

        const [items, setItems] = useState ([]);
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


            fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                    .then(json=> {
                        if (categoria =="all") {
                        setItems(json);
                     } else {
                        const array_productos =json.filter(producto => producto.category === categoria);
                        setItems(array_productos);
                     }
                    });
        }, [genero]);
        
        

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                
            </div>
        </div>
        <div className="row">
            {items.map(producto => (
                <div key={producto.id} className= "col-md-3">
                    <Producto item={producto}  />
                </div> 
                
                ))}
        </div>
        </div>
        
        
    )


    
}  

export default Productos; 