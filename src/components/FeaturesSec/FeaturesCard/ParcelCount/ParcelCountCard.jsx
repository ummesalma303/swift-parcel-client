import React from 'react';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import CountUp from 'react-countup';

const ParcelCountCard = ({title}) => {
    const axiosPublic = useAxiosPublic()
    const {data:userCount = {},isLoading} =useQuery({
        queryKey:["counts"],
        queryFn: async () => {
    const res = await axiosPublic.get('/count')
         return res.data   
        }
    })
    if (isLoading) {
        return <h2>Loading....</h2>
    }
    console.log(userCount    )
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-5'>
            {/* card-1 */}
           <div className="bg-[#F7F7F7] rounded-md p-5 text-center ">
           <h2>Total Number of People Using Your App: <CountUp duration={2} end={userCount?.usersCount} /> </h2>
           </div>
            {/* card-1 */}
           <div className="bg-[#F7F7F7] rounded-md p-5 text-center ">
           <h2>Total Number of Parcels Booked: <CountUp duration={2} end={userCount?.parcelCount} /> </h2>
           </div>
           <div className="bg-[#F7F7F7] rounded-md p-5 text-center ">
           <h2>Total Number of Parcels Delivered:<CountUp duration={2} end={userCount?.delivered} /></h2>
           </div>
            {/* card-1 */}
           {/* <div className="bg-[#F7F7F7] rounded-md p-5 text-center ">
           <h2>Total Number of Parcels Booked: <CountUp duration={2} end={userCount?.usersCount} /> </h2>
           </div> */}
            
        </div>
    );
};

export default ParcelCountCard;