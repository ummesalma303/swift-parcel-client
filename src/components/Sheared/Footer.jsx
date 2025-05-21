import React from 'react';
import logo from '../../assets/logo.png'
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=''>
          <div className="relative w-full ">
            {/* footer content */}
          <div className="absolute bottom-0 w-full text-black dark:text-white ">
            <div className="text-center hidden md:flex flex-col justify-center items-center h-40">
                <div >
            <img  src={logo} alt="" />
                </div>
                <h2 className='text-xl '>Make something you love.</h2>
            </div>
            <hr />
            <div className="flex justify-between items-center px-6 py-3 dark:bg-black ">
            <div>
                <p>Copyright © 2025 - All right reserved</p>
            </div>
            <div className="flex items-center space-x-2">
                <a href="https://www.facebook.com/UmmeSalma303" target="_blank" rel="noopener noreferrer"><CiFacebook size={30}/></a>
               
                <a href="https://x.com/ummesalma333" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle size={30}/></a>
               
                <a href="https://discord.com/channels/ummesalma333" target="_blank" rel="noopener noreferrer"><FaDiscord size={30}/></a>
               
               
               
            </div>
            </div>

          </div>
          {/* svg image */}
          <div className="bg-gradient-to-tl from-indigo-400 dark:from-[#181745] to-transparent">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420 320"><path fill="#1e1d4467" fill-opacity="1" d="M0,128L16,128C32,128,64,128,96,149.3C128,171,160,213,192,208C224,203,256,149,288,133.3C320,117,352,139,384,133.3C416,128,448,96,480,101.3C512,107,544,149,576,160C608,171,640,149,672,160C704,171,736,213,768,208C800,203,832,149,864,133.3C896,117,928,139,960,133.3C992,128,1024,96,1056,85.3C1088,75,1120,85,1152,106.7C1184,128,1216,160,1248,149.3C1280,139,1312,85,1344,96C1376,107,1408,181,1424,218.7L1440,256L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path></svg>
          </div>
          </div>
        </div>
    );
};

export default Footer;