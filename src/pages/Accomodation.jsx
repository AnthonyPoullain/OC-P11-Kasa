import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import getAccomodations from '../api/getAccomodations';

function Accomodation() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let result = await getAccomodations();
      result = result.filter((item) => item.id === params.id);
      if (!result.length) navigate('/error');
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      {params.id} <br />
      {JSON.stringify(data)}
    </>
  );
}
export default Accomodation;
