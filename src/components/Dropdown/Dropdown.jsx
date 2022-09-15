import './Dropdown.css';
import { useState } from 'react';
import arrowIcon from '../../assets/arrow.svg';

function Dropdown({ text, content, type }) {
  const [btnOpen, setBtnOpen] = useState(false);

  const handleOpen = () => {
    setBtnOpen((prevState) => !prevState);
  };

  return (
    <div className="dropdown">
      <button
        onClick={handleOpen}
        className={
          type === 'accomodation'
            ? 'dropdown__btn dropdown__btn--accomodation'
            : 'dropdown__btn'
        }
        type="button"
        data-dropdown="close"
      >
        <span
          className={
            type === 'accomodation'
              ? 'dropdown__text dropdown__text--accomodation'
              : 'dropdown__text'
          }
        >
          {text}
        </span>
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
        className={
          type === 'accomodation'
            ? 'dropdown__content dropdown__content--accomodation'
            : 'dropdown__content'
        }
      >
        {content}
      </div>
    </div>
  );
}

export default Dropdown;
