import { Link } from 'react-router-dom';
import './Card.css';

function LocationCard({ id, title, img, imgAlt }) {
  const alt = imgAlt || title;
  return (
    <Link to={id} className="card">
      <img src={img} alt={alt} />
      <span style={{ transform: 'translateY(-23px)' }} className="card__title">
        {title.split('-')[0]}
      </span>
      <span className="card__title">{title.split('-')[1]}</span>
    </Link>
  );
}

export default LocationCard;
