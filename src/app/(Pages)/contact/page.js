"use client";
import React from "react";

import ContactForm from "@/widgets/ContactForm";
import ContactInfo from "@/widgets/ContactForm/ContactInfo";
import MiniBanner from "@/components/MiniBanner";
import Informations from "@/widgets/Informations";
import { Section } from "@/components/Section";
import OfficeMaps from "@/widgets/OfficeMaps";

const Contact = () => {
    return (
        <div>
            <Section>
                <MiniBanner title={"Let’s Connect."} description={"We’d love to hear about your next project."} BannerImage="/assets/images/miniBanner/About.webp" />
            </Section>
            <Section>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Informations />
                </div>
            </Section>
            <Section id="contactform">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 grid md:grid-cols-2 grid-cols-1 gap-16">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </Section>
            <Section>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OfficeMaps />
                </div>
            </Section>
        </div>
    );
};

export default Contact;
