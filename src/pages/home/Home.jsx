import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Banner from '../../components/Sheared/Banner/Banner';
// import FeaturesCard from '@/components/FeaturesSec/FeaturesCard/FeaturesCard';
import FeaturesSec from '@/components/FeaturesSec/FeaturesSec/FeaturesSec';
import TopDeliveryMen from '@/components/TopDeliveryMen/TopDeliveryMen';
// import { Button } from "@/components/ui/button"

const Home = () => {
    const data = useContext(AuthContext);
    // console.log(data)
    return (
        <div>
            <Banner/>
            {/* <div className=""></div> */}
            {/* features section */}
            <FeaturesSec/>

            <div className="">
            <h2 className='text-center font-semibold text-3xl my-6 w-11/12 mx-auto'>The Top Delivery Man</h2>
            <TopDeliveryMen></TopDeliveryMen>
            </div>
        </div>
    );
};

export default Home;