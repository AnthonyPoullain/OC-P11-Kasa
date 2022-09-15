import Tag from '../Tag/Tag';
import './Details.css';

function Details({ title, location, tags, host, rating }) {
  return (
    <div className="details">
      <div className="details__left">
        <h1 className="details__title">{title}</h1>
        <h2 className="details__location">{location}</h2>
        <div className="details__tags">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      </div>
      <div className="details__right">
        <div className="details__profile">
          <div className="details__host-name">
            <p> {host.name.split(' ')[0]}</p>
            <p> {host.name.split(' ')[1]}</p>
          </div>
          <div className="details__host-photo">
            <img src={host.picture} alt={host.name} />
          </div>
        </div>
        <div className="details__rating">
          {'★ '.repeat(rating)}
          <span className="star--grey">{'★ '.repeat(5 - rating)}</span>
        </div>
      </div>
    </div>
  );
}

export default Details;
