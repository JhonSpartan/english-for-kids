import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
// import ContactButton from './shared/ContactButton';

const Teachers = () => {
  
  const [showNumber, setShowNumber] = useState({
    firstNumber: false,
    secondNumber: false
  });

  const showNumberFunc = (e) => {
    setShowNumber({
      ...showNumber,
      [e.target.id] : true
    });
  }

  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);

  return (
    <section className="teachers" id="teachers">
      <h1 data-aos="fade-up">Преподаватели</h1>
      <div className="teachers__cards">
        <div data-aos="fade-right" className="teachers__card">
          <div className="teachers__top-block">
            <Image 
            width="155px"
            height="155px"
            layout="fixed"
            // layout="fill"
            src="/../public/teacher.jpg"
            alt="Teacher's photo"
            />
          </div>
          <div className="teachers__bot-block">
            <div className="teachers__info">
              <div className="teachers__name-wrapper">
                <h3>Alain Delon</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <div 
                id="firstNumber"
                className={showNumber.firstNumber ? "teachers__contact teachers__contact--active" : "teachers__contact"}
                onClick={(e) => showNumberFunc(e)}
              >
                <span className="teachers__contact-text">Связаться</span>
                <span className="teachers__contact-text">0974632120</span>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="teachers__card">
          <div className="teachers__top-block">
            <Image 
            width="155px"
            height="155px"
            layout="fixed"
            // layout="fill"
            src="/../public/teacher2.jpg"
            alt="Teacher's photo"
            />
          </div>
          <div className="teachers__bot-block">
            <div className="teachers__info">
              <div className="teachers__name-wrapper">
                <h3>Sophia Loren</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <div 
                id="secondNumber"
                className={showNumber.secondNumber ? "teachers__contact teachers__contact--active" : "teachers__contact"}
                onClick={(e) => showNumberFunc(e)}
              >
                <span className="teachers__contact-text">Связаться</span>
                <span className="teachers__contact-text">0984632120</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teachers;