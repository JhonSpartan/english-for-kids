import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { Link } from 'react-scroll';
import img from '../public/header4.svg';

const Header = ({setActive}) => {
  return (
    <section className="header" id="header">
      <div className="header__main">
        <div className="header__text">
          <h2>Курсы английского языка для детей</h2>
          <p>Наши крсы предлагают современное изучение английского на базе разработанных нами уникальных методик и программ,
          которые прошли испытание временем. Помимо всестороннего овладения английским языком на высоком уровне,
          и подготовки как в выпускным, так и к встуительным временым экзаменам в Украине и за ее переделами, наш курс способствует
          всестороннему развитию ребенка и повышению уровня его эрудированности, что выгодно отличает наших выпкскинков в конкурентной
          среде современных реалий.</p>
          <div 
            className="header__btn"
            onClick={() => setActive(true)}
          >Подать заявку
          </div>
        </div>
      </div>
      <div className="header__image">
        <Image
          layout="responsive"
          // layout="fixed"
          width="100%"
          height="100%"
          priority
          // src="/../public/header4.svg"
          src={img}
          alt="Header image"
        />
      </div>
      <div className="header__learn-more">
        <Link
          to="about" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500}
        >  
          <span className="header__learn-more-text">Узнать больше</span>
          <span className="header__learn-more-arrow"> &#10095; </span>
        </Link>
      </div>
      <figure className="header__decor-1" style={{transform: 'matrix(1, -0.57734, 0, 1, 0, 0)'}}></figure>
      <figure className="header__decor-2" style={{transform: 'matrix(1, -0.57734, 0, 1, 0, 0)'}}></figure>
      <figure className="header__decor-3" style={{transform: 'matrix(1, -0.57734, 0, 1, 0, 0)'}}></figure>
      <figure className="header__decor-4" style={{transform: 'matrix(1, -0.57734, 0, 1, 0, 0)'}}></figure>
      <figure className="header__decor-5" style={{transform: 'matrix(1, -0.57734, 0, 1, 0, 0)'}}></figure>
      <figure className="header__decor-6" style={{transform: 'matrix(1, -0.57734, 0, 1, 0, 0)'}}></figure>
    </section>
  )
}

export default Header;