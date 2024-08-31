import React, { useState } from 'react';
import { IoReorderThree } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleScroll = (event, targetId) => {
    event.preventDefault(); // Prevent the default anchor behavior
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setToggle(false); // Close the navbar if it's open (for mobile view)
  };

  return (
    <div>
      <header>
        <div
          className={`fixed top-0 z-[99] right-0 h-full bg-gray-800 text-white transition-all duration-300 ease-in-out ${
            toggle ? 'w-full' : 'w-0'
          }`}
          style={{
            right: toggle ? '0%' : '-100%',
          }}
        >
          <nav className='flex justify-between px-8 mt-10'>
            <ul className='text-black text-2xl flex flex-col items-center ps-5 gap-8'>
              <li className='group relative order-2' onClick={(e) => handleScroll(e, 'home')}>
                <a href="#home" className="text-white px-3 py-2 relative z-10">Home</a>
                <span className="absolute inset-0 bg-indigo-500 transition-transform transform scale-x-0 origin-left group-hover:scale-x-100 rounded-"></span>
              </li>
              <li className='group relative' onClick={(e) => handleScroll(e, 'project')}>
                <a href="#project" className="text-white px-3 py-2 relative z-10">Projects</a>
                <span className="absolute inset-0 bg-indigo-500 transition-transform transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              </li>
              <li className='group relative' onClick={(e) => handleScroll(e, 'form')}>
                <a href="#form" className="text-white px-3 py-2 relative z-10">Contact</a>
                <span className="absolute inset-0 bg-indigo-500 transition-transform transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              </li>
            </ul>
            <RxCross1 className='text-white align-end text-4xl' onClick={() => setToggle(false)} />
          </nav>
        </div>
        <div className='flex justify-around px-4 py-3 items-center'>
          <img src="/images/logo.png" alt="Logo" className='w-15 h-10' />
          <div>
            <ul className='text-white lg:flex gap-3 text-xlr px-4 p rounded-xl hidden'>
              <li className='group relative'>
                <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-white px-3 py-2 relative z-10">Home</a>
                <span className="absolute inset-0 bg-indigo-500 transition-transform transform scale-x-0 origin-left rounded-lg group-hover:scale-x-100"></span>
              </li>
              <li className='group relative'>
                <a href="#project" onClick={(e) => handleScroll(e, 'project')} className="text-white px-3 py-2 relative z-10">Projects</a>
                <span className="absolute inset-0 rounded-lg bg-indigo-500 transition-transform transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              </li>
              <li className='group relative'>
                <a href="#form" onClick={(e) => handleScroll(e, 'form')} className="text-white px-3 py-2 relative z-10">Contact</a>
                <span className="absolute inset-0 rounded-lg bg-indigo-500 transition-transform transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              </li>
            </ul>
          </div>

          <div>
            <div>
              <IoReorderThree className='text-white text-6xl lg:hidden' onClick={() => setToggle(true)} />
            </div>
            <a href="https://drive.google.com/file/d/1_i1z4nCTopOGQxcM5BgPZePtI41tidIi/view?usp=drive_a">
              <button className="cursor-pointer hidden lg:flex group relative gap-1.5 px-5 py-2 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Interface / Download">
                      <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path>
                    </g>
                  </g>
                </svg>
                RESUME
                <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                  Download
                </div>
              </button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
