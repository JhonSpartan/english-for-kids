// import Link from 'next/link';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useEffect } from 'react';
import LanguageToggler from './shared/nav/LanguageToggler';

const Navbar = () => {

  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', scrollHandler);
  });



  const scrolledToBottom = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    if (bottom) {
      document.querySelector('.navbar__contacts-item').classList.add('navbar__active');
    } else {
      document.querySelector('.navbar__contacts-item').classList.remove('navbar__active');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrolledToBottom, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', scrolledToBottom);
    };
  }, []);


  return (
    <div className="navbar">
      <div
        onClick={() => scroll.scrollToTop()}
        className="navbar__title"
      > 
        <span>English</span>
        <div>
          <span>For</span>
          <span>Kids</span>
        </div>
      </div>
      <ul className="navbar__main">
        <li className="navbar__item">
          <Link 
            to="news" 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={500}
            activeClass="navbar__active"
          >
            Новости
          </Link>
        </li>
        <li className="navbar__item">
            <Link
              to="about" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              activeClass="navbar__active"
            >
              О нас
            </Link>
        </li>
        <li className="navbar__item">
            <Link
              to="methodology" 
              spy={true} 
              smooth={true} 
              offset={-180} 
              duration={500}
              activeClass="navbar__active"
            >
              Методика обучения
            </Link>
        </li>
        <li className="navbar__item">
            <Link
              to="teachers" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              activeClass="navbar__active"
            >
              Преподаватели
            </Link>
        </li>
        <li className="navbar__item">
            <Link
              to="enrollment" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              activeClass="navbar__active"
            >
              Условия зачисления
            </Link>
        </li>
        <li className="navbar__item">
            <a
              className="navbar__contacts-item"
              onClick={() => scroll.scrollToBottom()}
            >
              Контакты
            </a>
        </li>
      </ul>
      <LanguageToggler/>
    </div>
  )
}

export default Navbar;