import React from 'react';
import FeaturesCard from '../FeaturesCard/FeaturesCard';
import { FaBox } from 'react-icons/fa';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSpatialTracking } from "react-icons/md";
import ParcelCountCard from '../FeaturesCard/ParcelCount/ParcelCountCard';
import { Slide } from 'react-awesome-reveal';

const FeaturesSec = () => {
   
    return (
       <div className="mt-16 mx-auto ">
        <h2 className='text-3xl font-semibold my-6'> Our Beautiful Features</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Slide>
            <FeaturesCard title={'Secure Packaging'} subtitle={' Protect your shipments with tamper-proof, durable packaging designed to keep your items safe.'} icon={<FaBox  size={40}/>}/>
            </Slide>
            <Slide>
            <FeaturesCard title={'Super Fast Delivery'} subtitle={'Accelerate your deliveries with optimized routes and priority handling for quicker turnaround times.'} icon={<TbTruckDelivery size={40}/>}/>

            </Slide>
            <Slide>
            <FeaturesCard title={'Real-Time Tracking'} subtitle={"Monitor your package's journey with live updates and precise location tracking."} icon={<MdOutlineSpatialTracking size={40}/>}/>

            </Slide>

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