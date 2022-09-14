import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import getAccomodations from '../api/getAccomodations';
import Slider from '../components/Slider/Slider';
import Dropdown from '../components/Dropdown/Dropdown';
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
        <Slider key={data.id} title={data.title} images={data.pictures} />

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
                  <li>{item}</li>
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
