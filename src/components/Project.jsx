import Btn from "./Btn";
import Card from "./Card";
import React from 'react'

export default function Project() {

   const projects =[
    {
      title:'Youtube',
      link:'https://thedevmanjit.github.io/Youtube_clone/',
      image:'youtube.png',
      tech: ['HTML','CSS','JAVASCRIPT']
    },
    {
      title:'Swiggy',
      link:'https://sweggi.vercel.app/',
      image:'swiggy.png',
      tech: ['REACT','CSS','TAILWIND']
    },
    {
      title:'PortFolio',
      link:'',
      image:'portfolio.png',
      tech: ['REACT','CSS','TAILWIND']
    },
    {
      title:'Digital Clock',
      link:'https://thedevmanjit.github.io/digital_clock/',
      image:'clock.png',
      tech: ['HTML','CSS','JAVASCRIPT']
    },
   ]

  return (
    <div className="  mt-12 xl:w-[1200px] scroll-smooth duration-500 mx-auto" id="project">
      <h1 className="text-center text-white text-3xl ">PROJECTS</h1>
      <ul className='text-white lg:flex gap-3  px-4 pt-12 pb-5 rounded-xl hidden justify-center'>
        
             
         <Btn title='Frontend'/>
         <Btn title='Backend'/>
         <Btn title='Fullstack'/>


        
      
       
      
      </ul>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3  mt-4 gap-5 justify-center overflow-hidden md:mx-0 mx-4">
       {
        projects.map((project)=>{
          return <Card {...project} />
        })
       }

      </div>
    </div>

  )
}
