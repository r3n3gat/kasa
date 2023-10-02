import React, { useState } from 'react';
import './carrousel.scss'; 

export default function Slider({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % imageSlider.length)
  };

  const previouSlide = () => {
    setCurrentIndex((currentIndex - 1 + imageSlider.length) % imageSlider.length)
  };

  return (
    <section
      style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
      className="carousel"
      onClick={nextSlide} 
    >
      <p className="slideCount">
        {currentIndex + 1} / {imageSlider.length}
      </p>
    </section>
  );
}