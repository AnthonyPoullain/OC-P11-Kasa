import getAccomodations from '../api/getAccomodations';
import '../global.css';
import './Home.css';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import heroImg from '../assets/home_hero_img.png';

function Home() {
  const data = getAccomodations();

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Hero
            img={heroImg}
            text="Chez vous, partout et ailleurs"
            compactOnMobile
          />
          <div className="locations">
            <div className="locations__grid">
              {data.map((item) => (
                <Card key={item.id} title={item.location} img={item.cover} />
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
