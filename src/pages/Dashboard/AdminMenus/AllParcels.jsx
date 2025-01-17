import useAxiosPublic from "@/Hooks/useAxiosPublic";
import useUser from "@/Hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import React from "react";
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
//   import { Label } from "@/components/ui/label"

const AllParcels = () => {
  const delivery = useLoaderData();
 
  console.log(delivery)
  // const {user} = useContext(AuthContext)
  const axiosPublic = useAxiosPublic();
  const { data: parcels = [], isLoading } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/parcel`);
      return res.data;
    },
  });
  //  console.log(parcels)
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User’s Name</TableHead>
            <TableHead>User’s Phone</TableHead>
            <TableHead>Booking Dat</TableHead>
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
                    <Button variant="outline">Edit Profile</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <div className=" py-4">
                      <div className="items-center grid gap-4">
                       {/* input-1 */}
                        <div className="  ">
                          <label>Delivery Man Name:</label>
                          <select defaultValue="Choose a name" className=" border-2 w-full p-1 rounded-md">
                            {delivery.map((deliveryMan) => (
                              <option
                                className="w-full"
                                value={deliveryMan?.displayName}
                              >
                                {deliveryMan?.displayName
                                }
                              </option>
                            ))}
                          </select>
                          <br />
                        </div>
                        {/* input-2 */}
                        <div className="">
                          <label htmlFor="">Approximate date</label>
                          <input
                            type="date"
                            className="w-full border-2 p-2 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    <DialogClose asChild>
                      <Button type="button" >
                        Assign
                      </Button>
                    </DialogClose>
                  </DialogContent>
                </Dialog>

                {/* <Button>Mange</Button> */}
              </TableCell>
            </TableRow>
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
  );
};

export default AllParcels;
