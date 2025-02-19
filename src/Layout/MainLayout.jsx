import React from 'react';
import NavBar from '../components/Sheared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Sheared/Footer';
import { Fade } from 'react-awesome-reveal';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            {/* <Fade> */}
            <Footer></Footer>
            {/* </Fade> */}
        </div>
    );
};

export default MainLayout;