import { Link } from 'react-router-dom';
import Logo from '../../assets/kasa_logo_footer.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img className="footer__logo" src={Logo} alt="Kasa logo" />
      </Link>
      <div className="footer__copyright">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
