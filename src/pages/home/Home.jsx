import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Banner from '../../components/Sheared/Banner/Banner';
// import FeaturesCard from '@/components/FeaturesSec/FeaturesCard/FeaturesCard';
import FeaturesSec from '@/components/FeaturesSec/FeaturesSec/FeaturesSec';
// import { Button } from "@/components/ui/button"

const Home = () => {
    const data = useContext(AuthContext);
    // console.log(data)
    return (
        <div>
            <Banner/>
            {/* <div className=""></div> */}
            {/* features section */}
            <FeaturesSec/>
        </div>
    );
};

export default Home;