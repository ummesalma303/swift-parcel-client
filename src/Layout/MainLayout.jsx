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
        <div className=' light:bg-[#ecf0f3cd]'>
            <div className="sticky top-0 z-10 backdrop-blur-xl">
            <NavBar ></NavBar>

            </div>
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