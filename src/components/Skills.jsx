import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import bg5 from "../Assets/img/bg5.jpg";


export default function Skills() {
  return (
    <div className="bg-no-repeat bg-cover min-h-screen w-full pb-[30px] pt-[50px]" style={{backgroundImage: `url(${bg5})`}}>
       <div className="text-center pt-[14px]">
        <h1 className="text-3xl font-bold my-5 text-sky-900 ">Skills</h1>
        <h1 className='font-semibold'>My Skills</h1>
      </div>
      <div className='md:max-w-[850px] max-w-[350px] border border-sky-900 m-auto  my-14  p-8 flex flex-wrap justify-between rounded-xl '>
        <div className='flex items-center md:w-[160px] w-[120px] flex-col    bg-slate-200 py-[10px] px-[20px] m-2 border font-bold border-black rounded hover:text-white  hover:bg-sky-950  duration-500   cursor-pointer gap-4'>
          <div className='text-5xl'>
          <TiHtml5 />
          </div>
          <h1>HTML</h1>
        </div>

        <div className='flex items-center   bg-slate-200 py-[10px] px-[20px] m-2 border font-bold border-black rounded  hover:bg-sky-950  duration-500  hover:text-white cursor-pointer md:w-[160px] w-[120px] flex-col  gap-4'>
          <div className='text-5xl'>
          <IoLogoCss3  />
          </div>
          <h1>CSS</h1>
        </div>

        <div className='flex items-center   bg-slate-200 py-[10px] px-[20px] m-2 border font-bold border-black rounded  hover:bg-sky-950  duration-500  hover:text-white cursor-pointer gap-4 md:w-[160px] w-[120px] flex-col '>
          <div className='text-5xl'>
          <IoLogoJavascript />
          </div>
          <h1>Javascript</h1>
        </div>

        <div className='flex items-center   bg-slate-200 py-[10px] px-[20px] m-2 border font-bold border-black rounded  hover:bg-sky-950  duration-500  hover:text-white cursor-pointer gap-4 md:w-[160px] w-[120px] flex-col '>
          <div className='text-5xl'>
          <FaReact  />
          </div>
          <h1>ReactJs</h1>
        </div>

        <div className='flex items-center   bg-slate-200 py-[10px] px-[20px] m-2 border font-bold border-black rounded  hover:bg-sky-950  duration-500  hover:text-white cursor-pointer gap-4 md:w-[160px] w-[120px] flex-col text-center'>
          <div className='text-5xl'>
          <SiTailwindcss  />
          </div>
          <h1>Tailwind Css</h1>
        </div>

        <div className='flex items-center   bg-slate-200 py-[10px] px-[20px] m-2 border font-bold border-black rounded  hover:bg-sky-950  duration-500  hover:text-white cursor-pointer gap-4 md:w-[160px] w-[120px] flex-col '>
          <div className='text-5xl'>
          <IoLogoFirebase />
          </div>
          <h1>Firebase</h1>
        </div>

        <div className='flex items-center   bg-slate-200 py-[10px] px-[20px] m-2 border font-bold border-black rounded  hover:bg-sky-950  duration-500  hover:text-white cursor-pointer gap-4 md:w-[160px] w-[120px] flex-col '>
          <div className='text-5xl'>
          < FaGithub />
          </div>
          <h1>GitHub</h1>
        </div>

        <div className='flex items-center   bg-slate-200 py-[10px] px-[20px] m-2 border font-bold border-black rounded  hover:bg-sky-950  duration-500  hover:text-white cursor-pointer gap-4 md:w-[160px] w-[120px] flex-col '>
          <div className='text-5xl'>
          <FaBootstrap />
          </div>
          <h1>Bootstrap</h1>
        </div>

      </div>

      
    </div>
  )
}
