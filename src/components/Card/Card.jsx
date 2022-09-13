import './Card.css';

function LocationCard({ title, img, imgAlt }) {
  const alt = imgAlt || title;
  return (
    <div className="card">
      <img src={img} alt={alt} />
      <span style={{ transform: 'translateY(-23px)' }} className="card__title">
        {title.split('-')[0]}
      </span>
      <span className="card__title">{title.split('-')[1]}</span>
    </div>
  );
}

export default LocationCard;
