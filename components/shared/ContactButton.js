import { useState } from 'react';

const ContactButton = () => {

  const [showNumber, setShowNumber] = useState(false);
  const changeToNumber = () => {
    // document.querySelector('.teachers__contact').textContent = '0984632120';
    // setShowNumber(true);
  }

  return (
    <div 
      className={showNumber ? "teachers__contact teachers__contact--active" : "teachers__contact"}
      onClick={() => setShowNumber(true)}
    >
      <span className="teachers__contact-text">Связаться</span>
      <span className="teachers__contact-text">0984632120</span>
    </div>
  )
}

export default ContactButton;