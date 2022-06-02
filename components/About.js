import React from "react";
import Image from "next/image";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import imgStory1 from '../public/story-1.jpeg';
import imgStory2 from '../public/story-2.jpeg';


const About = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);

  return (
    <section className="about" id="about">
      <div data-aos="fade-right" className="about__pictures">
        <Image
          // layout="fill"
          // layout="fixed"
          width="100%"
          height="100%"
          // priority
          layout="responsive"
          // src="/../public/story-1.jpeg"
          src={imgStory1}
          alt="story1"
        />
        <Image
           // layout="fill"
          // layout="fixed"
          width="100%"
          height="100%"
          // priority
          layout="responsive"
          // src="/../public/story-2.jpeg"
          src={imgStory2}
          alt="story2"
        />
      </div>
      <div data-aos="fade-left" className="about__content">
        <h1>О нас</h1>
        <p>Наши курсы - самые первые в городе. Основаны в 1990 году. Первыми курсантами были студенты нынешнего ХНУ. Через год был сделан пробный набор детей 4-5 лет. Принципы их обучения легли в основу всей последующей программы. 
          Фундаментом нашей программы стала программа первого класса советских спецшкол.
          После неуспешных попыток работы с нанятыми преподавателями, мы пришли к самостоятельному преподаванию, сделав бизнес семейным и являемся единственными постоянными преподавателями.
          В 1998 году нами была составлена собственная книга базового обучения с учетом своего видения преподавания и местного контингента учеников. Первая часть - “Starter” (для первого семестра), а также “English for kids”. Содержание книги меняется из года в год в зависимости от способностей и запросов детей данного конкретного набора. Книги сознательно создавались черно-белыми, чтобы дети могли их разрисовывать на свой вкус.</p> 
      </div>
    </section>
    
  )
}

export default About;