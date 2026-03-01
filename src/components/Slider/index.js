"use client";
import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import ImageURL from "@/components/ImageUrl";

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Autoplay function
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval); // Cleanup interval
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative">
            <div className="relative overflow-hidden w-full bg-gray-100 rounded">
                <div className="flex relative transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="flex-shrink-0 w-full flex justify-center items-center" style={{ width: "100%" }}>
                            <div className={` flex justify-center md:justify-end h-300 items-center overflow-hidden`}>
                                <ImageURL height={300} width={480} alt={"banner"} image={image} />
                            </div>
                        </div>
                    ))}
                </div>
                <SlArrowLeft onClick={handlePrev} size={24} className=" cursor-pointer absolute top-1/2 left-4 transform -translate-y-1/2 text-success_main" />
                <SlArrowRight onClick={handleNext} size={24} className=" cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-success_main" />
                {/* Pagination dots */}
                <div className="flex justify-center space-x-1 absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    {images.map((_, index) => (
                        <div key={index} onClick={() => handleDotClick(index)} className={`p-0.5 rounded-full border  ${index === currentIndex ? " border-success_main" : " border-transparent"} `}>
                            <div className={`w-2 h-2 rounded-full cursor-pointer ${index === currentIndex ? " bg-success_main" : " bg-gray600"}`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
