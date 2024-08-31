import React from 'react'
import Btn from './Btn' 

export default function Card(props) {
  const tech = [...props.tech]

  return (
   <>
   <a href={props.link}>


   <div className="card w-[400px] h-[300px]">
  <div className="content">
    <div className="back">
      <div className="back-content">
        
        <img src={`images/${props.image}`} alt="" />
        <strong>{props.title}</strong>
      
      </div>
    </div>
    <div className="front">
      <div className="img">
        <div className="circle"></div>
        <div className="circle" id="right"></div>
        <div className="circle" id="bottom"></div>
      </div>

      <div className="front-content">
        <small className="badge text-center mx-auto">Tachnology Used</small>
        <div className="description">
        {
       tech.map((e)=>{
        return <Btn title={e} />
       })
        }
       
        </div>
      </div>
    </div>
  </div>
</div>
   </a>
   

   </>
  )
}
