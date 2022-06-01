import React from 'react';

const SliderControlls = ({ prev, next }) => {
  return (
    <React.Fragment>
      <button 
        onClick={prev}
        className="students-slider__carousel-controll students-slider__carousel-controll--left"> &#10095;
      </button>
      <button
        onClick={next}
        className="students-slider__carousel-controll students-slider__carousel-controll--right"> &#10095;
      </button>

    </React.Fragment>
    )
};

export default SliderControlls;
