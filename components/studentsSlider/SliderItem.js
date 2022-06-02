import Image from 'next/image';

const SliderItem = ({slide})=> {

  return (
    <div className="students-slider__carousel-item">
      <div className="students-slider__carousel-content">
        <div className="students-slider__carousel-image">
          <Image
            // layout="fill"
            // layout="fixed"
            width="100%"
            height="100%"
            // priority
            layout="responsive"
            // src={`/../public/students/${slide.photo}`}
            src={slide.photo}

            alt="story1"
          />
        </div>
        <div className="students-slider__info">
          <div className="students-slider__name-wrapper">
            <h3>{slide.name}</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
      </div>
    </div>
  )
}

export default SliderItem;