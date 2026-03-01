import React from "react";
import Link from "next/link";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import ServiceCard from "../ServiceCard";
import { services } from "@/app/staticData/home";

const ItTraining = () => {
    const training = services.filter((data) => data.id == "training");
    return (
        <>
            {training.map((service) => (
                <div key={service.id}>
                    <ScrollAnimatedSection>
                        <h1 className="text-H1  font-bold md:mb-12 mb-6 text-center">{service.label}</h1>
                    </ScrollAnimatedSection>
                    <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-12">
                        {service.subMenu.map((data, index) => (
                            <Link href={`${data.url}`} key={index}>
                                <ServiceCard title={data.title} description={data.description} id={data.id} url={data.url} />
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default ItTraining;
