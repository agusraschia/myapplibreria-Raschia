import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../imagenes/logo libreria.png";

const NavBar = () => {
    return (
        <ul className="nav d-flex align-items-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={"/"}><img src={logo} width="48" alt="Librería Los tres Mosqueteros" /></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/menu"}>Catálogo</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/ofertas"}>Ofertas</NavLink>
            </li>
        </ul>
    )
} 

export default NavBar;