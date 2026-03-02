"use client";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const HyperlinkTable = ({ richText }) => {
    const HyperlinkTableData = richText
        .map((item) => {
            // Match any header tag (h1, h2, h3) and extract its inner text
            const match = item.content.match(/<h[1-3][^>]*>(.*?)<\/h[1-3]>/i);
            return match ? match[1].replace(/<[^>]*>?/gm, "") : null; // Also strip nested HTML tags from TOC title
        })
        .filter(Boolean);

    const [activeSection, setActiveSection] = useState("home");
    const [isShow, setIsShow] = useState(false);

    // Update active section based on scroll position
    const handleScroll = () => {
        const scrollY = window.scrollY;

        HyperlinkTableData.forEach((section, index) => {
            const element = document.getElementById(`section${index}`);
            if (element) {
                const { offsetTop, clientHeight } = element;
                if (scrollY >= offsetTop - 50 && scrollY < offsetTop + clientHeight) {
                    setActiveSection(`section${index}`);
                }
            }
        });
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div onClick={() => setIsShow((prev) => !prev)} className=" mb-4 flex items-center justify-between">
                <ScrollAnimatedSection>
                    <h6 className=" font-semibold uppercase text-H6">Table of content</h6>
                </ScrollAnimatedSection>
                <span className=" md:hidden">
                    <MdOutlineKeyboardArrowDown className={`${isShow ? "transform rotate-180" : "transform rotate-0"} transition-transform duration-300`} />
                </span>
            </div>
            <nav className={` flex-col gap-4 ${isShow ? "flex" : "hidden md:flex"}`}>
                {HyperlinkTableData.map((data, index) => {
                    return (
                        <ScrollAnimatedSection key={index} delay={100}>
                            <Link href={`#section${index}`} className={`${activeSection === `section${index}` ? "text-primary" : " text-gray600"} `}>
                                {data}
                            </Link>
                        </ScrollAnimatedSection>
                    );
                })}
            </nav>
        </div>
    );
};

export default HyperlinkTable;
