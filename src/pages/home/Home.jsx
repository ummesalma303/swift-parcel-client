import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Banner from '../../components/Sheared/Banner/Banner';
import { Button } from "@/components/ui/button"

const Home = () => {
    const data = useContext(AuthContext);
    console.log(data)
    return (
        <div>
            <h1>home</h1>
            <Button >Destructive</Button>

            <Banner></Banner>
        </div>
    );
};

export default Home;