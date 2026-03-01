"use client";
import { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ImageURL = ({ style = {}, image, className = "", height, width, alt = "Image" }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        delay: 1000,
        threshold: 0.5,
    });

    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => setIsLoading(false);

    return (
        <div ref={ref} className="relative flex justify-center items-center overflow-hidden h-full">
            {/* Show loader until image is fully loaded */}
            {isLoading && (
                <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 ${className}`}>
                    <Image src="/assets/icons/loading_img.svg" alt="Loading" height={24} width={24} className="md:h-12 md:w-12 h-8 w-8" />
                </div>
            )}

            {/* Render Image */}
            {image && inView && <Image className={`${className} max-h-full h-auto max-w-full w-auto object-cover z-0`} height={height} width={width} src={image} alt={alt} style={style} onLoad={handleImageLoad} loading="lazy" />}
        </div>
    );
};

export default ImageURL;
