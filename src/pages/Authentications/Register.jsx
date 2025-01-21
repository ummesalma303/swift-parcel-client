import { Input } from '@/components/ui/input';
import { AuthContext } from '@/providers/AuthProvider';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SocialLogin from '@/components/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';

const Register = () => {
    const navigate = useNavigate()
    const {createNewUser,updateUserProfile,setUser,user} = useContext(AuthContext);
    // console.log(createNewUser)
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
      } = useForm()
    
      const onSubmit = (data) => {
        console.log(data)
        const updateData ={
            displayName: data?.name, 
            photoURL: data?.photo
        }
        const userInfo ={
            name: data?.name, 
            photo: data?.photo,
            email: data?.email,
            role: data?.role,
            phone:data?.phone
        }
        createNewUser(data?.email,data?.password)
        .then(res=>{
            console.log(res)
            updateUserProfile(updateData)
            setUser({...user,...updateData})
             Swal.fire({
                          title: "Success",
                          text: "user successfully register",
                          icon: "success",
                        //   timer: 1000
                        });
                        /* -------------------------- send data on database ------------------------- */
                        axios.post('https://assignment-12-server-three-sage.vercel.app/users',userInfo)
         .then(res=>{
            if (data.insertedId) {
                console.log('successfully added database')
            }
            console.log(res.data)})
         .catch(err=>console.log(err))
            navigate('/')
            window.location.reload()
            // reset
        })
        .catch(err=>console.log(err))

    }
    
    //   console.log(watch("example"))
    return (
        <div className='py-6 flex flex-col justify-center items-center '>
             <h2 className='text-2xl font-semibold mb-6'>Please login yor account</h2>
             <div className="w-11/12 md:w-[60%] border-2 p-5 rounded-lg">
            
             <form className='grid gap-4' onSubmit={handleSubmit(onSubmit)}>
    {/* input-1 */}
     <div>
     <label>Name</label>
     {/* <label>Email:</label> */}
      <Input type="text" placeholder="Name" required {...register("name", { required: true })}/>
      {errors.name && <span className='text-red-500'>This field is required</span>}
     </div>
     {/* input-2 */}
     <div className="">
     <label>PhotoURL:</label>
      <Input type="url" placeholder="PhotoURL" {...register("photo", { required: true })}/>
      {errors.email && <span className='text-red-500'>This field is required</span>} 
     </div>
     {/* input-3 */}
     <div className="">
     <label>Email:</label>
      <Input type="email" placeholder="Email" {...register("email", { required: true })}/>
      {errors.email && <span className='text-red-500'>This field is required</span>} 
     </div>
     {/* input-4 */}
     <div className="py-1">
     <label>Password:</label>
      <Input type="Password" placeholder="Password" {...register("password", { required: true })}/>
      {errors.email && <span className='text-red-500'>This field is required</span>} 
     </div>
     {/* input-5 */}
     <div className="  ">
     <label>Role:</label>
      <select className='border-2 w-full p-1 rounded-md'  {...register("role")}>
      {/* <option defaultValue='Select A role'></option> */}
      {/* <option disabled selected>Select A role</option> */}
        <option value="User">User</option>
        <option value="Delivery Man">Delivery Man</option>
        {/* <option value="other">other</option> */}
      </select><br />
      
     </div>
     {/* input-6 */}
     <div className="">
     <label>Phone Number:</label>
      <Input type="number" placeholder="Phone Number" {...register("phone", { required: true })}/>
      {errors.phone && <span className='text-red-500'>This field is required</span>} 
     </div>

     <p className='pt-1 pb-3'>If You have an account.please <Link to='/login'><span className='hover:underline text-red-300'>Login</span></Link></p>
      <input className='bg-black px-4 py-1 w-full rounded-md text-white mb-3' type="submit" value='register' />
    </form>
    <div className="divide-x-2 ">
    <SocialLogin></SocialLogin>
    </div>
             </div>
   
        </div>
    );
};

export default Register;