// import { Subtitles } from 'lucide-react';
import React from 'react';
// import { FaBox } from 'react-icons/fa';

const FeaturesCard = ({title,subtitle,icon}) => {
    return (
      
         <div className=' rounded-lg p-8 text-center dark:bg-[#06151E]  dark:border-gray-700 light:bg-[#ecf0f3] shadow-[0_0_15px_rgba(0,0,0,0.1)] inset-shadow-sm inset-shadow-white border-[1px] border-indigo-100 hover:border-indigo-300 transition-all duration-[0.5] delay-100 hover:bg-gradient-to-bl hover:from-[#ffffff1e] dark:hover:from-[#1b13132c] dark:hover:via-[#271b1b1d] hover:via-[#ffffff93]  hover:to-indigo-200 dark:hover:to-indigo-800
        '>
            
            <span className='mb-2 mx-auto inline-block  p-2 border-2  '>{icon}</span>
           
            <h2 className='text-2xl font-semibold mb-2'>{title}</h2>
            <p>{subtitle}</p>

          
        </div>
    );
};

export default FeaturesCard;