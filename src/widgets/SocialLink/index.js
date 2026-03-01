"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillChatDotsFill } from "react-icons/bs";

import { socialLinks as staticSocialLinks } from "@/app/staticData/data";
import api from "@/config/api";

const SocialLink = () => {
    const [open, setOpen] = useState(false);
    const [socialLinks, setSocialLinks] = useState(staticSocialLinks);

    useEffect(() => {
        const fetchSocialLinks = async () => {
            try {
                const response = await api.get("/api/get-home");
                if (response.data && response.data.home) {
                    const homeData = response.data.home;
                    const mappedLinks = [
                        { href: homeData.facebook, icon: "facebook.webp", alt: "Facebook" },
                        { href: homeData.whatsapp, icon: "whatsapp.webp", alt: "WhatsApp" },
                        { href: homeData.instagram, icon: "Instragram.webp", alt: "Instagram" },
                        { href: homeData.linkedin, icon: "likn.webp", alt: "LinkedIn" },
                        { href: homeData.skype, icon: "sky.webp", alt: "Skype" },
                        { href: homeData.telegram, icon: "Telegram.webp", alt: "Telegram" },
                        { href: homeData.x, icon: "x twi.webp", alt: "Twitter (X)" },
                        { href: homeData.youtube, icon: "youtube.webp", alt: "YouTube" },
                        { href: homeData.pinterest, icon: "pinterest.webp", alt: "Pinterest" },
                    ].filter(link => link.href); // Only include links that have a value

                    if (mappedLinks.length > 0) {
                        // Ensure URLs have protocol
                        const formattedLinks = mappedLinks.map(link => ({
                            ...link,
                            href: link.href.startsWith("http") ? link.href : `https://${link.href}`
                        }));
                        setSocialLinks(formattedLinks);
                    }
                }
            } catch (error) {
                console.error("Error fetching social links:", error);
            }
        };

        fetchSocialLinks();
    }, []);

    return (
        <>
            {/* Desktop View */}
            <div className="hidden md:flex flex-col gap-2 px-2 py-4 bg-white shadow-social rounded-tr-xl rounded-br-xl">
                {socialLinks.map(({ href, icon, alt }) => (
                    <Link key={alt} href={href} target="_blank" className="h-6 w-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
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
                            <Link key={alt} href={href} target="_blank" className="h-6 w-6">
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
