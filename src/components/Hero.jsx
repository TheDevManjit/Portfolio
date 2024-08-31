import React from 'react'
import TextEffect from './TextEffect'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  return (
    <div id='hero'>
      <div className='text-white  bg-[#36383b]  items-center flex justify-center mx-auto mt-[10px] '>

        <div className='w-full lg:w-1/2 absolute lg:static z-[1]  ms-4' >

          <div class="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/manjit-kumar-583b52324/
            ">
              <div class="social-button">
                <button class="relative w-12 h-12 rounded-full group">
                  <div
                    class="floater w-full h-full absolute top-0 left-0 bg-violet-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                  ></div>
                  <div
                    class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-violet-400 rounded-full"
                  >
                    <FaLinkedin />
                  </div>
                </button>
              </div>
            </a>

            <a href="https://github.com/TheDevManjit">
              <div class="social-button">

                <button class="relative w-12 h-12 rounded-full group">
                  <div
                    class="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                  ></div>
                  <div
                    class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full"
                  >
                    <FaGithub />
                  </div>
                </button>
              </div>
            </a>

           
             
          
          </div>
          <div className='flex lg:text-4xl text-2xl gap-2 mt-4 font-bold'>
            <span>I'M A </span> <TextEffect />
          </div>
          <div className='mt-5 word-warp'>
            "Web developer with expertise in React, Tailwind CSS, and full-stack technologies, driven by a passion for creating seamless, responsive, and dynamic web applications."
          </div>
          <div className='mt-6'>
            <button
              class="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              HIRE ME
            </button>
          </div>


        </div>
        <div className='z-[] '>
          <img src="images/manjit.png" alt="" className='w-[500px] drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]' />
        </div>
      </div>
    </div>
  )
}
