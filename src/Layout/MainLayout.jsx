import React from 'react';
import NavBar from '../components/Sheared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Sheared/Footer';
import { Fade } from 'react-awesome-reveal';
// import NavBar2 from '@/components/Sheared/Banner/NavBar2';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            {/* <NavBar2></NavBar2> */}
            <Outlet></Outlet>
            {/* <Fade> */}
            <Footer></Footer>
            {/* </Fade> */}
        </div>
    );
};

export default MainLayout;