import React, { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import Link from "next/link";

import Button from "../Button";
import MenuCard from "../Menucard";
import GradientText from "../GradientText";
import Menu from "../Menu";

const ServiceMegaMenu = ({ onMouseEnter, onMouseLeave, MegamenuData, onClose }) => {
    const [activeTab, setActiveTab] = useState(MegamenuData[0].id);
    const containerRef = useRef(null);
    const [showTopButton, setShowTopButton] = useState(false);
    const [showBottomButton, setShowBottomButton] = useState(true);

    // Update active section based on scroll position
    const handleScroll = () => {
        const scrollY = window.scrollY;
        MegamenuData.forEach((section, index) => {
            const element = document.getElementById(section.id);
            if (element) {
                const { offsetTop, clientHeight } = element;
                if (scrollY >= offsetTop - 50 && scrollY < offsetTop + clientHeight) {
                    setIsTab(section.id);
                }
            }
        });
    };

    const handleScrolltab = () => {
        if (containerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            setShowTopButton(scrollTop > 0);
            setShowBottomButton(scrollTop < scrollHeight - clientHeight);
        }
    };

    const scrollDown = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ top: 300, behavior: "smooth" });
        }
    };

    const scrollUp = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ top: -300, behavior: "smooth" });
        }
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isActiveTabs = MegamenuData.filter((service) => service.id === activeTab);

    return (
        <>
            <Menu onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div className=" bg-mega-gradient ">
                    <div className=" container mx-auto px-4 max-w-xl">
                        {/* Main Services Section */}
                        <div className=" grid grid-cols-10">
                            <div className=" col-span-3 py-8 ">
                                <div className="mb-6">
                                    <GradientText className={"text-subtitle1 font-semibold "} text={"What We Can Do For You?"} />
                                </div>

                                <div className=" relative">
                                    <div ref={containerRef} onScroll={handleScrolltab} className="pb-4 lg:pb-0 mb-10 flex flex-col h-300 overflow-y-auto no-scrollbar">
                                        {MegamenuData.map((tab) => (
                                            <span key={tab.id} className={`${MegamenuData[0].id && " border-t"} py-3 px-4 border-b border-divider font-medium md:px-5 cursor-pointer transition-all duration-400   ${activeTab === tab.id ? " bg-success_light text-success_main" : `text-primary hover:text-success_main  `}`} onClick={() => setActiveTab(tab.id)}>
                                                <span>{tab.label}</span>
                                            </span>
                                        ))}
                                    </div>
                                    {/* Scroll Buttons */}
                                    {MegamenuData.length > 5 && showTopButton && (
                                        <button className="absolute right-1/2 bottom-0 shadow-social -translate-y-1/2 bg-paper_bg hover:bg-warning_light p-1 rounded-full " onClick={scrollUp}>
                                            <IoIosArrowRoundUp size={20} />
                                        </button>
                                    )}
                                    {MegamenuData.length > 5 && showBottomButton && (
                                        <button className="absolute right-1/2 bottom-0 shadow-social -translate-y-1/2 bg-paper_bg hover:bg-warning_light p-1 rounded-full " onClick={scrollDown}>
                                            <IoIosArrowRoundDown size={20} />
                                        </button>
                                    )}
                                </div>

                                <Link href="/services" onClick={onClose}>
                                    <Button size="small">
                                        All Services
                                        <BsArrowRight />
                                    </Button>
                                </Link>
                            </div>
                            <div className=" col-span-7 bg-white pl-4">
                                {isActiveTabs.map((service) => (
                                    <div key={service.id} className="grid grid-cols-3 gap-2 pt-8">
                                        {service.subMenu.map((data, index) => {
                                            return (
                                                <Link href={`${data.url}`} onClick={onClose} key={index}>
                                                    <MenuCard title={data.title} description={data.description} parentClass={`bg-custom-gradient`} image={data.icon} alt={"service"} />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Menu>
        </>
    );
};

export default ServiceMegaMenu;
