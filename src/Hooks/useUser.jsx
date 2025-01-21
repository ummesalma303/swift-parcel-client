import React, { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '@/providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useUser = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data:users={},isLoading} =useQuery({
        queryKey:["user",user?.email],
        enabled:!!(user?.email )&&!!localStorage.getItem("access-token"),
        queryFn: async () => {
    const res = await axiosSecure.get(`/users/${user?.email}`)
         return res.data   
        }
    })
    return [users,isLoading]
};

export default useUser;