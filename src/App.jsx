import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Project from './components/project.jsx'
import Skill from './components/Skill.jsx'
import Testimonials from './components/Testmonials.jsx'
import Form from './components/Form.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter } from "react-router-dom";
// bg-[#201658]


function App() {


  return (
    <>
    <BrowserRouter>
    <div className=' bg-black'>
        {/* <MatterCanvas /> */}
      
        <Navbar />
        <Hero />
      
   
        <Project />
         <Skill />
         <Testimonials />
         <Form />
         <Footer />
      
        </div>
    </BrowserRouter>
     
    </>
  )
}

export default App
