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
//   import { Label } from "@/components/ui/label"

const AllParcels = () => {
  const delivery = useLoaderData();
  const {setDeliveryMenID} = useContext(AuthContext);
  // const [id,setId] =useState({})
  // console.log(deliveryMenID)
  const {
         register,
         formState: { errors },
         reset,
         handleSubmit,
       } = useForm()
     
  // console.log(delivery)
  // const {user} = useContext(AuthContext)
  const axiosPublic = useAxiosPublic();
  const { data: parcels = [], isLoading } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/parcel`);
      return res.data;
    },
  });
  // console.log(parcels)
  const onSubmit = (data) => {
    const deliveryManData ={
      ...data,status:'On The Way',
    }
    console.log(data.deliveryId)
    setDeliveryMenID(data.deliveryId)
    axiosPublic.patch(`/deliveryInfo/${data.parcelId}`,deliveryManData)
    .then(res=>{
       if (res.data.modifiedCount>0) {
        // setDeliveryMenID(data?.deliveryMenID)
        console.log(data?.deliveryId)
                Swal.fire({
                    title: "Success",
                    text: " Parcel Successfully Update. ",
                    icon: "success",
                  });
                  // timer: 1000
              }
      // console.log(res.data)
    })
    .catch(err=>console.log(err))
    console.log(deliveryManData)
  }


const handleSearch=(e)=>{
  e.preventDefault()
  const lte = e.target.lte.value
  const gte = e.target.gte.value
  console.log(lte,gte)
  axiosPublic.get(`/parcel?gte=${gte}&lte=${lte}`)
}

  return (
    <div>
      <div className=" ">
        <form onSubmit={handleSearch} className=" flex items-end">
        <div className="">
        <label htmlFor="" className="text-xl font-semibold ">Requested delivery date:</label><br />
        <input className="border-2 border-gray-300 px-2 mt-3" type="date" name="gte" />
        </div>
        <div className="">
        <input className="border-2 border-gray-300 px-2" type="date" name="lte" />
        </div>
        <Button type="submit"  >Search</Button>
        </form>
       
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
              <TableCell>{parcel?.bookingDate}</TableCell>
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
                          <select defaultValue="Choose a name" className=" border-2 w-full p-1 rounded-md" required>
                            {delivery.map((deliveryMan,i) => (
                              <>
                              <option key={i}
                                className="w-full"
                                value={deliveryMan?.name} {...register("deliveryMan")}
                              >
                                {deliveryMan?.name
                                }
                              </option>
                              
                              <input hidden
                            type="deliveryId" value={deliveryMan?._id}
                            {...register("deliveryId")}
                          />
                              </>
                            ))}
                          </select>
                          
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
                            type="parcelId" value={parcel?._id}
                            {...register("parcelId")}
                          />
                        </div>
                      </div>
                      <DialogClose  asChild>
                      <input className='bg-black px-4 py-1 w-full rounded-md text-white mb-3' type="submit" value='register' />
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
