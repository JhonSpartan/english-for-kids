import { useState } from "react";
import React from 'react';

const Form = () => {

  const [moveLabel, setMoveLabel] = useState({
    studentLastName: false,
    studentFirstName: false,
    studentAge: false,
    parentLastName: false,
    parentFirstName: false,
    parentPatron: false,
    parentNumber: false,
    parentEmail: false
  });
  
  const moveUp = (e) => {
    setMoveLabel({
      ...moveLabel,
      [e.target.name]: true
    });
  }

  const moveDown = (e) => {
    setMoveLabel({
      ...moveLabel,
      [e.target.name]: false
    });
  }

  const checkInputContent = (e) => {
    e.target.value == '' ? moveDown(e) : moveUp(e);
  }

  return (
    <form className="form">
      <h2 className="form__header">Подать заявку</h2>
      <div className="form__group-wrapper">
        <div className="form__group">
          <input 
            name="studentLastName"
            type="text"
            className={moveLabel.studentLastName ? "form__input form__input--focus" : "form__input"}
            onFocus={(e) => moveUp(e)}
            onBlur={(e) => checkInputContent(e)}
          />
          <label htmlFor="student-sname" className="student-sname">Фамилия ребенка</label>
          <span>Фамилия ребенка</span>
        </div>
        <div className="form__group">
          <input 
            name="studentFirstName"
            type="text"
            className={moveLabel.studentFirstName ? "form__input form__input--focus" : "form__input"}
            onFocus={(e) => moveUp(e)}
            onBlur={(e) => checkInputContent(e)}
          />
          <label htmlFor="student-sname" className="student-sname">Имя родителя</label>
          <span>Имя родителя</span>
        </div>
        <div className="form__group">
          <input 
            name="studentAge"
            type="text"
            className={moveLabel.studentAge ? "form__input form__input--focus" : "form__input"}
            onFocus={(e) => moveUp(e)}
            onBlur={(e) => checkInputContent(e)}
          />
          <label htmlFor="student-sname" className="student-sname">Имя ребенка</label>
          <span>Имя ребенка</span>
        </div>
        <div className="form__group">
          <input 
            name="parentLastName"
            type="text"
            className={moveLabel.parentLastName ? "form__input form__input--focus" : "form__input"}
            onFocus={(e) => moveUp(e)}
            onBlur={(e) => checkInputContent(e)}
          />
          <label htmlFor="student-sname" className="student-sname">Отчество родителя</label>
          <span>Отчество родителя</span>
        </div>
        <div className="form__group">
          <input 
            name="parentFirstName"
            type="text"
            className={moveLabel.parentFirstName ? "form__input form__input--focus" : "form__input"}
            onFocus={(e) => moveUp(e)}
            onBlur={(e) => checkInputContent(e)}
          />
          <label htmlFor="student-sname" className="student-sname">Возраст ребенка</label>
          <span>Возраст ребенка</span>
        </div>
        <div className="form__group">
          <input 
            name="parentPatron"
            type="text"
            className={moveLabel.parentPatron ? "form__input form__input--focus" : "form__input"}
            onFocus={(e) => moveUp(e)}
            onBlur={(e) => checkInputContent(e)}
          />
          <label htmlFor="student-sname" className="student-sname">Номер телефона родителя</label>
          <span>Номер телефона родителя</span>
        </div>
        <div className="form__group">
          <input 
            name="parentNumber"
            type="text"
            className={moveLabel.parentNumber ? "form__input form__input--focus" : "form__input"}
            onFocus={(e) => moveUp(e)}
            onBlur={(e) => checkInputContent(e)}
          />
          <label htmlFor="student-sname" className="student-sname">Фамилия родителя</label>
          <span>Фамилия родителя</span>
        </div>
        <div className="form__group">
          <input 
            name="parentEmail"
            type="text"
            className={moveLabel.parentEmail ? "form__input form__input--focus" : "form__input"}
            onFocus={(e) => moveUp(e)}
            onBlur={(e) => checkInputContent(e)}
          />
          <label htmlFor="student-sname" className="student-sname">Email родителя</label>
          <span>Email родителя</span>
        </div>
      </div>
      <div className="send-form-btn">Отправить</div>
    </form>
    )
}

export default Form;
