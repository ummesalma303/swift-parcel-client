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


<Card className=" flex w-9/12 light:bg-[#edf1f3] border-[1px] dark:bg-[#06151E]  dark:border-gray-700 border-[#aab8fd57] bg-gradient-to-tl from-[#aab8fd7c] dark:from-indigo-700 dark:from-[1%]  from-[10%] hover:from-[15%] via-white dark:via-[#06151E] to-[#fff] dark:to-[#06151E] duration-[0.5] delay-1000">
  <CardHeader>
     <div className="w-[400px]">
    <img 
      alt="" 
      src={recentParcels?.parcelUrl}
      className="aspect-square w-full object-cover "
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
        <div className="flex items-center justify-between py-2">

     <h4>Price: ${recentParcels?.totalPrice}</h4>
     <h4>Weight: {recentParcels?.parcelWeight}</h4>
        </div>
     <h4>Type: {recentParcels?.parcelType}</h4>

      <p className="mt-2 line-clamp-3 text-sm/relaxed ">
       Description: {recentParcels?.description}
      </p>
    </div>
  </CardContent>
 
</Card>

    </div>
  )
}
