import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../global.css';

function Layout() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Outlet style={({ margin: 0 }, { padding: 0 })} />
        </main>
      </div>
      <Footer />
    </>
  );
}
export default Layout;
