"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

import { services } from "@/app/staticData/home";
import LetsTalk from "../LetsTalk";
import MobileDrawer from "../MobileDrawer";
import Button from "@/components/Button";
import ServiceMegaMenu from "@/components/MegaMenu";
import AmoutMenu from "../AboutMenu";
import OtherMenu from "../OtherMenu";
import useModal from "@/hooks/useModal";

const Header = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const [isOpenMega, setIsOpenMega] = useState(false);
    const [isAbout, setIsAbout] = useState(false);
    const [isOther, setIsOther] = useState(false);
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <>
            <nav className={` backdrop-blur-md text-secondary sticky top-0 z-30 shadow-lg ${isOpenMega || isAbout || isOther ? " bg-white" : "bg-white/60"}`}>
                <div className="container mx-auto max-w-xl  flex justify-between py-4 md:py-0 px-4 items-center ">
                    <div className="text-2xl font-bold">
                        <Link href="/" className="flex items-center w-full  justify-center flex-shrink-0 md:h-12 h-8">
                            <Image src={`/assets/images/Logos/logo.png`} alt="logo" height={38} width={167} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </Link>
                    </div>
                    <div className="md:flex hidden space-x-6 items-center justify-center">
                        <Link href={"/services"} className="group hover:text-success_main inline-flex flex-col justify-center h-100" onMouseEnter={() => setIsOpenMega(true)} onMouseLeave={() => setIsOpenMega(false)}>
                            <span className="flex items-center gap-0.5">
                                Services
                                <RiArrowRightSLine size={18} />
                            </span>
                            <span className={`  h-2px bg-success_main transition-width duration-300 ease-in-out w-0 group-hover:w-full`}></span>
                        </Link>
                        <Link href="/portfolio" className=" text-secondary group h-100 flex flex-col justify-center hover:text-success_main">
                            Portfolio
                            <span className={`  h-2px bg-success_main transition-width duration-300 ease-in-out w-0 group-hover:w-full`}></span>
                        </Link>
                        <Link href="/product" className=" hidden lg:inline-flex text-secondary group h-100 flex-col justify-center hover:text-success_main">
                            Product
                            <span className={`  h-2px bg-success_main transition-width duration-300 ease-in-out w-0 group-hover:w-full`}></span>
                        </Link>
                        <Link href="/blog" className=" hidden lg:inline-flex text-secondary group h-100 flex-col justify-center hover:text-success_main">
                            Blog
                            <span className={`  h-2px bg-success_main transition-width duration-300 ease-in-out w-0 group-hover:w-full`}></span>
                        </Link>
                        <Link onMouseEnter={() => setIsAbout(true)} onMouseLeave={() => setIsAbout(false)} href={"#"} className=" text-secondary group h-100 inline-flex flex-col justify-center hover:text-success_main">
                            <span className="flex items-center gap-0.5">
                                About
                                <RiArrowRightSLine size={18} />
                            </span>
                            <span className={`h-2px bg-success_main transition-width duration-300 ease-in-out w-0 group-hover:w-full`}></span>
                        </Link>
                        <Link href="#" onMouseEnter={() => setIsOther(true)} onMouseLeave={() => setIsOther(false)} className=" text-secondary group h-100 flex flex-col justify-center hover:text-success_main">
                            <span className="flex items-center gap-0.5">
                                Others
                                <RiArrowRightSLine size={18} />
                            </span>
                            <span className={`h-2px bg-success_main transition-width duration-300 ease-in-out w-0 group-hover:w-full`}></span>
                        </Link>
                        <Link href="/contact" className=" text-secondary group h-100 flex flex-col justify-center hover:text-success_main">
                            Contact
                            <span className={`h-2px bg-success_main transition-width duration-300 ease-in-out w-0 group-hover:w-full`}></span>
                        </Link>
                    </div>
                    {isOpenMega && <ServiceMegaMenu MegamenuData={services} onMouseEnter={() => setIsOpenMega(true)} onMouseLeave={() => setIsOpenMega(false)} onClose={() => setIsOpenMega(false)} />}
                    {isAbout && <AmoutMenu MegamenuData={services} onMouseEnter={() => setIsAbout(true)} onMouseLeave={() => setIsAbout(false)} onClose={() => setIsAbout(false)} />}
                    {isOther && <OtherMenu onMouseEnter={() => setIsOther(true)} onMouseLeave={() => setIsOther(false)} onClose={() => setIsOther(false)} />}
                    <Button onClick={() => openModal()} type="button" size="small">
                        {"Let's Talk"}
                    </Button>
                    <div className=" md:hidden">
                        <MobileDrawer />
                    </div>
                </div>
            </nav>
            <LetsTalk isOpen={isOpen} onClose={() => closeModal()} />
        </>
    );
};

export default Header;
