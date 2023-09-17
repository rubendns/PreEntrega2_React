import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className="container-fluid">
            <nav className="navbar col">
                <ul className="nav nav-pills">
                    <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/noticias">Noticias</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </div>
        </>
    );
};

export default Navbar;
