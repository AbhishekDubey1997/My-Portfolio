import React from 'react'
import img1 from "../Assets/img/images.jpg";
import img2 from "../Assets/img/img2.jpg";
import { IoIosCall } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import AbhishekDubeyCV from "../Assets/img/AbhishekDubeyCV.pdf"
import bg5 from "../Assets/img/bg5.jpg"
import LNCT from "../Assets/img/LNCT.png";
import NPU from "../Assets/img/NPU.png";
import JAC from "../Assets/img/JAC.jpg";
import VPM from "../Assets/img/VPM.png";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import pro1 from "../Assets/img/pro1.png";
import ExpenseTApp from "../Assets/img/ExpenseTApp.png";
import ToDoList from "../Assets/img/ToDoList.png";
import FoodShopimg from "../Assets/img/FoodShopimg.png";
import PortfolioImg from "../Assets/img/PortfolioImg.png";
import { SiRender } from "react-icons/si";
import ZapOneIcon from '../Assets/img/ZapOneIcon.png'
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';




export default function Home() {
  return (
    <>
    <div className='bg-sky-800 text-white  w-full  md:flex md:text-left text-center gap-28 pt-28  md:px-[200px] px-[20px] pb-[80px]'  >
     
        <div className='md:w-[500px] md:pt-[60px]'>

            <span className='text-3xl  py-[50px]'>Hello, I'm</span>

            <h1 className='md:text-[40px] text-[30px] font-bold'>Abhishek Dubey</h1>

            <h3 className='text-2xl'>Frontend Developer 🧑‍💻</h3>

            <p className='py-5'>With a passion for Coding and problem-solving , I have honed my skills in Frontend Development to create innovative and user-friendly web applications.</p>

            <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-6 border border-white hover:border-black rounded duration-500"><Link to="/Contact">Contact</Link></button>

        </div>
        
        <div>
            <img className='md:h-[430px] h-[350px] m-auto  md:mt-1 mt-12 rounded shadow-md' src={img1} alt="" />
        </div>
      
    </div>

    
    {/* -------------home------------ */}

    <div className="bg-no-repeat bg-cover  min-h-screen w-full md:mb-[50px]  mb-[-80px] " style={{backgroundImage: `url(${bg5})`}}>
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


    {/* -----------Education---------- */}

    <div className="bg-sky-800 w-full min-h-screen md:mt-[-80px] pb-[10px] " >
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


    {/* -----------skills--------- */}

    <div className="bg-no-repeat bg-cover min-h-screen w-full pb-[30px]" style={{backgroundImage: `url(${bg5})`}}>
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

    {/* ----------projects----------- */}

    <div className="bg-sky-800 min-h-screen w-full pb-[45px]">
        <div className="text-center pt-[14px]">
          <h1 className="text-3xl font-bold my-3 text-white ">Projects </h1>
        </div>
        <div className="max-w-[1000px] m-auto  mt-10 flex flex-wrap justify-center gap-7 md:gap-0 ">

        <div className="w-[340px] md:w-[300px] m-auto md:m-4 border border-white  bg-gray-300 hover:text-white hover:bg-sky-950   rounded duration-1000">
            <div className="overflow-hidden h-[200px] p-1 rounded">
              <img
                className="hover:scale-105 h-[190px] duration-500 "
                src={pro1}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between p-2">
              <h1 className="font-bold md:text-[14px] text-[16px]">
                WsCube Tech Clone
              </h1>

              <div className="flex gap-3 text-[20px]">
                <div className=" p-2 rounded w-8">
                  <a
                    href="https://github.com/AbhishekDubey1997/Tailwind-Website-projects"
                    target="blank"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </div>

                <div className=" p-2 rounded w-8">
                  {" "}
                  <a
                    href="https://tailwind-react-projets.onrender.com"
                    target="blank"
                  >
                    {" "}
                    <SiRender />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[340px] md:w-[300px] m-auto md:m-4 border border-white  bg-gray-300 hover:text-white hover:bg-sky-950 rounded duration-1000">
            <div className="overflow-hidden h-[200px] p-1 rounded">
              <img
                className="hover:scale-105 h-[190px] duration-500 "
                src={ExpenseTApp}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between p-2">
              <h1 className="font-bold md:text-[14px] text-[17px]">
                Expense-Tracker Web App
              </h1>

              <div className="flex gap-3 text-[22px]">
                <div className=" p-2 rounded w-8">
                  <a
                    href="https://github.com/AbhishekDubey1997/expense-tracker-firebase-react"
                    target="blank"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </div>

                <div className=" p-2 rounded w-8">
                  {" "}
                  <a
                    href="https://expense-tracker-a3991.firebaseapp.com/"
                    target="blank">
                    {" "}
                    <IoLogoFirebase />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[340px] md:w-[300px] m-auto md:m-4  border border-white  bg-gray-300 hover:text-white hover:bg-sky-950 rounded duration-1000">
            <div className="overflow-hidden h-[200px] p-1 rounded">
              <img
                className="hover:scale-105 h-[190px] duration-500 "
                src={PortfolioImg}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between p-2">
              <h1 className="font-bold md:text-[14px] text-[17px]">
              Personal-Portfolio-Website
              </h1>

              <div className="flex gap-3 text-[22px]">
                <div className=" p-2 rounded w-8">
                  <a
                    href="https://github.com/AbhishekDubey1997/my-portfolio"
                    target="blank"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </div>

                <div className="p-2 rounded w-8">
                  {" "}
                  <a
                    href="https://my-portfolio-qozf.onrender.com"
                    target="blank"
                  >
                    {" "}
                    <SiRender />
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* <div className="w-[340px] md:w-[300px] m-auto md:m-4 border border-white  bg-gray-300 hover:text-white hover:bg-sky-950 rounded duration-1000">
            <div className="overflow-hidden h-[200px] p-1 rounded">
              <img
                className="hover:scale-105 h-[190px] duration-500 "
                src={pro1}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between p-2">
              <h1 className="font-bold md:text-[14px] text-[17px]">
                Weather Forecast App
              </h1>

              <div className="flex gap-3 text-[22px]">
                <div className="p-2 rounded w-8">
                  <a
                    href="https://github.com/AbhishekDubey1997/Weather_App"
                    target="blank"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </div>

                <div className="p-2 rounded w-8">
                  {" "}
                  <a
                    href="https://tailwind-react-projets.onrender.com"
                    target="blank"
                  >
                    {" "}
                    <SiRender />
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          <div className="w-[340px] md:w-[300px] m-auto md:m-4 border border-white  bg-gray-300 hover:text-white hover:bg-sky-950 rounded duration-1000">
            <div className="overflow-hidden h-[200px] p-1 rounded  ">
              <img
                className="hover:scale-105 h-[190px] duration-500 "
                src={ToDoList}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between p-2">
              <h1 className="font-bold md:text-[14px] text-[17px]">
                To-Do-List App
              </h1>

              <div className="flex gap-3 text-[22px]">
                <div className=" p-2 rounded w-8">
                  <a
                    href="https://github.com/AbhishekDubey1997/To-Do-List-Web-App"
                    target="blank"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </div>

                <div className=" p-2 rounded w-8">
                  {" "}
                  <a
                    href="https://to-do-list-ns13.onrender.com"
                    target="blank"
                  >
                    {" "}
                    <SiRender />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[340px] md:w-[300px] m-auto md:m-4 border border-white  bg-gray-300 hover:text-white hover:bg-sky-950 rounded">
            <div className="overflow-hidden h-[200px] p-1 rounded" >
              <img
                className="hover:scale-105 h-[190px] duration-500 "
                src={FoodShopimg}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between p-2">
              <h1 className="font-bold md:text-[14px] text-[18px]">
                Food Store Web Clone
              </h1>

              <div className="flex gap-3 text-[22px]">
                <div className=" p-2 rounded w-8">
                  <a
                    href="https://github.com/AbhishekDubey1997/Foods-Shop"
                    target="blank"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </div>

                <div className=" p-2 rounded w-8">
                  {" "}
                  <a
                    href="https://food-shop-gl4w.onrender.com"
                    target="blank"
                  >
                    {" "}
                    <SiRender />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --------experience--------- */}

      <div className="bg-no-repeat bg-cover  min-h-screen w-full " style={{backgroundImage: `url(${bg5})`}}>
      <div className='text-center md:text-left '>
      <div className="text-center pt-[14px]">
        <h1 className="text-3xl font-bold my-8 text-sky-900 ">Experience</h1>
      </div>
      <div className='md:max-w-[850px] max-w-[350px] text-white bg-sky-800 border border-black m-auto  my-20  p-8  rounded-xl '>
         <div className='flex items-center gap-4 flex-col md:flex-row '>
            <img className='w-[150px]' src={ZapOneIcon} alt="" />
            <h1 className='font-semibold text-[19px] underline text-blue'><a href="https://zapone.io/" target='blank'>ZapOne Solution Pvt.ltd</a></h1>
         </div>
         <h1 className='text-[15px] font-normal ml-2 my-6 '><span className='font-bold text-[19px]'>InterShip</span> (Oct23-Jan24)</h1>

         <h1 className='mt-[17px] '>• <span className='font-semibold'>ZapOne</span> - A Hub of smart tech solutions to enable better outcomes.Its range of service offerings is built focusing on the long-term digital transformation of business.</h1>
         
         <h1 className='text-[17px] mt-[17px] font-semibold '>• Worked as a Front-End Developer <span className='font-normal'>(HTML , CSS , Tailwind Css , Javascript , ReactJs)</span></h1>
         
      </div>

      
      </div>
    </div>

    {/* -----------contact-------- */}

    <div className=" min-h-screen bg-sky-800 pb-[100px]">
      <div className="text-center pt-[20px]">
        <h1 className="text-3xl font-bold my-3 text-white">Contact</h1>
      </div>

      <div className="max-w-[900px] md:flex justify-between m-auto mt-[50px] p-4 text-white">
        <div className="max-w-[400px] mt-[40px] ">
          <div className="h-200px border border-white rounded-2xl m-5 p-4 font-semibold">
            <h1 className="flex items-center gap-3 text-2xl ">
              <span className="text-2xl py-2 px-2 text-white  bg-sky-950 rounded-full">
                <IoShareSocialOutline />{" "}
              </span>{" "}
              Social Profile ------
            </h1>
            <div>
              <div className="flex justify-evenly my-6 text-2xl m-auto ">
                <div className=" py-3 px-3 text-black  rounded-full   bg-gray-300 hover:text-white hover:bg-sky-950 duration-500 ">
                  <a href="https://www.facebook.com/akdubey.dtg" target="blank"><FaFacebookF /></a>
                  
                </div>

                <div className=" py-3 px-3 text-black   rounded-full bg-gray-300 hover:text-white hover:bg-sky-950 duration-500">
                  <a href="https://www.linkedin.com/in/abhishek-kumar-dubey-18990a210/" target="blank"><FaLinkedin /></a>
                  
                </div>
                <div className=" py-3 px-3 text-black   rounded-full bg-gray-300 hover:text-white hover:bg-sky-950 duration-500">
                  <a href="https://github.com/AbhishekDubey1997" target="blank"><FaGithub /></a>
                </div>
                <div className=" py-3 px-3 text-black   rounded-full bg-gray-300 hover:text-white hover:bg-sky-950 duration-500">
                  <a href="https://dashboard.render.com/" target="blank"><SiRender /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-200px border border-white m-5 p-4 font-semibold rounded-2xl">
            <h1 className="flex items-center gap-3 text-2xl ">
              <span className="text-2xl py-2 px-2 text-white  bg-sky-950 rounded-full ">
                <SiGmail />{" "}
              </span>{" "}
              Email ------
            </h1>
            <div className="m-auto   font-semibold text-[18px] text-white    py-5 px-6  ">
              <a href="https://mail.google.com/mail/u/1/?ogbl#inbox?compose=new" target="blank">akdubey.dtg@gmail.com</a>
            </div>
          </div>
        </div>


        {/* ......Contact form.......... */}

        <div className="max-w-[500px]  border border-white rounded-2xl  ">
          <h1 className="text-center text-white font-bold text-[22px] mt-2">
            Get In Touch
          </h1>

          <div className=" max-w-[400px]  text-black text-center mt-[30px]  ">
            <form className="flex flex-col max-w-[400px] p-4 md:w-[500px]">
              <input
                type=" text"
                placeholder="Enter Name"
                className="rounded-lg py-2 px-2 mb-4 "
              />
              <input
                type=" email"
                placeholder="Enter Email"
                className="rounded-lg py-2 px-2 mb-4"
              />
              <input
                type=" number"
                placeholder="Enter Phone no."
                className="rounded-lg  py-2 px-2 mb-4"
              />

              <textarea 
                name=""
                id=""
                cols="10"
                rows="4"
                placeholder="Enter Message Here..."
                className="p-2 rounded-xl "
              ></textarea>

              <button className="border border-white  bg-gray-300 hover:text-white  m-auto hover:bg-sky-950 duration-500 font-semibold  p-2 px-6 max-w-[100px] rounded-xl mt-8 mb-[10px]">
                Submit
              </button>
            </form>
          </div>
        </div>


      </div>
    </div>

  </>
  )
}






      