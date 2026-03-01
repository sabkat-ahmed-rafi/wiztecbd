"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import Button from "@/components/Button";
import IntroCard from "@/components/IntroCard";
import ImageURL from "@/components/ImageUrl";
import { IoClose } from "react-icons/io5";

export const Popup = ({ message, onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <div className="bg-white rounded p-6 w-80 text-center relative">
            <p className=" text-subtitle1 text-black font-semibold">{message}</p>
            <button size="small" onClick={onClose} className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 absolute -top-10 -right-0 ">
                <IoClose />
            </button>
        </div>
    </div>
);

export const isValidURL = (str) => {
    try {
        new URL(str);
        return true;
    } catch (_) {
        return false;
    }
};

const IntroDesign = ({ title, img, header, subheader, facilities, buttonText, link }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (e) => {
        if (!isValidURL(link)) {
            e.preventDefault();
            setShowPopup(true);
        }
    };

    return (
        <div>
            {showPopup && <Popup message={link} onClose={() => setShowPopup(false)} />}

            <ScrollAnimatedSection>
                <h2 className="text-H1 font-bold mb-6 md:mb-12 text-center">{title}</h2>
            </ScrollAnimatedSection>

            <div className="flex flex-col-reverse md:flex-row gap-8">
                <div className="md:w-3/5">
                    <ScrollAnimatedSection delay={100}>
                        <div className="flex gap-2 mb-4">
                            <div className="w-8 h-0.5 bg-divider mt-4"></div>
                            <h3 className="text-H5 font-semibold">{subheader}</h3>
                        </div>
                    </ScrollAnimatedSection>

                    <ScrollAnimatedSection delay={200}>
                        <p className="md:mb-12 mb-6 text-justify">{header}</p>
                    </ScrollAnimatedSection>

                    <div className="grid grid-cols-3 md:gap-4 gap-2 mb-6 md:mb-12">
                        {facilities.map(({ name, value, type, by }, index) => (
                            <ScrollAnimatedSection key={index} delay={index * 200}>
                                <IntroCard name={name} number={value} type={type} by={by} />
                            </ScrollAnimatedSection>
                        ))}
                    </div>

                    <ScrollAnimatedSection delay={800}>
                        <Link href={isValidURL(link) ? link : "#"} target="_blank" onClick={handleClick}>
                            <Button>
                                {buttonText}
                                <BsArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                            </Button>
                        </Link>
                    </ScrollAnimatedSection>
                </div>

                <div className="md:w-2/5">
                    <div className="md:h-345 flex md:justify-end justify-center items-center overflow-hidden">
                        <ImageURL height={345} width={345} alt="blog" loading="lazy" image={img} className="rounded-xl rounded-br-75" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroDesign;
