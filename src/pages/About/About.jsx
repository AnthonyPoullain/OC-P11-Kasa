import { useState, useEffect } from 'react';
import './About.css';
import Hero from '../../components/Hero/Hero';
import Dropdown from '../../components/Dropdown/Dropdown';
import heroImg from '../../assets/about_hero_img.png';
import getAboutInfo from '../../api/getAboutInfo';
import { tabTitle } from '../../helpers/helperFunctions';

function About() {
  const [data, setData] = useState();

  useEffect(() => {
    tabTitle('À propos');
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAboutInfo();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    data && (
      <>
        <Hero img={heroImg} />
        <div className="dropdown-section">
          {data.map((item) => (
            <Dropdown
              type="about"
              key={item.key}
              text={item.title}
              content={item.content}
            />
          ))}
        </div>
      </>
    )
  );
}

export default About;
