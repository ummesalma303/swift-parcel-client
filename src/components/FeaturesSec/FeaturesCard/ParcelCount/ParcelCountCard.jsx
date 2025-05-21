import React from 'react';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import CountUp from 'react-countup';
import Loading from '@/components/Sheared/Loading';


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
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-6 dark:text-black'>
        
<div
  className="flex-1 hover:-translate-y-2 group dark:bg-[#06151E] bg-neutral-50 duration-500 w-full h-[21.5rem] flex border-2 text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md p-8 "
>
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute blur z-10 fill-indigo-300 duration-500 group-hover:blur-none group-hover:scale-105"
  >
    <path
      transform="translate(100 100)"
      d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
    ></path>
  </svg>

  <div class="z-20 flex flex-col justify-center items-center">
    <span class="font-bold text-6xl ml-2"><CountUp duration={2} end={userCount?.usersCount} />+</span>
    <p class="font-bold">Users</p>
  
    <p class="font-semibold text-black text-center pt-3">Lots of users have joined SwiftParcel, trusting us for safe and reliable delivery every day</p>
  </div>
</div>

            {/* card-2 */}
            <div className="flex-1 space-y-6 w-full">

<div className='flex-1 dark:text-white rounded-lg p-8 text-center dark:bg-[#06151E] dark:border-[1px] dark:border-gray-700 light:bg-[#ecf0f3] shadow-[0_0_15px_rgba(0,0,0,0.1)] inset-shadow-sm inset-shadow-white  card-3d hover:card-3d-hover  my-card  bg-white transition-transform duration-300
        
         light:bg-[#ecf0f3] inset-shadow-sm inset-shadow-white border-[1px] border-indigo-300 duration-[0.5] delay-100 hover:bg-gradient-to-bl hover:from-[#ffffff1e] dark:hover:from-[#1b13132c] dark:hover:via-[#271b1b1d] hover:via-[#ffffff93]  hover:to-indigo-200 dark:hover:to-indigo-800 w-full'>
       
          <div class="z-20 flex flex-col justify-center items-center">

    <span class="font-bold text-5xl ml-2"> <CountUp duration={2} end={userCount?.parcelCount} />+</span>
    <p class="font-bold">Parcels</p>
  
  </div>
  <p>Total parcel booked in our app</p>
           </div> 


           {/* card-3 */}
          


           <div className='flex-1 dark:text-white rounded-lg p-8 text-center dark:bg-[#06151E] dark:border-[1px] dark:border-gray-700 light:bg-[#ecf0f3] shadow-[0_0_15px_rgba(0,0,0,0.1)] inset-shadow-sm inset-shadow-white  card-3d hover:card-3d-hover  my-card  bg-white transition-transform duration-300
        
        
        
         light:bg-[#ecf0f3] inset-shadow-sm inset-shadow-white border-[1px] border-indigo-300 duration-[0.5] delay-100 hover:bg-gradient-to-bl hover:from-[#ffffff1e] dark:hover:from-[#1b13132c] dark:hover:via-[#271b1b1d] hover:via-[#ffffff93]  hover:to-indigo-200 dark:hover:to-indigo-800'>
       
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