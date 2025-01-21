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
import { format } from "date-fns";
//   import { Label } from "@/components/ui/label"

const AllParcels = () => {
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

console.log(lte,gte)

  return (
    <div>
      <div className=" flex items-end">
        {/* <form onSubmit={handleSearch} className=" flex items-end"> */}
        <div className="">
        <label htmlFor="" className="text-xl font-semibold ">Requested delivery date:</label><br />
        <input onChange={(e)=>setLte(e.target.value)} className="border-2 border-gray-300 px-2 mt-3" type="date" name="gte" />
        </div>
        <div className="">
        <input onChange={(e)=>setGte(e.target.value)} className="border-2 border-gray-300 px-2" type="date" name="lte" />
        </div>
        {/* <Button type="submit"  >Search</Button>
        </form> */}
       
      </div>
     <div className="">
     <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User’s Name</TableHead>
            <TableHead>User’s Phone</TableHead>
            <TableHead>Booking Date</TableHead>
            <TableHead>Requested Delivery Date</TableHead>
            <TableHead className="text-right">Cost</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className="text-right">Manage Button</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parcels?.map((parcel,i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{parcel?.name}</TableCell>
              <TableCell>{parcel?.phone}</TableCell>
              <TableCell>{format(new Date(parcel?.bookingDate),'dd-MM-yyyy')}</TableCell>
              <TableCell>{parcel?.deliveryDate}</TableCell>
              <TableCell className="text-right">{parcel?.totalPrice}</TableCell>
              <TableCell className="text-right">{parcel?.status}</TableCell>
              <TableCell className="text-right">
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

                {/* <Button>Mange</Button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
     </div>
    </div>
  );
};

export default AllParcels;




// "{"deliveryMan":"nur","date":"2025-01-21","parcelId":"678b15716268ff5639faacac","deliveryMenID":"678b1025dfcb5f8988a0f86c","deliveryEmail":"ummi@nur.com","status":"On The Way"}"