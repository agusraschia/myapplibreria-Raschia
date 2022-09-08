import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";



const ItemListContainer = () => {

    const productos = [
        {"id":1, "nombre": "Orgullo y Prejuicio", "descripcion": "Jane Bennet: la mayor de las hermanas Bennet es tímida e ingenua, siendo la principal pretendienta de Charles Bingley, inicialmente interesado en su hermana Elizabeth. Mary Bennet: Seria y cínica, es la menos atractiva de las hermanas, lo cual le confiere un carácter de chica amargada.", "precio": "3000" },
        {"id":2, "nombre": "After", "descripcion": "Jane Bennet: la mayor de las hermanas Bennet es tímida e ingenua, siendo la principal pretendienta de Charles Bingley, inicialmente interesado en su hermana Elizabeth. Mary Bennet: Seria y cínica, es la menos atractiva de las hermanas, lo cual le confiere un carácter de chica amargada.", "precio": "3000" }
    ];

    const [items, setItems] = useState ([]);
    useEffect(() => {
        const promesa = new Promise ((resolve, reject) => { 
            setTimeout(() => {
                resolve(productos);
            }, 2000);
            });

            promesa.then((respuesta) => { 
                setItems(respuesta);
                console.log(respuesta);

            });
           

    }, []);

    return (
        <div>
            <ItemList  items={items} /> 
        </div>


    );
    
}

export default ItemListContainer;