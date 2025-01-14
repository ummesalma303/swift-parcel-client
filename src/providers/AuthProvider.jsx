import { auth } from "@/firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // new user
    const createNewUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update profile
    const updateUserProfile = (updateData) =>{
        setLoading(true)
        updateProfile(auth.currentUser,updateData)
          
    }

    // login user
    const loginUser = (email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
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
            setUser(currentUser)
            setLoading(false)
          });
    
      return () => subscribe()
    }, [])
    
    const info={
        createNewUser,
        updateUserProfile,
        loginUser,
        handleLogout,
        setUser,
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

export default AuthProvider;