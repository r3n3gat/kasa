import React, { useState } from 'react'
import './carrousel.scss'
import arrow_back from "../../assets/arrow_back.png"
import arrow_next from "../../assets/arrow_next.png"

export default function Slider({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % imageSlider.length)
  };

  const previouSlide = () => {
    setCurrentIndex((currentIndex - 1 + imageSlider.length) % imageSlider.length)
  };

  return (
    <section style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }} className='carrousel'>
      {imageSlider.length > 1 &&
        <>
          <img
            className='carrousel_arrow_right'
            src={arrow_next}
            alt="slide suivante"
            onClick={nextSlide}
          />
          <img
            className='carrousel_arrow_left'
            src={arrow_back}
            alt="slide précédente"
            onClick={previouSlide}
          />
          <p className='count'>{currentIndex + 1} / {imageSlider.length}</p>
        </>
      }
    </section>
  );
}