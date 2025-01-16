import useAxiosPublic from '@/Hooks/useAxiosPublic';
import useUser from '@/Hooks/useUser';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
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
import { Button } from '@/components/ui/button';

const AllUser = () => {
    // const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const {data:users=[],isLoading} =useQuery({
        queryKey:["users"],
        queryFn: async () => {
    const res = await axiosPublic.get(`/users`)
         return res.data   
        }
    })
    console.log(users)
    return (
        <div>
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
          <TableHead className="text-right">Cancel</TableHead>
          <TableHead className="text-right">Pay</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((user) => (
          <TableRow key={user?._id}>
             {/* <TableCell className="font-medium">{parcel?.parcelType}</TableCell> */}
             <TableCell>' '</TableCell>
             <TableCell>{user?.displayName}</TableCell>
            {/* <TableCell className="text-right">{parcel?.bookingDate}</TableCell>
            <TableCell className="text-right">{parcel?.s}</TableCell>
            <TableCell className="text-right">{parcel?.status}</TableCell> */}
            <TableCell className="text-right">
            
            {/* {
            parcel?.status !== 'pending' ? <Button disabled ><BsPencilSquare /></Button>:<Link to={`/dashboard/updateBooking/${parcel?._id}`}><Button  ><BsPencilSquare /></Button></Link>
            } */}
            
            </TableCell>
            <TableCell className="text-right">
            {/* {
            parcel?.status !== 'pending' ? <Button variant="destructive" disabled ><MdCancelPresentation /></Button>: <Button variant="destructive" onClick={()=>handleCancel(parcel?._id)}><MdCancelPresentation /></Button>
            } */}
             </TableCell>
            <TableCell className="text-right"><Button>Pay</Button></TableCell>
            {/* {parcel?.status==='delivered'&&<TableCell className="text-right"><Button><IoStarHalfSharp />Review</Button></TableCell>} */}
            
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
    );
};

export default AllUser;