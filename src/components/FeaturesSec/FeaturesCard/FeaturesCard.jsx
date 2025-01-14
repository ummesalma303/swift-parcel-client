// import { Subtitles } from 'lucide-react';
import React from 'react';
// import { FaBox } from 'react-icons/fa';

const FeaturesCard = ({title,subtitle,icon}) => {
    return (
        <div className='border-2 rounded-md p-5 text-center '>
           
            <div className='mb-2 mx-auto inline-block  p-2 border-2 border-red-200 '>{icon}</div>
           
            <h2 className='text-2xl font-semibold mb-2'>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
};

export default FeaturesCard;