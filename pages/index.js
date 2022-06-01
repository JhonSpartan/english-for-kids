// import Head from 'next/head'
// import Image from 'next/image'
import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Enrollment from "../components/Enrollment";
import About from "../components/About";
import Methodology from "../components/Methodology";
import Contacnts from "../components/Contacts";
// import ApplicationForm from "../components/ApplicationForm";
import Announcements from "../components/Announcements";
import Teachers from "../components/Teachers";
// import BestStudents from "../components/BestStudents";
import Slider from '../components/studentsSlider/Slider';
import Modal from "../components/Modal";
import GetBack from "../components/shared/GetBack";



export default function Home() {

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="container">
      <Modal 
        active={modalActive}
        setActive={setModalActive}
      />
      <Navbar />
      <Header 
        setActive={setModalActive}
      />
      <Announcements />
      <About />
      <Methodology />
      <Teachers />
      <Enrollment />
      <Slider />
      <Contacnts 
        setActive={setModalActive}
      />
      <GetBack />
    </div>
  )
}
