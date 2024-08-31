import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Skill() {

    return (
        <div className='xl:w-[1200px] mx-auto'>
            <h1 className='text-white text-center text-5xl mt-14'>Technology I am using</h1>
            <div className='overflow-x-auto   lg:ms-24 px-4 mt-12 pb-16'>
                <div className='flex flex-nowrap gap-5'>
                    <div className='flex flex-col items-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] min-w-[150px]'>
                        <TiHtml5 className='text-9xl text-orange-500' />
                        <span>HTML</span>
                    </div>
                    <div className='flex flex-col items-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] min-w-[150px]'>
                        <IoLogoCss3 className='text-9xl text-sky-500' />
                        <span>CSS</span>
                    </div>
                    <div className='flex flex-col items-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] min-w-[150px]'>
                        <TbBrandJavascript className='text-9xl text-yellow-500' />
                        <span>JAVASCRIPT</span>
                    </div>
                    <div className='flex flex-col items-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] min-w-[150px]'>
                        <FaReact className='text-9xl text-sky-500' />
                        <span>REACT</span>
                    </div>
                    <div className='flex flex-col items-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] min-w-[150px]'>
                        <FaGithub className='text-9xl text-white' />
                        <span>GIT HUB</span>
                    </div>
                    <div className='flex flex-col items-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] min-w-[150px]'>
                        <BiLogoPostgresql className='text-9xl text-sky-900' />
                        <span>POSTGRESQL</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
