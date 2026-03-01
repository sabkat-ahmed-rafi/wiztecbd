"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillChatDotsFill } from "react-icons/bs";

import { socialLinks } from "@/app/staticData/data";

const SocialLink = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Desktop View */}
            <div className="hidden md:flex flex-col gap-2 px-2 py-4 bg-white shadow-social rounded-tr-xl rounded-br-xl">
                {socialLinks.map(({ href, icon, alt }) => (
                    <Link key={href} href={href} target="_blank" className="h-6 w-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <Image src={`/assets/images/Social/${icon}`} height={24} width={24} alt={alt} />
                    </Link>
                ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col py-2 px-1 bg-white shadow-social rounded-tr-xl rounded-br-xl">
                <div onClick={() => setOpen((prev) => !prev)} className="flex items-center justify-center rounded-full transition-all duration-300 group">
                    <BsFillChatDotsFill className="text-success_main" size={24} />
                </div>
                <div className={`overflow-hidden transition-all duration-500 ${open ? "h-64 mt-1" : "h-0"}`}>
                    <div className="flex flex-col items-center gap-2">
                        {socialLinks.map(({ href, icon, alt }) => (
                            <Link key={href} href={href} target="_blank" className="h-6 w-6">
                                <Image src={`/assets/images/Social/${icon}`} height={24} width={24} alt={alt} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SocialLink;
