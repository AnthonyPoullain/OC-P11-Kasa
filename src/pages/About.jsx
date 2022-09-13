import '../global.css';
import './About.css';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Dropdown from '../components/Dropdown/Dropdown';
import Footer from '../components/Footer/Footer';
import heroImg from '../assets/about_hero_img.png';
import getAboutInfo from '../api/getAboutInfo';

function About() {
  const data = getAboutInfo();

  return (
    <>
      <div className="container">
        <Header />
        <main>
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
        </main>
      </div>
      <Footer />
    </>
  );
}

export default About;
