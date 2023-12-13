import React , {useState} from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
// import bg5 from "../Assets/img/bg5.jpg"
import { Link } from 'react-router-dom';

export default function Header() {

    const[toggle,setToggle] = useState(0);

  return (
    <div className=' p-4 md:px-[60px] border-b-2 border-b-sky-800 w-full fixed text-sky-900 bg-white'>
        <div className=' flex justify-between items-center   '>
            <div className='text-2xl font-bold'>
                <h1>🅐🅑🅗🅘 Portfolio</h1>
            </div>

            {
                
                toggle?
                < IoMdClose onClick={()=>setToggle(!toggle)} className=' text-3xl md:hidden block text-sky-800' /> 
                :
                <IoMenuSharp onClick={()=>setToggle(!toggle)} className=' text-3xl md:hidden block text-sky-800'/>
            
            }
            
                <ul className='hidden md:flex gap-10 font-medium cursor-pointer' >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Education">Education</Link></li>
                    <li><Link to="/Skills">Skills</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Experience">Experience</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                   
                </ul>
            
            {/* Responsive menu */}

            
                <ul className={`bg-no-repeat bg-cover duration-200 md:hidden border border-white fixed w-full h-screen left-0 flex  items-center justify-start pt-[90px] flex-col gap-6 font-medium text-2xl bg-sky-800 text-white   
                 ${toggle ? 'top-[64px]' : 'top-[-100%]'} `} >

                    <li><Link to="/"  onClick={()=>setToggle(!toggle)} >Home</Link></li>
                    <li><Link to="/About"  onClick={()=>setToggle(!toggle)} >About</Link></li>
                    <li><Link to="/Education"  onClick={()=>setToggle(!toggle)} >Education</Link></li>
                    <li><Link to="/Skills"  onClick={()=>setToggle(!toggle)} >Skills</Link></li>
                    <li><Link to="/Projects"  onClick={()=>setToggle(!toggle)} >Projects</Link></li>
                    <li><Link to="/Experience"  onClick={()=>setToggle(!toggle)} >Experience</Link></li>
                    <li><Link to="/Contact"  onClick={()=>setToggle(!toggle)} >Contact</Link></li>
                    
                </ul>
            



        </div>

    </div>
  )
}


// style={{backgroundImage: `url(${bg5})`}}