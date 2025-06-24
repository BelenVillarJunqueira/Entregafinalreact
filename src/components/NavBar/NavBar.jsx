import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "../NavBar/styles.module.css";
import logo from "../../assets/logo.png";
import Nosotros from "../Nosotros/Nosotros"

const NavBar = () => {
return (
    <nav className={styles.nav}>
    <div className={styles.logoContainer}>
        <Link to="/" aria-label="Ir a la página principal">
        <img src={logo} alt="Logo El Viejo Manzano" style={{ height: "40px" }} />
        </Link>
        <span className={styles.brand}>El Viejo Manzano</span>
    </div>

    <ul  style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/Plantas">Plantas</Link></li>
        <li><Link to="/category/Arboles">Arboles</Link></li>
        <li><Link to="/category/Macetas">Macetas</Link></li>
        <li><Link to="/category/Cesped">Césped</Link></li>
        <li><Link to="/category/Tierra">Tierra</Link></li>
        <li><Link to="/category/Herramientas">Herramientas</Link></li>
    </ul>

    <CartWidget />
    </nav>
);
};

export default NavBar;
