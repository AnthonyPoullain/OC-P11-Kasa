import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/kasa_logo_header.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <nav className="nav">
        <NavLink className="link" to="/">
          Accueil
        </NavLink>
        <NavLink className="link" to="/about">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
