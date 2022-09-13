import './ErrorPage404.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function ErrorPage404() {
  return (
    <>
      <div className="container">
        <Header />
        <main className="error-page">
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
        </main>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage404;
