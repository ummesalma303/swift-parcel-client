import { auth } from "@/firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
// import React from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const axiosPublic = useAxiosPublic()
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [deliveryMenID,setDeliveryMenID] = useState();
    const [total,setTotal] = useState(0);
    const [parcelIds,setParcelIds] = useState(0);
    // console.log(total)
    // new user
    const createNewUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update profile
    const updateUserProfile = (updateData) =>{
        console.log(updateData)
        setLoading(true)
        return updateProfile(auth.currentUser,updateData)
          
    }

    // login user
    const loginUser = (email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    //login with google
    const googleLoginUser =()=>{
        return signInWithPopup(auth, provider)
    }
    // logout User
    const handleLogout=()=>{
        setLoading(true)
        signOut(auth).then((res) => {
            console.log(res)
          }).catch((error) => {
            console.log(error)
          });
    }
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setLoading(false)
            setUser(currentUser)
            const userInfo= {email:currentUser?.email}
            if (currentUser) {
                axiosPublic.post("/jwt",userInfo)
                .then(res=>{
                    // console.log(res.data)
                    if (res.data) {
                        // console.log(res.data)
                        localStorage.setItem('access-token',res.data)
                        setLoading(false)
                    }
                    // console.log(res.data)
                })
                .catch(err=>console.log(err))
            }else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }
           
           
          });
    
      return () => subscribe()
    }, [])
    // console.log(
    //     deliveryMenID)
    const info={
        createNewUser,
        updateUserProfile,
        loginUser,
        googleLoginUser,
        handleLogout,
        setUser,
        setTotal,
        total,
        deliveryMenID,
        setDeliveryMenID,
        parcelIds,
        setParcelIds,
        loading,
        user
    }
    return (
        <div>
         <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>   
        </div>
    );
};

AuthProvider.propTypes = {
   children: PropTypes.node.isRequired
  };
export default AuthProvider;