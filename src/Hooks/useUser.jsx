import React, { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '@/providers/AuthProvider';

const useUser = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const {data:users={},isLoading} =useQuery({
        queryKey:["user",user?.email],
        enabled:!!(user?.email),
        queryFn: async () => {
    const res = await axiosPublic.get(`/users/${user?.email}`)
         return res.data   
        }
    })
    return [users,isLoading]
};

export default useUser;