import { useState, useEffect } from 'react';
import leftArrow from '../../assets/slideshow_left-arrow.svg';
import rightArrow from '../../assets/slideshow_right-arrow.svg';
import './Slider.css';

function Slider({ title, images }) {
	const [count, setCount] = useState(0);

	// Track loading of the first image + all images for lazyloading
	const [firstImgLoaded, setFirstImgLoaded] = useState(false);
	const [imgsLoaded, setImgsLoaded] = useState(false);

	useEffect(() => {
		function loadImage(image) {
			return new Promise((resolve, reject) => {
				const loadImg = new Image();
				loadImg.src = image;
				loadImg.onload = () => resolve(image);
				loadImg.onerror = (err) => reject(err);

				// This line will only run on the first image, to start rendering the component as fast as possible
				if (!firstImgLoaded) setFirstImgLoaded(true);
			});
		}

		// Then we continue to load all images in the background for smooth slider UX
		Promise.all(images.map((image) => loadImage(image)))
			.then(() => setImgsLoaded(true))
			.catch((err) => console.log('Failed to load images', err));
	}, []);

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

	return !firstImgLoaded ? (
		<div className="slider" />
	) : (
		<div className="slider">
			<img src={images[count]} alt={title} />
			{imgsLoaded && images.length > 1 && (
				<button
					onClick={handlePrevious}
					type="button"
					className="slider__arrow slider__arrow--left"
				>
					<img src={leftArrow} alt="Précédent" />
				</button>
			)}
			{imgsLoaded && images.length > 1 && (
				<button
					onClick={handleNext}
					type="button"
					className="slider__arrow slider__arrow--right"
				>
					<img src={rightArrow} alt="Suivant" />
				</button>
			)}
			{imgsLoaded && images.length > 1 && (
				<span className="slider__counter">
					{count + 1}/{images.length}
				</span>
			)}
		</div>
	);
}

export default Slider;
