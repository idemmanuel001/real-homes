import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


//property details Image Slider
export default function ImageSlider({ photos }) {
    const [index, setIndex] = useState(0);

    return (
        <div className="relative max-w-2xl mx-auto overflow-hidden h-96 mt-20s">

            <div className="absolute top-0 bottom-0 left-0 right-0 flex w-full h-full">
                {photos.map((photo, photoIndex) => {

                    //using a variable to place all images at the right part 
                    // of the container where it would be hidden
                    let position = 'opacity-0 translate-x-full';
                    if (photoIndex === index) {
                        position = ' opacity-1 translate-x-0';
                    }
                    if (photoIndex === index - 1(index === 0 && photos.length - 1)) {
                        position = '-translate-x-full';
                    }

                    return (
                        <div
                            key={photo.url}
                            className={`${position} transition-all duration-300 absolute h-full w-full`}>
                            <img src={photo.url} alt="property photo" className='w-full h-full' />
                        </div>
                    );

                })}

                <LeftArrow setIndex={setIndex} />
                <RightArrow setIndex={setIndex} />
            </div>
        </div>
    );
}


//scroll to prev Image
function LeftArrow({ setIndex }) {

    return (
        <button
            className='absolute flex items-center justify-center text-white transition-all duration-300 bg-gray-600 cursor-pointer hover:bg-gray-300 hover:text-black top-2/4 left-8 w-14 h-14 backdrop-opacity-0'
            onClick={()=> setIndex(index - 1)}
        >
            <FaArrowAltCircleLeft />
        </button>
    );
}


//scroll to the next Image
function RightArrow({ setIndex }) {
    return (
        <button
            className='absolute flex items-center justify-center text-white transition-all duration-300 bg-gray-600 cursor-pointer hover:bg-gray-300 hover:text-black top-2/4 right-8 w-14 h-14 backdrop-opacity-0'
            onClick={() => setIndex(index + 1)}

        >
            <FaArrowAltCircleRight />
        </button>
    );
}


