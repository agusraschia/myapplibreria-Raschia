import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Detalle = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => { 
        fetch('https://fakestoreapi.com/products/' + id)
        .then(res=>res.json())
            .then(json=> {
                setItem(json);
            })
    }, [id]);


    return (

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src= {item.image} alt={item.title} className="img-fluid" />
                    </div>
                    <div className= "col-md-4">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p><b>${item.price}</b></p>
                    
                    </div>
                    
            </div>
            </div>
            
            
        )
    
    
        
    }  
    

export default Detalle; 