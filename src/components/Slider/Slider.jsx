import { useState } from 'react';
import leftArrow from '../../assets/slideshow_left-arrow.svg';
import rightArrow from '../../assets/slideshow_right-arrow.svg';
import './Slider.css';

function Slider({ title, images }) {
  const [count, setCount] = useState(0);

  const handlePrevious = () => {
    if (count === 0) {
      setCount(images.length - 1);
      return;
    }
    setCount((curr) => curr - 1);
  };

  const handleNext = () => {
    if (count === images.length - 1) {
      setCount(0);
      return;
    }
    setCount((curr) => curr + 1);
  };

  return (
    <div className="slider">
      <img src={images[count]} alt={title} />
      {images.length > 1 && (
        <button
          onClick={handlePrevious}
          type="button"
          className="slider__arrow slider__arrow--left"
        >
          <img src={leftArrow} alt="Précédent" />
        </button>
      )}
      {images.length > 1 && (
        <button
          onClick={handleNext}
          type="button"
          className="slider__arrow slider__arrow--right"
        >
          <img src={rightArrow} alt="Suivant" />
        </button>
      )}
      <span className="slider__counter">
        {count + 1}/{images.length}
      </span>
    </div>
  );
}

export default Slider;
