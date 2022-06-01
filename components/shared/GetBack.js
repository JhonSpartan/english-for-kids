import { useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';



const GetBack = () => {

  const handleScroll = () => {
    const getBack = document.querySelector('.get-back');
    getBack.classList.toggle('back-sticky', window.scrollY > 0);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });


  return (
    <div 
      className="get-back"
      onClick={() => scroll.scrollToTop()}  
    >
      <span> &#10095; </span>
    </div>
  )
}

export default GetBack;