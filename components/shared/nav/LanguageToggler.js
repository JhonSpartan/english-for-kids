import React from 'react';
import { useState } from "react";

const LanguageToggler = () => {

  const [openLanguage, setOpenLanguage] = useState(false);

  const [toggleLanguage, setToggleLanguage] = useState('ru');

  const toggleAllRu = () => {
    setToggleLanguage('ru');
    document.querySelector('.navbar__secondary-lang').textContent = 'ru'
  }

  const toggleAllUa = () => {
    setToggleLanguage('ua');
    document.querySelector('.navbar__secondary-lang').textContent = 'ua'
  }

  return (
    <div 
      className={openLanguage ? "navbar__secondary navbar__secondary--active" : "navbar__secondary"}
      onClick={() => openLanguage ? setOpenLanguage(false) : setOpenLanguage(true)}
    >
      <div className="navbar__secondary-controller">
        <span className="navbar__secondary-lang">ru</span>
        <span className="navbar__secondary-arrow"> &#10095; </span>
      </div>
      <ul className="navbar__secondary-list">
        <li
          className={toggleLanguage === 'ru' ? "active-lang" : ""}
          onClick={() => toggleAllRu()}
        >
          <span></span>
          <span>ru</span>
        </li>
        <li
          className={toggleLanguage === 'ua' ? "active-lang" : ""}
          onClick={() => toggleAllUa()}
        >
          <span></span>
          <span>ua</span>
        </li>
      </ul>
    </div>
  )
}

export default LanguageToggler;