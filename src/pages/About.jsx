import './About.css';
import Hero from '../components/Hero/Hero';
import Dropdown from '../components/Dropdown/Dropdown';
import heroImg from '../assets/about_hero_img.png';
import getAboutInfo from '../api/getAboutInfo';

function About() {
  const data = getAboutInfo();

  return (
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
  );
}

export default About;
