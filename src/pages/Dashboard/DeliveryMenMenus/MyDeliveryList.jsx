import React, { useContext } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '@/providers/AuthProvider';
import { Button } from '@/components/ui/button';
import Swal from 'sweetalert2';
import { MdCancelPresentation } from 'react-icons/md';
   
const MyDeliveryList = () => {
  const {user} = useContext(AuthContext)
    const {deliveryMenID} = useContext(AuthContext);
    console.log(deliveryMenID)
    const axiosPublic = useAxiosPublic()


    const {data:deliveryLists=[],isLoading,refetch} =useQuery({
        queryKey:["deliveryLists",user?.email],
        queryFn: async () => {
    const res = await axiosPublic.get(`/myDeliveryList/${user?.email}`)
         return res.data   
        }
    })
    console.log(deliveryLists)

      const handleCancel =(id)=>{
          console.log(id)
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosPublic.delete(`/deliveryList/${id}`)
              .then(res=>{
                refetch()
                if (res.data.deletedCount > 0) {
                  Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                }
                console.log(res.data)})
              .catch(err=>console.log(err))
              
            }
          });
        }


        const handleStatus =(id)=>{
          console.log(id)
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosPublic.patch(`/deliveryList/${id}`)
              .then(res=>{
                refetch()
                if (res.data.modifiedCount > 0) {
                  Swal.fire({
                title: "Updated!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                }
                console.log(res.data)})
              .catch(err=>console.log(err))
              
            }
          });
        }
    return (
        <div>
           <h2> My Delivery List</h2>

            <div className="">
            <Table>
      <TableCaption>A list of your orders.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Booked User’s Name</TableHead>
          <TableHead>Receivers Name</TableHead>
          <TableHead>Booked User’s Phone
          </TableHead>
          <TableHead>Requested Delivery Date
          </TableHead>
          <TableHead className="text-right">Approximate Delivery Date</TableHead>
          <TableHead className="text-right">Receivers phone number</TableHead>
          <TableHead className="text-right">Receivers Address</TableHead>
          <TableHead className="text-right">Status</TableHead>
          <TableHead className="text-right">Location</TableHead>
          <TableHead className="text-right">Cancel</TableHead>
          <TableHead className="text-right">Deliver</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deliveryLists?.map((list) => (
            // <h2></h2>
          <TableRow key={list?._id}>
            <TableCell className="font-medium">{list?.name}</TableCell>
            <TableCell>{list?.receiverName}</TableCell>
            <TableCell>{list?.phone}</TableCell>
            <TableCell>{list?.deliveryDate}</TableCell>
            <TableCell className="text-right">{list?.approximateDate}</TableCell>
            <TableCell className="text-right">{list?.receiverPhone}</TableCell>
            <TableCell className="text-right">{list?.deliveryAddress}</TableCell>
            <TableCell className="text-right">{list?.status}</TableCell>
            <TableCell className="text-right"><Button>Location</Button></TableCell>
            <TableCell className="text-right"><Button variant="outline" onClick={()=>handleCancel(list?._id)}><MdCancelPresentation /></Button></TableCell>
            <TableCell className="text-right"><Button onClick={()=>handleStatus(list?._id)}>Deliver</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
            </div>
        </div>
    );
};

export default MyDeliveryList;