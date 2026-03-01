import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { IoMdMenu } from "react-icons/io";
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

import Button from "@/components/Button";
import { services } from "@/app/staticData/home";
import "react-modern-drawer/dist/index.css";

const MobileDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openCol, setOpenCol] = useState(null);
    const [openPanel, setOpenPanel] = useState(null);

    const togglePanel = (id) => {
        setOpenPanel((prevOpenPanel) => (prevOpenPanel === id ? null : id));
    };

    const toggleCollaps = () => {
        setOpenCol((prev) => !prev);
    };
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} type="button" className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                <IoMdMenu size={32} />
            </button>
            <Drawer open={isOpen} onClose={() => setIsOpen(false)} direction="left" className="!w-full">
                <div className=" py-7 overflow-y-auto z-50 h-screen">
                    <div className=" flex items-center justify-between px-5 pb-5">
                        <div className="text-2xl font-bold flex items-center justify-center">
                            <Link onClick={() => setIsOpen(false)} href="/" className="flex items-center w-full  justify-center flex-shrink-0 h-8">
                                <Image src={`/assets/images/Logos/logo.png`} alt="logo" height={48} width={150} className="w-auto max-w-full max-h-full h-auto object-cover" />
                            </Link>
                        </div>
                        <IoMdClose onClick={() => setIsOpen(false)} size={32} className={`transform transition-transform duration-300 ${isOpen ? " rotate-180" : ""}`} />
                    </div>

                    <nav className=" flex flex-col">
                        <Link onClick={() => setIsOpen(false)} href="/" className=" text-secondary flex items-center gap-2 flex-row justify-between px-5 py-4 border-b border-divider">
                            Home
                            <BsArrowRight size={18} />
                        </Link>
                        <div onClick={toggleCollaps} className={` ${openCol ? " text-success_main bg-success_light" : "text-secondary "}  flex items-center gap-2 flex-row justify-between px-5 py-4 border-b border-divider`}>
                            Services
                            <span className={`transition-transform duration-700 transform ${openCol ? "rotate-180" : "rotate-0"}`}>
                                <IoIosArrowDown size={18} />
                            </span>
                        </div>
                        <div className={` ${openCol ? "max-h-screen" : "max-h-0"} overflow-hidden transition-max-height ease-in-out duration-700`}>
                            {services.map((data, index) => (
                                <div key={data.id}>
                                    <span onClick={() => togglePanel(index)} className={`${openPanel == index ? " text-success_main" : "text-secondary"}   flex items-center gap-2 flex-row justify-between px-5 py-4 border-b border-divider`}>
                                        {data.label}
                                        {/* E-commerce Platform */}
                                        <IoIosArrowDown size={18} className={`transition-transform duration-500 transform ${openPanel === index ? "rotate-180" : "rotate-0"}`} />
                                    </span>

                                    <div className={` ${openPanel === index ? "max-h-screen" : "max-h-0"} overflow-hidden transition-max-height ease-in-out duration-500`}>
                                        {data.subMenu.map((sub) => (
                                            <Link onClick={() => setIsOpen(false)} key={sub.id} href={`${sub.url}`} className=" text-secondary flex items-center gap-2 flex-row justify-between px-5 py-4">
                                                {sub.title}
                                                <BsArrowRight size={18} />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link onClick={() => setIsOpen(false)} href="/portfolio" className=" text-secondary flex items-center gap-2 flex-row justify-between px-5 py-4 border-b border-divider">
                            Portfolio
                            <BsArrowRight size={18} />
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/portfolio" className=" text-secondary flex items-center gap-2 flex-row justify-between px-5 py-4 border-b border-divider">
                            Product
                            <BsArrowRight size={18} />
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/blog" className=" text-secondary flex items-center gap-2 flex-row justify-between px-5 py-4 border-b border-divider">
                            Blog
                            <BsArrowRight size={18} />
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/career" className=" text-secondary flex items-center gap-2 flex-row justify-between px-5 py-4 border-b border-divider">
                            Career
                            <BsArrowRight size={18} />
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/about" className=" text-secondary flex items-center gap-2 flex-row justify-between px-5 py-4 border-b border-divider">
                            About
                            <BsArrowRight size={18} />
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/team" className=" text-secondary flex items-center gap-2 flex-row justify-between px-5 py-4 border-b border-divider">
                            Our Team
                            <BsArrowRight size={18} />
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/courses" className=" text-secondary flex items-center gap-2 flex-row justify-between px-5 py-4 border-b border-divider">
                            Our Courses
                            <BsArrowRight size={18} />
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/developers" className=" text-secondary flex items-center gap-2 flex-row justify-between px-5 py-4 border-b border-divider">
                            Hire Developers
                            <BsArrowRight size={18} />
                        </Link>
                        <div className=" flex items-center justify-center mt-7 px-5">
                            <Button onClick={() => setIsOpen(false)} fullWidth size="small">
                                Contact Us
                            </Button>
                        </div>
                    </nav>
                </div>
            </Drawer>
        </>
    );
};

export default MobileDrawer;
