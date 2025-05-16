import React from 'react'
import useAxiosPublic from '@/Hooks/useAxiosPublic'
import Loading from '../Sheared/Loading'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function SeeMore() {
    const {id} = useParams()
    console.log(id)
    const axiosPublic = useAxiosPublic()
     const { data: recentParcels = [], isLoading } = useQuery({
        queryKey: ["parcels"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/recentParcel/${id}`);
          return res.data;
        },
      });
      if (isLoading) {
        return <Loading/>
      }
      console.log(recentParcels)

   
  return (
    <div className='w-11/12 mx-auto flex justify-center items-center pt-32 pb-16'>
      {/* <article className="flex flex-col md:flex-row bg-white transition hover:shadow-xl">
  

  <div className=" sm:block sm:basis-56 ">
    <img
      alt=""
      src={recentParcels?.parcelUrl}
      className="aspect-square h-full w-full object-cover "
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
     <div className="*:text-xs text-gray-600">
     <h2>Customer Name: {recentParcels?.name}</h2>
     <h2>Customer Email: {recentParcels?.email}</h2>
     </div><br />
        <h3 className="font-bold text-gray-900 uppercase">
          Product Name: {recentParcels?.parcelType}
        </h3>
     

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
       Description: {recentParcels?.description}
      </p>
    </div>

   
  </div>
</article> */}


<Card className="flex">
  <CardHeader>
     <div className="">
    <img
      alt=""
      src={recentParcels?.parcelUrl}
      className="aspect-square w-[400px] object-cover "
    />
  </div>
  </CardHeader>
  <CardContent>
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
     <div className="*:text-xs ">
     <h2>Customer Name: {recentParcels?.name}</h2>
     <h2>Customer Email: {recentParcels?.email}</h2>
     </div><br />
        <h3 className="font-bold uppercase">
          Product Name: {recentParcels?.parcelType}
        </h3>
     

      <p className="mt-2 line-clamp-3 text-sm/relaxed ">
       Description: {recentParcels?.description}
      </p>
    </div>
  </CardContent>
 
</Card>

    </div>
  )
}
