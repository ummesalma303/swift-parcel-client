import React, { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '@/providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useUser = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    // console.log(user)
    const {data:users,isLoading,refetch} =useQuery({
        queryKey:["user",user?.email],
        enabled:!!(user?.email )&&!!localStorage.getItem("access-token"),
        queryFn: async () => {
    const res = await axiosSecure.get(`/users/${user?.email}`)
         return res.data   
        },
        initialData:{}
    })
    return [users,isLoading,refetch]
};











// const useUser = () => {
//     const {user} = useContext(AuthContext)
//     // console.log(user?.email)
//     const axiosPublic = useAxiosPublic()
//     // const axiosSecure = useAxiosSecure()
//     const {data:users={},isLoading,refetch} =useQuery({
//         queryKey:["user",user?.email],
//         enabled:!!(user?.email ),
//         queryFn: async () => {
//     const res = await axiosPublic.get(`/users/${user?.email}`)
//     console.log(res)
//          return res.data   
//         }
//     })
//     return [users,isLoading,refetch]
// };

export default useUser;