import data from './data/logements.json';

// To connect the API, just replace 'data' with the fetch request and remove import above
const getAccomodations = async () => data;

export default getAccomodations;
