import React from 'react';
import Form from './Form';
import Image from 'next/image';
import img from '../public/applic2.svg';

const Modal = ({active, setActive}) => {
  return (
    <div 
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div 
        className={active ? "modal__content active" : "modal__content"}
        onClick={e => e.stopPropagation()}
      >
        <div className="navbar__title"> 
          <span>English</span>
          <div>
            <span>For</span>
            <span>Kids</span>
          </div>
        </div>
        <div className="modal__content-img">
          <Image 
            width="100%"
            height="100%"
            layout="responsive"
            // width="500px"
            // height="500px"
            // layout="fixed"
            // src="/../public/applic2.svg"
            src={img}
            alt="story1"
          />
        </div>
        <Form />
      </div>
    </div>
  )
}

export default Modal;