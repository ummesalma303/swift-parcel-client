import React, { useContext, useEffect, useState } from 'react';
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
import { BsPencilSquare } from "react-icons/bs";
import { MdCancelPresentation } from 'react-icons/md';
import { IoStarHalfSharp } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Input } from '@/components/ui/input';

const MyParcel = () => {
  // const [myParcels]
  const [filter,setFilter] = useState('')
  const {user} = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()
    
       
      // show data
     
    const {data:myParcels=[],isLoading,refetch} =useQuery({
        queryKey:["parcel",user?.email,filter],
        queryFn: async () => {
    // const res = await axiosPublic.get(`/parcel/${user?.email}`)
    const res = await axiosPublic.get(`/parcel/${user?.email}?search=${filter}`)
         return res.data   
        }
    })
    // if (condition) {
      
    // }
    console.log(myParcels)
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
          axiosPublic.delete(`http://localhost:5000/parcel/${id}`)
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


    // useEffect(() => {
    //    axiosPublic.get(`/allParcel?filter=${filter}`)
    //   .then(res=>{
    //     console.log(res.data)})
    
      
    // }, [filter])
    
    // const handleFilter=(value)=>{
    //   console.log(value)
    
    return (
        <div>
            <div className="text-3xl font-semibold text-center my-4">
            <h2>My Parcels</h2>

            </div>


{/* table */}
             <div className="w-11/12 mx-auto">
             {/* status */}
            <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
      {/* <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button> */}
       <label>Filter By Status:</label>
      <select onChange={(e)=>setFilter(e.target.value)} className='border-2 p-1 rounded-md' >
      {/* <option defaultValue='Select A role'></option> */}
      {/* <option disabled selected>Select A role</option> */}
        <option value="all">All</option>
        <option value="pending">pending</option>
        {/* <option value="other">other</option> */}
      </select><br />
    </div>
    {/* table start */}
             <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Parcel Type 
          </TableHead>
          <TableHead>Approximate Delivery Date</TableHead>
          <TableHead>Requested Delivery Date</TableHead>
          <TableHead className="">Booking Date</TableHead>
          <TableHead >Delivery Men ID</TableHead>
          <TableHead className="text-right">Booking Status</TableHead>
          <TableHead className="text-right">Update</TableHead>
          <TableHead className="text-right">Cancel</TableHead>
          <TableHead className="text-right">Pay</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {myParcels?.map((parcel) => (
          <TableRow key={parcel?._id}>
             <TableCell className="font-medium">{parcel?.parcelType}</TableCell>
             <TableCell>{parcel?.approximateDate}</TableCell>
             <TableCell>{parcel?.deliveryDate}</TableCell>
            <TableCell >{parcel?.bookingDate}</TableCell>
            <TableCell>{parcel?.deliveryMenID}</TableCell>
            <TableCell className="text-right">{parcel?.status}</TableCell>
            <TableCell className="text-right">
            
            {
            parcel?.status !== 'pending' ? <Button disabled ><BsPencilSquare /></Button>:<Link to={`/dashboard/updateBooking/${parcel?._id}`}><Button  ><BsPencilSquare /></Button></Link>
            }
            
            </TableCell>
            <TableCell className="text-right">
            {
            parcel?.status !== 'pending' ? <Button variant="destructive" disabled ><MdCancelPresentation /></Button>: <Button variant="destructive" onClick={()=>handleCancel(parcel?._id)}><MdCancelPresentation /></Button>
            }
             </TableCell>
            <TableCell className="text-right"><Button>Pay</Button></TableCell>
            {parcel?.status==='delivered'&&<TableCell className="text-right"><Button><IoStarHalfSharp />Review</Button></TableCell>}
            
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
             </div>
        </div>
    );
};

export default MyParcel;