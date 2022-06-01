import { useState, useEffect } from 'react';
import SvgsSelector from './shared/SvgSelector';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Announcements = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);

  return (
    <section data-aos="fade-up" className="announcement" id="news">
      <h1>Наши новости</h1>
      <div className="announcement__wrapper">
        <div className="announcement__nav">
          <ul>
            <li 
              className={toggleState === 1 ? "announcement__item announcement__item--active" : "announcement__item"}
              onClick={() => toggleTab(1)}
            >20.07.2021</li>
            <li 
              className={toggleState === 2 ? "announcement__item announcement__item--active" : "announcement__item"}
              onClick={() => toggleTab(2)}
            >15.06.2021</li>
            <li 
              className={toggleState === 3 ? "announcement__item announcement__item--active" : "announcement__item"}
              onClick={() => toggleTab(3)}
            >10.05.2021</li>
          </ul>
        </div>
        <div className="announcement__text-block">
          <div 
            className={toggleState === 1 ? "announcement__text announcement__text--active" : "announcement__text"}
          >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
          <div 
            className={toggleState === 2 ? "announcement__text announcement__text--active" : "announcement__text"}
          >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
          <div 
            className={toggleState === 3 ? "announcement__text announcement__text--active" : "announcement__text"}
          >Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </div>
        </div>
      </div>
    </section>
  )
}

export default Announcements;