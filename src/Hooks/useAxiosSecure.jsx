import { AuthContext } from '@/providers/AuthProvider';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import React from 'react';

const axiosSecure = axios.create({
    baseURL: 'https://assignment-12-server-three-sage.vercel.app',
    // baseURL: 'https://assignment-12-server-three-sage.vercel.app',
  });
const useAxiosSecure = () => {
  const {handleLogout} = useContext(AuthContext)
  const navigate = useNavigate()
  // request interceptorshghj
  axiosSecure.interceptors.request.use(function (config) {
   
    const token = localStorage.getItem("access-token")
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  axiosSecure.interceptors.response.use(function (response) {
   
    return response;
  }, function (error) {
    const status = error.response.status;
    if (status === 401 || status === 403) {
      handleLogout()
      navigate('/login')

    }
    // console.log(error)
    return Promise.reject(error);
  });
   // request interceptors

    return axiosSecure
};

export default useAxiosSecure;