// import React from 'react';
import { Input } from '@/components/ui/input';
import { AuthContext } from '@/providers/AuthProvider';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SocialLogin from '@/components/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { auth } from '@/firebase/firebase.config';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
// import { getAuth, updateProfile } from "firebase/auth";
const MyProfile = () => {
    const axiosPublic=useAxiosPublic()
    // const auth = getAuth(app);
    const navigate = useNavigate()
    const {setUser,user} = useContext(AuthContext);
    // console.log(createNewUser)
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
      } = useForm()
    
      const onSubmit = (data) => {
        // console.log(data)
        // const userInfo ={
        //     name: data?.name,
        //     photo: data?.photo,
        // }
        const updateData ={
            displayName: data?.name, photoURL: data?.photo
        }
        
      


          // updateUserProfile(updateData)
          updateProfile(auth.currentUser,updateData).then(res=>{
              axiosPublic.patch(`/updateUser/${user?.email}`,{displayName: data?.name, photoURL: data?.photo})
              .then(res=>{
                  console.log(updateData)
                  setUser({...user,...updateData})
                  // if (res.data.modifiedCount>0) {
                    //     console.log('successfully update database')
                    // }
                    console.log(res.data)})
                .catch(err=>console.log(err))
                        // console.log(res)
            }).catch(err=>console.log(err))
        
            //  Swal.fire({
            //               title: "Success",
            //               text: "user successfully register",
            //               icon: "success",
            //               timer: 1000
            //             });
         /* -------------------------- send data on database ------------------------- */
        //  axios.patch('http://localhost:5000/users',userInfo)
        //  .then(res=>{
        //     if (data.insertedId) {
        //         console.log('successfully added database')
        //     }
        //     console.log(res.data)})
        //  .catch(err=>console.log(err))
        //     navigate('/')
       

    }
    return (
        <div className='h-screen  w-11/12 mx-auto'>
            
            <h2 className='text-2xl font-semibold text-center'>myProfile</h2>
           <div className="h-full flex justify-center space-x-4 items-center ">
           <div className="">
                <img className='w-24 h-24 rounded-full' src={user?.photoURL} alt="" />
                <h2>{user?.displayName}</h2>
            </div>
            <div className=" md:w-1/3 border-2 p-5 rounded-lg">
            <form className=' ' onSubmit={handleSubmit(onSubmit)}>
    {/* input-1 */}
      <div>
     <label>Name</label>
     {/* <label>Email:</label> */}
      <Input type="text" placeholder="Name" {...register("name", { required: true })}/>
      {errors.name && <span className='text-red-500'>This field is required</span>}
     </div>
     {/* input-2 */}
     <div className="">
     <label>PhotoURL:</label>
      <Input type="url" placeholder="PhotoURL" {...register("photo", { required: true })}/>
      {errors.email && <span className='text-red-500'>This field is required</span>} 
     </div>
     
      <input className='bg-black px-4 py-1 w-full rounded-md text-white mb-3 mt-2' type="submit" value='register' />
    </form>
            </div>
           </div>
        </div>
    );
};

export default MyProfile;