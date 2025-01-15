import SocialLogin from '@/components/SocialLogin/SocialLogin';
import { Input } from '@/components/ui/input';
import { AuthContext } from '@/providers/AuthProvider';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import axios from 'axios';

const Login = () => {
    const navigate = useNavigate()
    const {loginUser} = useContext(AuthContext);
    // console.log(createNewUser)
    const {
        register,
        formState: { errors },
        // reset,
        handleSubmit,
      } = useForm()
    
      const onSubmit = (data) => {
        // console.log(data)
        
       
        loginUser(data?.email,data?.password)
        .then(res=>{
            console.log(res)
            Swal.fire({
              title: "Success",
              text: "user successfully login",
              icon: "success",
              timer: 1000
            });
            navigate('/')
            // reset
        })
        .catch(err=>console.log(err))

    }
    
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-semibold mb-6'>Please login yor account</h2> 
  <div className="w-11/12 md:w-[50%] lg:w-1/3 border-2 p-5 rounded-lg">
  <form className=' ' onSubmit={handleSubmit(onSubmit)}>
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
    
     <p className='pt-1 pb-3'>If you are a new user.please <Link to='/register'><span className='hover:underline text-red-300'>Register</span></Link></p>
      <input className='bg-black px-4 py-2 rounded-md text-white w-full mb-3' type="submit" />
    </form>
    <div className="divide-x-2 ">
    <SocialLogin></SocialLogin>
    </div>
  </div>
        </div>
    );
};

export default Login;