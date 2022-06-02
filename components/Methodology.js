import { useState, useEffect } from "react";
// import SvgsSelector from './shared/SvgSelector';
import Image from "next/image";
import Aos from 'aos';
import 'aos/dist/aos.css';
import imgFilter from '../public/filter.svg';
import imgParentsCall from '../public/parents_call.svg';
import imgDuration from '../public/duration.svg';
import imgNoTranslate from '../public/no_translate.svg';
import imgManyVectors from '../public/many_vectors.svg';


const Methodology = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);

  return (
    <section data-aos="fade-up" className="methodology" id="methodology">
        <h1 className="methodology__header">Наши принципы обучения</h1>
        <div className="methodology__nav">
          <ul>
            <li
              className={toggleState === 1 ? "methodology__item methodology__item--active" : "methodology__item"}
              onClick={() => toggleTab(1)}
            >     
              <span>Отсев</span> 
            </li>
            <li 
              className={toggleState === 2 ? "methodology__item methodology__item--active" : "methodology__item"}
              onClick={() => toggleTab(2)}
            >     
              <span>Связь с родителями</span>
            </li>
            <li 
              className={toggleState === 3 ? "methodology__item methodology__item--active" : "methodology__item"}
              onClick={() => toggleTab(3)}
            >      
              <span>Продолжительность курса</span>
            </li>
            <li 
              className={toggleState === 4 ? "methodology__item methodology__item--active" : "methodology__item"}
              onClick={() => toggleTab(4)}
            >       
              <span>Беспереводная методика</span>
            </li>
            <li 
              className={toggleState === 5 ? "methodology__item methodology__item--active" : "methodology__item"}
              onClick={() => toggleTab(5)}
            >      
              <span>Разноплановость</span>
            </li>
          </ul>
        </div>
        <div className="methodology__text-block">
          <div
            className={toggleState === 1 ? "methodology__text methodology__text--active" : "methodology__text"}
          >
            <Image 
              width="100%"
              height="100%"
              layout="responsive"
              // width="500px"
              // height="500px"
              // layout="fixed"
              // src="/../public/filter.svg"
              src={imgFilter}
              alt="story1"
            />
            <div className="methodology__text-info">
              <h2>Отсев</h2>
              <p>Всех родителей мы предупреждаем, что берем на учебу всех подряд, но потом проводим отсев на свое усмотрение. В конце каждого учебного года преподаватель определяет, кто из учеников справился с программой и продолжит учебу на следующем году. При отчислении используем аргумент - совесть не позволяет брать плату за не учащегося ребенка.</p> 
            </div>  
          </div>
          <div
            className={toggleState === 2 ? "methodology__text methodology__text--active" : "methodology__text"}
          >
            <Image 
              width="100%"
              height="100%"
              layout="responsive"
              // width="200px"
              // height="400px"
              // layout="fixed"
              // src="/../public/parents_call.svg"
              src={imgParentsCall}
              alt="story1"
            />
            <div className="methodology__text-info">
              <h2>Связь с родителями</h2>
              <p>Обучение проходит в тесном контакте с родителями: большого организационного собрания перед началом учебного года, звонки и письма в мессенджерах</p>
            </div>
          </div>
          <div
            className={toggleState === 3 ? "methodology__text methodology__text--active" : "methodology__text"}
          >
            <Image 
              width="100%"
              height="100%"
              layout="responsive"
              // width="500px"
              // height="500px"
              // layout="fixed"
              // src="/../public/duration.svg"
              src={imgDuration}
              alt="story1"
            />
            <div className="methodology__text-info">
              <h2>Продолжительность курса</h2>
              <p>Курс рассчитан на 10 лет. С ноля до выпуска из школы (с подготовкой к выпускным экзаменам: ДПА, ЗНО и ко вступлению в ВУЗ: TOEFL и IELTS).</p>
            </div>
          </div>
          <div
            className={toggleState === 4 ? "methodology__text methodology__text--active" : "methodology__text"}
          >
            <Image 
              width="100%"
              height="100%"
              layout="responsive"
              // width="500px"
              // height="500px"
              // layout="fixed"
              // src="/../public/no_translate.svg"
              src={imgNoTranslate}
              alt="story1"
            />
            <div className="methodology__text-info">
              <h2>Беспереводная методика</h2>
              <p>Беспереводная методика, без обращения к родному языку. В вводном курсе(первый семестр) дети учатся восприятию языка на слух, учатся произношению используя картинки и аудио-материалы.</p>
            </div>
          </div>
          <div
            className={toggleState === 5 ? "methodology__text methodology__text--active" : "methodology__text"}
          >
            <Image 
              width="100%"
              height="100%"
              layout="responsive"
              // width="500px"
              // height="500px"
              // layout="fixed"
              // src="/../public/many_vectors.svg"
              src={imgManyVectors}
              alt="story1"
            />
            <div className="methodology__text-info">
              <h2>Разноплановость</h2>
              <p>Во время курса ученики полностью изучают грамматику языка и практикуются на грамматических упражнениях. Ученики более старших групп регулярно пишут сочинения, которые разбираются и оцениваются преподавателем.  Также, дети постоянно практикуют язык во время длительных дискуссий между учениками и учителем. К концу курса ученики также имеют богатый обширный словарный запас, богатый синонимами, идиомами и вокабуляром для разных стилей общения.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Methodology;