import React from 'react';
import NavBar from '../components/Sheared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Sheared/Footer';
import { Fade } from 'react-awesome-reveal';
// import NavBar2 from '@/components/Sheared/Banner/NavBar2';
import { ThemeProvider } from "@/components/theme-provider"

const MainLayout = () => {
    return (
         <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className='bg-[#ecf0f3cd]'>
            <NavBar></NavBar>
            {/* <NavBar2></NavBar2> */}
            <Outlet></Outlet>
            {/* <Fade> */}
            <Footer></Footer>
            {/* </Fade> */}
        </div>
         </ThemeProvider>
    );
};

export default MainLayout;