import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import getAccomodations from '../api/getAccomodations';
import Slider from '../components/Slider/Slider';
import Dropdown from '../components/Dropdown/Dropdown';
import Tag from '../components/Tag/Tag';
import './Accomodation.css';

function Accomodation() {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let result = await getAccomodations();
      result = result.filter((item) => item.id === params.id);
      if (!result.length) navigate('/error');
      setData(...result);
    };
    fetchData();
  }, []);

  return (
    data && (
      <>
        {console.log(data)}

        <Slider key={data.id} title={data.title} images={data.pictures} />

        <div className="details">
          <div className="details__left">
            <h1 className="details__title">{data.title}</h1>
            <h2 className="details__location">{data.location}</h2>
            <div className="details__tags">
              {data.tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
          <div className="details__right">
            <div className="details__profile">
              <div className="details__host-name">
                <p> {data.host.name.split(' ')[0]}</p>
                <p> {data.host.name.split(' ')[1]}</p>
              </div>

              <div className="details__host-photo">
                <img src={data.host.picture} alt={data.host.name} />
              </div>
            </div>
            <div className="details__rating">
              {'★ '.repeat(data.rating)}
              <span className="star--grey">{'★ '.repeat(5 - data.rating)}</span>
            </div>
          </div>
        </div>

        <div className="dropdown__section">
          <Dropdown
            type="accomodation"
            text="Description"
            content={data.description}
          />
          <Dropdown
            type="accomodation"
            text="Équipements"
            content={
              <ul>
                {data.equipments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
          />
        </div>
      </>
    )
  );
}

export default Accomodation;
