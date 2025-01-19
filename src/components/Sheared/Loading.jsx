import { Hourglass } from 'lucide-react';
import React from 'react';

const Loading = () => {
    return (
        <div className='h-[80vh] w-full flex justify-center items-center'>
            <Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />
        </div>
    );
};

export default Loading;