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
// import { getAuth, updateProfile } from "firebase/auth";
const imgkey=import.meta.env.VITE_imageHostingKey
const imgUploadURL=`https://api.imgbb.com/1/upload?key=${imgkey}`
// console.log(imgkey,'--------',imgUploadURL)
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
    
      const handleImage = e => {
        // e.preventDefault()
        // console.log(data)
        // const userInfo ={
        //     name: data?.name,
        //     photo: data?.photo,
        // }
        // const updateData ={
        //     displayName: user?.displayName, photoURL: data?.photo
        // }
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
       
         /* -------------------------- send data on database ------------------------- */
        //  axios.patch('https://assignment-12-server-three-sage.vercel.app/users',userInfo)
        //  .then(res=>{
        //     if (data.insertedId) {
        //         console.log('successfully added database')
        //     }
        //     console.log(res.data)})
        //  .catch(err=>console.log(err))
        //     navigate('/')
       

    }

    const handleUpdateImage=e=>{
        e.preventDefault()
        // console.log(e)
    }
    return (
        <div className='h-[80vh]  w-11/12 mx-auto'>
            <div className="w-11/12 md:w-1/2 mx-auto text-center mt-5">
            <h2 className='text-2xl font-semibold text-center'>My Profile</h2>
            <p className='text-sm mt-3'>Welcome to your profile! Here, you can view and manage your personal details, account settings, and activity. Keep your information up to date to make the most of your experience.</p>
            </div>
           <div className="h-[70vh] flex flex-col justify-center space-x-4 items-center  ">
          <div className="border-[1px] p-5 rounded-md">
          <div className=" text-center mb-4">
                <img className='w-24 h-24 rounded-full mx-auto' src={user?.photoURL} alt="" />
                <h2>{user?.displayName}</h2>
            </div>
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