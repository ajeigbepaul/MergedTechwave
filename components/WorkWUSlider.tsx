import Image from 'next/image';
import React from 'react'

const WorkWUSlider = ({img=""}) => {
    return (
        <div>
          <Image src={img} alt="bannerimg" width={40} height={40} className="md:w-32 w-52 md:h-[10vh] h-auto  object-contain"/>
        </div>
      );
    }


export default WorkWUSlider