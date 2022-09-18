import { useState, useEffect } from 'react';
import getAccomodations from '../../api/getAccomodations';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import heroImg from '../../assets/home_hero_img.png';
import { tabTitle } from '../../helpers/helperFunctions';

function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    tabTitle('Accueil');
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAccomodations();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    data && (
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
    )
  );
}

export default Home;
