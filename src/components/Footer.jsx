import React from 'react'
import bg5 from "../Assets/img/bg5.jpg"

export default function Footer() {
  return (
    <>
    <div className='max-w-full min-h-[1px] bg-sky-800 '></div>
    <div  className='max-w-full bg-no-repeat bg-cover min-h-[70px] text-center' style={{backgroundImage: `url(${bg5})`}}>
    <h1 className='font-bold p-2 text-[18px] md:text-[24px] text-sky-800'>Portfolio @ 🅐🅑🅗🅘</h1>
        <h1 className='md:text-[16px] text-[15px]' >Created By <span><a href="/" className='font-semibold text-sky-800 underline'>Abhishek</a></span> | All Right Reserved</h1>
      
    </div>
    <div className='max-w-full min-h-[2.5px] bg-sky-800 '>
        

    </div>

    </>
  )
}
