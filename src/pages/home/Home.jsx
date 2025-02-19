import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Banner from '../../components/Sheared/Banner/Banner';
// import FeaturesCard from '@/components/FeaturesSec/FeaturesCard/FeaturesCard';
import FeaturesSec from '@/components/FeaturesSec/FeaturesSec/FeaturesSec';
import TopDeliveryMen from '@/components/TopDeliveryMen/TopDeliveryMen';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import Loading from '@/components/Sheared/Loading';
import Faqs from '../Faqs/Faqs';
import Contact from './Contact';
import RecentParcel from './RecentParcel';
import Newsletter from './Newsletter';
// import { Button } from "@/components/ui/button"

const Home = () => {
    const axiosPublic = useAxiosPublic()
    // const data = useContext(AuthContext);
    const {data:topDeliveryMens=[],isLoading} =useQuery({
        queryKey:["topDeliveryMens"],
        // enabled:!!(user?.email),
        queryFn: async () => {
    const res = await axiosPublic.get(`/topDelivered`)
         return res.data   
        }
    })
    if (isLoading) {
        return<Loading></Loading>
    }
    // console.log(topDeliveryMens)
    return (
        <div>
            <Banner/>
            <div className="w-11/12 mx-auto ">
            
            <FeaturesSec/>
            </div>
            {/* features section */}
            <Faqs/>
            <div className="w-11/12 mx-auto ">

            <div className="mb-16">
            <h2 className='text-center font-semibold text-3xl my-6 w-11/12 mx-auto '>The Top Delivery Man</h2>
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
           {
                topDeliveryMens?.map((topMen,i)=> <TopDeliveryMen key={i} topMen={topMen}></TopDeliveryMen>)
            }
           </div>
            </div>
            <h2 className='text-center font-semibold text-3xl my-6 w-11/12 mx-auto '>Recent Booked Parcel</h2>
            <RecentParcel/>
            <Contact/>
            </div>
            <Newsletter/>
        </div>
    );
};

export default Home;