import React from 'react';
import FeaturesCard from '../FeaturesCard/FeaturesCard';
import { FaBox } from 'react-icons/fa';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSpatialTracking } from "react-icons/md";
import ParcelCountCard from '../FeaturesCard/ParcelCount/ParcelCountCard';

const FeaturesSec = () => {
   
    return (
       <div className="my-12 w-11/12 mx-auto">
        <h2 className='text-3xl font-semibold my-6'> Our Beautiful Features</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10'>
            <FeaturesCard title={'Secure Packaging'} subtitle={' Protect your shipments with tamper-proof, durable packaging designed to keep your items safe.'} icon={<FaBox  size={60}/>}/>

            <FeaturesCard title={'Super Fast Delivery'} subtitle={'Accelerate your deliveries with optimized routes and priority handling for quicker turnaround times.'} icon={<TbTruckDelivery size={60}/>}/>

            <FeaturesCard title={'Real-Time Tracking'} subtitle={"Monitor your package's journey with live updates and precise location tracking, ensuring complete transparency."} icon={<MdOutlineSpatialTracking size={60}/>}/>

            {/* parcel counts */}
            
        </div>
        <div className="">
        <ParcelCountCard/>
        {/* <ParcelCountCard title={"Total Number of Parcels Delivered"}/>
        <ParcelCountCard title={`Total Number of People Using Your App: ${users?.length}`}/> */}
        </div>
       </div>
    );
};

export default FeaturesSec;