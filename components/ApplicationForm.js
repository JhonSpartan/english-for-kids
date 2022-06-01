import Image from 'next/image';
import Slider from './slider/Slider';

const ApplicationForm = () => {
  return(
    <section className="slider">
      <h1>Достижения учеников</h1>
      <Slider />
    </section>
  )
//   return (
//     <section className="applicationForm">
//       <div className="applicationForm__bg">
//         <svg
//           preserveAspectRatio="none"
//           viewBox="0 0 1200 120"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M1150 120L0 16.48V0h1200v120z" />
//         </svg>
//       </div>
//       <div className="applicationForm__container">
//         <div className="applicationForm__image">
//           <Image
//             // layout="fill"
//             width="350px"
//             height="350px"
//             priority
//             src="/../public/applic.svg"
//             alt="Application form image"
//           />
//         </div>
//         <div className="applicationForm__content">
//           <form className="application-form" action="index.html">
//             <h2 className="title">Application form</h2>
//             <div className="inpput-wrapper">
//               <div className="pt1">
//                 <div className="input-div">
//                   <div className="icon-block">
//                     <span className="fas fa-envelope"></span>
//                   </div>
//                   <div className="input-block">
//                     <h5>Имя ребенка</h5>
//                     <input type="text" className="form__input" required="required"/>
//                   </div>
//                 </div>
//                 <div className="input-div">
//                   <div className="icon-block">
//                     <span className="fas fa-envelope"></span>
//                   </div>
//                   <div className="input-block">
//                     <h5>Фамилия</h5>
//                     <input type="text" className="form__input" required="required"/>
//                   </div>
//                 </div> 
//                 <div className="input-div">
//                   <div className="icon-block">
//                     <span className="fas fa-envelope"></span>
//                   </div>
//                   <div className="input-block">
//                     <h5>Возраст ребенка</h5>
//                     <input type="text" className="form__input" required="required"/>
//                   </div>
//                 </div> 
//                 <div className="input-div">
//                   <div className="icon-block">
//                     <span className="fas fa-envelope"></span>
//                   </div>
//                   <div className="input-block">
//                     <h5>Имя родителя</h5>
//                     <input type="text" className="form__input" required="required"/>
//                   </div>
//                 </div>
//               </div>
//               <div className="pt2">
//                 <div className="input-div">
//                   <div className="icon-block">
//                     <span className="fas fa-envelope"></span>
//                   </div>
//                   <div className="input-block">
//                     <h5>Отчество родителя</h5>
//                     <input type="text" className="form__input" required="required"/>
//                   </div>
//                 </div> 
//                 <div className="input-div">
//                   <div className="icon-block">
//                     <span className="fas fa-envelope"></span>
//                   </div>
//                   <div className="input-block">
//                     <h5>Фамилия родителя</h5>
//                     <input type="text" className="form__input" required="required"/>
//                   </div>
//                 </div> 
//                 <div className="input-div">
//                   <div className="icon-block">
//                     <span className="fas fa-envelope"></span>
//                   </div>
//                   <div className="input-block">
//                     <h5>Контактный номер</h5>
//                     <input type="text" className="form__input" required="required"/>
//                   </div>
//                 </div> 
//                 <div className="input-div">
//                   <div className="icon-block">
//                     <span className="fas fa-envelope"></span>
//                   </div>
//                   <div className="input-block">
//                     <h5>Электронная почта</h5>
//                     <input type="email" className="form__input" required="required"/>
//                   </div>
//                 </div>
//               </div>  
//             </div>
//             <button type="submit" className="btn-form btn-form--orange">Отправить</button>
//           </form>
//         </div>
//         <div className="applicationForm__footer">Footer</div>
//       </div>  
//     </section>
//   )
}

export default ApplicationForm;