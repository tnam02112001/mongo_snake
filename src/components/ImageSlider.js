import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className='slider'>
      <FaCaretLeft className='left-arrow' onClick={prevSlide} />
      <FaCaretRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='snake color' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;