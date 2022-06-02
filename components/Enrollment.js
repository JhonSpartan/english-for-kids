import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import imgBase from '../public/base3.svg';
import imgTeam from '../public/team3.svg';
import imgAge from '../public/age3.svg';
import imgReading from '../public/reading3.svg';


const Enrollment = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);

  return (
    <section className="enrollment" id="enrollment">
      <h1 data-aos="fade-up">Условия зачисления</h1>
      <div className="enrollment__wrapper">
        <div data-aos="fade-right" className="enrollment__group-left">
          <div className="enrollment__item">
            <Image
              // layout="fill"
              width="400px"
              height="200px"
              layout="fixed"
              priority
              // src="/../public/base3.svg"
              src={imgBase}

              alt="Age image"
            />
            <h3>База</h3>
            <p>Чем меньше у ребенка знаний по английскому при поступлении, тем лучше, поскольку неизвестно где и ребенок уже учился и набрался ошибок, а также, поскольку начинаем
            с самого нуля, детям с базой часто становится скучно, они теряют интерес, расслабляются, что приводит к отчислению.</p>
          </div>
          <div className="enrollment__item">
            <Image
              // layout="fill"
              width="400px"
              height="200px"
              priority
              // src="/../public/team3.svg"
              src={imgTeam}
              alt="Age image"
            />
            <h3>Командная работа</h3>
            <p>Тяжело учиться интровертам, некомандным ребятам и детям, не ходившим в садик. У нас - командная работа, нужно постоянно держать внимание, чтобы следить за работой других детей в группе и исправлять чужие ошибки.</p>
          </div>
        </div>
        <div data-aos="fade-left" className="enrollment__group-right">
          <div className="enrollment__item">
            <Image
              // layout="fill"
              width="400px"
              height="200px"
              // src="/../public/age3.svg"
              src={imgAge}
              alt="Age image"
              priority
            />
            <h3>Возраст</h3>
            <p>Возраст 7-8 лет, только после 1-го класса (с развившейся усидчивостью и пониманием, что такое школа, домашние задания и дисциплина). Детей 9 лет и старше на первый год иногда берем с условием, что он/она будет работать лучше всех в группе с тем, чтобы перевести ребенка на более высокий уровень обучения, так как группы формируются по возрастному принципу и программа должна быть пройдена к окончанию школы.</p>
          </div>
          <div className="enrollment__item">
            <Image
              // layout="fill"
              width="400px"
              height="200px"
              priority
              // src="/../public/reading3.svg"
              src={imgReading}
              alt="Age image"
            />
            <h3>Чтение</h3>
            <p>Ребенок должен бегло читать на родном языке.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Enrollment;