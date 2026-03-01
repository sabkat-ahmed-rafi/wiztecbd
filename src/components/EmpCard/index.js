"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import ImageURL from "../ImageUrl";

const EmplCard = ({ name, department, img, alt, description, social }) => {
    const [isExpandedDes, setIsExpandedDes] = useState(false);
    const toggleDescription = () => {
        setIsExpandedDes((prev) => !prev);
    };
    return (
        <div className=" flex flex-col justify-center items-center bg-emplyee-card md:p-30px p-4  h-full shadow-xl group">
            <div className=" relative md:h-223  md:mx-8 h-28  mb-5 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <ImageURL image={img} alt={alt} height={223} width={223} className="" />
            </div>
            <div className="flex-1 flex flex-col">
                <h6 className=" text-H6 md:mb-3 mb-2 font-semibold uppercase text-center text-primary">{name}</h6>
                <p className=" text-center md:mb-5 mb-1 text-subtitle2 font-semibold text-success_main capitalize">{department}</p>
                <div className="mb-auto">
                    <div className=" md:hidden">
                        {description && (
                            <p onClick={toggleDescription} className={`text-secondary cursor-pointer text-body2 font-light text-center`}>
                                {isExpandedDes == false && description.length > 50 ? description.substring(0, 50) : description}
                                {isExpandedDes == false && description.length > 50 && <span className={` whitespace-nowrap text-caption text-success_main text-subtitle2 font-medium`}>...</span>}
                            </p>
                        )}
                    </div>
                    <p onClick={toggleDescription} className={`text-secondary text-subtitle2 font-light text-center hidden md:inline-block`}>
                        {description}
                    </p>
                </div>
                <div className=" flex items-center gap-2 justify-center md:mt-5 mt-2">
                    <Link href={social.facebook}>
                        <ImFacebook size={18} className=" text-success_main hover:scale-110 transition-transform duration-300" />
                    </Link>
                    <Link href={social.instagram}>
                        <FaInstagram size={18} className=" text-success_main hover:scale-110 transition-transform duration-300" />
                    </Link>
                    <Link href={social.twitter}>
                        <TiSocialTwitter size={18} className=" text-success_main hover:scale-110 transition-transform duration-300" />
                    </Link>
                    <Link href={social.linkedin}>
                        <ImLinkedin size={18} className=" text-success_main hover:scale-110 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EmplCard;
