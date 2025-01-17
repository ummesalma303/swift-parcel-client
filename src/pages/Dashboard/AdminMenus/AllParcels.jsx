import useAxiosPublic from "@/Hooks/useAxiosPublic";
import useUser from "@/Hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
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
//   import { Label } from "@/components/ui/label"

const AllParcels = () => {
  const delivery = useLoaderData();
  const [id,setId] =useState({})
  // console.log(id)
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
  console.log(parcels)
  const onSubmit = (data) => {
    console.log(data)
    const deliveryManData ={
      ...data,status:'On The Way',
    }
    axiosPublic.patch(`/deliveryInfo/${data.parcelId}`,deliveryManData)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    console.log(deliveryManData)
  }
  return (
    <div>
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
          {parcels?.map((parcel) => (
            <TableRow key={parcel._id}>
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
  );
};

export default AllParcels;
