import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div>
            <nav>
                <ul >
                    <li ><Link to="/">Inicio</Link></li>
                    <li ><Link to="/productos">Productos</Link></li>
                    <li ><Link to="/noticias">Noticias</Link></li>
                    <li ><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </div>
        </>
    );
};

export default Navbar;
