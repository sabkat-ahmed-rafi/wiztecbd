import Image from "next/image";
import React from "react";

const CareerBanner = () => {
    return (
        <div className=" flex items-center flex-col-reverse md:flex-row justify-center gap-6">
            <div className=" flex-col justify-center items-center md:w-1/2 w-full">
                <p className="font-semibold text-center mb-10px">Grow Your Career with</p>
                <h1 className="text-H1  text-center font-bold mb-4">
                    Wiz<span className=" text-success_main">TecBD</span>
                </h1>
                <p className="text-center">You will not work for us, You will work with us. Here, you will learn from the best, and lead the rest! Take off to the next chapter with NEXT Ventures!</p>
            </div>
            <div className={` flex justify-center h-370 items-center overflow-hidden md:w-1/2 w-full`}>
                <Image height={197} width={374} alt="blog" src="/assets/images/bannerPort.png" className="w-auto max-w-full max-h-full h-auto object-cover" />
            </div>
        </div>
    );
};

export default CareerBanner;
