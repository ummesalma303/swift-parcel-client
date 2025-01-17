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
   
const MyDeliveryList = () => {
    const {deliveryMenID} = useContext(AuthContext);
    console.log(deliveryMenID)
    const axiosPublic = useAxiosPublic()
    const {data:deliveryLists=[],isLoading,refetch} =useQuery({
        queryKey:["deliveryLists"],
        queryFn: async () => {
    const res = await axiosPublic.get(`/myDeliveryList/${deliveryMenID}`)
         return res.data   
        }
    })
    console.log(deliveryLists)
    return (
        <div>
           <h2> My Delivery List</h2>

            <div className="">
            <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deliveryLists?.map((invoice) => (
            <h2></h2>
        //   <TableRow key={invoice.invoice}>
        //     <TableCell className="font-medium">{invoice.invoice}</TableCell>
        //     <TableCell>{invoice.paymentStatus}</TableCell>
        //     <TableCell>{invoice.paymentMethod}</TableCell>
        //     <TableCell className="text-right">{invoice.totalAmount}</TableCell>
        //   </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
            </div>
        </div>
    );
};

export default MyDeliveryList;