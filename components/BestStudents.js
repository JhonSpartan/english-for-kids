import Image from "next/image";
import { useState } from 'react';

const BestStudents = () => {

  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const [transL, setTransL] = useState(false);
  const [transR, setTransR] = useState(false);


  const images = ['age.svg', 'story-1.jpeg', 'story-2.jpeg', 'teacher.jpg', 'teacher2.jpg', 'team1.svg'];

  const handleNext = ()  => {
    setIndex((index + 1) % images.length);
    setIndex1((index1 + 1) % images.length);
  }

  return (
    <section className="best-students">
      <h1>Лучшие студенты</h1>
      <div className="best-students__cards">
        <div className="best-students__prev"
        // onClick={handlePrev}
        >Prev</div>
        <div className="best-students__cards-wrapper">
          <div className="best-students__card">
            <Image
              // layout="fill"
              // layout="fixed"
              width="100%"
              height="100%"
              z-index="20"
              priority
              layout="responsive"
              src={`/../public/${images[index]}`}
              alt="story1"
            />
            <Image
              // layout="fill"
              // layout="fixed"
              width="100%"
              height="100%"
              z-index="0"
              // priority
              layout="responsive"
              src={`/../public/${images[index1]}`}
              alt="story1"
            />
          </div>
        </div>  
        <div className="best-students__next"
          onClick={handleNext}
        >Next</div>
      </div>
    </section>
  )
}

export default BestStudents;