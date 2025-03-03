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
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import useUser from '@/Hooks/useUser';
// import { getAuth, updateProfile } from "firebase/auth";
const imgkey=import.meta.env.VITE_imageHostingKey
const imgUploadURL=`https://api.imgbb.com/1/upload?key=${imgkey}`
// console.log(imgkey,'--------',imgUploadURL)
const MyProfile = () => {
    const axiosPublic=useAxiosPublic()
    const [users] = useUser()
    // const auth = getAuth(app);
    const navigate = useNavigate()
    const {setUser,user,address} = useContext(AuthContext);
    console.log(address

    )
    // const {data:myProfile=[]} =useQuery({
    //     queryKey:["myProfile"],
    //     enabled:!!user,
    //     queryFn: async () => {
    // const res = await axiosSecure.get(`/users/:email`)
    //      return res.data   
    //     }
    // })
    // console.log(users)
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
      } = useForm()
    
      const handleImage = e => {
      
        const imageFile={image:e}
        axiosPublic.post(imgUploadURL,imageFile,{
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        .then(res=>{
            const updateData ={
            displayName: user?.displayName, photoURL: res?.data?.data?.display_url
        }
        updateProfile(auth.currentUser,updateData)
        .then(res=>{
            setUser({...user,...updateData})
            // console.log(res)
            // console.log(updateData?.photoURL)
            axios.patch(`https://assignment-12-server-three-sage.vercel.app/updateUser/${user?.email}`,{photo:updateData?.photoURL})
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            // window.reload()

        })
        // .catch(err=>console.log(err))
            // console.log(res?.data?.display_url)
        })
        .catch(err=>console.log(err))
       
       

    }

    const handleUpdateImage=e=>{
        e.preventDefault()
        // console.log(e)
    }
    return (
        <div className='mb-20'>
            {/* <div className="w-11/12 md:w-1/2 mx-auto text-center mt-5">
            <h2 className='text-2xl font-semibold text-center'>My Profile</h2>
            <p className='text-sm mt-3'>Welcome to your profile! Here, you can view and manage your personal details, account settings, and activity. Keep your information up to date to make the most of your experience.</p>
            </div> */}
            <div className="bg-cover-image bg-cover bg-bottom bg-no-repeat h-[50vh] bg-fixed mb-16 relative">
                 <div className="bg-gradient-to-t from-[#00000056] to-[#0000005c] w-full h-full ">
                   <div className="">
                   <img className='w-28 h-28  mx-auto absolute -bottom-14 left-10 rounded-full ring ring-white' src={user?.photoURL} alt="" />
                   </div>
                 </div>
               </div>

               <div className="mt-20 border-[1px] px-5 py-9 rounded-md dark:text-black bg-slate-100">

                <div className="border-b-[1px] dark:text-black">
                    <h2 className='text-3xl font-bold'>Info:</h2>
                </div>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 dark:text-black">
                        <h2>Full Name:</h2> 
                        <h2>{user?.displayName}</h2>
                    </div>
                    <div className="grid grid-cols-2">
                        <h2>Mobile:</h2> 
                        <h2>{users?.phone}</h2>
                    </div>
                    <div className="grid grid-cols-2">
                        <h2>Full Name:</h2> 
                        <h2>{user?.displayName}</h2>
                    </div>
                    <div className="grid grid-cols-2">
                        <h2>Address:</h2> 
                        <address>{user?.address || 'comilla,bangladesh'}</address>
                    </div>
                </div>

                <div className="pt-10">
                <form action="" className='space-x-5' >
                {/* <input onChange={(e)=>handleImage(e.target.files[0])} type="file" name="" id="" /> */}

                <label className='inline-block px-4 py-3 bg-slate-500 text-white cursor-pointer text-center' >Upload a image

                <input hidden onChange={(e)=>handleImage(e.target.files[0])} type="file" />
                
                </label>

                <label className='inline-block px-4 py-3 bg-green-300 cursor-pointer text-center font-semibold' >Update

                <input hidden onChange={(e)=>handleImage(e.target.files[0])} type="file" />
                
                </label>
                    

                    
            </form>
                </div>
               </div>

        </div>
    );
};

export default MyProfile;