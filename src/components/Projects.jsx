import React from "react";
import pro1 from "../Assets/img/pro1.png";
import ExpenseTApp from "../Assets/img/ExpenseTApp.png";
import ToDoList from "../Assets/img/ToDoList.png";
import FoodShopimg from "../Assets/img/FoodShopimg.png";
import PortfolioImg from "../Assets/img/PortfolioImg.png";
import { FaGithub } from "react-icons/fa";
import { SiRender } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

export default function Projects() {
  return (
    <>
      <div className="bg-sky-800 min-h-screen w-full pt-[60px] pb-[45px]">
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
    </>
  );
}
