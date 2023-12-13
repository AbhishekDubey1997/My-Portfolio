import React from "react";
import img2 from "../Assets/img/img2.jpg";
import { IoIosCall } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import AbhishekDubeyCV from "../Assets/img/AbhishekDubeyCV.pdf"
import bg5 from "../Assets/img/bg5.jpg"

export default function About() {
  return (
    <div className="bg-no-repeat bg-cover  min-h-screen w-full md:mb-[-80px] pt-[50px] " style={{backgroundImage: `url(${bg5})`}}>
      <div className="text-center ">
        <h1 className="text-3xl font-bold pt-[35px] text-sky-900 ">About Me</h1>
        <h1 className="p-3">Introduction</h1>
      </div>

      <div className="md:max-w-[950px] mb-[80px] mt-[50px] pb-[70px] m-auto md:flex ">
        <div className="md:max-w-[350px] max-w-[250px] m-auto">
          <img src={img2} className="rounded" alt="" />
        </div>

        <div className=" md:max-w-[450px] max-w-[300px] m-auto ">
        <div className=" md:mt-[10px] my-[20px] font-san-serif ">
          <p>
            Hello! I'm Abhishek Dubey, Completed Master in Computer Application
            graduate from Lakshmi Narain College of Technology, Bhopal. As a
            passionate Front-End Developer, I continually strive to exceed my
            limits, embracing creativity and innovation to achieve excellence in
            the dynamic field of web development..
          </p>
        </div>

        <div className="flex items-center py-3 text-[18px] ">
          <div className="mr-[20px]">
            <IoPersonSharp />
          </div>
          <h1>Abhishek Dubey</h1>
        </div>

        <div className="flex items-center text-[18px] ">
          <div className="mr-[20px]">
            <IoIosCall />
          </div>
          <h1>+91 9128462097</h1>
        </div>
        
        <div className="flex items-center py-3 text-[18px]">
          <div className="mr-[20px]">
            <IoMail />
          </div>
          <h1>akdubey.dtg@gmail.com</h1>
        </div>

        <div className="flex items-center pb-3 text-[18px]">
          <div className="mr-[20px]">
            <IoMdHome />
          </div>
          <h1>Hyderabad,Telangana</h1>
        </div>

        <button type="submit" class="bg-transparent hover:bg-sky-800 duration-500 text-black font-semibold hover:text-white py-2 px-6 border border-black hover:border-black rounded mt-6 mb-[30px]">
          <a href={AbhishekDubeyCV} target="blank">Download CV</a>
        </button>
        </div>

        
      </div>
    </div>
  );
}
