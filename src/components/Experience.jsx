import React from 'react'
import ZapOneIcon from '../Assets/img/ZapOneIcon.png'
import bg5 from "../Assets/img/bg5.jpg"

export default function Experience() {
  return (
    <div className="bg-no-repeat bg-cover  min-h-screen w-full pt-[40px] pb-[30px]" style={{backgroundImage: `url(${bg5})`}}>
      <div className='text-center md:text-left '>
      <div className="text-center pt-[14px]">
        <h1 className="text-3xl font-bold my-8 text-sky-900 ">Experience</h1>
      </div>
      <div className='md:max-w-[850px] max-w-[350px] text-white bg-sky-800 border border-black m-auto  my-20  p-8  rounded-xl '>
         <div className='flex items-center gap-4 flex-col md:flex-row '>
            <img className='w-[150px]' src={ZapOneIcon} alt="" />
            <h1 className='font-semibold text-[19px] underline text-blue'><a href="https://zapone.io/" target='blank'>ZapOne Solution Pvt.ltd</a></h1>
         </div>
         <h1 className='text-[15px] font-normal ml-2 my-6 '><span className='font-bold text-[19px]'>InternShip</span></h1>

         <h1 className='mt-[17px] '>• <span className='font-semibold'>ZapOne</span> - A Hub of smart tech solutions to enable better outcomes.Its range of service offerings is built focusing on the long-term digital transformation of business.</h1>
         
         <h1 className='text-[17px] mt-[17px] font-semibold '>• From (May-2023) I continue our work as a Front-End Developer in this Organization. <span className='font-normal'>(HTML , CSS , Tailwind Css , Javascript , ReactJs)</span></h1>
         
      </div>

      
      </div>
    </div>
  )
}
