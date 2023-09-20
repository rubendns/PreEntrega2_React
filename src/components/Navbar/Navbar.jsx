import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div>
            <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/marca/iphone">Iphone</Link></li>
                <li><Link to="/marca/xiaomi">Xiaomi</Link></li>
                <li><Link to="/marca/samsung">Samsung</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
            </nav>
        </div>
        </>
    );
};

export default Navbar;
