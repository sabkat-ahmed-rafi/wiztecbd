import Image from "next/image";
import React from "react";

const MenuCard = ({ title, description, image, alt, parentClass }) => {
    return (
        <div className={`${parentClass} p-4 flex gap-2 h-full shadow-xl transform transition duration-500 hover:-translate-y-10px`}>
            <Image src={image} height={24} width={24} alt={alt} className=" h-6 w-6" />
            <div className="flex flex-col flex-1">
                <p className=" font-semibold leading-normal mb-auto line-clamp-2">{title}</p>
                <p className=" text-body2 line-clamp-2">{description}</p>
            </div>
        </div>
    );
};

export default MenuCard;
