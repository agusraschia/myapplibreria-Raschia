import React from "react";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const Navbar = () => {
    return (
        
        <div>
            
            
            
            <h2> Liberia "Los 3 mosqueteros" </h2>
            <CartWidget />
            <nav class="menu">

            
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <ItemListContainer />
        </div>
        
    )

    
}  

export default Navbar; 