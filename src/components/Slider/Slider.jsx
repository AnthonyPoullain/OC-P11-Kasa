import { useState } from 'react';
import leftArrow from '../../assets/slideshow_left-arrow.svg';
import rightArrow from '../../assets/slideshow_right-arrow.svg';

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
      <img src={images ? images[count] : ''} alt={title} />
      <button
        onClick={handlePrevious}
        type="button"
        className="slider__arrow slider__arrow--left"
      >
        <img src={leftArrow} alt="previous" />
      </button>
      <button
        onClick={handleNext}
        type="button"
        className="slider__arrow slider__arrow--right"
      >
        <img src={rightArrow} alt="next" />
      </button>
      <span className="slider__counter">
        {count + 1}/{images ? images.length : 0}
      </span>
    </div>
  );
}

export default Slider;
