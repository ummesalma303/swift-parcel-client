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
import { BsPencilSquare } from "react-icons/bs";
import { MdCancelPresentation } from 'react-icons/md';
import { IoStarHalfSharp } from "react-icons/io5";

const MyParcel = () => {
  const {user} = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()
    const invoices = [
        {
          invoice: "INV001",
          paymentStatus: "Paid",
          totalAmount: "$250.00",
          paymentMethod: "Credit Card",
        },
        {
          invoice: "INV002",
          paymentStatus: "Pending",
          totalAmount: "$150.00",
          paymentMethod: "PayPal",
        },
        {
          invoice: "INV003",
          paymentStatus: "Unpaid",
          totalAmount: "$350.00",
          paymentMethod: "Bank Transfer",
        },
        {
          invoice: "INV004",
          paymentStatus: "Paid",
          totalAmount: "$450.00",
          paymentMethod: "Credit Card",
        },
        {
          invoice: "INV005",
          paymentStatus: "Paid",
          totalAmount: "$550.00",
          paymentMethod: "PayPal",
        },
        {
          invoice: "INV006",
          paymentStatus: "Pending",
          totalAmount: "$200.00",
          paymentMethod: "Bank Transfer",
        },
        {
          invoice: "INV007",
          paymentStatus: "Unpaid",
          totalAmount: "$300.00",
          paymentMethod: "Credit Card",
        },
      ]
       
      // show data
     
    const {data:myParcels=[],isLoading} =useQuery({
        queryKey:["parcel",user?.email],
        queryFn: async () => {
    const res = await axiosPublic.get(`/parcel/${user?.email}`)
         return res.data   
        }
    })
    console.log(myParcels)
    return (
        <div>
            <div className="text-3xl font-semibold text-center my-4">
            <h2>My Parcels</h2>

            </div>
             


{/* table */}
             <div className="w-11/12 mx-auto">
             <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Parcel Type 
          </TableHead>
          <TableHead>Approximate Delivery Date</TableHead>
          <TableHead>Requested Delivery Date</TableHead>
          <TableHead className="text-right">Booking Date</TableHead>
          <TableHead className="text-right">Delivery Men ID</TableHead>
          <TableHead className="text-right">Booking Status</TableHead>
          <TableHead className="text-right">Update</TableHead>
          <TableHead className="text-right">Review</TableHead>
          <TableHead className="text-right">Pay</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {myParcels?.map((parcel) => (
          <TableRow key={parcel?._id}>
             <TableCell className="font-medium">{parcel?.parcelType}</TableCell>
             <TableCell>{parcel?.bookingDate}</TableCell>
             <TableCell>{parcel?.deliveryDate}</TableCell>
            <TableCell className="text-right">{parcel?.bookingDate}</TableCell>
            <TableCell className="text-right">{parcel?.s}</TableCell>
            <TableCell className="text-right">{parcel?.status}</TableCell>
            <TableCell className="text-right"><Button variant="outline"><BsPencilSquare /></Button></TableCell>
            <TableCell className="text-right"><Button variant="outline"><MdCancelPresentation /></Button></TableCell>
            {parcel?.status==='delivered'&&<TableCell className="text-right"><Button><IoStarHalfSharp />Review</Button></TableCell>}
            <TableCell className="text-right"><Button>Pay</Button></TableCell>
            
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