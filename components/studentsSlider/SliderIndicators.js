import React from 'react';

const SliderIndicators = ({ slides, currentIndex, switchIndex }) => {
  return (
    <div className="students-slider__carousel-indicators">
      {slides.map((_, index) => (
        <button 
          key={index}
          className={currentIndex === index ? "students-slider__carousel-indicators-item students-slider__carousel-indicators-item--active" : "students-slider__carousel-indicators-item"}
          onClick={() => switchIndex(index)}>
        </button>
      ))};
    </div>
    )
};

export default SliderIndicators;
