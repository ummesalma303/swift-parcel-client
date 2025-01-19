import React from 'react';

const TopDeliveryMen = ({topMen}) => {
    const {deliveryMan,
        reviews,count,averageRetting
        } = topMen || {}
    return (
        <div className='text-center border-2 border-gray-300 p-5'>
        <img className='w-16 h-16 mx-auto rounded-full' src={reviews?.photo} alt="" />
        <h2 className='font-semibold'>Name: {deliveryMan}</h2>
        <p>Number of parcels Delivered: {count}</p>
        <p className='text-green-900 font-semibold'>Average Ratings: {averageRetting}</p>
        {/* <p>Feedbacks: {feedback}</p> */}
    </div>
    );
};

export default TopDeliveryMen;