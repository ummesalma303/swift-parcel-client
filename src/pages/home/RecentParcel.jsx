import RecentParcelCard from '@/components/RecentParcel/RecentParcelCard';
import Loading from '@/components/Sheared/Loading';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

export default function RecentParcel() {
    const axiosPublic = useAxiosPublic();
  const { data: parcels = [], isLoading,refetch } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosPublic.get('/recentParcel');
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading/>
  }
  console.log(parcels)
  return (
    <div className='mb-16'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

      {
        parcels.map(parcel=><RecentParcelCard parcel={parcel}/>)
      }
        </div>
    </div>
  )
}
