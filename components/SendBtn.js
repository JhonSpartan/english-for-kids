import React from 'react';
import { useState } from 'react';

const SendBtn = () => {

  const [sendApplic, setSendApplic] = useState(false);

  const sendBtnAct = (e) => {
    e.target.classList.add('btn__progress');
    setTimeout(function() {
      e.target.classList.add('btn__progress--fill')
    }, 500);
    setTimeout(function() {
      e.target.classList.remove('btn__progress--fill')
    }, 4100);
    setTimeout(function() {
      e.target.classList.add('btn__complete')
    }, 4400);
  }

  return (
    <div 
      className="btn"
      onClick={(e) => sendBtnAct(e)}
    >Отправить
    </div>
    )
};

export default SendBtn;
