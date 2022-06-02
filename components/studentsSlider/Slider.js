import { useState, useEffect } from 'react';
import SliderItem from './SliderItem';
import SliderControlls from './SliderControlls';
import SliderIndicators from './SliderIndicators';
import Aos from 'aos';
import 'aos/dist/aos.css';

import imgArtur from '../../public/students/artur.jpg';
import imgBil from '../../public/students/biletskaya.jpg';
import imgGas from '../../public/students/gasanova.jpg';
import imgKam from '../../public/students/kamenyash.jpg';
import imgKvetko from '../../public/students/kvetko.jpg';
import imgOrlyk from '../../public/students/orlyk2.jpg';

const Slider = () => {

  // const slides = [ {photo: 'artur.jpg', name: 'Артур Редзинец'}, {photo: 'biletskaya.jpg', name: 'Анастасия Белецкая'}, {photo: 'gasanova.jpg', name: 'Александра Гасанова'}, {photo: 'kamenyash.jpg', name: 'Роксолана Каменяш'}, {photo: 'kvetko.jpg', name:  'Юлия Кветко'}, {photo: 'orlyk2.jpg', name:  'Татьяна Орлык'} ];
  const slides = [ {photo: imgArtur, name: 'Артур Редзинец'}, {photo: imgBil, name: 'Анастасия Белецкая'}, {photo: imgGas, name: 'Александра Гасанова'}, {photo: imgKam, name: 'Роксолана Каменяш'}, {photo: imgKvetko, name:  'Юлия Кветко'}, {photo: imgOrlyk, name:  'Татьяна Орлык'} ];


  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartPosition, setTouchStartPosition] = useState(0);
  const [touchEndPosition, setTouchEndPosition] = useState(0);
  const [touched, setTouched] = useState(false);
  const [swiped, setSwiped] = useState(false);



  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  }

  const next = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  }

  const switchIndex = (index) => {
    setCurrentSlide(index);
  }

  const touchStartHandler = (e) => {
    setTouchStartPosition(e.targetTouches[0].clientX);
    setTouchEndPosition(e.targetTouches[0].clientX);
    setTouched(true);
  }

  const touchMoveHandler = (e) => {
    setTouchEndPosition(e.targetTouches[0].clientX);
  }

  const touchEndHandler = (e) => {
    
  }

  
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);

  return (
    <section data-aos="fade-up" className="students-slider">
      <h1>Выпускники</h1>
      <div className="students-slider__carousel">
        <div
          // onTouchStart={(e) => touchStartHandler(e)}
          // onTouchMove={(e) => touchMoveHandler(e)}
          // onTouchEnd={(e) => touchEndHandler(e)} 
          style={{transform: `translateX(${-currentSlide * 100}%)`}}
          className="students-slider__carousel-inner">
          {slides.map((slide, index) => (
            <SliderItem 
              slide={slide}
              key={index}
            />
          ))}
        </div>
        <SliderIndicators 
            slides={slides}
            currentIndex={currentSlide}
            switchIndex={switchIndex}
        />
        <SliderControlls 
          prev={prev}
          next={next}
        />
      </div>
    </section>
  )
}

export default Slider;
