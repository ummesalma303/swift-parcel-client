import RecentParcelCard from '@/components/RecentParcel/RecentParcelCard';
import Loading from '@/components/Sheared/Loading';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

export default function RecentParcel() {
    const axiosPublic = useAxiosPublic();
  const { data: recentP = [], isLoading,refetch } = useQuery({
    queryKey: ["recentP"],
    queryFn: async () => {
      const res = await axiosPublic.get('/recentParcel');
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading/>
  }
  // console.log(recentP)
  return (
    <div className='mb-16 ' id='recentParcel'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

      {
        recentP?.map(parcel=><RecentParcelCard parcel={parcel} key={parcel._id}/>)
      }
        </div>
    </div>
  )
}
