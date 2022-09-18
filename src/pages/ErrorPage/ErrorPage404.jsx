import './ErrorPage404.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { tabTitle } from '../../helpers/helperFunctions';

function ErrorPage404() {
  useEffect(() => {
    tabTitle('Oups! Page non trouvée');
  }, []);

  return (
    <div className="error-page">
      <div className="error-wrapper">
        <h1 className="error-code">404</h1>
        <h2 className="error-name">
          Oups! La page que vous demandez n&apos;existe pas.
        </h2>
        <Link
          className="link-to-home"
          to="/"
          style={{ textDecoration: 'underline' }}
        >
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage404;
