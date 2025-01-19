import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useParcel = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
  
    const {
        data: myParcels = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["parcel", user?.email, filter],
        queryFn: async () => {
          // const res = await axiosPublic.get(`/parcel/${user?.email}`)
          const res = await axiosPublic.get(
            `/parcel/${user?.email}?search=${filter}`
          );
          return res.data;
        },
      });
    return [myParcels,isLoading]
};

export default useParcel;