import React from "react";
import LNCT from "../Assets/img/LNCT.png";
import NPU from "../Assets/img/NPU.png";
import JAC from "../Assets/img/JAC.jpg";
import VPM from "../Assets/img/VPM.png";

export default function Education() {
  return (
    <div className="bg-sky-800 w-full min-h-screen pt-[60px] pb-[10px] " >
      <div className="text-center pt-[20px]">
        <h1 className="text-3xl font-bold my-3 text-white">Education</h1>
      </div>

      <div className="mb-[50px] ">
        
        <div className="max-w-[750px] md:flex flex-wrap mt-10  m-auto text-center">
            
          <div className=" w-[350px]  font-medium text-1xl m-auto my-6 hover:#02225a rounded-2xl shadow-2xl  hover:bg-sky-950 border border-white  bg-gray-300 hover:text-white duration-500  ">
            <div className="w-[100px] mt-[10px] mx-auto b">
              <img src={LNCT} alt="" />
            </div>
            <div className="m-[20px]">
              <h1>Lakshmi Narain College Of Technology</h1>
              <h1>Master of Computer Application: 8.3 CGPA</h1>
              <h1>July 2021 - June 2023</h1>
            </div>
          </div>

          <div className=" w-[350px] font-medium text-1xl m-auto  my-6  rounded-2xl shadow-2xl  duration-500  hover:text-white   hover:bg-sky-950 border border-white  bg-gray-300">
            <div className="w-[100px] mt-[10px] mx-auto ">
              <img src={NPU} alt="" />
            </div>
            <div className="m-[20px]">
              <h1>Nilamber Pitamber University</h1>
              <h1>Bachelors of Computer Application: 78.3%</h1>
              <h1>July 2016 - June 2019</h1>
            </div>
          </div>

          <div className=" w-[350px] font-medium text-1xl m-auto  my-6 rounded-2xl shadow-2xl  duration-500  hover:text-white  hover:bg-sky-950 border border-white  bg-gray-300">
            <div className="w-[100px] mt-[10px] mx-auto ">
              <img src={JAC} alt="" />
            </div>
            <div className="m-[20px]">
              <h1>Jharkhand Academic Council</h1>
              <h1>Intermediate: 56.8%</h1>
              <h1>July 2014 - June 2016</h1>
            </div>
          </div>

          <div className=" w-[350px] font-medium text-1xl m-auto my-6 rounded-2xl shadow-2xl   duration-500  hover:text-white hover:bg-sky-950 border border-white bg-gray-300 ">
            <div className="w-[100px] mt-[10px] mx-auto">
              <img src={VPM} alt="" />
            </div>
            <div className="m-[20px]">
              <h1>VPM Gyan Niketan School</h1>
              <h1>Board: 7.4 CGPA</h1>
              <h1>Mar 2014</h1>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
