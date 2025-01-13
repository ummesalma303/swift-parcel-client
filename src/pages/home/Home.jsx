import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Banner from '../../components/Sheared/Banner/Banner';

const Home = () => {
    const data = useContext(AuthContext);
    console.log(data)
    return (
        <div>
            <h1>home</h1>
            <Banner></Banner>
        </div>
    );
};

export default Home;