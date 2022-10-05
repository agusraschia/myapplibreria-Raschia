import React from "react";
import twitter from "../imagenes/SM-RRSS-01.png";
import youtube from "../imagenes/SM-RRSS-02.png";
import instagram from "../imagenes/SM-RRSS-03.png";
import facebook from "../imagenes/SM-RRSS-04.png";

const Footer = () => {
    return (
        <div className="row fondo_gris p-5">
            <div className="col">
                <div className="container text-white">
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p>TM © 1996 Librería "Los tres mosqueteros". Todos los derechos reservados.</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <img src={facebook} width="24" alt="facebook" /> 
                            <img src={instagram} width="24" alt="instagram" /> 
                            <img src={youtube} width="24" alt="youtube" /> 
                            <img src={twitter} width="24" alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;