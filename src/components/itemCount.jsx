import React,  {useState} from "react";

const CarroSuma = () => {
    
    const [clicks, setClicks] = useState(0);

    return (
        <div >
            <h1> Carrito</h1>

        <div onClick={() => { 
            setClicks (clicks + 1);
            

            
        }} >
            <button> Agregar: {clicks} </button>

            
            </div>

            <div onClick={() => { 
            setClicks (clicks - 1);
            

            
        }} >
            <button> Quitar </button>


            </div>

        </div>
    )


}

export default CarroSuma;