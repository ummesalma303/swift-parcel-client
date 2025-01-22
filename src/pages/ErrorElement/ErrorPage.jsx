import { Button } from '@/components/ui/button';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Button } from '../ui/button';

const ErrorPage = () => {
    return (
        <div className="bg-banner-error bg-cover w-full h-screen">
            <div className="flex justify-center items-center h-full">
                <div className="text-white text-center">
            {/* <h2 className='text-5xl'>Data Not Found</h2> */}
            
            <NavLink to='/'><Button>Go Back</Button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;