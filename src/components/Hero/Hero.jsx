import './Hero.css';

function Hero({ img, text = '', alt, compactOnMobile = false }) {
  const splitText = text.split(',');
  const hasComma = splitText.length > 1 && splitText.length < 3;

  return (
    <div className={compactOnMobile ? 'hero hero--compact' : 'hero'}>
      <img className="dim" src={img} alt={alt} />
      {hasComma ? (
        <h1 className="hero__title">
          {text.split(',')[0]},
          <br />
          {text.split(',')[1]}
        </h1>
      ) : (
        text ?? <h1 className="hero__title">{text}</h1>
      )}
    </div>
  );
}

export default Hero;
