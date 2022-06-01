import SvgsSelector from './shared/SvgSelector';

const Contacts = ( {setActive } ) => {

  return (
    <section 
      className="contacts" 
      id="contacts"
    >
      <div 
        className="header__btn"
        onClick={() => setActive(true)}
      >Подать заявку
      </div>
      <div className="contacts__info">
        <div className="contacts__copyright">
          &copy;&nbsp;<span>English For Kids, 1990-2021</span>
        </div>
        <div className="contacts__main">
          <div className="contacts__adress contacts__main-item">
            <span>
              <SvgsSelector 
                id="location"
              />
            </span>
            <span>Хмельницкий, Свободы ул. 2/1</span>
          </div>
          <div className="contacts__phone contacts__main-item">
            <span>
              <SvgsSelector 
                id="phone"
              />
            </span>
            <span>4324384477878</span>
          </div>
          <div className="contacts__email contacts__main-item">
            <span>
              <SvgsSelector 
                id="mail"
              />
            </span>
            <span>lalal@mgamil.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts;