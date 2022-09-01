import React, { Component } from "react";

let imagen ="icono libreria.png"
class CartWidget extends Component {
    render() { 
        return ( 
            <div>
                <img src={imagen} className= "img-fluid"/>
            </div>
        )
    }
}  

export default CartWidget; 