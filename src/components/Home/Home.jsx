import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Destacado from "./Destacado";


const Home = () => {
    return (
        <div className="container-fluid fondo_rosa">
            <Header />
            <Destacado />
            <Footer />
        </div>
    )
}

export default Home;