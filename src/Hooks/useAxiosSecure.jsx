import { AuthContext } from '@/providers/AuthProvider';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import React from 'react';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    // baseURL: 'http://localhost:5000',
  });
const useAxiosSecure = () => {
  const {handleLogout} = useContext(AuthContext)
  const navigate = useNavigate()
  // request interceptors
  axiosSecure.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log('stop by intercreptor.........')
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