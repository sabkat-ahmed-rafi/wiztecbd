import React from "react";
import Image from "next/image";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <div className="bg-footer-image  bg-cover bg-center h-130 bg-default_bg"></div>

            <div className=" bg-footer pt-100 -mt-4">
                <div className="container mx-auto px-4 max-w-xl grid grid-cols-4 text-white gap-16">
                    <div className=" col-span-4 md:col-span-1">
                        <Link href="/" className="flex items-center justify-center xs:justify-start w-full flex-shrink-0 h-9 mb-4">
                            <Image src={`/assets/images/Logos/logo.png`} alt="logo" height={38} width={167} className="w-auto max-w-full max-h-full h-auto object-cover" />
                        </Link>
                        <div className=" flex xs:justify-between flex-col xs:flex-row md:flex-col">
                            <div className=" flex justify-center flex-wrap xs:justify-start items-center gap-2 md:mb-6 ">
                                <Link target="_blank" href=" https://www.facebook.com/wiztecbd" className="px-3 py-2 hover:bg-success_main bg-success_main md:bg-transparent transition-all duration-400">
                                    <FaFacebook className=" text-white " size={24} />
                                </Link>
                                <Link target="_blank" href="http://www.youtube.com/@wizardsoftwaretechnologyba7240 " className="px-3 py-2 hover:bg-success_main bg-success_main md:bg-transparent transition-all duration-400">
                                    <FaYoutube className=" text-white " size={24} />
                                </Link>
                                <Link target="_blank" href="https://x.com/Wiztecsoft " className="px-3 py-2 hover:bg-success_main bg-success_main md:bg-transparent transition-all duration-400">
                                    <FaXTwitter className=" text-white " size={24} />
                                </Link>
                                <Link target="_blank" href="https://www.linkedin.com/company/wiztecbd " className="px-3 py-2 hover:bg-success_main bg-success_main md:bg-transparent transition-all duration-400">
                                    <FaLinkedinIn className=" text-white " size={24} />
                                </Link>
                            </div>
                            <div className=" flex flex-col xs:justify-start justify-center items-center xs:items-start mt-4 md:mt-0">
                                <h6 className=" font-medium text-H6 mb-4 ">Proud Member of</h6>
                                <div className=" flex items-center gap-6">
                                    <Link target="_blank" href="#">
                                        <Image src={`/assets/images/basis.png`} alt="logo" height={50} width={90} className=" h-auto w-auto" />
                                    </Link>
                                    <Link target="_blank" href="#">
                                        <Image src={`/assets/images/bcs.png`} alt="logo" height={50} width={50} />
                                    </Link>
                                    <Link target="_blank" href="#">
                                        <Image src={`/assets/images/pngegg.png`} alt="logo" height={50} width={50} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" col-span-4 xs:col-span-2 md:col-span-1">
                        <p className=" font-semibold mb-7">Terms</p>
                        <div className=" flex justify-between xs:inline">
                            <div>
                                <Link href="/services" className=" flex items-center gap-10px hover:text-success_main mb-2">
                                    <MdArrowRightAlt size={21} className=" text-success_main" />
                                    <p className=" ">Services</p>
                                </Link>
                                <Link href="/about" className=" flex items-center gap-10px hover:text-success_main mb-2">
                                    <MdArrowRightAlt size={21} className=" text-success_main" />
                                    <p className=" ">About Us</p>
                                </Link>
                                <Link href="/contact" className=" flex items-center gap-10px hover:text-success_main mb-2">
                                    <MdArrowRightAlt size={21} className=" text-success_main" />
                                    <p className=" ">Contact Us</p>
                                </Link>
                                <Link href="/portfolio" className=" flex items-center gap-10px hover:text-success_main mb-2">
                                    <MdArrowRightAlt size={21} className=" text-success_main" />
                                    <p className=" ">Portfolio</p>
                                </Link>
                                <Link href="/product" className=" flex items-center gap-10px hover:text-success_main mb-2">
                                    <MdArrowRightAlt size={21} className=" text-success_main" />
                                    <p className="/product">Product</p>
                                </Link>
                            </div>
                            <div>
                                <Link href="#" className=" flex items-center gap-10px hover:text-success_main mb-2">
                                    <MdArrowRightAlt size={21} className=" text-success_main" />
                                    <p className="/blog">Blog</p>
                                </Link>
                                <Link href="#" className=" flex items-center gap-10px hover:text-success_main mb-2">
                                    <MdArrowRightAlt size={21} className=" text-success_main" />
                                    <p className="/career">Career</p>
                                </Link>
                                <Link href="#" className=" flex items-center gap-10px hover:text-success_main mb-2">
                                    <MdArrowRightAlt size={21} className=" text-success_main" />
                                    <p className="/courses">Cources</p>
                                </Link>
                                <Link href="/team" className=" flex items-center gap-10px hover:text-success_main mb-2">
                                    <MdArrowRightAlt size={21} className=" text-success_main" />
                                    <p className=" ">Our Team</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-4 xs:col-span-2 md:col-span-2 ">
                        <div>
                            <p className=" font-semibold mb-7">Bangladesh Office</p>
                            <p className=" mb-6">
                                Level 9 (West Side), 107 F Haque Tower, Bir Uttam C R Datta Road, Sonargaon Road, Dhaka-1205 <br />
                                Mobile :{" "}
                                <Link href="tel:01600299169" target="_blank" className=" hover:text-success_main hover:underline">
                                    01600-299169
                                </Link>{" "}
                                <br />
                                Email :{" "}
                                <Link href="mailto:wiztecbd@gmail.com" target="_blank" className=" hover:text-success_main hover:underline">
                                    wiztecbd@gmail.com
                                </Link>
                            </p>
                        </div>
                        <div>
                            <p className=" font-semibold mb-4">UK Office</p>
                            <p className=" mb-4">
                                71-75, Shelton Street, Covent Garden, London, United Kingdom. <br />
                                Mobile :{" "}
                                <Link href="tel:+447462312013" target="_blank" className=" hover:text-success_main hover:underline">
                                    +447462312013
                                </Link>{" "}
                                <br />
                                Email :{" "}
                                <Link href="mailto:wiztecuk@gmail.com" target="_blank" className=" hover:text-success_main hover:underline">
                                    wiztecuk@gmail.com
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-span-4 pb-4 text-subtitle2">
                        <p className="text-center">© {new Date().getFullYear()} Wizard Software & Technology Bangladesh Ltd. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
