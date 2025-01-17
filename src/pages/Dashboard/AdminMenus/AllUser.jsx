import useAxiosPublic from '@/Hooks/useAxiosPublic';
import useUser from '@/Hooks/useUser';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
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
import Swal from 'sweetalert2';
// import React, { useState } from "react";
import SweetPagination from "sweetpagination";


const AllUser = () => {
    // const {user} = useContext(AuthContext)
    // const [currentPage, setCurrentPage] = useState([]);
    // const [items, setItemsPage] = useState(3);
    // const [count, setCount] = useState(0);
    // const numberOfPages = Math.ceil(count/items)
    // const pages = [...Array(numberOfPages)]
    // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    // const 


    const axiosPublic = useAxiosPublic()
    const {data:users=[],isLoading,refetch} =useQuery({
        queryKey:["users"],
        queryFn: async () => {
    const res = await axiosPublic.get(`/users`)
         return res.data   
        }
    })
    console.log(users)

    const makeDeliveryMen =(id)=>{
      console.log(id)
      axiosPublic.patch(`/changeRole/${id}`)
      .then(res=>{
        if (res.data.modifiedCount>0) {
          Swal.fire({
              title: "Success",
              text: "User Role Successfully Modified. ",
              icon: "success",
            });
            // timer: 1000
        }
        console.log(res.data)
      refetch()
      })
      .catch(err=>console.log(err))
    }
    const makeAdmin =(id)=>{
      console.log(id)
      axiosPublic.patch(`/changeAdminRole/${id}`)
      .then(res=>{
      refetch()  
        console.log(res.data)
        if (res.data.modifiedCount>0) {
          Swal.fire({
              title: "Success",
              text: "User Role Successfully Modified. ",
              icon: "success",
            });
            // timer: 1000
        }
      })
      .catch(err=>console.log(err))
    }
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
          <TableHead className="text-right">Make Role Button</TableHead>
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
            <TableCell className="text-right space-x-3">
            <Button onClick={()=>makeDeliveryMen(user?._id)}>{user?.role}</Button>
            <Button  onClick={()=>makeAdmin(user?._id)}>{user?.role}</Button>
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


<div>
  {/* <button>Prev</button>
  {
    pages?.map(page=><Button></Button>)
  }
  <button>Next</button> */}
  
</div>
    
     

      {/* <SweetPagination
        currentPageData={setCurrentPageData}
        getData={items}
      /> */}
   
        </div>
    );
};

export default AllUser;