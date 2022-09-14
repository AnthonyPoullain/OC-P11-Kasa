import getAccomodations from '../api/getAccomodations';
import './Home.css';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import heroImg from '../assets/home_hero_img.png';

function Home() {
  const data = getAccomodations();

  return (
    <>
      <Hero
        img={heroImg}
        text="Chez vous, partout et ailleurs"
        compactOnMobile
      />
      <div className="locations">
        <div className="locations__grid">
          {data.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.location}
              img={item.cover}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
