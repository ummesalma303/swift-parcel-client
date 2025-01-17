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
        <div className='w-11/12 mx-auto'>
             <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">User’s Name</TableHead>
          <TableHead className="text-center">Phone Number</TableHead>
          {/* <TableHead>Requested Delivery Date</TableHead> */}
          <TableHead className="text-center">Number of parcels Booked</TableHead>
          <TableHead className="text-right">Make Delivery Men Button</TableHead>
          {/* <TableHead className="text-right">Booking Status</TableHead>
          <TableHead className="text-right">Update</TableHead>
          <TableHead className="text-right">Cancel</TableHead>
          <TableHead className="text-right">Pay</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((user) => (
          <TableRow key={user?._id}>
             {/* <TableCell className="font-medium">{parcel?.parcelType}</TableCell> */}
             <TableCell>{user?.name}</TableCell>
             <TableCell className="text-center">{user?.phone||'N/A'}</TableCell>
             {/* <TableCell>{user?.phone}</TableCell> */}
             <TableCell className="text-right"> </TableCell>
            <TableCell className="text-right">
            <Button>Manage</Button>
             </TableCell>
            {/* <TableCell className="text-right"></TableCell> */}
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