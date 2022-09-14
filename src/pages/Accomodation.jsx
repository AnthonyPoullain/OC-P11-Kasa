import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import getAccomodations from '../api/getAccomodations';
import Slider from '../components/Slider/Slider';
import './Accomodation.css';

function Accomodation() {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = () => {
      let result = getAccomodations();
      result = result.filter((item) => item.id === params.id);
      if (!result.length) navigate('/error');
      setData(...result);
    };
    fetchData();
  }, []);

  return (
    data && <Slider key={data.id} title={data.title} images={data.pictures} />
  );
}

export default Accomodation;
