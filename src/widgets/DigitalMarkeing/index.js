import React from "react";

import ServiceCard from "../ServiceCard";

const DigitalMarketing = () => {
    return (
        <div>
            <h1 className="text-H1  font-bold mb-16 text-center">E-commerce Platform</h1>
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-12">
                {eComerce.map((data, index) => {
                    return (
                        <div key={index}>
                            <ServiceCard title={data.title} icon={data.icon} description={data.description} id={data.id} url={data.url} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DigitalMarketing;
const eComerce = [
    {
        id: 1,
        title: "Social Media Marketing",
        description: "Boost your brand’s visibility and engagement on social media with tailored strategies that build connections and drive conversions.",
        url: "/services/support-maintenance",
    },
    {
        id: 2,
        title: "SEO",
        description: "Enhance your website’s visibility and ranking on search engines, driving organic traffic with optimized SEO strategies.",
        url: "/services/support-maintenance",
    },
    {
        id: 3,
        title: "Content Creation",
        description: "Engage audiences with compelling image and video content that reflects your brand’s message and captures attention.",
        url: "/services/support-maintenance",
    },
    {
        id: 4,
        title: "Content Marketing",
        description: "Attract and retain customers with a strategic content marketing approach that positions your brand as a trusted resource.",
        url: "/services/support-maintenance",
    },
    {
        id: 5,
        title: "Email Marketing",
        description: "Connect with your audience directly through targeted email campaigns that increase engagement and drive sales.",
        url: "/services/support-maintenance",
    },
    {
        id: 6,
        title: "Marketing Consultancy & Support",
        description: "Receive expert guidance and support to optimize your marketing strategies, maximize reach, and achieve business goals.",
        url: "/services/support-maintenance",
    },
];
