// import { Input } from '@/components/ui/input';
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Banner = () => {
  return (
    <div className="bg-banner bg-cover bg-no-repeat h-screen bg-center">
      <div className="bg-[#00000042] w-full h-full flex justify-center items-center">
        {/* <div className=""> */}
        <div className="w-11/12 md:w-1/2 mx-auto text-center text-white space-y-3">
          <h2 className="text-2xl md:text-5xl font-bold">
            Streamline Your Deliveries with Ease
          </h2>
          <p className="text-sm md:text-base">
            Effortlessly manage, track, and optimize your delivery operations
            for <br /> faster, smarter, and more reliable results.
          </p>
          <a href="#recentParcel"><Button className="my-4">Get Started</Button></a>
          {/* <div className="flex max-w-sm mx-auto items-center space-x-2">
            <Input className='' type="email" placeholder="Email" />
            <Button type="submit">Search</Button>
          </div> */}
        </div>
        {/* </div> */}
        {/* <div className="bg-banner bg-cover"></div> */}
      </div>
    </div>
  );
};

export default Banner;
