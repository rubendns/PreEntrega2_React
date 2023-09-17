import React from "react";

const Navbar = () => {
    return (
        <>
        <div className="container-fluid">
            <nav className="navbar col">
            <ul className="nav nav-pills">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                    Inicio
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Productos
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Noticias
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Contacto
                </a>
                </li>
            </ul>
            </nav>
        </div>
        </>
    );
};

export default Navbar;
