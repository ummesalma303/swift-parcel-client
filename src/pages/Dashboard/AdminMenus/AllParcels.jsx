import useAxiosPublic from "@/Hooks/useAxiosPublic";
import useUser from "@/Hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { DialogClose } from "@radix-ui/react-dialog";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "@/providers/AuthProvider";
import SweetPagination from "sweetpagination";
import { format } from "date-fns";
import glass from '../../../assets/glass.jpg'
//   import { Label } from "@/components/ui/label"

const AllParcels = () => {
   const [currentPageData, setCurrentPageData] = useState([]); 
  const [lte,setLte] = useState('')
  const [gte,setGte] = useState('')
  const delivery = useLoaderData();
  const {setDeliveryMenID} = useContext(AuthContext);
  
  // const [id,setId] =useState()
  // console.log(delivery)
  const {
         register,
         formState: { errors },
         reset,
         handleSubmit,
       } = useForm()
     
  // console.log(delivery)
  // const {user} = useContext(AuthContext)
  const axiosPublic = useAxiosPublic();
  const { data: parcels = [], isLoading,refetch } = useQuery({
    queryKey: ["parcels",lte,gte],
    queryFn: async () => {
      const res = await axiosPublic.get(`/parcel?gte=${lte}&lte=${gte}`);
      return res.data;
    },
  });

  // console.log(id)
  const onSubmit = (data) => {
    const select = JSON.parse(data.deliveryMan)
    const deliveryManData ={
      ...data, deliveryMan: select.name,deliveryMenID:select.id,deliveryEmail:select.email,
      status:'On The Way',index:select.index
    }
    // reset()
    // console.log(data)
    // console.log(select)
    console.log(deliveryManData)
    // setDeliveryMenID(data)
    axiosPublic.patch(`/deliveryInfo/${data.parcelId}`,deliveryManData)
    .then(res=>{
       if (res.data.modifiedCount>0) {
        // setDeliveryMenID(data?.deliveryMenID)
        console.log(res)
                Swal.fire({
                    title: "Success",
                    text: " Parcel Successfully Update. ",
                    icon: "success",
                  });
                  refetch()
                  reset()
                  // timer: 1000
              }
      // console.log(res.data)
    })
    .catch(err=>console.log(err))
    // console.log(deliveryManData)
  }

console.log(parcels)

  return (
    <div className="w-[95%] mx-auto">
      <div className=" flex items-end">
        {/* <form onSubmit={handleSearch} className=" flex items-end"> */}
        <div className="">
        <label htmlFor="" className="text-xl font-semibold ">Requested delivery date:</label><br />
        <input onChange={(e)=>setLte(e.target.value)} className="border-2 border-gray-300 px-2 mt-3 dark:text-black" type="date" name="gte" />
        </div>
        <div className="">
        <input onChange={(e)=>setGte(e.target.value)} className="border-2 border-gray-300 px-2 dark:text-black" type="date" name="lte" />
        </div>
        {/* <Button type="submit"  >Search</Button>
        </form> */}
       
      </div>
    

     


     {/* all parcel card */}
     <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 my-16 ">
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
{
  currentPageData?.map((parcel,i)=>(
    <article className="overflow-hidden rounded-lg border border-gray-100 dark:bg-transparent bg-white shadow-xs h-full">
  <img
    alt=""
    src={parcel?.parcelUrl || glass}
    className="h-56 w-full object-cover"
  />

  <div className="p-4 sm:p-6 ">
  <div className="text-xs text-gray-600 dark:text-white">
      <p>booking date: {format(new Date(parcel?.bookingDate),'dd-MM-yyyy')}
        <p>Requested Delivery Date: {parcel?.deliveryDate}</p>
      </p>
    </div>

    <a >
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        {parcel?.parcelType}
      </h3>
    </a>
   
    <div className="">
      <h2>user: {parcel?.name}</h2>
      <h2>phone:{parcel?.phone}</h2>
    </div>
    <div className="">
      <h2>price: {parcel?.totalPrice}</h2>
      <h2>status: {parcel?.status}</h2>
    </div>
    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-white"> <span className="font-semibold ">Description:</span>
     {parcel?.description|| ' .....'}
    </p>
   <div className="pt-6">
   <Dialog>
                  <DialogTrigger asChild>
                    <Button >Manage</Button>
                  </DialogTrigger>
                  <DialogTitle></DialogTitle>
                  <DialogContent className="sm:max-w-[425px]">
                    <form onSubmit={handleSubmit(onSubmit)} className=" ">
                      <div className=" py-4 items-center grid gap-4">
                       {/* input-1 */}
                        <div className="  ">
                          <label>Delivery Man Name:</label>
                         
      <select className='border-2 w-full p-1 rounded-md' required  {...register("deliveryMan")}>
     {
      delivery?.map((man)=> (
        <option value={JSON.stringify({ id: man._id, email: man.email, name: man.name,index:i })}>{man.name}</option> 
      
      ))
     }
        {/* <option value="User">User</option>
        <option value="Delivery Man">Delivery Man</option> */}
       
      </select><br />
      
                          <br />
                        </div>
                        {/* input-2 */}
                        <div className="">
                          <label htmlFor="">Approximate date</label>
                          <input
                            type="date"
                            className="w-full border-2 p-2 rounded-md" {...register("date")}
                          />
                        </div>
                        <div className="">
                          <input hidden
                             value={parcel?._id}
                            {...register("parcelId")}
                          />
                        </div>
                      </div>
                      <DialogClose  asChild>
                      <input className='bg-black px-4 py-1 w-full rounded-md text-white mb-3' type="submit" value='Submit' />
                      </DialogClose>
                    </form>
                    {/* <DialogClose  asChild>
                      <Button type="button" >
                        Assign
                      </Button>
                    </DialogClose> */}
                  </DialogContent>
                </Dialog>
   </div>
    {/* <Link to={`/recentParcel/${_id}`} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      See more...

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link> */}
  </div>
</article>
  ))
}

    </div>




     <div className="">
     <SweetPagination
   width={25}
    navigation={true}
    dataPerPage={5}
        currentPageData={setCurrentPageData}
        getData={parcels}
      />
     </div>
    </div>
  );
};

export default AllParcels;




// "{"deliveryMan":"nur","date":"2025-01-21","parcelId":"678b15716268ff5639faacac","deliveryMenID":"678b1025dfcb5f8988a0f86c","deliveryEmail":"ummi@nur.com","status":"On The Way"}"