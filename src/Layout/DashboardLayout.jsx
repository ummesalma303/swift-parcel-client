import Sidebar from '@/components/Dashboard/Sidebar/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    
    return (
        <div className='relative min-h-screen md:flex'>
            <Sidebar/>
            <div className="flex-1 md:ml-64">
                <div className="p-4">
             <Outlet/>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;