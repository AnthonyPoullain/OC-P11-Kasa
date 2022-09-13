import './Dropdown.css';
import { useState } from 'react';
import arrowIcon from '../../assets/arrow.svg';

function Dropdown({ text, content }) {
  const [btnOpen, setBtnOpen] = useState(false);

  const handleOpen = () => {
    setBtnOpen((prevState) => !prevState);
  };

  return (
    <div className="dropdown">
      <button
        onClick={handleOpen}
        className="dropdown__btn"
        type="button"
        data-dropdown="close"
      >
        <span className="dropdown__text">{text}</span>
        <img
          className={
            btnOpen
              ? 'dropdown__arrow'
              : 'dropdown__arrow dropdown__arrow--open'
          }
          src={arrowIcon}
          alt="v"
        />
      </button>
      <div
        style={btnOpen ? { display: 'block' } : { display: 'none' }}
        className="dropdown__content"
      >
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Dropdown;
