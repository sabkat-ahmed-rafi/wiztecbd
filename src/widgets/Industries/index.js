"use client";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";

import Button from "@/components/Button";
import ServiceCard from "../ServiceCard";

const Industries = () => {
    const [visibleItems, setVisibleItems] = useState(6);

    const loadMoreItems = () => {
        setVisibleItems((prev) => prev + softwer.length - visibleItems);
    };
    return (
        <>
            <div className=" mb-6 md:mb-12">
                <div className=" md:mb-12 mb-6">
                    <h2 className=" text-center text-H1 font-bold mb-2">Industries We Serve</h2>
                </div>
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-4">
                    {softwer.slice(0, visibleItems).map((data, index) => {
                        return (
                            <div key={index}>
                                <ServiceCard title={data.title} icon={data.icon} description={data.description} id={data.id} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className=" flex justify-end">
                {visibleItems < softwer.length && (
                    <Button onClick={loadMoreItems}>
                        Load More
                        <span className="p-1 rounded-full border border-white group-hover:border-black transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                            <GoArrowRight />
                        </span>
                    </Button>
                )}
            </div>
        </>
    );
};

export default Industries;
const softwer = [
    {
        id: 1,
        title: "Industry",
        description: "We support diverse industries with tailored software that enhances efficiency, scalability, and performance across sectors.",
        icon: "/assets/images/Industry We Surver/Industry.webp",
    },
    {
        id: 2,
        title: "Government",
        description: "We provide secure, reliable software solutions that streamline government operations, improve citizen services, and enhance public safety.",
        icon: "/assets/images/Industry We Surver/government.webp",
    },
    {
        id: 3,
        title: "E-commerce",
        description: "Boost your online business with our custom E-commerce solutions designed for smooth shopping experiences, efficient operations, and scalable growth.",
        icon: "/assets/images/Industry We Surver/ecommerce.webp",
    },
    {
        id: 4,
        title: "Education & eLearning",
        description: "Enhance learning experiences with digital platforms that support online classes, training programs, and learning management systems (LMS).",
        icon: "/assets/images/Industry We Surver/graduation-cap.webp",
    },
    {
        id: 5,
        title: "Healthcare",
        description: "Transform healthcare delivery with innovative software that improves patient care, streamlines workflows, and ensures data security.",
        icon: "/assets/images/Industry We Surver/healthcare.webp",
    },
    {
        id: 6,
        title: "Travel and Hospitality",
        description: "Enhance guest experiences and simplify booking processes with customized travel and hospitality software solutions.",
        icon: "/assets/images/Industry We Surver/Travel and Hospitality.webp",
    },
    {
        id: 7,
        title: "Marketing & Branding",
        description: "Support your brand’s growth with digital tools for social media management, content creation, analytics, and campaign automation.",
        icon: "/assets/images/Industry We Surver/Marketing & Branding.webp",
    },
    {
        id: 8,
        title: "LegalTech",
        description: "Empower legal professionals with software for case management, document automation, and secure client communication.",
        icon: "/assets/images/Industry We Surver/legal-document.webp",
    },
    {
        id: 9,
        title: "Fintech",
        description: " Deliver cutting-edge financial solutions with secure, scalable fintech software for payment processing, lending, and financial planning.",
        icon: "/assets/images/Industry We Surver/fintech.webp",
    },
    {
        id: 10,
        title: "Manufacturing",
        description: "Streamline manufacturing processes with software that enhances production planning, inventory management, and supply chain optimization.",
        icon: "/assets/images/Industry We Surver/manufacture.webp",
    },
    {
        id: 11,
        title: "Automotive",
        description: "Drive innovation in the automotive sector with digital solutions for logistics, inventory, customer management, and connected car technology.",
        icon: "/assets/images/Industry We Surver/automotive.webp",
    },
    {
        id: 12,
        title: "Telecommunication",
        description: "Improve connectivity and customer service with tailored telecom solutions that support network management, billing, and analytics.",
        icon: "/assets/images/Industry We Surver/telecommunication.webp",
    },
    {
        id: 13,
        title: "Media & Entertainment",
        description: "Engage audiences and optimize content delivery with software solutions for streaming, digital media management, and audience analytics.",
        icon: "/assets/images/Industry We Surver/social-media.webp",
    },
    {
        id: 14,
        title: "Logistics",
        description: "Enhance logistics and supply chain management with software that improves tracking, warehousing, and real-time visibility across operations.",
        icon: "/assets/images/Industry We Surver/logistics.webp",
    },
    {
        id: 15,
        title: "Retail",
        description: "Transform retail operations with technology for inventory management, POS systems, customer loyalty, and E-commerce integration.",
        icon: "/assets/images/Industry We Surver/Retail.webp",
    },
];
