import React, { useContext } from 'react';
import { Button } from '../ui/button';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '@/providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
 
const SocialLogin = () => {
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const {googleLoginUser} = useContext(AuthContext);
    const handleGoogleLogin =()=>{
        googleLoginUser()
        .then((res) => {
            console.log(res.user)
            const userInfo={
            name: res?.user?.displayName,
            photo: res?.user?.photoURL,
            email: res?.user?.email,
            role: 'User'
            }
            axiosPublic.post('/users',userInfo)
            .then((res) => {
                console.log(res.data)
                 Swal.fire({
                              title: "Success",
                              text: "User successfully login",
                              icon: "success",
                              timer: 1000
                            });
                navigate('/')
              }).catch((error) => {
                console.log(error)
              });

          }).catch((error) => {
            console.log(error)
          });
    }
    return (
        <div>
        <Button onClick={handleGoogleLogin} className="w-full p-1">
        <FcGoogle /> Login with Email
        </Button>
        </div>
    );
};

export default SocialLogin;