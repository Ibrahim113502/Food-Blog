
import React from 'react';
import { Carousel } from 'flowbite-react';
import Image1 from "../../../../assets/Images/carosel/Image1.jpg";
import Image2 from "../../../../assets/Images/carosel/Image2.jpg"
export default function FirstCarousel() {
    return (
        <Carousel className='h-[300px] bg-cover bg-no-repeat bg-center'>
          <div>  <img className='object-cover h-full w-full'
                alt="..."
                src={Image1}
            /></div>
            <div >
                <img className='object-cover '
                    alt="..."
                    src={Image2}
                /></div>
        </Carousel>
    )
}


