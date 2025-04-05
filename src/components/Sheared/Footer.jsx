import React from 'react';
import logo from '../../assets/logo.png'
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className="text-center h-40 flex flex-col justify-center items-center">
                <div >
            <img  src={logo} alt="" />
                </div>
                <h2 className='text-xl text-gray-300'>Make something you love.</h2>
            </div>
            <hr />
            <div className="flex justify-between items-center px-6 py-3 ">
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
    );
};

export default Footer;