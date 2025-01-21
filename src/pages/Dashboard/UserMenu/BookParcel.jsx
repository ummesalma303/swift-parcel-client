import { Input } from "@/components/ui/input";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import { AuthContext } from "@/providers/AuthProvider";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaClipboardList } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BookParcel = () => {
  const navigate =useNavigate()
  const [total,setTotal] = useState(0)
  // let fontWeight;
  const [weight,setWeight] = useState(0)
  const axiosPublic = useAxiosPublic()
  // const navigate = useNavigate()
  const [error,setError] = useState([])
  const { user } = useContext(AuthContext);
  // console.log(createNewUser)
//   requirement
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const handleWeight = (value) =>{
   let fontWeight = value
    // setWeight(value)
    setWeight(fontWeight)
    setTotal(fontWeight*50)
    // const price = fontWeight*50
  }

  // console.log(weight)
  const onSubmit = (data) => {
    // let date = new Date().toLocaleDateString()
    // if (data?.phone) {
    //     console.log('hjghj',data?.phone)
// 
    // }
    console.log(total)
const parcelData={
  ...data, totalPrice: total, bookingDate: new Date(),parcelWeight:weight,status:'pending',show:true
}
console.log(parcelData)
// console.log(parcelData,total)
    axiosPublic.post('/parcel',parcelData)
    .then(res=>{
       Swal.fire({
              title: "Success",
              text: `${user?.displayName}'s ${weight} parcel successfully booked`,
              icon: "success",
              // timer: 1000
            });
            navigate('/dashboard/myParcel')
      console.log(res.data)})
    .catch(err=>console.log(err))
    console.log(data);
  };
 
  return (
    <div>
        
      {/* form */}
      <div className="my-7 flex flex-col justify-center items-center ">
        <div className="">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            {" "}
            Book a Parcel <FaClipboardList size={25} />
          </h2>
        </div>
        <div className="w-11/12 md:w-11/12 lg:w-10/12 border-2 p-5 rounded-lg">
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            {/* input-1 */}
            <div className="space-y-1">
              <label>Name</label>
              {/* <label>Email:</label> */}
              <Input
                className="text-green-500"
                // type="text"
                value={user?.displayName}
                disabled
                {...register("name")}
              />
            </div>
            {/* input-2 */}
            <div className="space-y-1">
              <label>Email:</label>
              <Input
                // type="email"
                className="text-green-500"
                value={user?.email}
                {...register("email")}
                disabled
              />
               {/* <Input
                className="text-green-500"
                type="text"
                value={user?.displayName}
                disabled
                {...register("name")}
              /> */}
              
            </div>
            {/* input-3 */}
            <div className="space-y-1">
              <label>Phone Number:</label>
              <Input
                type="number"
                placeholder="Phone Number"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* input-4 */}
            <div className="space-y-2">
              <label>Parcel Type:</label>
              <Input
                type="text"
                placeholder="Parcel Type"
                {...register("parcelType", { required: true })}
              />
              {errors.parcelType && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* input-5 */}
            <div className="space-y-1">
              <label>Parcel Weight:</label>
              <Input onChange={(e)=>handleWeight(e.target.value)}
                type="number"
                placeholder="Parcel Weight"
                // {...register("parcelWeight", { required: true })}
              />
              {/* <Input onChange={(e)=>handleWeight(e.target.value)} /> */}

              {errors.parcelWeight && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* receivers */}
            {/* receiver input-1 */}
            <div className="space-y-1">
              <label>Receiver’s Name:</label>
              <Input
                type="text"
                placeholder="Receiver’s Name"
                {...register("receiverName", { required: true })}
              />
              {errors.receiverName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* receiver input-2 */}
            <div className="space-y-1">
              <label>Receiver's Phone Number:</label>
              <Input
                type="number"
                placeholder="Receiver's Phone Number"
                {...register("receiverPhone", { required: true })}
              />
              {errors.receiverPhone && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* receiver input-3 */}
            <div className="space-y-1">
              <label>Parcel Delivery Date:</label>
              <input
                type="date"
                className="w-full border-2 p-2 rounded-md"
                {...register("deliveryDate", { required: true })}
              />
              {errors.deliveryDate && <span className='text-red-500'>This field is required</span>} 
            </div>
            
            {/* receiver input-4 */}
            <div className="space-y-1">
              <label>Price(tk):</label>
             
              <Input value={total} {...register("totalPrice")}/>
              
              {/* {errors.price && <span className='text-red-500'>This field is required</span>}  */}
            </div>
            {/* receiver input-4 */}
            <div className="space-y-1">
              <label>Delivery Address Latitude:</label>
              <input step="0.0001"
                type="text" 
                className="w-full border-2 p-2 rounded-md"
                placeholder="Delivery Address Latitude"
                {...register("addressLatitude", { required: "This field is required",pattern:{value:/^\d+\.\d+$/,message:"Latitude must be decimal"} })}
              />
          
              {errors.addressLatitude && <span className='text-red-500'>{errors.addressLatitude.message}</span>} 
              
                                          
            </div>
            {/* receiver input-5 */}
            <div className="space-y-1">
              <label>Delivery Address longitude:</label>                   



              <input min="0"  step="0.0001"
                type="text" required
                className="w-full border-2 p-2 rounded-md"
                placeholder="Delivery Address longitude"
                {...register("addressLongitude", { required:"This field is required",pattern:{value:/^\d+\.\d+$/
,message:"Longitude must be decimal"} })}
              />
              {errors.addressLongitude && <span className='text-red-500'>{errors.addressLongitude.message}</span>} 
            </div>
            {/* receiver input-3 */}
            <div className="space-y-1">
              <label>Parcel Delivery Address:</label>
              <textarea
                type="text"
                className="w-full border-2 p-2 rounded-md"
                placeholder="Parcel Delivery Address"
                {...register("deliveryAddress", { required: true })}
              />
              {errors.deliveryAddress && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <input
              className="bg-black px-4 py-1 w-full rounded-md text-white mb-3"
              type="submit"
              value="Book"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookParcel;
