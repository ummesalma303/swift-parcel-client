import React from 'react';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import CountUp from 'react-countup';
import Loading from '@/components/Sheared/Loading';
import "./GradientText.css";


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
        return <Loading/>
    }
    // console.log(userCount    )
    return (
        <div className='flex justify-center items-center   gap-10 mt-16 dark:text-black'>
            {/* card-1 */}
           {/* <div className="bg-[#F7F7F7] dark:bg-[#1F2937] rounded-md p-5 text-center dark:text-white"> */}
            {/* <div className='flex-1 rounded-lg p-8 text-center dark:bg-[#06151E] dark:border-[1px] dark:border-gray-700 light:bg-[#ecf0f3] shadow-[0_0_15px_rgba(0,0,0,0.1)] inset-shadow-sm inset-shadow-white  card-3d hover:card-3d-hover  my-card  bg-white transition-transform duration-300
        '>
       
           <h2 className='text-5xl font-semibold'><span className='text-9xl font-bold text-indigo-600'><CountUp duration={2} end={userCount?.usersCount} />+</span> User  </h2>
           <p className='text-left mt-5 text-lg'>Business consulting consultants provide expert advice and guida the a businesses to help theme their.</p>
           </div> */}
        
<div
  class="flex-1 hover:-translate-y-2 group dark:bg-[#06151E] bg-neutral-50 duration-500 w-full h-80 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
>
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute blur z-10 fill-indigo-300 duration-500 group-hover:blur-none group-hover:scale-105"
  >
    <path
      transform="translate(100 100)"
      d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
    ></path>
  </svg>

  <div class="z-20 flex flex-col justify-center items-center">
    <span class="font-bold text-6xl ml-2"><CountUp duration={2} end={userCount?.usersCount} />+</span>
    <p class="font-bold">Users</p>
  
  </div>
</div>

            {/* card-2 */}
            <div className="flex-1 space-y-6 ">

<div className='flex-1 dark:text-white rounded-lg p-8 text-center dark:bg-[#06151E] dark:border-[1px] dark:border-gray-700 light:bg-[#ecf0f3] shadow-[0_0_15px_rgba(0,0,0,0.1)] inset-shadow-sm inset-shadow-white  card-3d hover:card-3d-hover  my-card  bg-white transition-transform duration-300
        
        
        
         light:bg-[#ecf0f3] inset-shadow-sm inset-shadow-white hover:border-[1px] hover:border-indigo-300 duration-[0.5] delay-100 hover:bg-gradient-to-bl hover:from-[#ffffff1e] dark:hover:from-[#1b13132c] dark:hover:via-[#271b1b1d] hover:via-[#ffffff93]  hover:to-indigo-200 dark:hover:to-indigo-800'>
       
          <div class="z-20 flex flex-col justify-center items-center">

    <span class="font-bold text-5xl ml-2"> <CountUp duration={2} end={userCount?.parcelCount} />+</span>
    <p class="font-bold">Parcels</p>
  
  </div>
  <p>Total parcel booked in our app</p>
           </div> 


           {/* card-3 */}
           {/* <div className="bg-[#F7F7F7] dark:bg-[#1F2937] dark:text-white rounded-md p-5 text-center ">
           <h2>Total Number of Parcels Delivered:<CountUp duration={2} end={userCount?.delivered} /></h2>
           </div> */}


           <div className='flex-1 dark:text-white rounded-lg p-8 text-center dark:bg-[#06151E] dark:border-[1px] dark:border-gray-700 light:bg-[#ecf0f3] shadow-[0_0_15px_rgba(0,0,0,0.1)] inset-shadow-sm inset-shadow-white  card-3d hover:card-3d-hover  my-card  bg-white transition-transform duration-300
        
        
        
         light:bg-[#ecf0f3] inset-shadow-sm inset-shadow-white hover:border-[1px] hover:border-indigo-300 duration-[0.5] delay-100 hover:bg-gradient-to-bl hover:from-[#ffffff1e] dark:hover:from-[#1b13132c] dark:hover:via-[#271b1b1d] hover:via-[#ffffff93]  hover:to-indigo-200 dark:hover:to-indigo-800'>
       
          <div class="z-20 flex flex-col justify-center items-center">

    <span class="font-bold text-5xl ml-2"> <CountUp duration={2} end={userCount?.delivered} />+</span>
    <p class="font-bold">Parcels</p>
  
  </div>
  <p>Total parcel successfully delivered </p>
           </div> 

            </div>
           
            
        </div>
    );
};

export default ParcelCountCard;