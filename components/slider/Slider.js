
import React from 'react';
import Image from "next/image";
// import Slide from './Slide';

const Slider = () => {
  return ( 
    <div className="slider__wrapper">
      <div className="slider__border">
        <ul>
          <li className="slider__slide">
            <h2>Zazan</h2>
            <p>We have divided the range of our services and products into six clearly-arranged product lines. 
            There is a group of guarantors responsible for each product line. 
            Their task is to bring forward innovative and valuable concepts which represent an added value for your company.</p>
            <Image
            width="100%"
            height="100%"
            layout="responsive"
            src="/../public/story-2.jpeg"
            alt="story1"
          />
          </li>
          <li className="slider__slide">
            <h2>Zazan</h2>
            <p>We have divided the range of our services and products into six clearly-arranged product lines. 
            There is a group of guarantors responsible for each product line. 
            Their task is to bring forward innovative and valuable concepts which represent an added value for your company.</p>
            <Image
            width="100%"
            height="100%"
            layout="responsive"
            src="/../public/story-2.jpeg"
            alt="story1"
          />
          </li>
          <li className="slider__slide">
            <h2>Zazan</h2>
            <p>We have divided the range of our services and products into six clearly-arranged product lines. 
            There is a group of guarantors responsible for each product line. 
            Their task is to bring forward innovative and valuable concepts which represent an added value for your company.</p>
            <Image
            width="100%"
            height="100%"
            layout="responsive"
            src="/../public/story-2.jpeg"
            alt="story1"
          />
          </li>
          <li className="slider__slide">
            <h2>Zazan</h2>
            <p>We have divided the range of our services and products into six clearly-arranged product lines. 
            There is a group of guarantors responsible for each product line. 
            Their task is to bring forward innovative and valuable concepts which represent an added value for your company.</p>
            <Image
            width="100%"
            height="100%"
            layout="responsive"
            src="/../public/story-2.jpeg"
            alt="story1"
          />
          </li>
          <li className="slider__slide">
            <h2>Zazan</h2>
            <p>We have divided the range of our services and products into six clearly-arranged product lines. 
            There is a group of guarantors responsible for each product line. 
            Their task is to bring forward innovative and valuable concepts which represent an added value for your company.</p>
            <Image
            width="100%"
            height="100%"
            layout="responsive"
            src="/../public/story-2.jpeg"
            alt="story1"
          />
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Slider;