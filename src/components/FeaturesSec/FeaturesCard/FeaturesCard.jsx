// import { Subtitles } from 'lucide-react';
import React from 'react';
// import { FaBox } from 'react-icons/fa';

const FeaturesCard = ({title,subtitle,icon}) => {
    return (
        <div className=' rounded-lg p-8 text-center bg-[#ecf0f3] shadow-[0_0_15px_rgba(0,0,0,0.1)] inset-shadow-sm inset-shadow-white hover:border-[1px] hover:border-indigo-300 transition-all duration-[0.5] delay-100 hover:bg-gradient-to-bl hover:from-[#ffffff93] hover:via-[#ffffff93] hover:to-indigo-200'>
           
            <span className='mb-2 mx-auto inline-block  p-2 border-2  '>{icon}</span>
           
            <h2 className='text-2xl font-semibold mb-2'>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
};

export default FeaturesCard;