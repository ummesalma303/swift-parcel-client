import React from 'react';

const TopDeliveryMen = ({topMen}) => {
    const {ratting,info
        } = topMen || {}
    return (
        <div className='my-card  rounded-lg p-8 text-center light:bg-[#ecf0f3] shadow-[0_0_15px_rgba(0,0,0,0.1)] inset-shadow-sm inset-shadow-white border-[1px] border-indigo-100 hover:border-indigo-300 transition-all duration-[0.5] delay-100 hover:bg-gradient-to-bl hover:from-[#ffffff1e] dark:hover:from-[#1b13132c] dark:hover:via-[#271b1b1d] hover:via-[#ffffff93]  hover:to-indigo-200 dark:hover:to-indigo-800'>
        <img className='w-16 h-16 mx-auto rounded-full' src={info?.photo} alt="" />
        <h2 className='font-semibold'>Name: {info?.name}</h2>
        <p>Number of parcels Delivered: {info?.deliveredCount}</p>
        <p className='text-green-900 font-semibold'>Average Ratings: {ratting}</p>
        {/* <p>Feedbacks: {feedback}</p> */}
    </div>
    );
};

export default TopDeliveryMen;